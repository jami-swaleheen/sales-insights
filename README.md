# Sales Insights API

A RESTful API built with **Express.js** and **TypeScript** that processes sales data and generates actionable insights using AI integration.

## Features

- Process sales data and calculate key metrics.
- Generate AI-powered insights using OpenAI.
- RESTful API endpoints.
- Input validation and error handling.
- Docker support for easy deployment.

## Prerequisites

- **Node.js** (v14 or higher)
- **npm** or **yarn**
- **Docker** (optional)
- **OpenAI API Key** (for AI-powered insights)

## Setup

### 1. Clone the repository:

```bash
git clone <repository-url>
cd sales-insights
```

### 2. Install dependencies:

```bash
npm install
```

### 3. Set up environment variables:

Create a .env file in the project root and add:

```env
PORT=3000
OPENAI_API_KEY=your_api_key_here
```

### 4. Run the development server:

```bash
npm run dev
```

### 5. Build and start for production:

```bash
npm run build
npm start
```

### 6. Run with Docker (Optional):

Build the Docker image:

```bash
docker build -t sales-insights-api .
```

Run the Docker container:

```bash
docker run -p 3000:3000 --env-file .env sales-insights-api
API Endpoints
POST /sales/insights
Request Body:
json
{
  "sales": [
    {
      "id": "string",
      "productCategory": "string",
      "amount": number,
      "date": "string"
    }
  ]
}
Response:
json
{
  "analytics": {
    "bestPerformingCategory": "string",
    "totalSales": number,
    "averageTransactionValue": number,
    "salesByCategory": {
      "category": number
    }
  },
  "aiSummary": "string"
}
Project Structure
pgsql
sales-insights-api/
├── src/
│   ├── controllers/
│   ├── services/
│   ├── models/
│   ├── validators/
│   ├── types/
│   └── app.ts
├── dist/
├── .env
├── .gitignore
├── package.json
├── tsconfig.json
└── Dockerfile
Testing
Run tests using:

```bash
npm test
```

Security Considerations

DO NOT commit your OpenAI API key to the repository.

Use environment variables or a secure secrets management method to store API keys.
Implement rate limiting and input validation to prevent abuse.
Contributing
Fork the repository.
Create a new branch: git checkout -b feature-branch
Commit your changes: git commit -m "Add feature"
Push to the branch: git push origin feature-branch
Open a Pull Request.
