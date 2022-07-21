import React from 'react';
import './App.css';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import BookList from './components/BookList';

//apollo client setup
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
})

function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <h3>Fetching Data from GraphQl</h3>
        <BookList/>
      </div>
    </ApolloProvider>
  );
}

export default App;
