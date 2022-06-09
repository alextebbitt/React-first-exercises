import {Person} from './components/Person/Person';

import './App.css';




function App() {

  const persons =
    [{
      name: 'alex',
      surname: 'smith,',
      age: 4
    },
    {
      name: 'john',
      surname: 'smith,',
      age: 6
    },
    {
      name: 'steve',
      surname: 'smith,',
      age: 7
    }
    ]

  return (
    <div className="App">
      <Person persons = {persons} />
    </div>
  );
}

export default App;
