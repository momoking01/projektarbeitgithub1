import express from "express";
import fs from "fs";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 5000;
const ordersFile = path.join(__dirname, "orders.json");

app.use(express.json());
app.use(cors());

// Standard-Route für die Root-URL
app.get("/", (req, res) => {
    res.send("Server is running!");
});

// Bestellungen abrufen
app.get("/orders", (req, res) => {
    fs.readFile(ordersFile, "utf8", (err, data) => {
        if (err) {
            return res.status(500).json({ error: "Error reading orders file." });
        }
        res.json(JSON.parse(data || "[]"));
    });
});

// Neue Bestellung hinzufügen
app.post("/orders", (req, res) => {
    const newOrder = req.body;

    fs.readFile(ordersFile, "utf8", (err, data) => {
        let orders = [];
        if (!err && data) {
            orders = JSON.parse(data || "[]");
        }

        orders.push(newOrder);

        fs.writeFile(ordersFile, JSON.stringify(orders, null, 2), (err) => {
            if (err) {
                return res.status(500).json({ error: "Error saving order." });
            }
            res.json({ message: "Order saved successfully!" });
        });
    });
});

// Server starten
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
