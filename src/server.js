require('dotenv').config();
const express = require('express');
const connectDb = require('./db/connection');
const bookRouter = require('./routers/bookRoutes');
const app = express();
const port = process.env.PORT || 3000;

connectDb();
app.use(
	express.urlencoded({
		extended: true,
	}),
);
app.use(express.json());
app.use('/books', bookRouter);

app.listen(port, () => {
	console.log(`Server started on ${port}`);
});
