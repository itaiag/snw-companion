import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { charactersProgressionData } from '../../data/charactersProgressionData';


export default function CharacterProgressionTable({ characterClass }: { characterClass: string }) {


  return (
    <TableContainer component={Paper} className='main-box'>
      <Table sx={{ minWidth: 100 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align='center'>דרגה</TableCell>
            <TableCell align='center'>תואר</TableCell>
            <TableCell align='center'>נקודות נסיון נדרשות לדרגה</TableCell>
            <TableCell align='center'>קב"פ</TableCell>
            <TableCell align='center'>תוסף התקפה</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {charactersProgressionData.filter(level => level.סוג === characterClass).map((level) => (
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              key={level.דרגה}
            >
              <TableCell component="th" scope="row" align='right'>
                {level.דרגה}
              </TableCell>
              <TableCell component="th" scope="row" align='right'>
                {level.תואר}
              </TableCell>
              <TableCell component="th" scope="row" align='right'>
              {level['נקודות נסיון נדרשות לדרגה']}
              </TableCell>
              <TableCell component="th" scope="row" align='right'>
                {level['קב"פ']}
              </TableCell>
              <TableCell component="th" scope="row" align='right'>
                {level['תוסף התקפה']}
              </TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
