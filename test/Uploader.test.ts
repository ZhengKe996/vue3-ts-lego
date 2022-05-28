import { vi, test } from "vitest";
import { mount, shallowMount, VueWrapper } from "@vue/test-utils";
import axios from "axios";
import flushPromises from "flush-promises";
import Uploader from "../src/components/Uploader";
import store from "../src/store";

vi.mock("axios");

const testFile = new File(["xyz"], "test.png", { type: "image/png" });

let wrapper: VueWrapper<any>;

describe("Uploader Component", () => {
  wrapper = shallowMount(Uploader, {
    props: {
      action: "test.url",
    },
  });

  test("basic layout before uploading", () => {
    expect(wrapper.find("button").exists()).toBeTruthy();
    expect(wrapper.get("button span").text()).toBe("点击上传");
    expect(wrapper.get("input").isVisible()).toBeFalsy();
  });

  test("upload process should works fine", async () => {
    const fileInput = wrapper.get("input").element as HTMLInputElement;
    const files = [testFile] as any;
    Object.defineProperty(fileInput, "files", {
      value: files,
      writable: false,
    });

    await wrapper.get("input").trigger("change");
    expect(wrapper.get("button").text()).toBe("点击上传");

    // button 为 disabled
    expect(wrapper.get("button").attributes("disabled")).toBeUndefined();
    // 列表长度修改，并且有正确的 class
    expect(wrapper.findAll("li").length).toBe(0);
  });

  test("should return error text when post is rejected", () => {});

  test("should show the correct interface when using custom slot", () => {});
});
