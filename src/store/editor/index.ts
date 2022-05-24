import { Module } from "vuex";
import { v4 as uuidv4 } from "uuid";
import { GlobalDataProps } from "../index";
import { TextComponentProps } from "@/defaultProps";

export interface EditorProps {
  components: ComponentData[];
  currentElement: string;
}

export interface ComponentData {
  props: { [key: string]: any };
  id: string;
  name: string;
}

export const testComponents: ComponentData[] = [
  {
    id: uuidv4(),
    name: "l-text",
    props: { text: "hello1", fontSize: "20px", color: "#f00" },
  },
  {
    id: uuidv4(),
    name: "l-text",
    props: { text: "hello2", fontSize: "10px", color: "#0f0" },
  },
  {
    id: uuidv4(),
    name: "l-text",
    props: {
      text: "hello3",
      fontSize: "15px",
      color: "#00f",
      actionType: "url",
      url: "https//:www.baidu.com",
    },
  },
];

const editor: Module<EditorProps, GlobalDataProps> = {
  state: {
    components: testComponents,
    currentElement: "",
  },
  mutations: {
    addComponent(state, props: Partial<TextComponentProps>) {
      const newComponent: ComponentData = {
        id: uuidv4(),
        name: "l-text",
        props,
      };
      state.components.push(newComponent);
    },
  },
};

export default editor;
