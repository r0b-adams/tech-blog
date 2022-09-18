import express from 'express';
import controllers from './controllers';

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(controllers);

app.listen(PORT, () => console.log(`server listening on ${PORT}`));
