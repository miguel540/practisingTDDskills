import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { getTodosLosPaises, getRegion, getPais,getPaisesIndependientes}
from './controllers/paisController';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(cors());
app.use(express.json());

app.get('/api/all', getTodosLosPaises);
app.get('/api/region/:regionSolicitada', getRegion);
app.get('/api/pais/:paisSolicitado', getPais);
app.get('/api/sonindependientes/:esIndependiente', getPaisesIndependientes);

app.listen(port, () => {
  console.log('Servidor en ejecución en puerto ' + port);
});

