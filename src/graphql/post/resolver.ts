import PostServices, { CreatePostPayload } from "../../services/post.service";

const queries ={
    hellopost : () => `hello from post resolver`,
    getAllPost : async() => {
        const posts =  await PostServices.getallPost();
        return posts;
    }
}

const mutatsion = {
    cretesPost : async(parent :any , payload:CreatePostPayload , context:any) => {
                 console.log("context : " , context)
                 console.log(payload)
    const post = await PostServices.createPostuser(payload , context.user.id)             

      return `Post create Successfully....|| POST ID: ${post.id}||
      POST CREATEDBY : ${post.userid}`;
    }



}

export const resolvers = { queries , mutatsion};