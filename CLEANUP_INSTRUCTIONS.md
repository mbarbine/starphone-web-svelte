# Starphone Repository Cleanup Instructions

## Large Files to Remove (Total: ~140MB in media)

### Videos in static/making-of-starphone/ (should be hosted externally):
- Starphone-Booth-Piece-2.MOV (22MB)
- itsringing.mov (8.2MB)
- Public-Phone-1.MP4 (4.8MB)
- later-on-people-are-fascinated.MP4 (3.7MB)

### Other large files:
- static/Starphone-readonly.pptx (18MB) - Move to external storage
- src/routes/open-pptx/Starphone-readonly.pptx (duplicate)
- src/routes/Starphone-readonly.pptx (duplicate)

## Recommended Actions:

1. **Upload videos to YouTube or Vimeo** and embed them
2. **Upload presentations to Google Drive or Dropbox**
3. **Optimize images** - Convert to WebP format and compress
4. **Clean build artifacts**: 
   - Remove .vercel/ and .svelte-kit/ (162MB + 163MB)
   - These are auto-generated and shouldn't be in git

## Commands to Clean:

```bash
# Remove large video files (after backing up to cloud)
rm static/making-of-starphone/*.MOV
rm static/making-of-starphone/*.MP4
rm static/making-of-starphone/*.mov

# Remove large presentation files (after uploading to cloud)
rm static/Starphone-readonly.pptx
rm src/routes/open-pptx/Starphone-readonly.pptx
rm src/routes/Starphone-readonly.pptx

# Remove build artifacts from git
git rm -r --cached .vercel .svelte-kit
echo ".vercel/" >> .gitignore
echo ".svelte-kit/" >> .gitignore

# Clean git history of large files
git filter-branch --tree-filter 'rm -rf static/making-of-starphone/*.MOV static/making-of-starphone/*.MP4' HEAD
```

## Video Hosting Alternatives:
- YouTube (free, unlimited)
- Vimeo (free tier available)
- Cloudflare Stream (pay-per-use)
- AWS S3 + CloudFront (pay-per-use)

This will reduce repository size from 150MB to ~10-20MB.
