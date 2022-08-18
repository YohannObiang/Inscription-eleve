import './App.css';
import Tableau from './tableau/tableau';
import React from 'react';
import Form from './form/Studentform';
import HorizontalLinearStepper from './stepform';
const getDatafromLS=()=>{
  const data = localStorage.getItem('Taches');
  if(data){
    return JSON.parse(data);
  }
  else{
    return []
  }
}

function App() {
    const [Students, setStudents] = React.useState(getDatafromLS());
    localStorage.setItem('Taches',JSON.stringify(Students));
  return (
    <div className="App">
        <HorizontalLinearStepper/>
        <Form Students = {Students} setStudents={setStudents}/>


      <Tableau Students = {Students} setStudents={setStudents}/>
    </div>
  );
}

export default App;