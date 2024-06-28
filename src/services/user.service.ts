import { prismaclent } from "../lib/db";
import jwt from "jsonwebtoken"


export interface CreateUserPayload {
    name: string;
    email: string;
    password: string;
}

export interface GetuserPayload{
    email :string;
    password: string
}

const sectkey = "@superMan1212221";

class Userservices{

    public static decodetokem (token :string){
        return jwt.verify(token , sectkey)
    }

     private static async getuserbyemail(email:string){
        const user = await prismaclent.user.findUnique({
            where:{
                email
            }
        })
        return user;
        
     }

    public static async createuser(payload: CreateUserPayload){

        const { name , email, password} = payload
        console.log(name , email , password )

    const user = await prismaclent.user.create({
        data :{
            name,
            email,
            password
        }
    })

    if(!user) throw new Error("somthing went Wrong")

        return user;

    }
    public static async getUser(payload:GetuserPayload){
        const {email , password } = payload;

        const user = await Userservices.getuserbyemail(email);

        if(!user) throw new Error("user is not found");

        //check password

        if(user.password !== password) throw new Error("password is wrong");

           // genrete token

           const token = jwt.sign({
            id : user.id,
            name : user.name,
            email : user.email
           } ,sectkey)

           console.log("token" , token)


        return token;


    }
    public static async getAllUser(){
        const users = await prismaclent.user.findMany({
              include : {
                post :true
              }
            
        });

        return users;
    }
}


export default Userservices