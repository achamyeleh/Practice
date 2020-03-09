import { ApolloServer } from "apollo-server-express";
import * as express from "express";
import { makeExecutableSchema } from "graphql-tools";
import 'reflect-metadata';
import { createConnection, getRepository } from "typeorm";
import { Country } from "./country";
// import { resolvers } from './api/User';
import { resol } from './src/api/index';
// import { typeDefs } from './model/index';
import { User } from "./User";
resol().then(r => {console.log('imported resolvers == ', r.resolvers, ' ==== typeDefs ===: ', r.typeDefs)
const typeDefs = r.typeDefs
const resolvers = r.resolvers
const schema = makeExecutableSchema({ typeDefs, resolvers })
// const schema = makeExecutableSchema({ typeDefs, resolvers })
const Joi = require('joi');
const cors = require('cors')


// import { typeDefs } from "./typeDefs";
// import { resolvers } from "./resolvers";
const schem = Joi.object().keys({
  firstName: Joi.string().alphanum().min(3).max(30).required()
})




const startServer = async () => {
  
  const server = new ApolloServer({ schema });

  // await createConnection();
  await createConnection({
    "name": "practice",
    "type": "postgres",
    "host": "localhost",
    "port": 5432,
    "username": "postgres",
    "password": "mysecretpassword",
    "database": "test",
    "synchronize": true,
    "entities": [User, Country]
    // "entities": [
    //   "src/entity/*.js"
    // ]
}).then(async connection => {


    const user = new User();
    user.firstName = "Abebe";
    user.lastName = "Yalew";
    user.isActive = true;
    await connection.manager.save(user);

    console.log('name of connection',connection.name)


    
    console.log("Post has been saved: ", user);
    const app = express();
    app.use(cors())
  server.applyMiddleware({ app, path: '/graphql' });
//www.localhost:5000/page/Abebe/40?tutorial=example&sort=ASC
  app.get('/page/:name/:age', async(req, res)=> {
    res.header('Access-Control-Allow-Origin', '*')
    const repository = await getRepository<User>('User', 'practice') // 'practice' is connection name
    const user = await repository.findOne({id:2})
    console.log('server is up and running', user)
    console.log('route parameter', req.params) //route parameter is mandatory
    console.log('query string', req.query) //query string is optional. i.e. you can leave it empty
    res.send('server is up and running ' + JSON.stringify(user)+ req.params.name + req.params.age) 
  })

  app.post('/pages', async(req, res)=> {
    const result = Joi.validate({ firstName:'ab*0'}, schem)
    if(result.error) {
      console.log('error')
    } else {
      console.log('no error')
    }
    // const repository = await getRepository<User>('User', 'practice') // 'practice' is connection name
    // const user = await repository.findOne({id:2})
    // console.log('server is up and running', user)
    res.send('server is up and running ' + JSON.stringify(user)) 
  })
  app.listen({ port: 5000 }, () =>
    console.log(`🚀 Server ready at http://localhost:5000${server.graphqlPath}`)
  );

}).catch(error => console.log("Error: ", error));
  
};

startServer();


})