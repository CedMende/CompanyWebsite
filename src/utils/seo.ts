interface SEOProps {
  title: string;
  description: string;
  image?: string;
  url?: string;
}
export const updateSEO = ({
  title,
  description,
  image = "https://techpro360.com/og-image.jpg",
  url = window.location.href
}: SEOProps) => {
  document.title = `${title} | TechPro360`;
  // Update meta tags
  const metaTags = {
    description,
    "og:title": title,
    "og:description": description,
    "og:image": image,
    "og:url": url,
    "twitter:title": title,
    "twitter:description": description,
    "twitter:image": image
  };
  Object.entries(metaTags).forEach(([name, content]) => {
    const selector = `meta[property="${name}"], meta[name="${name}"]`;
    let tag = document.querySelector(selector);
    if (!tag) {
      tag = document.createElement("meta");
      tag.setAttribute(name.startsWith("og:") ? "property" : "name", name);
      document.head.appendChild(tag);
    }
    tag.setAttribute("content", content);
  });
};