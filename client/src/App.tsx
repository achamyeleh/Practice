import { ApolloProvider } from '@apollo/react-hooks';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import fetch from 'isomorphic-unfetch';
import React from 'react';
import { Provider } from 'react-redux';
import 'semantic-ui-css/semantic.min.css';
import './App.css';
import Counter from './components/Counter';
import Footer from './components/footer';
import Header from './components/header';
import state from './redux/store';
const cache = new InMemoryCache()
  const link = new HttpLink({
    fetch,
    uri: 'http://localhost:5000/graphql' 
  })

  const client = new ApolloClient({
    cache: cache,
    link: link,
  })


const App = () => {
  return (
    <ApolloProvider client={client}>
      <Provider store={state}>
      <Header mobile={false} />
      <Counter />
      <Footer mobile={false} />
      </Provider>
    </ApolloProvider>

  );
}
export default App



