# Gallery Image Sync Instructions

## How to Add Images to Gallery

Since browsers cannot directly write to files, follow these steps to add images to the gallery:

### Method 1: Using Admin Panel (Recommended)

1. **Login to Admin Panel**: Go to `/admin` and login
2. **Upload Images**: 
   - Go to "Gallery Management" tab
   - Select image file and enter title
   - Click "Upload Image"
   - Repeat for all images
3. **Export JSON**: 
   - Click "Export JSON" button
   - File will be downloaded to your Downloads folder
4. **Sync to Project**:
   - Copy the downloaded `gallery.json` file
   - Replace `public/gallery.json` with the downloaded file
   - OR run: `node scripts/sync-gallery.js <path-to-downloaded-file>`

### Method 2: Using Sync Script

After exporting from admin panel:

```bash
# Windows (PowerShell)
node scripts/sync-gallery.js "C:\Users\YourName\Downloads\gallery.json"

# Mac/Linux
node scripts/sync-gallery.js ~/Downloads/gallery.json
```

### Method 3: Manual Edit

1. Export JSON from admin panel
2. Open the downloaded `gallery.json` file
3. Copy all content
4. Paste into `public/gallery.json`
5. Save the file

## Important Notes

- Images are stored as Base64 strings in the JSON file
- All devices will load images from `public/gallery.json`
- After updating the JSON file, refresh the gallery page to see changes
- The JSON file must be a valid array format: `[{...}, {...}]`

## Troubleshooting

- **Images not showing**: Check browser console for errors, verify JSON format is valid
- **Export not working**: Make sure you have images uploaded first
- **Sync script error**: Ensure you provide the full path to the exported file

