export const useSeo = () => {
  const config = useRuntimeConfig();
  const route = useRoute();

  const defaultSeo = {
    title: "Buğra Keskin - DevOps Engineer & Jr. Full Stack Developer",
    titleTemplate: "%s | Buğra Keskin",
    description: "DevOps Engineer & Jr. Full Stack Developer with expertise in Vue.js, Nuxt.js, and Node.js. Specializing in cloud infrastructure, automation, and modern web development with a focus on scalable solutions.",
    keywords: "DevOps Engineer, Full Stack Developer, Vue.js, Nuxt.js, Node.js, Cloud Infrastructure, AWS, Kubernetes",
    ogImage: "/og-image.png",
    twitterCard: "summary_large_image" as const,
    twitterSite: "@bugrakeskin11",
    lang: "en",
  };

  const setSeo = (
    options: {
      title?: string;
      description?: string;
      ogImage?: string;
      noIndex?: boolean;
      lang?: string;
    } = {}
  ) => {
    const seoOptions = { ...defaultSeo, ...options };
    const siteUrl = config.public.siteUrl;
    const currentUrl = `${siteUrl}${route.path}`;
    const imageUrl = `${siteUrl}${seoOptions.ogImage}`;

    useHead({
      htmlAttrs: {
        lang: seoOptions.lang,
      },
      title: seoOptions.title,
      titleTemplate: seoOptions.titleTemplate,
      link: [
        { rel: 'canonical', href: currentUrl }
      ],
      meta: [
        { name: 'keywords', content: seoOptions.keywords },
        { name: 'author', content: 'Buğra Keskin' },
        { name: 'robots', content: seoOptions.noIndex ? 'noindex, nofollow' : 'index, follow' },
      ],
    });

    useSeoMeta({
      title: seoOptions.title,
      titleTemplate: seoOptions.titleTemplate,
      description: seoOptions.description,
      
      // Open Graph
      ogTitle: seoOptions.title,
      ogDescription: seoOptions.description,
      ogImage: imageUrl,
      ogImageSecureUrl: imageUrl,
      ogImageWidth: 1200,
      ogImageHeight: 630,
      ogUrl: currentUrl,
      ogType: 'website',
      ogSiteName: 'Buğra Keskin Personal Web Site',

      // Twitter
      twitterTitle: seoOptions.title,
      twitterDescription: seoOptions.description,
      twitterImage: imageUrl,
      twitterCard: seoOptions.twitterCard,
      twitterSite: seoOptions.twitterSite,
      twitterCreator: seoOptions.twitterSite,
    });
  };

  return {
    setSeo,
  };
};
