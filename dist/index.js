"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const paisController_1 = require("./controllers/paisController");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.use(express_1.default.static('public'));
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.get('/api/all', paisController_1.getTodosLosPaises);
app.get('/api/region/:regionSolicitada', paisController_1.getRegion);
app.get('/api/pais/:paisSolicitado', paisController_1.getPais);
app.get('/api/sonindependientes/:esIndependiente', paisController_1.getPaisesIndependientes);
app.listen(port, () => {
    console.log('Servidor en ejecución en puerto ' + port);
});
//# sourceMappingURL=index.js.map