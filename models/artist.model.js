import { sequelize } from "../config/db.sequelize.js";
import { Sequelize, DataTypes, Model } from "sequelize";

class ArtistModel extends Model {}

ArtistModel.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'Untitled'
    },
}, {
    sequelize,
    modelName: 'artists',
    freezeTablename: true,
    underscored: true
})

export default ArtistModel;