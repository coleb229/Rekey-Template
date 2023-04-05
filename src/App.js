import './App.css';
import { useState } from 'react';
import { CSVLink } from 'react-csv';
import RekeyForm from './components/RekeyForm.js';
import Output from './components/Output';

function App() {
  const [rekeyState, setRekeyState] = useState({
    ref: '',
    date: '',
    auth: '',
    four: '',
    amount: '',
    tip: '',
  });

  const headers = [
    { label: 'Ref#', key: 'ref' },
    { label: 'Date', key: 'date' },
    { label: 'Auth Code', key: 'auth' },
    { label: 'Last 4', key: 'four' },
    { label: 'Amount', key: 'amount' },
    { label: 'Tip', key: 'tip' },
  ];

  let transactionList = [];

  const updateList = (formData) => {
    transactionList.push(formData);
    console.log(transactionList);
  };

  const updateRekeyState = (formData) => {
    setRekeyState(formData);
  };

  return (
    <div className='App flex h-screen bg-amber-400'>
      <div className='w-full my-auto'>
        <Output formData={rekeyState} />
        <RekeyForm
          formState={rekeyState}
          updateFormState={setRekeyState}
          updateList={updateList}
        />
      </div>
      <div className='h-full'>
        {transactionList.map((x) => {
          return <Output formData={x} />;
        })}
      </div>
    </div>
  );
}

export default App;
