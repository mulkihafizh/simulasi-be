export default (sequelize, Sequelize) => {
  const User = sequelize.define("User", {
    uuid: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    username: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
    },
    password: {
      type: Sequelize.STRING,
    },
    nama_lengkap: {
      type: Sequelize.STRING,
    },
    alamat: {
      type: Sequelize.TEXT,
    },
  });
  return User;
};
