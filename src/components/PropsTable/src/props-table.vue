<template>
  <div class="props-table">
    <div v-for="(value, key) in finalProps" :key="key" class="prop-item">
      <span class="label" v-if="value?.text">{{ value.text }}</span>
      <div class="prop-component">
        <component
          v-if="value"
          :is="value.component"
          :value="value.value"
          v-bind="value.extraProps"
        >
          <template v-if="value.options">
            <component
              :is="value.subComponent"
              v-for="(option, k) in value.options"
              :key="k"
              :value="option.value"
              >{{ option.text }}</component
            >
          </template>
        </component>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { reduce } from "lodash-es";
import { PropsToForms, mapPropsToForms } from "@/propsMap";
import { TextComponentProps } from "@/defaultProps";

const props = defineProps<{ props: Readonly<Partial<TextComponentProps>> }>();
const finalProps = computed(() => {
  return reduce(
    props.props,
    (result, value, key) => {
      const item = mapPropsToForms[key as keyof TextComponentProps];
      if (item) {
        item.value = item.initalTransform ? item.initalTransform(value) : value;
        result[key as keyof TextComponentProps] = item;
      }
      return result;
    },
    {} as Required<PropsToForms>
  );
});
</script>

<style scoped>
.prop-item {
  display: flex;
  margin-bottom: 10px;
  align-items: center;
}
.label {
  width: 28%;
}
.prop-component {
  width: 70%;
}
.prop-item.no-text {
  display: inline-block;
  margin: 0 10px 0 0;
}
#item-fontWeight {
  margin-left: 28%;
}
.component-a-select .ant-select {
  width: 150px;
}
.prop-component.component-shadow-picker,
.prop-component.component-image-processer,
.prop-component.component-background-processer {
  width: 100%;
}
</style>
