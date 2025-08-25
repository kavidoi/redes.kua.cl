# ChatFlow - Better Instagram DM Automation

A powerful Instagram messaging platform built for small businesses to automate conversations, nurture leads, and grow their audience.

## Features

- **Instagram DM Automation** - Automate responses to keywords, welcome new followers, and nurture leads
- **Visual Flow Builder** - Create complex conversation flows with an intuitive drag-and-drop interface
- **Contact Management** - Organize contacts, track conversations, and build relationships
- **Real-time Dashboard** - Monitor conversations, analytics, and performance metrics
- **Team Collaboration** - Assign conversations, add notes, and work together

## Tech Stack

- **Frontend**: Next.js 14, TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes, Prisma ORM
- **Database**: PostgreSQL
- **UI Components**: Radix UI, Lucide Icons
- **Authentication**: NextAuth.js (planned)

## Getting Started

### Prerequisites

- Node.js 18+ 
- PostgreSQL database
- Instagram Business Account

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd chatflow-platform
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp env.example .env.local
```

Edit `.env.local` with your database and Instagram API credentials:
```env
DATABASE_URL="postgresql://username:password@localhost:5432/chatflow"
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key"
INSTAGRAM_CLIENT_ID="your-instagram-client-id"
INSTAGRAM_CLIENT_SECRET="your-instagram-client-secret"
```

4. Set up the database:
```bash
npx prisma migrate dev
npx prisma generate
```

5. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the application.

## Project Structure

```
src/
├── app/                    # Next.js app router
│   ├── api/               # API routes
│   ├── dashboard/         # Dashboard pages
│   ├── login/            # Authentication pages
│   └── page.tsx          # Landing page
├── components/
│   └── ui/               # Reusable UI components
├── lib/                  # Utilities and configurations
│   ├── prisma.ts        # Database client
│   └── utils.ts         # Helper functions
└── prisma/
    └── schema.prisma    # Database schema
```

## API Endpoints

- `POST /api/instagram/webhook` - Instagram webhook for receiving messages
- `GET /api/instagram/webhook` - Webhook verification

## Database Schema

The application uses the following main models:

- **User** - Application users and team members
- **Workspace** - Organization/business workspaces
- **InstagramAccount** - Connected Instagram business accounts
- **Contact** - Instagram users who interact with your business
- **Conversation** - Message threads with contacts
- **Message** - Individual messages in conversations
- **Flow** - Automation flows and rules

## Instagram Integration

To connect Instagram:

1. Create a Facebook App and Instagram Basic Display product
2. Set up Instagram Business Account
3. Configure webhook URL: `https://yourdomain.com/api/instagram/webhook`
4. Add webhook subscriptions for `messages`

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License.
