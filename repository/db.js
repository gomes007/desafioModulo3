import Sequelize from 'sequelize';

const sequelize = new Sequelize('petshop', 'root', 'admin', {
  host: 'localhost',
  dialect: 'mysql',
  define: {
    timestamps: false
  }
});


sequelize.sync({ alter: true }).then(() => {
  console.log('Estrutura do banco de dados sincronizadas.');
}).catch((error) => {
  console.log('Erro ao sincronizar a estrutura do banco de dados.', error);
});

export default sequelize;




