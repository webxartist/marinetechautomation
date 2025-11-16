export default function sitemap() {
  const baseUrl = "https://marinetechautomation.in";

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/About`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/Services`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/Contact`,
      lastModified: new Date(),
    },

    // New Pages Added ↓↓↓
    {
      url: `${baseUrl}/Calibration`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/Instrumentation`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/Automation`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/Electrical`,
      lastModified: new Date(),
    },
  ];
}
