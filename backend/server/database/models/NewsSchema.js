import mongoose from "mongoose";

const NewsSchema = new mongoose.Schema({
    subject: {
        type: String,
        required: "Subject is required",
    },
    editor: {
        type: String,
        required: "Editor is required",
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    imageUrl: {
        type: String,
        required: "Image URL is required",
    },
    content: {
        type: String,
        required: "Content is required",
    },
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Comment",
        },
    ],
});

const model = mongoose.model("News", NewsSchema);

export default model;
