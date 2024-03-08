export default (sequelize, Sequelize) => {
  const Kategori = sequelize.define("Kategori", {
    uuid: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    nama: {
      type: Sequelize.STRING,
    },
  });
  return Kategori;
};
