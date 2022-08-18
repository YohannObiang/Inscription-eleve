import {useEffect} from 'react';
import React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


const Parentform = ({Students, setStudents}) => {

    const [Name, setName] = React.useState('');
    const [Parentfirstname, setParentfirstname] = React.useState('');
    const [Job, setJob] = React.useState('');
    const [Number, setNumber] = React.useState('');
    const [Email, setEmail] = React.useState('');
    const Submit = () => {

        let Student={
          Name,
          Parentfirstname,
          Job,
          Number,
          Email
        }
        setStudents([...Students,Student]);
        setName('');
        setParentfirstname('');
        setJob('');
        setNumber('');
        setEmail('');
        localStorage.setItem('Taches',JSON.stringify(Students))
        alert(Student)
  
    }

    
    return ( 
        <div>
            <h1>Information sur le tuteur</h1>
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
                    <TextField label="Nom du tuteur" variant="outlined" id="Name" value = {Name} onChange={e => setName(e.target.value)}/>
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
                    <TextField label="Prénom du tuteur" variant="outlined" id="Parentfirstname" value = {Parentfirstname} onChange={e => setParentfirstname(e.target.value)} />
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
                    <TextField label="Profession" variant="outlined" id="Job" value = {Job} onChange={e => setJob(e.target.value)} />
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
                    <TextField label="Numero de telephone" variant="outlined" id="Number" value = {Number} onChange={e => setNumber(e.target.value)} />
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
                    <TextField label="Adresse email" variant="outlined" id="Email" value = {Email} onChange={e => setEmail(e.target.value)} />
                </Box>
                <br></br>
                <Stack sx={{m:0}} spacing={2} direction="row">
                    <Button variant="contained" onClick={Submit} >Ajouter</Button>
                </Stack>
            </form>
      </div>
     );
}
 
export default Parentform;