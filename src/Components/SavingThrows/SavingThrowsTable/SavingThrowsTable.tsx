import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { savingThrowsData } from '../../../data/savingThrowsData';


export default function TreasureTable({ characterClass }: { characterClass: string }) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 100 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align='right'>דרגות</TableCell>
            <TableCell>לחשים</TableCell>
            <TableCell>מוות ורעל</TableCell>
            <TableCell>נשיפת דרקון</TableCell>
            <TableCell>מלכודות וסכנות</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {savingThrowsData.filter(item => item.סוג === characterClass).map((item) => (
            <TableRow
              key={item.דרגות}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" align='right'>
                {item.דרגות}
              </TableCell>
              <TableCell component="th" scope="row" >
                {item.לחשים}
              </TableCell>
                <TableCell component="th" scope="row" >
                    {item['מוות ורעל']}
                </TableCell>
                <TableCell component="th" scope="row" >
                    {item['נשיפת דרקון']}
                </TableCell>
                <TableCell component="th" scope="row" >
                    {item['מלכודות וסכנות']}
                </TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
