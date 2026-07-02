import "dotenv/config";
import { app } from "./app.js";
import { PORT } from "./src/utils/env.js";
import { connectDb } from "./src/config/db.js";

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Backend is running successfully 🚀",
  });
});

const startServer = async () => {
  await connectDb();
};

await startServer()
  .then(() => {
    app.listen(PORT, () => {
      console.log("App running at port : ", PORT);
    });
  })
  .catch((err) => {
    console.log("server running failed", err);
  });
