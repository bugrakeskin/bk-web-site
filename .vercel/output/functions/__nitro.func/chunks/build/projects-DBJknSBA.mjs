import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
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
  __name: "projects",
  __ssrInlineRender: true,
  setup(__props) {
    const projects2 = [
      {
        title: "Shopping List App",
        description: "A simple shopping list application.",
        image: "https://picsum.photos/800/600?random=1",
        technologies: ["Vue.js", "Nuxt.js", "Supabase Realtime Database", "Nuxt-UI", "Pinia"],
        demo: "https://shoppinlistv2.vercel.app",
        github: "https://github.com/bugrakeskin/Shopping-List-v2"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-8 container mx-auto mt-24" }, _attrs))} data-v-fe1f9b02><h1 class="text-4xl font-bold text-center animate-fade-in text-gray-900 dark:text-white" data-v-fe1f9b02>My Projects</h1><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-slide-up" data-v-fe1f9b02><!--[-->`);
      ssrRenderList(projects2, (project) => {
        _push(`<div class="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300" data-v-fe1f9b02><img${ssrRenderAttr("src", project.image)}${ssrRenderAttr("alt", project.title)} class="w-full h-48 object-cover" data-v-fe1f9b02><div class="p-6" data-v-fe1f9b02><h3 class="text-xl font-semibold mb-2 text-gray-900 dark:text-white" data-v-fe1f9b02>${ssrInterpolate(project.title)}</h3><p class="text-gray-600 dark:text-gray-300 mb-4" data-v-fe1f9b02>${ssrInterpolate(project.description)}</p><div class="flex flex-wrap gap-2" data-v-fe1f9b02><!--[-->`);
        ssrRenderList(project.technologies, (tech) => {
          _push(`<span class="px-3 py-1 bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 text-sm rounded-full" data-v-fe1f9b02>${ssrInterpolate(tech)}</span>`);
        });
        _push(`<!--]--></div><div class="mt-4 flex space-x-4" data-v-fe1f9b02>`);
        if (project.demo) {
          _push(`<a${ssrRenderAttr("href", project.demo)} target="_blank" class="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300" data-v-fe1f9b02> Live Demo </a>`);
        } else {
          _push(`<!---->`);
        }
        if (project.github) {
          _push(`<a${ssrRenderAttr("href", project.github)} target="_blank" class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300" data-v-fe1f9b02> GitHub </a>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div></div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/projects.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const projects = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-fe1f9b02"]]);

export { projects as default };
//# sourceMappingURL=projects-DBJknSBA.mjs.map
