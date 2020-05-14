import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks'
import './App.css';
import client from './Client.js'
import CommandList from './component/CommentList'

function App() {
  console.log("App")
  return (
    <div className="App">
    <ApolloProvider client={client}>
      <CommandList/>
    </ApolloProvider>
    </div>
  );
}

export default App;
