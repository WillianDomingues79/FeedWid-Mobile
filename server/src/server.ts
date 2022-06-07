import express from 'express'
import { routes } from './routes';
const cors  =require('cors')

const app = express();

const port = 3001;

app.use(cors());
app.use(express.json());
app.use(routes);


var corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.listen(port, cors(corsOptions), () => {
  console.log("Servidor rodando ..")
})