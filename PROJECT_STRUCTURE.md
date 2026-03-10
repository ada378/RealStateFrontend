# Project Structure

```
RealStateClient/
└── Frontend/
    ├── public/
    │   ├── index.html              # HTML template
    │   └── properties.kml          # KML file for Google Maps
    │
    ├── src/
    │   ├── components/
    │   │   ├── Hero.js             # Hero section with search
    │   │   ├── Projects.js         # Property listings grid
    │   │   ├── MapSection.js       # Google Maps with KML layer
    │   │   ├── InteriorServices.js # Interior services showcase
    │   │   └── ContactForm.js      # Lead capture form
    │   │
    │   ├── pages/
    │   │   ├── HomePage.js         # Main landing page
    │   │   └── Dashboard.js        # Lead management dashboard
    │   │
    │   ├── styles/
    │   │   ├── App.css             # Global styles
    │   │   ├── Hero.css            # Hero section styles
    │   │   ├── Projects.css        # Projects section styles
    │   │   ├── MapSection.css      # Map section styles
    │   │   ├── InteriorServices.css # Services section styles
    │   │   ├── ContactForm.css     # Contact form styles
    │   │   └── Dashboard.css       # Dashboard styles
    │   │
    │   ├── App.js                  # Main app component with routing
    │   └── index.js                # React entry point
    │
    ├── server/
    │   ├── server.js               # Express API server
    │   ├── whatsappBot.js          # WhatsApp auto-reply bot
    │   └── package.json            # Server dependencies
    │
    ├── package.json                # Frontend dependencies
    ├── .env.example                # Environment variables template
    ├── .gitignore                  # Git ignore rules
    ├── README.md                   # Complete documentation
    └── QUICKSTART.md               # Quick start guide
```

## Component Overview

### Frontend Components

**Hero.js**
- Full-screen hero section
- Property search bar
- Animated entrance

**Projects.js**
- Property cards grid
- Property details (beds, baths, sqft)
- View details buttons

**MapSection.js**
- Google Maps integration
- KML layer support
- Property markers
- Interactive map

**InteriorServices.js**
- Service cards
- Icons and descriptions
- Hover animations

**ContactForm.js**
- Lead capture form
- Form validation
- API integration
- Success/error messages

### Pages

**HomePage.js**
- Combines all sections
- Main landing page
- Smooth scrolling

**Dashboard.js**
- Lead statistics
- Lead table
- Status management
- Real-time updates

### Backend

**server.js**
- Express REST API
- CORS enabled
- Lead management endpoints
- In-memory storage (upgradeable to DB)

**whatsappBot.js**
- WhatsApp Web integration
- Auto-reply system
- Keyword detection
- Command handling
- Lead capture from WhatsApp

## Data Flow

```
User Interaction
      ↓
Contact Form → API Server → Lead Storage
      ↓
Dashboard Display

WhatsApp Message
      ↓
Bot Detection → Auto Reply + Lead Capture
      ↓
API Server → Lead Storage
      ↓
Dashboard Display
```

## Key Features by File

| File | Features |
|------|----------|
| Hero.js | Search, Animation, CTA |
| Projects.js | Listings, Cards, Details |
| MapSection.js | Maps, KML, Markers |
| InteriorServices.js | Services, Icons, Grid |
| ContactForm.js | Form, Validation, Submit |
| Dashboard.js | Stats, Table, Status Update |
| server.js | API, CRUD, Storage |
| whatsappBot.js | Auto-reply, Commands, Capture |

## Technology Stack

- **React 18** - UI framework
- **React Router** - Navigation
- **Framer Motion** - Animations
- **Google Maps API** - Maps integration
- **Express.js** - Backend API
- **WhatsApp Web.js** - Bot integration
- **Axios** - HTTP requests
- **React Icons** - Icon library

## Styling Approach

- Pure CSS3 (no frameworks)
- CSS Grid & Flexbox
- Responsive design
- Mobile-first approach
- Smooth animations
- Modern gradients
