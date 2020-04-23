import React from 'react';
import './App.css';
import HobbyList from './component/exercise1/HobbyList';
import Counter from './component/exercise3/Counter';
import GuaranteeItem from './component/exercise2/GuranteeItem';

function App() {
  return (
    <div className='App'>
      <HobbyList />
      
      <GuaranteeItem />
      
      <Counter />
    </div>
  );
}

export default App;

