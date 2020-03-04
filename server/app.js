const express = require ('express');
const bodyParser = require ('body-parser');
const {ApolloServer, gql} = require ('apollo-server-express');
const query = require ('qs-middleware');
const {connect} = require ('connect');
const {Client, QueryResult, Pool} = require ('pg');
const {Entity} = require("typeorm");
const {User} = require('./User.ts');


// const {ApolloServer} = require('apollo-server')
// const { createConnection } = require('typeorm')
const {
  getConnectionManager,
  ConnectionManager,
  createConnection,
  Connection,
  getRepository,
  getConnection
} = require ('typeorm');

// import { makeExecutableSchema } from 'graphql-tools';
// const { ApolloServer, gql } = require('apollo-server')
// const connectionManager = ConnectionManager();
// const connection = connectionManager.create({
//   type: "postgres",
//   host: "localhost",
//   port: 5433,
//   username: "postgres",
//   password: "mysecretpassword",
//   database: "test"
// });
const main = async () => {
  // const connectionManager = getConnectionManager();
  const secondConnection = await createConnection({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'mysecretpassword',
    database: 'test',
    entities: [User]

  });
  const con = getConnection();
  // console.log('connection manager ==', connectionManager)
  console.log('connection manager con ==', secondConnection.options)
  // connectionManager = new ConnectionManager ();
  // const connection = await createConnection ({
  //   type: 'postgres',
  //   host: 'localhost',
  //   port: 5432,
  //   username: 'postgres',
  //   password: 'mysecretpassword',
  //   database: 'test',
  // });
  // connection
  //   .connect ()
  //   .then (async connection => {
      app = express ();
      app.use (bodyParser.urlencoded ({extended: false}));

      app.use (bodyParser.json ());

      app.get ('/', function (req, res) {
        res.send (JSON.stringify (req.body, null, 2));
        res.end (JSON.stringify (req.body, null, 2));
      });
      console.log ('yes ===');
      typeDefs = gql`
      # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.
    
      # This "Book" type defines the queryable fields for every book in our data source.
      type Book {
        title: String
        author: String
      }
    
      # The "Query" type is special: it lists all of the available queries that
      # clients can execute, along with the return type for each. In this
      # case, the "books" query returns an array of zero or more Books (defined above).
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
        typeDefs,
        resolvers,
      });
      server.applyMiddleware ({app, path: '/graphql'});
      // The `listen` method launches a web server.
      // const createe = async () => {
      // await connection.connect(); // performs connection
      //   await createConnection({
      //     type: 'postgres',
      //     url: 'postgres://test:test@localhost/test'
      // })
      app.listen ({port: 5000}, () => {
        console.log ('🚀  Server ready at 5000');
      });
    // })
    // .catch (err => {
    //   console.error (
    //     `[PostgresRepositoryService][constructor]: error connecting to db [${err}]`
    //   );
    //   process.exit (1);
    // });

  // const cache = new InMemoryCache()
  // const link = new HttpLink({
  //   fetch,
  //   uri: process.env.API_URL
  // })
  // const client = new ApolloClient({
  //   cache: cache,
  //   link: link,
  //   queryDeduplication: false,
  //   defaultOptions: {
  //     watchQuery: {
  //       fetchPolicy: 'cache-and-network'
  //     }
  //   }
  // })

  // const schema = makeExecutableSchema({typeDefs, resolvers});

  /*
app.get('/home', function (req, res) {
  res.send('this is the main home page')
})

app.get('/about', function (req, res) {
  res.send('This is about page')
})

app.post('/about', function (req, res) {
  const v = JSON.stringify(req.body)
  console.log('request =', v, req.url )
  res.send('This is about page from post')
})

app.put('/about', function (req, res) {
  const v = JSON.stringify(req.body)
  console.log('request =', v, req.url )
  res.send('This is about page from put')
})

app.delete('/about', function (req, res) {
  const v = JSON.stringify(req.body)
  console.log('request =', v, req.url )
  res.send('This is about page from delete')
})
*/

  // Construct a schema, using GraphQL schema language
  // const typeDefs = gql`
  //   type Query {
  //     hello: String
  //   }
  // `;

  // // Provide resolver functions for your schema fields
  // const resolvers = {
  //   Query: {
  //     hello: () => 'Hello world!',
  //   },
  // };

  // const server = new ApolloServer({ typeDefs, resolvers });

  // const app = connect();
  // const path = '/graphql';

  // app.use(query());
  // server.applyMiddleware({ app, path });

  // server.applyMiddleware({app})
};
main ();

// async function main() {
//   const connection = await createConnection({
//     name: "practice",
//     type: "postgres",
//     host: "localhost",
//     port: 5433,
//     username: "postgres",
//     password: "mysecretpassword",
//     database: "test"
//   })
//   const schema = await buildSchema()
//   const server = new ApolloServer({ schema })
//   await server.listen(4000)
//   console.log("Server has started!")
// }
