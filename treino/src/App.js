import React from 'react';

import { NavBar } from './components/navbar/NavBar';

import Form from './components/form/Form';

import './styles/App.scss'
import { ExtractionList } from './components/list/ExtractionList';
import ExtractionProvider from './components/context/ExtractionContext';

function App() {

  return (
    <ExtractionProvider>
    <div className="App">
      <NavBar/>

      {/* Preenchimento de dados */}
      <section className='Form'>
      <Form/>
      </section>
      <section className='List_Extraction'>
        <ExtractionList/>
      </section>


    </div>
    </ExtractionProvider>
  );
}

export default App;
