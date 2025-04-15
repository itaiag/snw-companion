import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { turnUndeadData } from '../../../data/turnUndeadData';


export default function TurnUndeadTable() {

    return (
        <TableContainer component={Paper} sx={{ maxHeight: 500, maxWidth:1000 }}>
            <Table stickyHeader sx={{ minWidth: 100 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align='right'>קב"פ של האל-מת</TableCell>
                        <TableCell>אל-מת לדוגמה</TableCell>
                        <TableCell>1</TableCell>
                        <TableCell>2</TableCell>
                        <TableCell>3</TableCell>
                        <TableCell>4</TableCell>
                        <TableCell>5</TableCell>
                        <TableCell>6</TableCell>
                        <TableCell>7</TableCell>
                        <TableCell>8</TableCell>
                        <TableCell>9</TableCell>
                        <TableCell>10-13</TableCell>
                        <TableCell>14+</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {turnUndeadData.map((level) => (
                        <TableRow

                            key={level['קב"פ של האל-מת']}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row" align='right'>
                                {level['קב"פ של האל-מת']}
                            </TableCell>
                            <TableCell component="th" scope="row" >
                                {level['אל-מת לדוגמה']}
                            </TableCell>
                            <TableCell component="th" scope="row" >
                            {level[1]}
                            </TableCell>
                            <TableCell component="th" scope="row" >
                            {level[2]}
                            </TableCell>
                            <TableCell component="th" scope="row" >
                            {level[3]}
                            </TableCell>
                            <TableCell component="th" scope="row" >
                            {level[4]}
                            </TableCell>
                            <TableCell component="th" scope="row" >
                            {level[5]}
                            </TableCell>
                            <TableCell component="th" scope="row" >
                            {level[6]}
                            </TableCell>
                            <TableCell component="th" scope="row" >
                            {level[7]}
                            </TableCell>
                            <TableCell component="th" scope="row" >
                            {level[8]}
                            </TableCell>
                            <TableCell component="th" scope="row" >
                            {level[9]}
                            </TableCell>
                            <TableCell component="th" scope="row" >
                            {level['10-13']}
                            </TableCell>
                            <TableCell component="th" scope="row" >
                            {level['14+']}
                            </TableCell>

                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
