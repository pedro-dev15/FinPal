import express from "express";

const app = express();
const PORT = process.env.PORT;

// Middleware setup
app.use(cors());

// Routes setup
app.use("/api", routes);

//Listen port
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
