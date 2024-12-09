<template>
    <div style="justify-content: space-around;">
      <div v-for="(unit, label) in visibleComponents" :key="label">
        {{ unit }} {{ label }}
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import {ref, computed, onBeforeUnmount, watch} from "vue";
  
  
  const emit = defineEmits(['remaining-seconds', 'countdown-ended'])
  
  interface Props {
    endDate: Date;
    negative?: boolean;
    accuracy?: 1 | 2 | 3 | 4;
  }

  const props = withDefaults(defineProps<Props>(), {
    negative: false,
    accuracy: 4
  })
  
  const timer = ref()
  const now = ref(new Date())
  
  const timeComponents = computed(() => {
    const totalSeconds = Math.max(
        (props.endDate.getTime() - now.value.getTime()) / 1000,
        props.negative ? (props.endDate.getTime() - now.value.getTime()) / 1000 : 0
    );
  
    const days = Math.trunc(totalSeconds / 86400);
    const hours = Math.trunc((totalSeconds % 86400) / 3600);
    const minutes = Math.trunc((totalSeconds % 3600) / 60);
    const seconds = Math.trunc(totalSeconds % 60);
  
    return {
      days, hours, minutes, seconds
    }
  })
  
  const visibleComponents = computed(() => {
  
    const allComponents = [
      { label: timeComponents.value.days > 1 ? "days" : "day", val: timeComponents.value.days },
      { label: timeComponents.value.hours > 1 ? "hours": "hour", val: timeComponents.value.hours },
      { label: timeComponents.value.minutes > 1 ? "minutes": "minute", val: timeComponents.value.minutes },
      { label: timeComponents.value.seconds > 1 ? "seconds" : "second", val: timeComponents.value.seconds },
    ];
  
    // Filter out components with a value of 0 unless accuracy allows
    const nonZeroComponents = allComponents.filter((comp) => comp.val > 0);
  
    // Limit the display to the number of components specified by `accuracy`
    return Object.fromEntries(
        nonZeroComponents.slice(0, props.accuracy).map((comp) => [comp.label, formatTimeUnit(comp.val)])
    );
  })
  
  function formatTimeUnit(timeUnit: number) {
    return timeUnit > 9 ? timeUnit : '0' + timeUnit;
  }
  
  
  watch(() => props.endDate, (newValue, oldValue) => {
    if (timer.value){
      clearInterval(timer.value)
    }
    timer.value = setInterval(() => {
      now.value = new Date();
      if(!props.negative && now.value > newValue){
        now.value = newValue;
        emit('countdown-ended')
        clearInterval(timer.value)
      }
    }, 1000)
  }, {immediate: true})
  
  watch(timeComponents, () => {
    emit('remaining-seconds', Math.trunc((props.endDate.getTime() - now.value.getTime()) / 1000) )
  }, {immediate: true})
  
  onBeforeUnmount(() => {
    clearInterval(timer.value);
  })
  
  </script>
  