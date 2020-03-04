const express = require ('express');
const bodyParser = require ('body-parser');
const {ApolloServer, gql} = require ('apollo-server-express');
// const query = require ('qs-middleware');
const {connect} = require ('connect');
const {Client, QueryResult, Pool} = require ('pg');
// const {Entity} = require("typeorm");
const {User} = require('./model/user');
const userSchema =require("./api/schema.graphql")
const userResolver =require("./api/resolvers")
const { makeExecutableSchema } = require("graphql-tools");
const { mergeTypes } = require( "merge-graphql-schemas")

console.log(" ====== ", userSchema)
const {
  getConnectionManager,
  ConnectionManager,
  createConnection,
  Connection,
  getRepository,
  getConnection
} = require ('typeorm');
const typeDefs = mergeTypes([
  "scalar JSON",
  userSchema])
const resolvers = {Query: {
  ...userResolver.Query},
Mutation: {
  ...userResolver.Mutation
},
User: userResolver.User
}

const schema = makeExecutableSchema({ typeDefs, resolvers })


const main = async () => {
  const secondConnection = await createConnection({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'mysecretpassword',
    database: 'test2',
    entities: [User]

  });
  const con = getConnection();
  console.log('connection manager con ==', secondConnection.options)
  
      app = express ();
      app.use (bodyParser.urlencoded ({extended: false}));

      app.use (bodyParser.json ());

      app.get ('/', function (req, res) {
        res.send (JSON.stringify (req.body, null, 2));
        res.end (JSON.stringify (req.body, null, 2));
      });
      console.log ('yes ===');
      typeDefs = gql`
      
      type Book {
        title: String
        author: String
      }
    
      
      type Query {
        books: [Book]
      }
    `;

      books = [
        {
          title: 'Harry Potter and the Chamber of Secrets',
          author: 'J.K. Rowling',
        },
        {
          title: 'Jurassic Park',
          author: 'Michael Crichton',
        },
      ];

      resolvers = {
        Query: {
          books: () => books,
        },
      };

      const server = new ApolloServer ({
       schema
      });
      server.applyMiddleware ({app, path: '/graphql'});
      
      app.listen ({port: 5000}, () => {
        console.log ('🚀  Server ready at 5000');
      });

};
main ();

