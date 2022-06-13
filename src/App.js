
import './App.css';
import { useState } from 'react';

//COMPONENTS
import Navbar from './components/navbar/Navbar';
import Form from './components/form/Form';
import List from './components/cards/List';


function App() {
  const [form, setForm] = useState([])
  return (
    <div className="App">
      <Navbar/>
      <Form form={form} setForm={setForm}/>
      <div>
      <List form={form} setForm={setForm}/>
    </div>
    </div>
  );
}

export default App;
