export default (sequelize, Sequelize) => {
  const Ulasan = sequelize.define("Ulasan", {
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
    ulasan: {
      type: Sequelize.TEXT,
    },
    rating: {
      type: Sequelize.INTEGER,
    },
  });
  return Ulasan;
};
