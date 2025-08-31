import express from 'express'
import * as handlebars from 'handlebars'

const app = express();

app.set('views', './views');
app.set('view engine', 'handlebars');

app.engine('handlebars', handlebars.compile);

app.get('/', async (req, res) => {
  app.render('index', { name: 'John Doe' });
})

app.listen(3000, () => console.log('Listening on port 3000'))