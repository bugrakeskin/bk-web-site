import { _ as _export_sfc, a as __nuxt_component_0$1 } from './server.mjs';
import { mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import '../nitro/nitro.mjs';
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
import 'tailwind-merge';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-[calc(100vh-18rem)] p-4 md:p-2 mt-24 md:mt-0 flex items-center justify-center" }, _attrs))} data-v-5546c8f3><div class="max-w-3xl text-center" data-v-5546c8f3><h1 class="text-4xl font-bold mb-6 text-center text-gray-900 dark:text-white" data-v-5546c8f3>DevOps Engineer &amp; Jr. Full Stack Dev.</h1><h2 class="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200" data-v-5546c8f3>Hello, I&#39;m `);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/about",
        class: "name-link relative inline-block bg-gray-900 text-white dark:bg-white dark:text-gray-900 px-2 hover:bg-amber-500 dark:hover:bg-amber-500 hover:text-white transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Bu\u011Fra Keskin`);
          } else {
            return [
              createTextVNode("Bu\u011Fra Keskin")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</h2><p class="text-gray-700 dark:text-gray-300 leading-relaxed text-justify" data-v-5546c8f3> a seasoned IT professional with 15 years of experience, currently specializing in DevOps engineering. With a comprehensive background in cloud infrastructure and modern development practices, I architect and implement robust DevOps solutions using Kubernetes, Docker, and various monitoring tools. My expertise spans across both traditional and cloud-native technologies, from containerization to CI/CD pipelines. I&#39;m particularly passionate about automation, infrastructure as code, and creating efficient, scalable systems. Currently expanding my cloud expertise with AWS while maintaining proficiency in frontend development using Vue.js and Nuxt.js. Get to know a bit more `);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/about",
        class: "name-link relative inline-block bg-gray-900 text-white dark:bg-white dark:text-gray-900 px-2 hover:bg-amber-500 dark:hover:bg-amber-500 hover:text-white transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`about my skills `);
          } else {
            return [
              createTextVNode("about my skills ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(` or feel free to look around my `);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/projects",
        class: "name-link relative inline-block bg-gray-900 text-white dark:bg-white dark:text-gray-900 px-2 hover:bg-amber-500 dark:hover:bg-amber-500 hover:text-white transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`projects.`);
          } else {
            return [
              createTextVNode("projects.")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</p></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-5546c8f3"]]);

export { index as default };
//# sourceMappingURL=index-BIup_skg.mjs.map
