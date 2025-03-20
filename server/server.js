import express from "express";
import fs from "fs";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000; // Falls Render einen Port setzt, nutze diesen
const ordersFile = path.join(__dirname, "orders.json");

const allowedOrigins = [
    "https://momoking01.github.io",
    "https://projektarbeitgithub1.onrender.com"
];

app.use(express.json());
app.use(
    cors({
        origin: function (origin, callback) {
            if (!origin || allowedOrigins.includes(origin)) {
                callback(null, true);
            } else {
                callback(new Error("Not allowed by CORS"));
            }
        },
        methods: ["GET", "POST"],
        allowedHeaders: ["Content-Type"],
    })
);

// Startseite für Debugging
app.get("/", (req, res) => {
    res.send("✅ Server is running! Access API at /orders");
});

// 📌 Bestellhistorie abrufen
app.get("/orders", (req, res) => {
    fs.readFile(ordersFile, "utf8", (err, data) => {
        if (err) {
            console.error("❌ Error reading orders file:", err);
            return res.status(500).json({ error: "Error reading orders file." });
        }
        try {
            res.json(JSON.parse(data || "[]"));
        } catch (parseErr) {
            console.error("❌ JSON Parse Error:", parseErr);
            return res.status(500).json({ error: "Invalid JSON format in orders file." });
        }
    });
});

// 📌 Neue Bestellung speichern
app.post("/orders", (req, res) => {
    const newOrder = req.body;

    if (!newOrder || !newOrder.items || newOrder.items.length === 0) {
        return res.status(400).json({ error: "Invalid order format." });
    }

    fs.readFile(ordersFile, "utf8", (err, data) => {
        let orders = [];
        if (!err && data) {
            try {
                orders = JSON.parse(data || "[]");
            } catch (parseErr) {
                console.error("❌ JSON Parse Error:", parseErr);
                return res.status(500).json({ error: "Invalid JSON format in orders file." });
            }
        }

        orders.push(newOrder);

        fs.writeFile(ordersFile, JSON.stringify(orders, null, 2), (err) => {
            if (err) {
                console.error("❌ Error saving order:", err);
                return res.status(500).json({ error: "Error saving order." });
            }
            console.log("✅ New order saved:", newOrder);
            res.json({ message: "Order saved successfully!" });
        });
    });
});

// 📌 Server starten
app.listen(PORT, () => {
    console.log(`✅ Server running on http://localhost:${PORT}`);
    console.log(`✅ API is available at http://localhost:${PORT}/orders`);
});
