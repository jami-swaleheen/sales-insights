
# Sales Insights API

A RESTful API built with **Express.js** and **TypeScript** that processes sales data and generates actionable insights using AI integration.


## Features
- Process sales data and calculate key metrics.
- Generate AI-powered insights using OpenAI.
- RESTful API endpoints.
- Input validation and error handling.
- Docker support for easy deployment.

  
## Prerequisites
-  **Node.js** (v14 or higher)
-  **npm** or **yarn**
-  **Docker** (optional)
-  **OpenAI API Key** (for AI-powered insights)

  

## Setup

### 1. Clone the repository:

```
git  clone <repository-url>
cd  sales-insights
```

### 2. Install dependencies:

```
npm  install
```

### 3. Set up environment variables:
Create a .env file in the project root and add:

```
PORT=3000
OPENAI_API_KEY=your_api_key_here
```

### 4. Run the development server:

```
npm  run  dev
```

  

### 5. Build and start for production:

```
npm  run  build
npm  start
```

  

### 6. Run with Docker (Optional):

Build the Docker image:

  

```
docker  build  -t  sales-insights-api  .

```

  

Run the Docker container:

  

```
docker  run  -p  3000:3000  --env-file  .env  sales-insights-api
```
## API  Endpoints

POST  ```/sales/insights```

#### Request  Body:
```

{

"sales": [

{

"id":  "string",

"productCategory":  "string",

"amount":  number,

"date":  "string"

}

]

}
```
#### Response:

```

{

"analytics":  {

"bestPerformingCategory":  "string",

"totalSales":  number,

"averageTransactionValue":  number,

"salesByCategory":  {

"category":  number

}

},

"aiSummary":  "string"

}
```
##
### Project  Structure

```pgsql

sales-insights-api/

├──  src/

│  ├──  controllers/

│  ├──  services/

│  ├──  models/

│  ├──  validators/

│  ├──  types/

│  └──  app.ts

├──  dist/

├──  .env

├──  .gitignore

├──  package.json

├──  tsconfig.json

└──  Dockerfile
```
##
### Testing

Run  tests  using:

```
npm test

```