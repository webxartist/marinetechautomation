export default function robots() {
  const baseUrl = "https://marinetechautomation.in";

  return {
    rules: [
      {
        userAgent: '*',
      }
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
