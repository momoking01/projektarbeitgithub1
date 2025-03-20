import express from "express";
import fs from "fs";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import compression from 'compression';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;
const ordersFile = path.join(__dirname, "orders.json");

const allowedOrigins = [
    "https://momoking01.github.io",
    "https://projektarbeitgithub1.onrender.com",
    "http://localhost:4321" // Lokales Testen erlauben
];

app.use(compression());
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

// Sicherstellen, dass orders.json existiert
if (!fs.existsSync(ordersFile)) {
    fs.writeFileSync(ordersFile, "[]", "utf8");
    console.log("✅ Created missing orders.json file.");
}

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

// 📌 Bestellhistorie abrufen (mit Logging)
app.get("/orders", (req, res) => {
    console.log("📥 GET request to /orders received");
    fs.readFile(ordersFile, "utf8", (err, data) => {
        if (err) {
            console.error("❌ Error reading orders file:", err);
            return res.status(500).json({ error: "Error reading orders file." });
        }
        try {
            console.log("📤 Sending orders data:", data);
            res.json(JSON.parse(data || "[]"));
        } catch (parseErr) {
            console.error("❌ JSON Parse Error:", parseErr);
            return res.status(500).json({ error: "Invalid JSON format in orders file." });
        }
    });
});

// 📌 Neue Bestellung speichern (mit Logging)
app.post("/orders", (req, res) => {
    console.log("📥 POST request to /orders received with body:", req.body);
    const newOrder = req.body;

    if (!newOrder || !newOrder.items || newOrder.items.length === 0) {
        console.error("❌ Invalid order format received:", req.body);
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