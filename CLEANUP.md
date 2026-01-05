# Starphone Repository Cleanup Guide

## Current Repository Size: ~150MB
## Target Size: ~10-20MB

## Large Files Identified:

### Videos (Total: ~42MB)
1. `static/making-of-starphone/Starphone-Booth-Piece-2.MOV` - 22MB
2. `static/making-of-starphone/itsringing.mov` - 8.2MB
3. `static/making-of-starphone/Public-Phone-1.MP4` - 4.8MB
4. `static/making-of-starphone/later-on-people-are-fascinated.MP4` - 3.7MB

### Presentations (Total: ~54MB with duplicates)
1. `static/Starphone-readonly.pptx` - 18MB
2. `src/routes/open-pptx/Starphone-readonly.pptx` - 18MB (duplicate)
3. `src/routes/Starphone-readonly.pptx` - 18MB (duplicate)

### Build Artifacts (Should NOT be in git)
1. `.vercel/` - 163MB
2. `.svelte-kit/` - 162MB
3. `.git/objects/` - Contains historical large files

## Cleanup Steps:

### Step 1: Backup Important Files
```bash
# Create backup directory
mkdir -p ~/starphone-backups
cp -r static/making-of-starphone/*.{MOV,MP4,mov} ~/starphone-backups/
cp static/Starphone-readonly.pptx ~/starphone-backups/
```

### Step 2: Remove Large Files from Repository
```bash
# Remove video files
git rm static/making-of-starphone/*.MOV
git rm static/making-of-starphone/*.MP4
git rm static/making-of-starphone/*.mov

# Remove presentation duplicates
git rm static/Starphone-readonly.pptx
git rm src/routes/open-pptx/Starphone-readonly.pptx
git rm src/routes/Starphone-readonly.pptx

# Remove build artifacts
git rm -r --cached .vercel .svelte-kit

# Commit changes
git commit -m "Remove large media files and build artifacts"
```

### Step 3: Host Videos Externally

**Option A: YouTube (Recommended - Free & Unlimited)**
1. Upload videos to YouTube
2. Get embed codes
3. Update Gallery component to use YouTube embeds

**Option B: Vimeo**
1. Upload to Vimeo
2. Use Vimeo player embeds

**Option C: Cloudflare Stream or AWS S3**
1. Upload to cloud storage
2. Use CDN URLs

### Step 4: Update Gallery Component
Replace video files with external URLs:

```svelte
<script>
  const videos = [
    { 
      id: 'starphone-booth-build',
      title: 'Starphone Booth Build',
      url: 'https://www.youtube.com/embed/YOUR_VIDEO_ID'
    },
    // ... other videos
  ];
</script>
```

### Step 5: Clean Git History (Optional but Recommended)
```bash
# This removes large files from git history
# WARNING: This rewrites history - coordinate with team first

# Install git-filter-repo (better than filter-branch)
brew install git-filter-repo  # macOS
# or
pip install git-filter-repo

# Remove large files from history
git filter-repo --path-glob '*.MOV' --invert-paths
git filter-repo --path-glob '*.MP4' --invert-paths
git filter-repo --path-glob '*.pptx' --invert-paths

# Force push (coordinate with team!)
git push origin --force --all
```

### Step 6: Optimize Images
```bash
# Install image optimization tools
brew install imagemagick

# Convert images to WebP (better compression)
for img in static/images/*.{jpg,jpeg,png}; do
  cwebp -q 80 "$img" -o "${img%.*}.webp"
done
```

## After Cleanup:

1. Update `.gitignore` to prevent large files ✅ (Already done)
2. Add pre-commit hooks to reject large files
3. Update documentation with new video URLs
4. Test the site to ensure all embeds work

## Expected Results:
- Repository size: ~10-20MB (from 150MB)
- Faster clones and pulls
- Better CI/CD performance
- External video hosting with better streaming

## Video Hosting Recommendations:

### For Public Videos:
- **YouTube**: Free, unlimited storage, great player
- **Vimeo**: Free tier (5GB/week), more professional

### For Private/Internal:
- **AWS S3 + CloudFront**: $0.023/GB storage + bandwidth
- **Cloudflare Stream**: $5/1000 minutes stored + delivery

## Questions?
Contact the team before doing Step 5 (git history cleanup) as it requires coordination.
