"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const backend_1 = require("./api/backend");
const app = (0, express_1.default)();
const PORT = 8080;
app.use("/api/v1", backend_1.userRouter);
app.listen(PORT, () => {
    console.log(`Server iss up & running on Port ${PORT}`);
});
