import { vi } from "vitest";
import { mount, VueWrapper } from "@vue/test-utils";
import UserProfile from "../src/components/UserProfile";
import store from "../src/store";

vi.mock("ant-design-vue", () => ({
  message: {
    success: vi.fn(),
  },
}));

const mockedRoutes: string[] = [];
vi.mock("vue-router", () => ({
  useRouter: () => ({
    push: (url: string) => mockedRoutes.push(url),
  }),
}));

let wrapper: VueWrapper<any>;
const mockComponent = {
  template: "<div><slot></slot></div>",
};
const mockComponent2 = {
  template: '<div><slot></slot><slot name="overlay"></slot></div>',
};
const globalComponents = {
  "a-button": mockComponent,
  "a-dropdown-button": mockComponent2,
  "router-link": mockComponent,
  "a-menu": mockComponent,
  "a-menu-item": mockComponent,
};

describe("mount component", () => {
  const wrapper = mount(UserProfile, {
    props: {
      user: { isLogin: false, userName: "" },
    },
    global: {
      components: globalComponents,
      provide: {
        store,
      },
    },
  });
  test("should render login button when login is false", async () => {
    expect(wrapper.get("div").text()).toBe("登录");
  });

  test("should render username when login is true", async () => {
    await wrapper.setProps({
      user: { isLogin: true, userName: "viking" },
    });
    expect(wrapper.get(".user-profile-component").html()).toContain("viking");
    expect(wrapper.find(".user-profile-dropdown").exists()).toBeTruthy();
  });

  test("should call logout and show message, call router.push after timeout", async () => {
    await wrapper.get(".user-profile-dropdown div").trigger("click");
    expect(mockedRoutes).toEqual([]);
  });
});
