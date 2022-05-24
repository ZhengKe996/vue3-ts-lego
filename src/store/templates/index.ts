import { Module } from "vuex";
import { GlobalDataProps } from "../index";
export interface TemplateProps {
  id: number;
  title: string;
  coverImg: string;
  author: string;
  copiedCount: number;
}
const testData: TemplateProps[] = [
  {
    id: 1,
    title: "哈哈哈1",
    coverImg:
      "http://typescript-vue.oss-cn-beijing.aliyuncs.com/vue-marker/5f81cca3f3bf7a0e1ebaf885.png",
    author: "张三1",
    copiedCount: 100,
  },
  {
    id: 2,
    title: "哈哈哈2",
    coverImg:
      "http://typescript-vue.oss-cn-beijing.aliyuncs.com/vue-marker/5f81cca3f3bf7a0e1ebaf885.png",
    author: "张三2",
    copiedCount: 100,
  },
  {
    id: 3,
    title: "哈哈哈3",
    coverImg:
      "http://typescript-vue.oss-cn-beijing.aliyuncs.com/vue-marker/5f81cca3f3bf7a0e1ebaf885.png",
    author: "张三3",
    copiedCount: 100,
  },
  {
    id: 4,
    title: "哈哈哈4",
    coverImg:
      "http://typescript-vue.oss-cn-beijing.aliyuncs.com/vue-marker/5f81cca3f3bf7a0e1ebaf885.png",
    author: "张三4",
    copiedCount: 100,
  },
  {
    id: 5,
    title: "哈哈哈5",
    coverImg:
      "http://typescript-vue.oss-cn-beijing.aliyuncs.com/vue-marker/5f81cca3f3bf7a0e1ebaf885.png",
    author: "张三5",
    copiedCount: 100,
  },
  {
    id: 6,
    title: "哈哈哈6",
    coverImg:
      "http://typescript-vue.oss-cn-beijing.aliyuncs.com/vue-marker/5f81cca3f3bf7a0e1ebaf885.png",
    author: "张三6",
    copiedCount: 100,
  },
  {
    id: 7,
    title: "哈哈哈7",
    coverImg:
      "http://typescript-vue.oss-cn-beijing.aliyuncs.com/vue-marker/5f81cca3f3bf7a0e1ebaf885.png",
    author: "张三7",
    copiedCount: 100,
  },
  {
    id: 8,
    title: "哈哈哈7",
    coverImg:
      "http://typescript-vue.oss-cn-beijing.aliyuncs.com/vue-marker/5f81cca3f3bf7a0e1ebaf885.png",
    author: "张三7",
    copiedCount: 100,
  },
];

export interface TemplatesProps {
  data: TemplateProps[];
}

const templates: Module<TemplatesProps, GlobalDataProps> = {
  state: {
    data: testData,
  },
  getters: {
    getTemplateById: (state) => (id: number) => {
      return state.data.find((t) => t.id == id);
    },
  },
};

export default templates;
