import { prismaclent } from "../lib/db";


export interface CreatePostPayload {
    title : string,
    content : string
}

class PostServices{

    public static  async getallPost(){
        const posts = await prismaclent.post.findMany({
            include :{
                user : true
            }
        });
        return posts
    }

    public static async createPostuser(payload: CreatePostPayload , userid :number){
        const { title , content} = payload;
        console.log("userid :" , userid)
        
        const post = await prismaclent.post.create({
            data :{
                userid : Number(userid),
                title,
                content
            }
          
        })

        return post;
    }

    
}


export default PostServices;