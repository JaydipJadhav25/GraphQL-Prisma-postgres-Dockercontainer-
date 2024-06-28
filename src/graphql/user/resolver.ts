import Userservices, { CreateUserPayload, GetuserPayload } from "../../services/user.service";

const queries = {

    hello : () => `hello from graphQl server`,

    getUser : async( parent :any ,  payload:GetuserPayload) =>{
        console.log(payload);
     const token = await Userservices.getUser(payload);
      return ` logined user successfullt || ${token}`;   
    // return curruser;     

    },


    getAllUser : async() =>{
        const users = await Userservices.getAllUser();
        return users;

    }
    


}

const mutatsion ={

    // createuser : async(parent : any , {name , email, password }:{
    //        name:string;
    //        email:string;
    //        password :string

    // }) =>{

    //     return "Done"
    // }

    //user user services

    createuser : async(parent : any, payload: CreateUserPayload) =>{
        console.log(payload)

        const user = await Userservices.createuser(payload);
        return `User created Successfully ${user.email}`
        // return "done"
    }

  

}

export const resolvers = {queries , mutatsion};