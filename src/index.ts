import express  from "express";
import {expressMiddleware} from "@apollo/server/express4"
import creategraphqlserver from "./graphql/server";



async function init(){
  
    const app =  express();
app.use(express.json({
    limit :"20kb"
}));


 
app.get("/" , (req, res) =>{
    return res.send("hello world");
})


//root graphql server
const server = await creategraphqlserver();
app.use("/graphql" , expressMiddleware(server));

app.listen(3000, () => console.log("🚀  Server ready at: 3000"))

}

init();