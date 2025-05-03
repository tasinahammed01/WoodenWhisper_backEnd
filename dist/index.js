"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const routes_1 = __importDefault(require("./routes/routes"));
dotenv_1.default.config(); // 👉 and call this early
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;
// Middleware
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// Routes
app.use('/', routes_1.default);
mongoose_1.default.connect(MONGO_URI)
    .then(() => {
    console.log('MongoDB Connected');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
})
    .catch((err) => console.error('MongoDB connection error:', err));
