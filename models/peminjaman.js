export default (sequelize, Sequelize) => {
  const Peminjaman = sequelize.define("Peminjaman", {
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
    tanggalPinjam: {
      type: Sequelize.DATE,
    },
    tanggalKembali: {
      type: Sequelize.DATE,
    },
    status: {
      type: Sequelize.STRING,
    },
  });
  return Peminjaman;
};
