import { ApolloServer  } from '@apollo/server';

async function creategraphqlserver(){

    const server = new ApolloServer({
        typeDefs:`
        type Query{
        hello:String
        }
        `,
        resolvers: {
            Query :{
                hello : () => `hello from graphQl server`
            }
        },
    });


    await server.start();

    return server;
}


export default creategraphqlserver;

