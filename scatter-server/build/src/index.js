"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.listen(3333, () => {
    console.log(`scatter is live`);
});
exports.default = app;
//# sourceMappingURL=index.js.map