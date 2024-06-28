import { ApolloServer  } from '@apollo/server';
import { user } from './user/index';
import  {post} from "./post/index"


async function creategraphqlserver(){

    const server = new ApolloServer({
        typeDefs:`

         ${user.typeDefs}

         ${post.typeDefs}

       type Query{
        ${user.queries}

        ${post.queries}

        getcontext : String 

       }

       type Mutation { 
               
            ${user.mutatsion}
            
            ${post.mutatsion}
       }
        `,

        resolvers: {
            Query :{
                ...user.resolvers.queries,
                ...post.resolvers.queries,
                getcontext : (parent : any , parameters : any,
                    context : any
                ) =>{
                    console.log(context)
                    return `${context.user.id}`
                }
                
            },
            Mutation :{
                ...user.resolvers.mutatsion,
                ...post.resolvers.mutatsion

            }
            
        },
    });


    await server.start();

    return server;
}


export default creategraphqlserver;

