export default (sequelize, Sequelize) => {
  const Buku = sequelize.define("Buku", {
    uuid: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    judul: {
      type: Sequelize.STRING,
    },
    penulis: {
      type: Sequelize.STRING,
    },
    penerbit: {
      type: Sequelize.STRING,
    },
    tahun_terbit: {
      type: Sequelize.DATE,
    },
  });
  return Buku;
};
