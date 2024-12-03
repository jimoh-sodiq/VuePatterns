<script setup lang="ts">
import { ref, computed, unref } from "vue";

const props = withDefaults(defineProps<{
  nameList: any[];
  havePreviousWinner?: boolean;
  maxReelItems?: number;
  shouldRemoveWinner?: boolean;
  refillLimit?: number;
  convertToString?: (data: any) => string;
  shouldAnimate?: boolean;
  buttonText?: string
}>(), {
  maxReelItems: 40,
  refillLimit: 1,
  shouldRemoveWinner: false,
  shouldAnimate: true,
  buttonText: 'Select'
})

const emit = defineEmits(['onSpinStart', 'onSpinEnd'])

const model = defineModel()

const localNameList = ref<any[]>(unref(props.nameList)) // to avoid 2 way mutation of prop passed by reference

const localHavePreviousWinner = ref(props.havePreviousWinner)

const reelContainer = ref<HTMLDivElement | null>(null)

const isAnimating = ref(false)

const reelAnimation = computed(() => reelContainer.value?.animate(
    [
      { transform: 'none', filter: 'blur(0)' },
      { filter: 'blur(1px)', offset: 0.5 },
      { transform: `translateY(-${(props.maxReelItems - 1) * (7 * 16)}px)`, filter: 'blur(0)' }
    ],
    {
      duration: props.maxReelItems * 100, // 100ms for 1 item
      easing: 'cubic-bezier(0.25, 1, 0.5, 1)',
      iterations: 1
    }

))


function shuffleNames<T = unknown>(array: T[]): T[] {
  const keys = Object.keys(array) as unknown[] as number[];
  const result: T[] = [];
  for (let k = 0, n = keys.length; k < array.length && n > 0; k += 1) {
    // eslint-disable-next-line no-bitwise
    const i = Math.random() * n | 0;
    const key = keys[i];
    result.push(array[key]);
    n -= 1;
    const tmp = keys[n];
    keys[n] = key;
    keys[i] = tmp;
  }
  return result;
}

async function  spin(): Promise<boolean> {
  isAnimating.value = true
  if (props.refillLimit && localNameList.value.length < props.refillLimit){
    //console.log("refilling now ---------------------", props.nameList)
    localNameList.value = props.nameList
  }

  if (!localNameList.value.length) {
    //console.error('Name List is empty. Cannot start spinning.');
    isAnimating.value = false
    return false;
  }

  if (!reelContainer.value || !reelAnimation.value) {
    //console.log('not fully ready')
    isAnimating.value = false
    return false;
  }

  // spin animation just started
  emit('onSpinStart')

  // Shuffle names and create reel items
  let randomNames = shuffleNames<string>(localNameList.value);

  while (randomNames.length && randomNames.length < props.maxReelItems) {
    randomNames = [...randomNames, ...randomNames];
  }

  randomNames = randomNames.slice(0, props.maxReelItems - Number(localHavePreviousWinner.value));

  const fragment = document.createDocumentFragment();

  randomNames.forEach((data) => {
    const newReelItem = document.createElement('div');
    newReelItem.innerHTML = props.convertToString ? props.convertToString(data): data;
    fragment.appendChild(newReelItem);
  });

  reelContainer.value.appendChild(fragment);

  // set the winner
  model.value = randomNames[randomNames.length - 1]

  // Remove winner form name list if necessary
  if (props.shouldRemoveWinner) {
    localNameList.value.splice(localNameList.value.findIndex(
        (name) => name === randomNames[randomNames.length - 1]
    ), 1);
  }

  if (props.shouldAnimate){
    // Play the spin animation
    const animationPromise = new Promise((resolve) => {
      reelAnimation.value!.onfinish = resolve;
    });

    reelAnimation.value.play();

    await animationPromise;

    // Sets the current playback time to the end of the animation
    // Fix issue for animation not playing after the initial play on Safari
    reelAnimation.value.finish();
  }

  // only render the winning div after animation
  Array.from(reelContainer.value.children)
      .slice(0, reelContainer.value.children.length - 1)
      .forEach((element) => element.remove());

  localHavePreviousWinner.value = true;

  // spin animation ended
  isAnimating.value = false
  emit('onSpinEnd')

  return true

}

</script>

<template>
  <div>
    <div v-show="model" id="lucky-draw">
      <div class="slot">
        <div class="slot__outer">
          <div class="slot__inner">
            <div class="slot__shadow"></div>
            <div ref="reelContainer" id="reel" class="reel"></div>
          </div>
        </div>
      </div>
    </div>

    <button class="my-4 rounded py-2 px-4 mx-auto bg-gray-500 text-white" :disabled="isAnimating" @click="spin">
        {{ buttonText }}
    </button>
  </div>
</template>


<style>
#lucky-draw {
	 width: 100%;
	 text-align: center;
	 position: relative;
     background-color: darkgray;
     border-radius: 8px;
}

 .slot {
	 position: relative;
	 padding: 1rem;
}
 .slot__outer {
	 height: fit-content;
	 max-height: 7rem;
	 margin: 0 auto;
	 position: relative;
	 overflow: hidden;
}
 .slot__inner {
	 width: 100%;
	 height: 100%;
	 position: relative;
	 overflow: hidden;
}
 .reel {
	 width: 100%;
}
 .reel > div {
	 height: 7rem;
	 font-size: 2.5rem;
	 font-weight: bold;
	 text-align: center;
	 line-height: 7rem;
	 color: white;
	 text-overflow: ellipsis;
	 overflow: hidden;
	 white-space: nowrap;
	/* enable gpu accelaration to fix iOS flicker issue */
	 transform: translate3d(0, 0, 0);
}


</style>