export const GET = async () => {
  const robots = `User-agent: *
Allow: /

# Disallow admin or private areas (if any)
# Disallow: /admin/

Sitemap: https://www.thestarphone.com/sitemap.xml

# Crawl-delay: 1
`;

  return new Response(robots, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'max-age=3600, s-maxage=3600'
    }
  });
};
