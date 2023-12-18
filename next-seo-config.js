const description =
  "Certificate Generator for Ctrl + Solve: An Introduction to Google Solution Challenge";

export default {
  title: "SOLCHA Intro Certificate Generator",
  description,
  openGraph: {
    type: "website",
    url: "https://solcha23.omsimos.com/",
    title: "SOLCHA Intro Certificate Generator",
    description,
    images: [
      {
        url: "/images/solcha-intro-thumbnail.png",
        width: 1400,
        height: 800,
        alt: "solcha-intro",
        type: "image/png",
      },
    ],
    site_name: "SOLCHA Intro Certificate Generator",
  },
  twitter: {
    cardType: "summary_large_image",
  },
  additionalLinkTags: [
    {
      rel: "icon",
      href: "/favicon.ico",
      type: "image/x-icon",
    },
  ],
};
