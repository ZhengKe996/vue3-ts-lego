<template>
  <div class="content-container">
    <a-layout :style="{ background: '#fff' }">
      <a-layout-header class="header">
        <div class="page-title">乐高高乐</div>
      </a-layout-header>
      <a-layout-content class="home-layout">
        <div class="content-container">
          <template-list :list="list"></template-list>
        </div>
      </a-layout-content>
      <a-layout-footer> 版权所有.... </a-layout-footer>
    </a-layout>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import TemplateList from "@/components/TemplateList";
const list = ref<any[]>([
  {
    id: 1,
    coverImg:
      "http://typescript-vue.oss-cn-beijing.aliyuncs.com/vue-marker/5f81cca3f3bf7a0e1ebaf885.png",
  },
  {
    id: 2,
    coverImg:
      "http://typescript-vue.oss-cn-beijing.aliyuncs.com/vue-marker/5f81cca3f3bf7a0e1ebaf885.png",
  },
  {
    id: 3,
    coverImg:
      "http://typescript-vue.oss-cn-beijing.aliyuncs.com/vue-marker/5f81cca3f3bf7a0e1ebaf885.png",
  },
  {
    id: 4,
    coverImg:
      "http://typescript-vue.oss-cn-beijing.aliyuncs.com/vue-marker/5f81cca3f3bf7a0e1ebaf885.png",
  },
  {
    id: 5,
    coverImg:
      "http://typescript-vue.oss-cn-beijing.aliyuncs.com/vue-marker/5f81cca3f3bf7a0e1ebaf885.png",
  },
  {
    id: 6,
    coverImg:
      "http://typescript-vue.oss-cn-beijing.aliyuncs.com/vue-marker/5f81cca3f3bf7a0e1ebaf885.png",
  },
  {
    id: 7,
    coverImg:
      "http://typescript-vue.oss-cn-beijing.aliyuncs.com/vue-marker/5f81cca3f3bf7a0e1ebaf885.png",
  },
  {
    id: 8,
    coverImg:
      "http://typescript-vue.oss-cn-beijing.aliyuncs.com/vue-marker/5f81cca3f3bf7a0e1ebaf885.png",
  },
]);
</script>

<style scoped>
.page-title {
  color: #fff;
}
.content-container {
  background: #fff;
  padding: 0 24px 24px 30px;
  min-height: 85vh;
  max-width: 1200px;
  margin: 50px auto;
  width: 100%;
}
</style>
