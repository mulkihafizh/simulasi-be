export default (sequelize, Sequelize) => {
  const Koleksi = sequelize.define("Koleksi", {
    uuid: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    bookId: {
      type: Sequelize.UUID,
    },
    userId: {
      type: Sequelize.UUID,
    },
  });
  return Koleksi;
};
