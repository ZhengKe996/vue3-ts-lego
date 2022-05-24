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
    props: {
      text: "hello1",
      fontSize: "20px",
      color: "#f00",
      lineHeight: "1",
      textAlign: "left",
      fontFamily: "",
    },
  },
  {
    id: uuidv4(),
    name: "l-text",
    props: {
      text: "hello2",
      fontSize: "10px",
      color: "#0f0",
      lineHeight: "2",
      textAlign: "center",
      fontFamily: "",
    },
  },
  {
    id: uuidv4(),
    name: "l-text",
    props: {
      text: "hello3",
      fontSize: "15px",
      color: "#00f",
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
    setActice(state, currentId: string) {
      state.currentElement = currentId;
    },
    updateComponent(state, { key, value }) {
      const updateComponent = state.components.find(
        (component) => component.id === state.currentElement
      );

      if (updateComponent)
        updateComponent.props[key as keyof TextComponentProps] = value;
    },
  },
  getters: {
    getCurrentElement: (state) =>
      state.components.find(
        (component) => component.id === state.currentElement
      ),
  },
};

export default editor;
