const mongoose = require("mongoose");

const topicSchema = mongoose.Schema(
    {
        date: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        creator: {
            type: String,
            required: true,
        },
    },
    { timeStamps: true }
);

const Topic = mongoose.model("topic", topicSchema);
module.exports = Topic;
