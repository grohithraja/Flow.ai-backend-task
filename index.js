const express = require('express');
const db = require('./db/database');
const app = express();
const port = 3000;

app.use(express.json());

// Routes for Transactions
const transactionRoutes = require('./routes/transactions');
app.use('/transactions', transactionRoutes);

// Routes for Summary
const summaryRoutes = require('./routes/summary');
app.use('/summary', summaryRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
