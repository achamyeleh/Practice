import { ApolloProvider } from '@apollo/react-hooks';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import fetch from 'isomorphic-unfetch';
import React from 'react';
import ReactDOM from 'react-dom';
import App, { BasicExample } from './App';
import './index.css';
// const gql = require('graphql-tag')

// const US = gql`
// {
//   userGet(id:3){
//     firstName
//     lastName
//     isActive
//   }
// }
// `

const cache = new InMemoryCache()
  const link = new HttpLink({
    fetch,
    uri: 'http://localhost:5000/graphql'
  })
  const client = new ApolloClient({
    cache: cache,
    link: link,
    // queryDeduplication: false,
    // defaultOptions: {
    //   watchQuery: {
    //     fetchPolicy: 'cache-and-network'
    //   }
    // }
  })

// try {
// client.query({
//   query: US
// }).then(res =>console.log('result ====',res.data.userGet))
// } catch (e) {
//   throw new Error('error while trying to fetch')
// }

const Appp = ()=>{
  return (
  <div>
    <ApolloProvider client={client}>
    <BasicExample/>
    <App />
    </ApolloProvider>
  </div>
 )
}

ReactDOM.render(<Appp />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// ServiceWorker.unregister();
