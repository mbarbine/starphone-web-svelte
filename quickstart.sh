#!/bin/bash

# Starphone Quick Start Script
# This script helps you get started with the enhanced Starphone site

echo "🚀 Starphone Quick Start"
echo "========================="
echo ""

# Check if pnpm is installed
if ! command -v pnpm &> /dev/null; then
    echo "⚠️  pnpm is not installed. Installing..."
    npm install -g pnpm
fi

echo "✅ Installing dependencies..."
pnpm install

echo ""
echo "🧪 Running type check..."
pnpm check

echo ""
echo "🎨 Running formatter..."
pnpm format

echo ""
echo "✅ Setup complete!"
echo ""
echo "📋 Next steps:"
echo "  1. Start dev server:  pnpm dev"
echo "  2. Check /support page for sensor dashboard"
echo "  3. Test SEO: View page source, check /sitemap.xml"
echo "  4. Read CLEANUP.md for file size reduction"
echo ""
echo "🔗 Dev server will be at: http://localhost:5173"
echo ""
echo "🎉 Ready to go! Run: pnpm dev"
