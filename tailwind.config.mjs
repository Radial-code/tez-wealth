/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "deep-sea-green": "#003840",
        "off-green": "#292929E5",
        "light-grey": "#545454",
        "light-black": "#292929",
        "light-green": "#1BC47A",
        "sky-blue": "#F3FEFF",
        "dark-grey": "#3E3E3E",
        "pale-grey": "#515454",
        "light-sea-green": "#0038404D",
      },
      fontSize: {
        "custom-2xs": "5px",
        "custom-xs": "7px",
        "custom-sm": "10px",
        "custom-3xl": "37.88px",
      },
      fontFamily: {
        poppins: "Poppins, sans-serif",
        comic: "Comic Neue, cursive",
      },
      lineHeight: {
        110: "110%",
        120: "120%",
        150: "150%",
        160: "160%",
        163: "163%",
        171: "171%",
        140: "140%",
      },
      screens: {
        "custom-sm": "480px",
        "custom-md": "852px",
        "custom-lg": "1098px",
        "custom-xl": "1336px",
      },
      animation: {
        "bounce-slow": "bounce 3s infinite",
      },
      container: {
        center: true,
        padding: "20px",
      },
      boxShadow: {
        accordionWhite: "0px 0px 40px 0px #0000000F",
      },
      backgroundImage: {
        "hero-background": "url('/assets/images/webp/hero-section.webp')",
        "nav-background": "url('/assets/images/webp/nav-background.webp')",
        "service-ai": "url('/assets/images/webp/service-ai.webp')",
        "service-management": "url('/assets/images/webp/service-management.webp')",
        "service-fire": "url('/assets/images/webp/service-fire.webp')",
        "service-interest": "url('/assets/images/webp/service-interest.webp')",
        "service-network": "url('/assets/images/webp/service-network.webp')",
        accordion: "url('/assets/images/webp/acc-bg.webp')",
        horizontal: "url('/assets/images/webp/horizontal-bg.webp')",
      },
      backgroundSize: {
        header: "84% 100%",
        full: "100%,100%",
      },
      dropShadow: {
        "hero-graph": "0px 0px 10px #425C5A3D",
      },
    },
  },
  plugins: [],
};
