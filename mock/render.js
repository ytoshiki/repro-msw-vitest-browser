import { mount } from "@vue/test-utils";

const mountedWrappers = new Set();

function render(Component, provide) {
  cleanup();

  const div = document.createElement("div");
  const baseElement = document.body;
  const container = baseElement.appendChild(div);

  const wrapper = mount(Component, {
    attachTo: container,
    global: {
      provide,
    },
  });

  unwrapNode(wrapper.parentElement);

  mountedWrappers.add(wrapper);

  return wrapper;
}

function unwrapNode(node) {
  node.replaceWith(...node.childNodes);
}

export function cleanup() {
  mountedWrappers.forEach((wrapper) => {
    if (wrapper.element?.parentNode?.parentNode === document.body) {
      document.body.removeChild(wrapper.element.parentNode);
    }

    wrapper.unmount();
    mountedWrappers.delete(wrapper);
  });
}

export default render;
