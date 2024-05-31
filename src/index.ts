import express, { Express, Request, Response } from 'express';
import log from 'npmlog';
import http from 'http';
import cors from 'cors';
import formData from 'express-form-data';
import routes from './routes/index';
import Database from './db/index'

const app: Express = express();
const server = http.createServer(app);
const port = 5000

const database = new Database();

database.syncModels()
  .then(() => {
    console.log("Models synchronized successfully.");
  })
  .catch((err) => {
    console.error("Error synchronizing models:", err);
  });

app.use(
  cors({
    origin: '*'
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(formData.format());
app.use(formData.stream());
app.use(formData.union());

app.use('/api', routes);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello!');
});

app.get('*', (req: Request, res: Response) => {
  res.status(404).json({ message: 'Route not found.' });
});

server.listen(port, () => {
  log.info('⚡️[server]: Server Started',`Example app listening at http://localhost:${port}`);
})

export default server
