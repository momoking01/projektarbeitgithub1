// ✅ Supabase-Version deines Express-Servers
import express from "express";
import cors from "cors";
import { createClient } from "@supabase/supabase-js";
import compression from "compression";

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ Supabase Setup
const supabaseUrl = "https://your-project.supabase.co"; // <-- Ersetzen
const supabaseKey = "your-anon-key"; // <-- Ersetzen
const supabase = createClient(supabaseUrl, supabaseKey);

const allowedOrigins = [
  "https://momoking01.github.io",
  "https://projektarbeitgithub1.onrender.com",
  "http://localhost:4321",
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
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"],
  })
);

// ✅ Startseite zum Testen
app.get("/", (req, res) => {
  res.send("Server is running with Supabase!");
});

// ✅ GET: Bestellungen abrufen
app.get("/orders", async (req, res) => {
  const { data, error } = await supabase.from("syrian-restaurant").select("*").order("created_at", { ascending: false });
  if (error) {
    console.error("❌ Error loading orders:", error.message);
    return res.status(500).json({ error: "Could not load order history." });
  }
  res.json(data);
});

// ✅ POST: Neue Bestellung speichern
app.post("/orders", async (req, res) => {
  const newOrder = req.body;

  if (!newOrder || !newOrder.items || newOrder.items.length === 0) {
    return res.status(400).json({ error: "Invalid order format." });
  }

  const { data, error } = await supabase
  .from("syrian-restaurant")
  .insert([{ 
    ...newOrder, 
    created_at: new Date().toISOString() 
  }]);

  if (error) {
    console.error("❌ Error saving order:", error.message);
    return res.status(500).json({ error: "Error saving order." });
  }
  console.log("✅ Order saved to Supabase:", data);
  res.json({ message: "Order saved successfully!" });
});

// ✅ DELETE: Alle Bestellungen löschen
app.delete("/orders", async (req, res) => {
  const { error } = await supabase.from("syrian-restaurant").delete().neq("id", -1);
  if (error) {
    console.error("❌ Error clearing orders:", error.message);
    return res.status(500).json({ error: "Error clearing orders." });
  }
  res.json({ message: "All orders have been deleted." });
});

// ✅ DELETE: Bestellung nach ID löschen
app.delete("/orders/:id", async (req, res) => {
  const { id } = req.params;
  const { error } = await supabase.from("syrian-restaurant").delete().eq("id", id);
  if (error) {
    console.error("❌ Error deleting order:", error.message);
    return res.status(500).json({ error: "Error deleting order." });
  }
  res.json({ message: `Order with ID ${id} deleted.` });
});

// ✅ PUT: Bestellung aktualisieren
app.put("/orders/:id", async (req, res) => {
  const { id } = req.params;
  const updatedOrder = req.body;

  if (!updatedOrder || !updatedOrder.items || updatedOrder.items.length === 0) {
    return res.status(400).json({ error: "Invalid order format." });
  }

  const { error } = await supabase
    .from("syrian-restaurant")
    .update({ ...updatedOrder, created_at: new Date().toISOString() })
    .eq("id", id);

  if (error) {
    console.error("❌ Error updating order:", error.message);
    return res.status(500).json({ error: "Error updating order." });
  }

  res.json({ message: `Order with ID ${id} updated.` });
});

// ✅ Start Server
app.listen(PORT, () => {
  console.log(`🚀 Supabase Server running at http://localhost:${PORT}`);
});
