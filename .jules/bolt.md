## 2025-05-20 - Adding `sizes` to `next/image`
**Learning:** Adding the `sizes` attribute is required when `next/image` is used with `fill`, otherwise Next.js assumes a `100vw` size, unnecessarily creating oversized images.
**Action:** Always check the sizes property of `Next.js` images that use `fill` when exploring frontend page performance bottlenecks.
