import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import * as express from "express";
import * as cors from "cors";

admin.initializeApp();
const db = admin.firestore();

const app = express();
app.use(cors({ origin: true }));

// Get all products
app.get("/products", async (req, res) => {
    const snapshot = await db.collection("products").get();
    const products:any[] = [];
    snapshot.forEach((doc) => {
        products.push({ id: doc.id, ...doc.data() });
    });
    res.status(200).send(products);
});

// Get a single product
app.get("/products/:id", async (req, res) => {
    const doc = await db.collection("products").doc(req.params.id).get();
    if (!doc.exists) {
        res.status(404).send("Product not found");
    } else {res.status(200).send({ id: doc.id, ...doc.data() });}
});

// Add a new product
app.post("/products", async (req, res) => {
    const product = req.body;
    const result = await db.collection("products").add(product);
    res.status(201).send({ id: result.id });
});

// Update a product
app.put("/products/:id", async (req, res) => {
    const product = req.body;
    await db.collection("products").doc(req.params.id).update(product);
    res.status(200).send();
});

// Delete a product
app.delete("/products/:id", async (req, res) => {
    await db.collection("products").doc(req.params.id).delete();
    res.status(200).send();
});

exports.api = functions.https.onRequest(app);
