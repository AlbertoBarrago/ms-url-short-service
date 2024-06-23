import express, { urlencoded, json } from "express";
import dotenv from "dotenv";
import {indexRouter} from "./routes";
import {bitlyRouter} from "./routes/bitly";

dotenv.config();

const port = process.env.PORT || 8000;
const app = express();

app.use(urlencoded({ extended: true }));
app.use(json());

// Routes
app.use('/', indexRouter);
app.use('/bitly', bitlyRouter);

app.listen(port, () => {
  console.info(`Server is listening at port ${port}`);
});
