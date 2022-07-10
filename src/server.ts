import express from 'express';

const app = express();

app.set('port', process.env.PORT || 8000);

app.get('/', (req: any, res: any) => {
  res.send('<h1>Express erver is running!</h1>');
});

app.listen(app.get('port'), () => {
  console.log(`express running!(PORT: ${app.get('port')})`);
});
