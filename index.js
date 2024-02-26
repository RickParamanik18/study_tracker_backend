const express = require("express");
const cors = require("cors");
require("./db.config.js");
const Topic = require("./topic.model.js");

const app = express();

app.use(express.json());
app.use(cors());

app.listen(8000, () => console.log(`SERVER RUNNING ON ${8000}`));

app.get("/", (req, res) => {
    res.send("Server Running fine!!");
});

app.get("/topic", async (req, res) => {
    const { name } = res.header;
    const result = await Topic.findOne({ name });
    res.send({ status: Boolean(result), data: result });
});

app.post("/topic", async (req, res) => {
    const data = req.body;
    const topicDoc = new Topic(data);
    const result = await topicDoc.save();
    res.send({ status: Boolean(result) });
});
