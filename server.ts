import compression from "compression";
import express from "express";
import path from "path";

const PORT = Number.parseInt(process.env.PORT || "3000");

const app = express();

app.use(compression());
app.disable("x-powered-by");

app.use("/assets", express.static("dist/assets", { immutable: true, maxAge: "1y" }));
app.use(express.static("dist", { maxAge: "1h" }));

// SPA fallback
app.use((_, res) => {
  res.sendFile(path.join(process.cwd(), "dist/index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
