// types/nuxt.d.ts
declare module '@nuxt/schema' {
  interface NuxtConfig {
    mail?: {
      message?: {
        to?: string;
      };
      smtp?: {
        host?: string;
        port?: string | number;
        auth?: {
          user?: string;
          pass?: string;
        };
      };
    };
  }
}

export { }
