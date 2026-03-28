
## 2025-02-17 - Always Lazy Load Third-Party Iframes
**Learning:** Third-party iframes (like YouTube video embeds and PDF viewers) can significantly delay the initial page render and waste bandwidth.
**Action:** Always add `loading="lazy"` to third-party iframes so they don't block the main thread and defer their resource loading until the user scrolls them into view.
