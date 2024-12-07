import { _ as _export_sfc, b as __nuxt_component_2$1 } from './server.mjs';
import { mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderStyle, ssrRenderComponent } from 'vue/server-renderer';
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

const experience = [
  {
    position: "DevOps Engineer",
    company: "KubixCloud",
    period: "2021 - Present",
    description: `
      Led the successful migration from on-premise to AWS cloud infrastructure at KubixCloud. 
      Specialized in Kubernetes orchestration, CI/CD implementation, and infrastructure as code 
      using Terraform. Implemented comprehensive monitoring and logging solutions with Prometheus, 
      Grafana, and ELK Stack.

      Working with: AWS, Kubernetes, Docker, GitLab CI, MongoDB, PostgreSQL, and various DevOps tools 
      to maintain high availability and security standards.
    `.trim().replace(/^\s+/gm, "")
  }
  // Diğer deneyimler buraya eklenebilir
];
const _sfc_main = {
  __name: "about",
  __ssrInlineRender: true,
  setup(__props) {
    const skills = [
      { name: "DevOps Technologies", level: 92 },
      { name: "AWS", level: 85 },
      { name: "Kubernetes", level: 90 },
      { name: "Docker", level: 90 },
      { name: "CI/CD", level: 85 },
      { name: "Infrastructure as Code", level: 80 },
      { name: "Vue.js", level: 80 },
      { name: "Nuxt.js", level: 80 },
      { name: "JavaScript/TypeScript", level: 75 },
      { name: "TailwindCSS", level: 80 },
      { name: "Node.js", level: 40 }
    ];
    const skillCategories = {
      devops: ["DevOps Technologies", "AWS", "Kubernetes", "Docker", "CI/CD", "Infrastructure as Code"],
      frontend: ["Vue.js", "Nuxt.js", "JavaScript/TypeScript", "TailwindCSS"],
      backend: ["Node.js"]
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIcon = __nuxt_component_2$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container mx-auto mt-24 md:mt-32" }, _attrs))} data-v-f6b7cfbe><h1 class="text-4xl font-bold mb-8 text-gray-900 dark:text-white" data-v-f6b7cfbe>About Me</h1><div class="prose dark:prose-invert max-w-none" data-v-f6b7cfbe><p class="text-gray-700 dark:text-gray-300 text-justify" data-v-f6b7cfbe> Hello! I&#39;m a passionate DevOps Engineer with extensive experience in cloud infrastructure and automation. My expertise spans across various DevOps technologies including Kubernetes, Docker, AWS, and CI/CD pipelines. I excel at bridging the gap between development and operations, ensuring smooth deployment processes and robust infrastructure management. My journey started with system administration and has evolved into architecting scalable cloud solutions with a focus on automation, security, and reliability. </p><h2 class="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white" data-v-f6b7cfbe>Skills</h2><h3 class="text-xl font-medium mb-4 text-gray-800 dark:text-gray-200" data-v-f6b7cfbe>DevOps &amp; Infrastructure</h3><div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8" data-v-f6b7cfbe><!--[-->`);
      ssrRenderList(skillCategories.devops, (skillName) => {
        _push(`<div class="p-4 bg-white dark:bg-gray-700 rounded-lg shadow-sm hover:shadow-md transition-shadow" data-v-f6b7cfbe><h3 class="font-medium text-gray-900 dark:text-white" data-v-f6b7cfbe>${ssrInterpolate(skillName)}</h3><div class="mt-2 h-2 bg-gray-200 dark:bg-gray-600 rounded-full" data-v-f6b7cfbe><div class="h-full bg-amber-500 dark:bg-amber-400 rounded-full" style="${ssrRenderStyle({ width: skills.find((s) => s.name === skillName).level + "%" })}" data-v-f6b7cfbe></div></div></div>`);
      });
      _push(`<!--]--></div><h3 class="text-xl font-medium mb-4 text-gray-800 dark:text-gray-200" data-v-f6b7cfbe>Frontend Development</h3><div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8" data-v-f6b7cfbe><!--[-->`);
      ssrRenderList(skillCategories.frontend, (skillName) => {
        _push(`<div class="p-4 bg-white dark:bg-gray-700 rounded-lg shadow-sm hover:shadow-md transition-shadow" data-v-f6b7cfbe><h3 class="font-medium text-gray-900 dark:text-white" data-v-f6b7cfbe>${ssrInterpolate(skillName)}</h3><div class="mt-2 h-2 bg-gray-200 dark:bg-gray-600 rounded-full" data-v-f6b7cfbe><div class="h-full bg-amber-500 dark:bg-amber-400 rounded-full" style="${ssrRenderStyle({ width: skills.find((s) => s.name === skillName).level + "%" })}" data-v-f6b7cfbe></div></div></div>`);
      });
      _push(`<!--]--></div><h2 class="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white" data-v-f6b7cfbe>Latest Experience</h2><div class="space-y-6" data-v-f6b7cfbe><!--[-->`);
      ssrRenderList(unref(experience), (exp) => {
        _push(`<div class="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-sm hover:shadow-md transition-shadow" data-v-f6b7cfbe><h3 class="font-semibold text-xl text-gray-900 dark:text-white" data-v-f6b7cfbe>${ssrInterpolate(exp.position)}</h3><p class="text-gray-600 dark:text-gray-400" data-v-f6b7cfbe>${ssrInterpolate(exp.company)} | ${ssrInterpolate(exp.period)}</p><p class="mt-2 text-gray-700 dark:text-gray-300" data-v-f6b7cfbe>${ssrInterpolate(exp.description)}</p></div>`);
      });
      _push(`<!--]--></div><div class="mt-8 border-t border-gray-200 dark:border-gray-700 mb-8" data-v-f6b7cfbe><div class="text-center" data-v-f6b7cfbe><h3 class="text-xl font-semibold text-gray-900 dark:text-white" data-v-f6b7cfbe>Want to know more?</h3><p class="text-gray-600 dark:text-gray-400" data-v-f6b7cfbe>Check out my detailed CV for my full experience and qualifications</p><a href="/Bu\u011Fra-Keskin-ENG.pdf" target="_blank" class="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors duration-200" data-v-f6b7cfbe><span class="text-lg" data-v-f6b7cfbe>View Resume</span>`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "i-heroicons-arrow-top-right-on-square",
        class: "w-5 h-5"
      }, null, _parent));
      _push(`</a></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const about = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f6b7cfbe"]]);

export { about as default };
//# sourceMappingURL=about-DZ-iiskg.mjs.map
