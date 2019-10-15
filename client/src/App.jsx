import React from 'react';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';

//components
import BookList from './components/bookList';

//Apollo Client setup

const client = new ApolloClient({
  uri: 'htpp://localhost:4000/graphql'
})

function App() {
  return (
    <ApolloProvider client={client}>
    <div id ="main">
      <h1>Reading List</h1>
      <BookList/>
    </div>
    </ApolloProvider>
  );
}

export default App;
