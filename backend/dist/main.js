"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.get('/api/config', (req, res) => {
    // In a real app, load actual config here
    res.json({ message: 'Backend config loaded!', timestamp: new Date().toISOString() });
});
app.get('/', (req, res) => {
    res.send('Backend is running!');
});
app.get('/health', (req, res) => {
    res.status(200).send('OK');
});
app.listen(port, () => {
    console.log(`Backend server listening on port ${port}`);
});
