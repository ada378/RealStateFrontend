# Quick Start Guide

## 🚀 Get Started in 5 Minutes

### Step 1: Install Dependencies
```bash
npm install
npm install express cors
```

### Step 2: Setup Google Maps API
1. Get API key from https://console.cloud.google.com/
2. Copy `.env.example` to `.env`
3. Add your API key to `.env`

### Step 3: Start the Application

**Terminal 1 - Backend Server:**
```bash
node server/server.js
```

**Terminal 2 - React App:**
```bash
npm start
```

**Terminal 3 - WhatsApp Bot (Optional):**
```bash
npm run bot
```

### Step 4: Access the Application
- Website: http://localhost:3000
- Dashboard: http://localhost:3000/dashboard
- API: http://localhost:5000

## 📱 WhatsApp Bot Setup

1. Run `npm run bot`
2. Scan QR code with WhatsApp
3. Bot is now active!

**Test Commands:**
- Send "property" to trigger auto-reply
- Send "!properties" to see listings
- Send "!contact" for contact info

## 🗺️ Using Your Own KML File

1. Create KML file with property locations
2. Place in `public/` folder or upload to server
3. Update `src/components/MapSection.js`:
   ```javascript
   const KML_FILE_URL = 'http://localhost:3000/properties.kml';
   ```

## 📊 Dashboard Features

- View all leads
- Update lead status (New → Contacted → Qualified → Closed)
- Track statistics
- Export data (coming soon)

## 🎨 Customization

**Change Colors:**
Edit CSS files in `src/styles/`

**Update Properties:**
Edit `src/components/Projects.js`

**Modify Bot Responses:**
Edit `server/whatsappBot.js`

## ⚠️ Common Issues

**Maps not loading?**
- Check API key in `.env`
- Enable Maps JavaScript API in Google Cloud

**Bot not working?**
- Close WhatsApp Web on other devices
- Delete `.wwebjs_auth` folder and restart

**CORS errors?**
- Ensure backend server is running on port 5000

## 📞 Need Help?

Check the full README.md for detailed documentation.

---

Happy Building! 🏡
