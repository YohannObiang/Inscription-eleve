import logo from './logo.svg';
import './App.css';
import Formulaire from './form/form';
import Tableau from './Components/tableau/tableau';
import {useState, useEffect} from 'react';

import ReadOnly from './ReadOnly'
import React from 'react';

import Box from '@mui/material/Box';

import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';


import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
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
    

    const [Debut, setDebut] = React.useState(null);
    useEffect(() => console.log(Debut), [Debut]);

    const [Fin, setFin] = React.useState(null);
    useEffect(() => console.log(Fin), [Fin]);

    const [Statut, setStatut] = React.useState('');
    useEffect(() => console.log(Statut), [Statut]);

    const [Sexe, setSexe] = React.useState('');
    useEffect(() => console.log(Sexe), [Sexe]);


    const [Titre, setTitre] = React.useState('');
    const [Description, setDescription] = React.useState('');
    const [Birthplace, setBirthplace] = React.useState('');

    

    const [Tasks, setTasks] = React.useState(getDatafromLS());
    localStorage.setItem('Taches',JSON.stringify(Tasks))
    const Submit = () => {

      let task={
        Titre,
        Description,
        Sexe,
        Birthplace,
        Fin,
        Statut
      }
      setTasks([...Tasks,task]);
      setTitre('');
      setDescription('');
      setSexe('');
      setBirthplace('');
      setFin('');
      setStatut('');
      localStorage.setItem('Taches',JSON.stringify(Tasks))

  };
    

    const deleteTask=(Titre)=>{
      const filteredTasks=Tasks.filter((element,index)=>{
        return element.Titre !== Titre})
        setTasks(filteredTasks);
    }
    const handleChange = (event) => {setStatut(event.target.value);};
    const handleChangeSexe = (event) => {setSexe(event.target.value);};


  return (
    <div className="App">

      
      <div>
            <form>
            <br></br>
            <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 0, width: '25vw' },
                    }}
                    noValidate
                    autoComplete="off"
                    >
                    <TextField label="Nom" variant="outlined" id="titre" value = {Titre} onChange={e => setTitre(e.target.value)}/>
                </Box>
                <br></br>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 0, width: '25vw' },
                    }}
                    noValidate
                    autoComplete="off"
                    >
                    <TextField label="Prénom" variant="outlined" id="description" value = {Description} onChange={e => setDescription(e.target.value)} />
                </Box>
                
                <br></br>
                <div  className='date'>
                <Box sx={{m:0, width: "25vw" }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Classe</InputLabel>
                        <Select

                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={Sexe}
                        label="Sexe"
                        onChange={handleChangeSexe}>
                        
                        <MenuItem value="Masculin">Masculin</MenuItem>
                        <MenuItem value="Féminin">Féminin</MenuItem>
                  
                        </Select>
                    </FormControl>
                </Box>                <br></br>
                <div className='inputedate'>
                <input type= "date"  label="Date-fin" variant="outlined" id="fin" value = {Fin} onChange={e => setFin(e.target.value)}></input>    
</div>
                </div>
                <br></br>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 0, width: '25vw' },
                    }}
                    noValidate
                    autoComplete="off"
                    >
                    <TextField label="Lieu de naissance" variant="outlined" id="birthplace" value = {Birthplace} onChange={e => setBirthplace(e.target.value)} />
                </Box>
                <br></br>
                <Box sx={{m:0, width: "25vw" }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Classe</InputLabel>
                        <Select

                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={Statut}
                        label="Age"
                        onChange={handleChange}>
                        
                        <MenuItem value="Sixième">Sixième</MenuItem>
                        <MenuItem value="Cinquième">Cinquième</MenuItem>
                        <MenuItem value="Quatrième">Quatrième</MenuItem>
                        <MenuItem value="Troisième">Troisième</MenuItem>
                  
                        </Select>
                    </FormControl>
                </Box>
                <br></br>
                <Stack sx={{m:0}} spacing={2} direction="row">
                    <Button variant="contained" onClick={Submit} >Ajouter</Button>
                </Stack>
            </form>
      </div>


      <div className='table'>
        <br></br>
      <TableContainer component={Paper}>
        <Table sx={{ width: 900 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Nom</TableCell>
              <TableCell align="center">Prénom</TableCell>
              <TableCell align="center">Sexe</TableCell>
              <TableCell align="center">Date de naissance</TableCell>
              <TableCell align="center">Lieu de naissance</TableCell>
              <TableCell align="center">Classe</TableCell>
              <TableCell align="left">Action</TableCell>
              
            </TableRow>
          </TableHead>
          <TableBody>
          {Tasks.map((task) => (
              <TableRow
                key={task.Titre}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {task.Titre}
                </TableCell>
                <TableCell align="center">{task.Description}</TableCell>
                <TableCell align="center">{task.Sexe}</TableCell>
                <TableCell align="center">{task.Birthplace}</TableCell>
                <TableCell align="center">{task.Fin}</TableCell>
                <TableCell align="center">{task.Statut}</TableCell>
                <TableCell align="center">
                <Stack direction="row" spacing={1}>
                    <IconButton color="primary" aria-label="add to shopping cart">
                        <DeleteIcon onClick={()=>deleteTask(task.Titre)}/>
                    </IconButton>
                </Stack>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </div>
    </div>
  );
}

export default App;