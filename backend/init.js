import "./config/env-config";
import "./server/database/db";
import app from "./server/server.js";

const PORT = process.env.PORT;
const HOST = process.env.HOST;

const handleListening = () => {
    console.log(`Express is listening on http://${HOST}:${PORT}`);
};

app.listen(PORT, handleListening);
