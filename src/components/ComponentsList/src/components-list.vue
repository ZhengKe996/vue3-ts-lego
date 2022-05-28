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
  <!-- <styled-uploader @success="onImageUploaded" /> -->
  <div @click="onImageUploaded()">测试文件上传</div>
</template>

<script setup lang="ts">
import LText from "@/components/LText";
import { imageDefaultProps, TextComponentProps } from "@/defaultProps";
import { v4 as uuidv4 } from "uuid";
import { ComponentData } from "@/store/editor";
import StyledUploader from "@/components/StyledUploader";
import { UploadResp } from "@/extraType";
import { message } from "ant-design-vue";

const props = defineProps<{ list: any[] }>();

const emit = defineEmits(["on-item-click"]);

const onItemClick = (data: TextComponentProps) => {
  const componentData: ComponentData = {
    name: "l-text",
    id: uuidv4(),
    props: data,
  };
  emit("on-item-click", componentData);
};

const onImageUploaded = (resp?: UploadResp) => {
  const componentData: ComponentData = {
    name: "l-image",
    id: uuidv4(),
    props: {
      ...imageDefaultProps,
    },
  };
  message.success("上传成功");
  // componentData.props.src = resp.data.url;
  componentData.props.src =
    "http://typescript-vue.oss-cn-beijing.aliyuncs.com/vue-marker/5f81cca3f3bf7a0e1ebaf885.png";
  emit("on-item-click", componentData);
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
