export default (sequelize, Sequelize) => {
  const KategoriBuku = sequelize.define("KategoriBuku", {
    uuid: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    bookId: {
      type: Sequelize.UUID,
    },
    kategoriId: {
      type: Sequelize.UUID,
    },
  });
  return KategoriBuku;
};
