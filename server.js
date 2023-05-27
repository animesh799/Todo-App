import { app } from "./app.js";
import { connectDb } from "./Data/database.js";

connectDb();

app.listen(process.env.PORT, () => {
  console.log(`Server is working on port:${process.env.PORT} in ${process.env.NODE_ENV} Mode`);
});