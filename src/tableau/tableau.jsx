import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';

const Tableau = ({Students, setStudents}) => {

  const deleteStudent=(Nom)=>{
    const filteredStudents=Students.filter((element,index)=>{
      return element.Nom !== Nom})
      setStudents(filteredStudents);
  };
  
    return ( 
        <div className='table'>
        <br></br>

      <TableContainer component={Paper}>
        <Table sx={{ width: 1300 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Nom</TableCell>
              <TableCell align="center">Prénom</TableCell>
              <TableCell align="center">Sexe</TableCell>
              <TableCell align="center">Date de naissance</TableCell>
              <TableCell align="center">Lieu de naissance</TableCell>
              <TableCell align="center">Classe</TableCell>
              <TableCell align="center">Nom du tuteur</TableCell>
              <TableCell align="center">Prenom du tuteur</TableCell>
              <TableCell align="center">Profession</TableCell>
              <TableCell align="center">Numero de telephone</TableCell>
              <TableCell align="center">Adresse email</TableCell>
              <TableCell align="left">Action</TableCell>
              
            </TableRow>
          </TableHead>
          <TableBody>
          {Students.map((Student) => (
              <TableRow
                key={Student.Nom}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {Student.Nom}
                </TableCell>
                <TableCell align="center">{Student.Prenom}</TableCell>
                <TableCell align="center">{Student.Sexe}</TableCell>
                <TableCell align="center">{Student.Birthplace}</TableCell>
                <TableCell align="center">{Student.Birthdate}</TableCell>
                <TableCell align="center">{Student.Classe}</TableCell>
                <TableCell align="center">{Student.Name}</TableCell>
                <TableCell align="center">{Student.Parentfirstname}</TableCell>
                <TableCell align="center">{Student.Job}</TableCell>
                <TableCell align="center">{Student.Number}</TableCell>
                <TableCell align="center">{Student.Email}</TableCell>
                <TableCell align="center">
                <Stack direction="row" spacing={1}>
                    <IconButton color="primary" aria-label="add to shopping cart">
                        <DeleteIcon onClick={()=>deleteStudent(Student.Nom)}/>
                    </IconButton>
                </Stack>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        </TableContainer>
      </div>
     );
}
 
export default Tableau;