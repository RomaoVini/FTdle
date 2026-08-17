import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());

// TODO: configurar somente os domínios permitidos
app.use(cors());

app.get("/ping", (_req, res) => res.json({ message: "pong" }));

export { app };