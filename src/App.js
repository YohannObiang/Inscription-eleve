import './App.css';
import Tableau from './tableau/tableau';
import React, { Component } from 'react';
import Forms from './form/Studentform';
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
        {/* <Form/> */}

        <Forms Students = {Students} setStudents={setStudents}/>


      <Tableau Students = {Students} setStudents={setStudents}/>
    </div>
  );
}

export default App;