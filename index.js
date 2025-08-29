import express from "express"
import noteRouter from "./routes/noteRoutes.js";
import sequelize from "./config/db.js";

const app=express();
const PORT=5000;

app.use(express.json());  

app.use("/",noteRouter);

app.use("/",(req,res)=>{

  res.send("something went wrong route not defined")
})

sequelize.sync({force:false}).then(
  ()=>{
    console.log("connected to sql db");
    app.listen(PORT,()=>{
      console.log("Listening at port",PORT);
    })
  }
)
.catch((err)=>console.log("Error ",err.message));
