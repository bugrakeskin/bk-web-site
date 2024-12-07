import { b as buildAssetsURL } from '../nitro/nitro.mjs';
import { defineComponent, toRef, computed, useSSRContext, createElementBlock, ref, provide, mergeProps, withCtx, createVNode, renderSlot, unref, createTextVNode, toDisplayString, resolveDynamicComponent } from 'vue';
import { twMerge, twJoin } from 'tailwind-merge';
import { m as mergeConfig, c as appConfig, d as useUI, n as useAppConfig, f as useNuxtApp, _ as _export_sfc, k as useState, a as __nuxt_component_0$1$1, h as __nuxt_component_1, b as __nuxt_component_2$1 } from './server.mjs';
import { ssrRenderComponent, ssrRenderSlot, ssrRenderAttrs, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrRenderVNode } from 'vue/server-renderer';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import '@iconify/utils';
import 'consola/core';
import 'node:module';
import 'nodemailer';
import '@dword-design/functions';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@vueuse/core';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';

const container = {
  base: "mx-auto",
  padding: "px-4 sm:px-6 lg:px-8",
  constrained: "max-w-7xl"
};
const config = mergeConfig(appConfig.ui.strategy, appConfig.ui.container, container);
const _sfc_main$3 = defineComponent({
  inheritAttrs: false,
  props: {
    as: {
      type: String,
      default: "div"
    },
    class: {
      type: [String, Object, Array],
      default: () => ""
    },
    ui: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props) {
    const { ui, attrs } = useUI("container", toRef(props, "ui"), config);
    const containerClass = computed(() => {
      return twMerge(twJoin(
        ui.value.base,
        ui.value.padding,
        ui.value.constrained
      ), props.class);
    });
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      containerClass
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  ssrRenderVNode(_push, createVNode(resolveDynamicComponent(_ctx.as), mergeProps({ class: _ctx.containerClass }, _ctx.attrs, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
      } else {
        return [
          renderSlot(_ctx.$slots, "default")
        ];
      }
    }),
    _: 3
  }), _parent);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/layout/Container.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender]]);
