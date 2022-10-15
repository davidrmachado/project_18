const app = require('./app');
require('dotenv').config();

// não altere esse arquivo, essa estrutura é necessária para a avaliação do projeto

app.listen(process.env.PORT, () => {
  console.log(`Escutando na porta ${process.env.PORT}`);
});
