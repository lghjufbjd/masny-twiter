import './styles/cssreset.css';
import './styles/App.css';
import Nav from './components/Nav.js'
import Main from './components/Main.js'
import NewPostDialog from './components/NewPostDialog.js'

import React from 'react';


function App() {
  return (
        <React.Fragment>
          <Nav></Nav>
          <Main></Main>
          <NewPostDialog></NewPostDialog>
        </React.Fragment>
  );
}

export default App;