defineComponent({
  name: "ServerPlaceholder",
  render() {
    return createElementBlock("div");
  }
});
const clientOnlySymbol = Symbol.for("nuxt:client-only");
const __nuxt_component_0 = defineComponent({
  name: "ClientOnly",
  inheritAttrs: false,
  props: ["fallback", "placeholder", "placeholderTag", "fallbackTag"],
  setup(_, { slots, attrs }) {
    const mounted = ref(false);
    provide(clientOnlySymbol, true);
    return (props) => {
      var _a;
      if (mounted.value) {
        return (_a = slots.default) == null ? void 0 : _a.call(slots);
      }
      const slot = slots.fallback || slots.placeholder;
      if (slot) {
        return slot();
      }
      const fallbackStr = props.fallback || props.placeholder || "";
      const fallbackTag = props.fallbackTag || props.placeholderTag || "span";
      return createElementBlock(fallbackTag, attrs, fallbackStr);
    };
  }
});
const useColorMode = () => {
  return useState("color-mode").value;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "ColorModeButton",
  __ssrInlineRender: true,
  setup(__props) {
    const colorMode = useColorMode();
    useAppConfig();
    useNuxtApp();
    computed({
      get() {
        return colorMode.value === "dark";
      },
      set() {
        colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_ClientOnly = __nuxt_component_0;
      if (!((_a = unref(colorMode)) == null ? void 0 : _a.forced)) {
        _push(ssrRenderComponent(_component_ClientOnly, _attrs, {
          fallback: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="w-8 h-8"${_scopeId}></div>`);
            } else {
              return [
                createVNode("div", { class: "w-8 h-8" })
              ];
            }
          })
        }, _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui-pro/components/color-mode/ColorModeButton.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _imports_0 = "" + buildAssetsURL("bklogo.DRNbhfEI.png");
const _imports_1 = "" + buildAssetsURL("bklogo-dark.Daqy8bOJ.png");
const _sfc_main$1 = {
  __name: "Navigation",
  __ssrInlineRender: true,
  setup(__props) {
    const isMenuOpen = ref(false);
    const menuItems = [
      { name: "Home", path: "/" },
      { name: "About", path: "/about" },
      { name: "Projects", path: "/projects" },
      { name: "Contact", path: "/contact" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1$1;
      const _component_UButton = __nuxt_component_1;
      const _component_UIcon = __nuxt_component_2$1;
      const _component_UColorModeButton = _sfc_main$2;
      _push(`<nav${ssrRenderAttrs(mergeProps({ class: "fixed top-0 left-0 w-full bg-white dark:bg-gray-900 bg-opacity-80 dark:bg-opacity-80 backdrop-blur-sm z-50 shadow-sm" }, _attrs))}><div class="container mx-auto px-4"><div class="flex justify-between items-center h-16">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "flex items-center space-x-2 text-xl font-bold text-gray-900 dark:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="relative w-8 h-8"${_scopeId}><img${ssrRenderAttr("src", _imports_0)} alt="BK Logo" class="absolute inset-0 w-full h-full dark:hidden"${_scopeId}><img${ssrRenderAttr("src", _imports_1)} alt="BK Logo Dark" class="absolute inset-0 w-full h-full hidden dark:block"${_scopeId}></div><span class="logo-text"${_scopeId}>BK</span>`);
          } else {
            return [
              createVNode("div", { class: "relative w-8 h-8" }, [
                createVNode("img", {
                  src: _imports_0,
                  alt: "BK Logo",
                  class: "absolute inset-0 w-full h-full dark:hidden"
                }),
                createVNode("img", {
                  src: _imports_1,
                  alt: "BK Logo Dark",
                  class: "absolute inset-0 w-full h-full hidden dark:block"
                })
              ]),
              createVNode("span", { class: "logo-text" }, "BK")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="flex items-center md:space-x-8"><div class="hidden md:flex space-x-8"><!--[-->`);
      ssrRenderList(menuItems, (item) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: item.path,
          to: item.path,
          class: "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(item.name)}`);
            } else {
              return [
                createTextVNode(toDisplayString(item.name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div>`);
      _push(ssrRenderComponent(_component_UButton, {
        size: "sm",
        color: "amber",
        variant: "solid",
        target: "_blank",
        to: "/Bu\u011Fra-Keskin-ENG.pdf",
        class: "hidden md:flex"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "i-heroicons-arrow-top-right-on-square",
              class: "w-4 h-4 mr-1"
            }, null, _parent2, _scopeId));
            _push2(` My Resume [PDF] `);
          } else {
            return [
              createVNode(_component_UIcon, {
                name: "i-heroicons-arrow-top-right-on-square",
                class: "w-4 h-4 mr-1"
              }),
              createTextVNode(" My Resume [PDF] ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UColorModeButton, null, null, _parent));
      _push(`<button class="md:hidden text-gray-600 dark:text-gray-300 p-2"><span class="sr-only">Open menu</span><div class="w-7 h-7 flex items-center justify-center text-xl">`);
      if (!unref(isMenuOpen)) {
        _push(ssrRenderComponent(_component_UIcon, {
          name: "i-heroicons-bars-3",
          class: "w-6 h-6"
        }, null, _parent));
      } else {
        _push(ssrRenderComponent(_component_UIcon, {
          name: "i-heroicons-x-mark",
          class: "w-6 h-6"
        }, null, _parent));
      }
      _push(`</div></button></div></div></div>`);
      if (unref(isMenuOpen)) {
        _push(`<div class="md:hidden bg-white dark:bg-gray-900 shadow-lg"><div class="px-4 pt-2 pb-3 space-y-2"><!--[-->`);
        ssrRenderList(menuItems, (item) => {
          _push(ssrRenderComponent(_component_NuxtLink, {
            key: item.path,
            to: item.path,
            class: "block px-3 py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors",
            onClick: ($event) => isMenuOpen.value = false
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(item.name)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(item.name), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]-->`);
        _push(ssrRenderComponent(_component_UButton, {
          size: "sm",
          color: "amber",
          variant: "solid",
          target: "_blank",
          to: "/Bu\u011Fra-Keskin-ENG.pdf",
          class: "w-full mt-2"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "i-heroicons-arrow-top-right-on-square",
                class: "w-4 h-4 mr-1"
              }, null, _parent2, _scopeId));
              _push2(` My Resume [PDF] `);
            } else {
              return [
                createVNode(_component_UIcon, {
                  name: "i-heroicons-arrow-top-right-on-square",
                  class: "w-4 h-4 mr-1"
                }),
                createTextVNode(" My Resume [PDF] ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</nav>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Navigation.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UContainer = __nuxt_component_0$1;
      _push(ssrRenderComponent(_component_UContainer, mergeProps({ class: "min-h-screen bg-gray-50 dark:bg-gray-800 max-w-full mx-auto px-4" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$1, null, null, _parent2, _scopeId));
            _push2(`<main class="flex items-center justify-center min-h-[calc(100vh-4rem)]"${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            _push2(`</main>`);
          } else {
            return [
              createVNode(_sfc_main$1),
              createVNode("main", { class: "flex items-center justify-center min-h-[calc(100vh-4rem)]" }, [
                renderSlot(_ctx.$slots, "default")
              ])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=default-BESor-Xq.mjs.map
