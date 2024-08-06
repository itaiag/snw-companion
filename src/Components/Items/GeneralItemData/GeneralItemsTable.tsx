import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { generalItemsData } from '../../../data/generalItemsData';


export default function GeneralItemsTable() {


  return (
    <TableContainer component={Paper} className='main-box'>
      <Table sx={{ minWidth: 100 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align='center'>חפץ</TableCell>            
            <TableCell align='center'>משקל (ק"ג)</TableCell>
            <TableCell align='center'>מחיר (מ"ז)</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {generalItemsData.map((item) => (
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              key={item.חפץ}
            >
              <TableCell component="th" scope="row" align='right'>
                {item.חפץ}
              </TableCell>
              <TableCell component="th" scope="row" align='right'>
                {item.משקל}
              </TableCell>
              <TableCell component="th" scope="row" align='right'>
                {item.מחיר}
              </TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
