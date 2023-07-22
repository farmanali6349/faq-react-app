import React from 'react';
import './App.css';
import SingleQuestion from './components/Questions';
import data from './components/data'
import questions from './components/Questions';
function App() {
  return (
    <main>
      <div className="Container">
        <h2>FAQ</h2>
        {data.map((question) => {
          return <SingleQuestion title={question.title} info={question.info}/>
        })}
      </div>
    </main>
  );
}

export default App;
