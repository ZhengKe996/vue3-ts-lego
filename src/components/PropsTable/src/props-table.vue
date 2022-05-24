<template>
  <div class="props-table">
    <div v-for="(value, key) in finalProps" :key="key" class="prop-item">
      <span class="label" v-if="value?.text">{{ value.text }}</span>
      <div class="prop-component">
        <component
          v-if="value"
          :is="value.component"
          :[value.valueProp]="value.value"
          v-bind="value.extraProps"
          v-on="value.events"
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
import { computed, VNode } from "vue";
import { reduce } from "lodash-es";
import { mapPropsToForms } from "@/propsMap";
import { TextComponentProps } from "@/defaultProps";

export interface FormProps {
  component: string;
  subComponent?: string;
  value: string;
  extraProps?: { [key: string]: any };
  text?: string;
  options?: { text: string | VNode; value: any }[];
  valueProp: string;
  eventName: string;
  events: { [key: string]: (e: any) => void };
}
const props = defineProps<{ props: Readonly<Partial<TextComponentProps>> }>();
const emits = defineEmits(["change"]);

const finalProps = computed(() => {
  return reduce(
    props.props,
    (result, value, key) => {
      const item = mapPropsToForms[key as keyof TextComponentProps];
      if (item) {
        const {
          valueProp = "value",
          eventName = "change",
          initalTransform,
          afterTransform,
        } = item;

        const newItem: FormProps = {
          ...item,
          value: initalTransform ? initalTransform(value) : value,
          valueProp,
          eventName,
          events: {
            [eventName]: (e: any) => {
              emits("change", {
                key,
                value: afterTransform ? afterTransform(e) : e,
              });
            },
          },
        };
        result[key as keyof TextComponentProps] = newItem;
      }
      return result;
    },
    {} as { [key: string]: FormProps }
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
