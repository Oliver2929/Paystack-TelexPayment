import express, { Application } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { getIntegrationJson } from "./config/telex-config";
import paystackRoutes from "./routes/paystackRoute";

const app: Application = express();

app.use(cors());

app.use(bodyParser.json());

app.use("/paystack", paystackRoutes);

app.get("/integration.json", getIntegrationJson);

app.use((err: any, req: any, res: any, next: any) => {
  console.error(err.stack);
  res.status(500).send({ message: "Something went wrong!" });
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
