<template>
  <div>
    <div class="editor" id="editor-layout-main">
      <a-layout>
        <a-layout-sider width="300" :style="{ background: 'yellow' }">
          <div class="sidebar-container">组件列表</div>
        </a-layout-sider>
        <a-layout :style="{ padding: '0 24px 24px' }">
          <a-layout-content class="preview-container">
            <p>画布区域</p>
            <div class="preview-list" id="canvas-area">
              <l-text
                v-for="component in components"
                :key="component.id"
                :is="component.name"
                v-bind="component.props"
              />
            </div>
          </a-layout-content>
        </a-layout>
        <a-layout-sider
          width="300"
          :style="{ background: 'purple' }"
          class="setting"
        >
          <div class="sidebar-container">组件列表</div>
        </a-layout-sider>
      </a-layout>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useStore } from "vuex";
import { GlobalDataProps } from "@/store";
import LText from "@/components/LText";

const store = useStore<GlobalDataProps>();

const components = computed(() => store.state.editor.components);
</script>

<style>
.editor-container .preview-container {
  padding: 24px;
  margin: 0;
  min-height: 85vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}
.editor-container .preview-list {
  padding: 0;
  margin: 0;
  min-width: 375px;
  min-height: 200px;
  border: 1px solid #efefef;
  background: #fff;
  overflow-x: hidden;
  overflow-y: auto;
  position: fixed;
  margin-top: 50px;
  max-height: 80vh;
}
.page-title {
  display: flex;
}
.page-title .inline-edit span {
  font-weight: 500;
  margin-left: 10px;
  font-size: 16px;
}
.preview-list.canvas-fix .edit-wrapper > * {
  box-shadow: none !important;
}
.preview-list.canvas-fix {
  position: absolute;
  max-height: none;
}
</style>
