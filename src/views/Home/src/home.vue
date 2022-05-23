<template>
  <div class="content-container">
    <template-list :list="testData"></template-list>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useStore } from "vuex";
import TemplateList from "@/components/TemplateList";
import { GlobalDataProps } from "@/store";
const store = useStore<GlobalDataProps>();
const testData = computed(() => store.state.templates);
</script>

<style scoped>
.content-container {
  background: #fff;
  padding: 0 24px 24px 30px;
  min-height: 85vh;
  max-width: 1200px;
  margin: 50px auto;
  width: 100%;
}
</style>
