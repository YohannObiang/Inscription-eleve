import {useEffect} from 'react';
import React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';

document.getElementById('stepone').style.display="block"
document.getElementById('steptwo').style.display="none"



const Forms = ({Students, setStudents}) => {
    const handleChange = (event) => {setClasse(event.target.value);};
    const handleChangeSexe = (event) => {setSexe(event.target.value);};
    const [Birthdate, setBirthdate] = React.useState(null);
    useEffect(() => console.log(Birthdate), [Birthdate]);
    const [Classe, setClasse] = React.useState('');
    useEffect(() => console.log(Classe), [Classe]);
    const [Sexe, setSexe] = React.useState('');
    useEffect(() => console.log(Sexe), [Sexe]);
    const [Nom, setNom] = React.useState('');
    const [Prenom, setPrenom] = React.useState('');
    const [Birthplace, setBirthplace] = React.useState('');

// Variables tuteur

    const [Name, setName] = React.useState('');
    const [Parentfirstname, setParentfirstname] = React.useState('');
    const [Job, setJob] = React.useState('');
    const [Number, setNumber] = React.useState('');
    const [Email, setEmail] = React.useState('');


    const Submit = () => {

        let Student={
          Nom,
          Prenom,
          Sexe,
          Birthplace,
          Birthdate,
          Classe,
          Name,
          Parentfirstname,
          Job,
          Number,
          Email 
        }
        setStudents([...Students,Student]);
        setNom('');
        setPrenom('');
        setSexe('');
        setBirthplace('');
        setBirthdate('');
        setClasse('');
        setName('');
        setParentfirstname('');
        setJob('');
        setNumber('');
        setEmail('');
        localStorage.setItem('Taches',JSON.stringify(Students))
        document.getElementById('stepone').style.display="block"
        document.getElementById('steptwo').style.display="none"
    }

    const Next = () =>{
        document.getElementById('stepone').style.display="none"
        document.getElementById('steptwo').style.display="block"
    }
    const Previous = () =>{
        document.getElementById('stepone').style.display="block"
        document.getElementById('steptwo').style.display="none"
    }
    
    return ( 
      <div >           
            <form className='Formulaire'>
            <div id='stepone'>
            <h1>Information sur l'élève</h1>
            <br></br>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 0, width: '25vw' },
                    }}
                    noValidate
                    autoComplete="off"
                    >
                    <TextField label="Nom de l'élève" variant="outlined" id="Nom" value = {Nom} onChange={e => setNom(e.target.value)}/>
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
                    <TextField label="Prénom de l'élève" variant="outlined" id="Prenom" value = {Prenom} onChange={e => setPrenom(e.target.value)} />
                </Box>
                
                <br></br>
                <div  className='date'>
                <Box sx={{m:0, width: "25vw" }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Sexe</InputLabel>
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
                <input type= "date"  label="Date-Birthdate" variant="outlined" id="Birthdate" value = {Birthdate} onChange={e => setBirthdate(e.target.value)}></input>    
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
                        value={Classe}
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
                    <Button variant="contained" onClick={Next} >Next</Button>
                </Stack>
                      
            </div>

            <div id='steptwo'>

                < h1>Information sur le tuteur</h1>
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
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <div className='button'>
                
                <Stack sx={{m:0}} spacing={2} className="previous" direction="row">
                    <Button variant="contained" onClick={Previous} >Previous</Button>
                </Stack>
                <Stack sx={{m:0}} spacing={2} direction="row">
                    <Button variant="contained" onClick={Submit} >Ajouter</Button>
                </Stack>
                </div>
            </div>
            </form>
            
      </div>
     );
}
 
export default Forms;