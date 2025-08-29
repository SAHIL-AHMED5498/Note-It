
import { Sequelize } from "sequelize";

const sequelize=new Sequelize("database1","root","SAHIL5498",{host:"localhost",dialect:"mysql"}); //CONNECTION TO DB

export default sequelize;

