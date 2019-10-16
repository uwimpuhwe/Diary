import express from 'express';
//import router from './server/routes/items';
import router from './routes/items';
import bodyParser from 'body-parser';
const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

const PORT = process.env.PORT || 4001;

app.use('/', router);
app.get('/', (req, res) => {
  return res.status(200).json({
      status: 200,
      message: 'Welcome to myDiary '
  });
});

app.listen(PORT, function() {
    console.log(`server is running on PORT ${PORT}`);
});

export default app;


