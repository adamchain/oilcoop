# Citizens Oil Co-op Admin Interface

A modern web-based admin interface for managing oil co-op members and payments, migrated from a legacy Windows database application.

## Features

- **Member Management**: Full CRUD operations for member records
- **Payment History**: Track renewal fees and payment information
- **Search Functionality**: Search members by name, phone, email, or ID
- **Modern UI**: Microsoft admin-style interface optimized for desktop use
- **MongoDB Backend**: Persistent data storage with MongoDB

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (running locally on default port 27017)

## Installation

1. Install dependencies:
```bash
npm install
```

2. Make sure MongoDB is running:
```bash
# On macOS with Homebrew
brew services start mongodb-community

# Or run MongoDB manually
mongod
```

3. Seed the database with sample data:
```bash
npm run seed
```

## Running the Application

1. Start the server:
```bash
npm start
```

For development with auto-reload:
```bash
npm run dev
```

2. Open your browser and navigate to:
```
http://localhost:3000
```

## Project Structure

```
mock-admin-ui/
├── models/           # MongoDB models (Member, Payment)
├── routes/           # API routes (members, payments)
├── scripts/         # Database seed script
├── public/
│   └── js/          # Frontend JavaScript
├── index.html       # Landing/search page
├── member.html      # Member record page
├── payment-history.html  # Payment history page
├── styles.css       # Shared stylesheet
└── server.js        # Express server
```

## API Endpoints

### Members
- `GET /api/members` - Get all members (supports ?search=query)
- `GET /api/members/:id` - Get single member
- `POST /api/members` - Create new member
- `PUT /api/members/:id` - Update member
- `DELETE /api/members/:id` - Delete member

### Payments
- `GET /api/payments` - Get all payments
- `GET /api/payments/member/:memberId` - Get payment by member ID
- `PUT /api/payments/member/:memberId` - Update payment by member ID

## Usage

1. **Search Members**: Use the search box on any page to find members
2. **View Member Record**: Click on a member from search results or use sidebar navigation
3. **Edit Member**: Make changes to any field - changes auto-save after 2 seconds
4. **View Payment History**: Navigate to Payment History from sidebar or member page
5. **Add New Member**: Click "ADD NEW MEMBER" button

## Notes

- All form changes auto-save after 2 seconds of inactivity
- Member ID is stored in localStorage for navigation between pages
- The interface is optimized for desktop use (not mobile-responsive)
- Sample data includes the member from the original screenshots (Chris Marolda)

## Environment Variables

Create a `.env` file (already included) with:
```
PORT=3000
MONGODB_URI=mongodb://localhost:27017/oil-co-op
NODE_ENV=development
```

## Troubleshooting

**MongoDB connection error**: Make sure MongoDB is running on port 27017

**Port already in use**: Change PORT in `.env` file

**Data not loading**: Run `npm run seed` to populate the database
