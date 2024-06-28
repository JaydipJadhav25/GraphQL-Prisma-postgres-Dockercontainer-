import { ApolloServer  } from '@apollo/server';
import { user } from './user/index';


async function creategraphqlserver(){

    const server = new ApolloServer({
        typeDefs:`
        
         ${user.typeDefs}

       type Query{
        ${user.queries}
       }

       type Mutation { 
               
            ${user.mutatsion}
       }
        `,

        resolvers: {
            Query :{
                ...user.resolvers.queries
            },
            Mutation :{
                ...user.resolvers.mutatsion
            }
            
        },
    });


    await server.start();

    return server;
}


export default creategraphqlserver;

