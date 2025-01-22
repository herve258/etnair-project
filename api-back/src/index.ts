import express  from "express";
import router from "./routes/users";
import logger from "./errors/logger";
import { errorHandler } from "./middlewares/errorHandler";

const app = express();
const PORT = 3000;

app.use(express.json());

app.use('/api/users',router);
app.get('/',(req, res)=>{
    res.send('Api');
})
app.use(errorHandler);
app.listen(PORT,() => logger.info(`Le serveur écoute sur le port ${PORT}`));

