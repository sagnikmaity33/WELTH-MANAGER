# Full Stack AI Finance Platform with Next JS, Supabase, Tailwind, Prisma, Inngest, ArcJet, Shadcn UI Tutorial 


A full-stack finance management platform designed to help you track your monthly expenses, manage budgets, and gain insights into your financial trends. This platform leverages AI and modern web technologies to provide a seamless and intelligent user experience.


**Website:** [WELTH-MANAGER](https://welth-manager.vercel.app/)


## Features

- **Transaction Management**: Add, edit, and delete transactions with filtering and sorting options.
- **Expense Tracking**: Visualize your expenses with detailed pie charts and trends.
- **AI Receipt Scanner**: Automatically extract data from receipts using advanced AI technology.
- **Budget Alerts**: Get notified when you're nearing your budget limits.
- **Monthly Reports**: Receive detailed financial reports via email, powered by Inngest.
- **Dashboards**: Interactive dashboards to monitor income, expenses, and financial health.
- **Expense Breakdown**: Categorized expense insights with pie charts for better understanding.

## Tech Stack

- **Frontend**: [Next.js](https://nextjs.org/) for server-side rendering and a modern React-based UI.
- **Database**: [PostgreSQL](https://www.postgresql.org/) for reliable and scalable data storage.
- **API**: [Inngest](https://www.inngest.com/) for event-driven workflows and automation.
- **Authentication**: [Clerk](https://clerk.dev/) for secure and seamless user authentication.
- **AI Integration**: [Gemini AI](https://ai.google/) for receipt scanning and financial insights.
- **Bot Detection**: [ArcJet](https://arcjet.com/) for advanced bot protection.
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) for a responsive and modern design.

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.
- PostgreSQL database set up and running.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/finance-management-platform.git
   cd finance-management-platform
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up the environment variables:
   Create a `.env` file in the root directory and add the following variables:
   ```
   DATABASE_URL=
   DIRECT_URL=

   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
   CLERK_SECRET_KEY=
   NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
   NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/onboarding
   NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/onboarding

   GEMINI_API_KEY=
   RESEND_API_KEY=
   ARCJET_KEY=
   ```

4. Run database migrations:
   ```bash
   npx prisma migrate dev
   ```

5. Start the development server:
   ```bash
   npm run dev
   ```

### Scripts

- `npm run dev`: Start the development server.
- `npm run build`: Build the application for production.
- `npm run start`: Start the production server.
- `npm run lint`: Run linting checks.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for review.

## License

This project is licensed under the [MIT License](LICENSE).

---


**Website made by [Sagnik Maity](https://github.com/sagnikmaity33).**

## Acknowledgments

- [Next.js](https://nextjs.org/)
- [PostgreSQL](https://www.postgresql.org/)
- [Inngest](https://www.inngest.com/)
- [Clerk](https://clerk.dev/)
- [Gemini AI](https://ai.google/)
- [ArcJet](https://arcjet.com/)
- [Tailwind CSS](https://tailwindcss.com/)
