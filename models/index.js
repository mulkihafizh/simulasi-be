import Sequelize from "sequelize";
import dbConfig from "../config/db.js";
import User from "./user.js";
import Buku from "./buku.js";
import Koleksi from "./koleksi.js";
import Ulasan from "./ulasan.js";
import Kategori from "./kategori.js";
import KategoriBuku from "./kategoribuku.js";
import Peminjaman from "./peminjaman.js";

const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.username,
  dbConfig.password,
  {
    host: dbConfig.host,
    dialect: dbConfig.dialect,
    operatorsAliases: false,
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.User = User(sequelize, Sequelize);
db.Buku = Buku(sequelize, Sequelize);
db.Koleksi = Koleksi(sequelize, Sequelize);
db.Ulasan = Ulasan(sequelize, Sequelize);
db.Kategori = Kategori(sequelize, Sequelize);
db.KategoriBuku = KategoriBuku(sequelize, Sequelize);
db.Peminjaman = Peminjaman(sequelize, Sequelize);

db.Peminjaman.belongsTo(db.User, { as: "user", foreignKey: "user_id" });
db.Peminjaman.belongsTo(db.Buku, { as: "Buku", foreignKey: "Buku_id" });
db.Ulasan.belongsTo(db.User, { as: "user", foreignKey: "user_id" });

db.User.belongsToMany(db.Buku, {
  through: "Koleksi",
  as: "userKoleksi",
  foreignKey: "userId",
  otherKey: "bukuId",
});

db.Buku.belongsToMany(db.User, {
  through: "Koleksi",
  as: "bukuKoleksi",
  foreignKey: "bukuId",
  otherKey: "userId",
});

db.Buku.belongsToMany(db.Kategori, {
  through: "KategoriBuku",
  as: "kategoris",
  foreignKey: "bukuId",
  otherKey: "kategoriId",
});

db.Kategori.belongsToMany(db.Buku, {
  through: "KategoriBuku",
  as: "Bukus",
  foreignKey: "kategoriId",
  otherKey: "bukuId",
});

export default db;
