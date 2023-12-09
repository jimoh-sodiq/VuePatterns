<script setup lang="ts">
type Direction = "vertical" | "horizontal";

withDefaults(
  defineProps<{
    direction?: Direction;
    element: HTMLDivElement | undefined;
    distance?: number;
  }>(),
  {
    direction: "horizontal",
    distance: 250,
  }
);

function scrollDiv(
  element: HTMLDivElement,
  distance: number,
  direction: Direction
) {
  const currentPosition =
    direction == "horizontal" ? element.scrollLeft : element.scrollTop;
  const scrollTo = currentPosition - distance;
  if (direction == "horizontal") {
    element?.scrollTo({
      left: scrollTo,
      behavior: "smooth",
    });
  } else {
    element?.scrollTo({
      top: scrollTo,
      behavior: "smooth",
    });
  }
}
</script>

<template>
  <div
    :class="direction == 'horizontal' ? 'flex-row' : 'flex-col'"
    class="flex gap-2.5 w-fit"
  >
    <button
      @click="scrollDiv(element!, distance, direction)"
      class="rounded-xl px-5 hover:bg-rose-600 py-1 text-sm font-semibold bg-rose-500"
    >
      {{ direction == "horizontal" ? "L" : "T" }}</button
    ><button
      @click="scrollDiv(element!, -distance, direction)"
      class="rounded-lg px-5 hover:bg-rose-600 py-1 text-sm font-semibold bg-rose-500"
    >
      {{ direction == "horizontal" ? "R" : "B" }}
    </button>
  </div>
</template>
