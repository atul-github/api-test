import express from 'express';
const app = express();

app.get('/', (req, res) => {
  res.send(`Hello World!`);
});

const port = parseInt(process.env.PORT) || 3001;
app.listen(port, () => {
  console.log(`helloworld: listening on port ${port}`);
});
