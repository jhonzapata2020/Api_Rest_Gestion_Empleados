const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
const { mongoose } = require('./database');

app.set('port', process.env.PORT || 3000);
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({ origin: 'http://localhost:4200' }));

app.use('/api/usuarios', require('./routes/usuario.routes'));

app.listen(app.get('port'), () => {
  console.log('Servidor activo en el puerto', app.get('port'));
});
