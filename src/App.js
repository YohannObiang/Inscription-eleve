import logo from './logo.svg';
import './App.css';
import Formulaire from './form/form';
import Tableau from './tableau/tableau';
import {useState, useEffect} from 'react';


import Box from '@mui/material/Box';
import * as React from 'react';
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


function App() {
    const [Debut, setDebut] = React.useState(null);
    useEffect(() => console.log(Debut), [Debut]);

    const [Fin, setFin] = React.useState(null);
    useEffect(() => console.log(Fin), [Fin]);

    const staartdate = (startdate) => {
    setDebut(startdate);
    console.log(setDebut)};
    
    const eenddate = (enddate) => {
    setFin(enddate);
    console.log(setFin)};

    const [Tiitre, setTiitre] = React.useState("tt");
    const [Descriiption, setDescriiption] = React.useState("tt");
    // Displaying Problem

    const Titre = document.getElementById('titre')
    const Description = document.getElementById('description')
    const data = {Tiitre, Descriiption, Debut, Fin}

    const Submit = () => {
      setTiitre(Titre.value)
      setDescriiption(Description.value)
      console.log(data)};



    const [age, setAge] = React.useState('');
     
    const handleChange = (event) => {setAge(event.target.value);};
    function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };}


const rows = [
  createData('Frozen yoghurt', 'hello', 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];



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
                    <TextField label="Titre" variant="outlined" id="titre"/>
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
                    <TextField label="Description" variant="outlined" id="description" />
                </Box>
                <br></br>
                <div  className='date'>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                        className='date'
                        label="Date-debut"
                        value={Debut}
                        onChange={staartdate}
                        renderInput={(params) => <TextField {...params} />}
                        id="debut"
                    />
                </LocalizationProvider>
                <br></br>
                <LocalizationProvider  dateAdapter={AdapterDateFns}>
                    <DatePicker
                        id="fin"
                        label="Date-fin"
                        value={Fin}
                        onChange={eenddate}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider>
                </div>
                <br></br>
                <Box sx={{m:0, width: "25vw" }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Statut</InputLabel>
                        <Select

                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        label="Age"
                        onChange={handleChange}>
                        
                        <MenuItem value={10}>À réaliser </MenuItem>
                        <MenuItem value={20}>En cours</MenuItem>
                        <MenuItem value={30}>Fait</MenuItem>
                        <MenuItem value={40}>Archivé</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                <br></br>
                <Stack sx={{m:0}} spacing={2} direction="row">
                    <Button variant="contained" onClick={Submit} >Ajouter</Button>
                </Stack>
            </form>
      </div>
      <div>
      <TableContainer component={Paper}>
        <Table sx={{ width: 900 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Titre </TableCell>
              <TableCell align="center">Description</TableCell>
              <TableCell align="center">Date-debut</TableCell>
              <TableCell align="center">Date-fin</TableCell>
              <TableCell align="center">Status</TableCell>
              <TableCell align="left">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="center">{row.calories}</TableCell>
                <TableCell align="center">{row.fat}</TableCell>
                <TableCell align="center">{row.carbs}</TableCell>
                <TableCell align="center">{row.protein}</TableCell>
                <TableCell align="center">
                <Stack direction="row" spacing={1}>
                    <IconButton color="secondary" aria-label="add an alarm">
                        <EditIcon />
                    </IconButton>
                    <IconButton color="primary" aria-label="add to shopping cart">
                        <DeleteIcon />
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
