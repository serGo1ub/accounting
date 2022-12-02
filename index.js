const express = require('express');
const cors = require('cors');
const accountantRouter = require('./routes/accountant.routes');
const reportRouter = require('./routes/report.routes');

const PORT = process.env.PORT || 8080;

const app = express();
app.use(cors())
app.use(express.json());

app.use('/api', accountantRouter);
app.use('/api', reportRouter);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
