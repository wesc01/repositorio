import express from 'express';
import mongoose from 'mongoose';
import { urlencoded } from 'express';
import dirname from 'path';
import { fileURLToPath } from 'url';
import path from 'path';
import userRouter from './routers/users.js';
const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));
// middleware
app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
// view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs , html');
// static files
https://github.com/wesc01/repositorio.git
// mongoosee 

mongoose.connect('mongodb://localhost:27017/express', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// rotas 

app.get('/', (req, res) => {
  res.sendFile('index.html', { root: path.join(__dirname, 'public') });
})

app.use('/users', userRouter);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
}
);