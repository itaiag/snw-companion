import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { spellCastingProgressionData } from '../../data/spellCastingProgression';


export default function SpellCastingProgressionTable({ characterClass }: { characterClass: string }) {


  return (
    <TableContainer component={Paper} className='main-box'>
      <Table sx={{ minWidth: 100 }} aria-label="spell casting progression table">
        <TableHead>
          <TableRow>
            <TableCell align='center'>דרגה</TableCell>
            <TableCell align='center'>עוצמה 1</TableCell>
            <TableCell align='center'>עוצמה 2</TableCell>
            <TableCell align='center'>עוצמה 3</TableCell>
            <TableCell align='center'>עוצמה 4</TableCell>
            <TableCell align='center'>עוצמה 5</TableCell>
            <TableCell align='center'>עוצמה 6</TableCell>
            <TableCell align='center'>עוצמה 7</TableCell>
            <TableCell align='center'>עוצמה 8</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {spellCastingProgressionData.filter(level => level.סוג === characterClass).map((level) => (
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              key={level.דרגה}
            >
              <TableCell component="th" scope="row" align='right'>
                {level.דרגה}
              </TableCell>
              <TableCell component="th" scope="row" align='right'>
                {level['עוצמה 1']}
              </TableCell>
              <TableCell component="th" scope="row" align='right'>
              {level['עוצמה 2']}
              </TableCell>
              <TableCell component="th" scope="row" align='right'>
                {level['עוצמה 3']}
              </TableCell>
              <TableCell component="th" scope="row" align='right'>
                {level['עוצמה 4']}
              </TableCell>
              <TableCell component="th" scope="row" align='right'>
                {level['עוצמה 5']}
              </TableCell>
              <TableCell component="th" scope="row" align='right'>
                {level['עוצמה 6']}
              </TableCell>
              <TableCell component="th" scope="row" align='right'>
                {level['עוצמה 7']}
              </TableCell>
              <TableCell component="th" scope="row" align='right'>
                {level['עוצמה 8']}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
