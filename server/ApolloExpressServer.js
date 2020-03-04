const express = require ('express');
const bodyParser = require ('body-parser');
const {ApolloServer, gql} = require ('apollo-server-express');
const app = express ();

const typeDefs = gql`
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

const books = [
  {
    title: 'Harry Potter and the Chamber of Secrets',
    author: 'J.K. Rowling',
  },
  {
    title: 'Jurassic Park',
    author: 'Michael Crichton',
  },
];

const resolvers = {
  Query: {
    books: () => books,
  },
};


app.use (bodyParser.urlencoded ({extended: false}));

app.use (bodyParser.json ());

app.get('/', function (req, res) {
  res.send(JSON.stringify(req.body, null, 2))
  res.end(JSON.stringify(req.body, null, 2))
})

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

const server = new ApolloServer ({
   typeDefs, resolvers 
});
server.applyMiddleware ({app, path: '/graphql'});

app.listen ({port: 5000}, () => {
  console.log ('🚀  Server ready at 5000');
});
