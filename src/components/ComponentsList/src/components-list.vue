<template>
  <div class="create-component-list">
    <div
      v-for="(item, index) in list"
      :key="index"
      @click="onItemClick(item)"
      class="component-item"
    >
      <l-text v-bind="item"></l-text>
    </div>
  </div>
</template>

<script setup lang="ts">
import LText from "@/components/LText";
import { TextComponentProps } from "@/defaultProps";
const props = defineProps<{ list: any[] }>();

const emit = defineEmits(["on-item-click"]);

const onItemClick = (data: TextComponentProps) => {
  emit("on-item-click", data);
};
</script>

<style scoped>
.component-item {
  width: 100px;
  margin: 0 auto;
  margin-bottom: 15px;
}
.component-item > * {
  position: static !important;
}
</style>
