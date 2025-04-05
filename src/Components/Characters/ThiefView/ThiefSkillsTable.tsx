import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { thiefSkillsData } from '../../../data/thiefSkillsData';


export default function ThiefSkillsTable() {

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 100 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align='right'>דרגה</TableCell>
                        <TableCell>טיפוס על קירות (%)</TableCell>
                        <TableCell>מלאכה עדינה (%)</TableCell>
                        <TableCell>הקשבה לרעשים</TableCell>
                        <TableCell>הסתתרות בצללים (%)</TableCell>
                        <TableCell>תנועה חרישית (%)</TableCell>
                        <TableCell>פריצת מנעולים (%)</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {thiefSkillsData.map((level) => (
                        <TableRow

                            key={level.דרגה}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row" align='right'>
                                {level.דרגה}
                            </TableCell>
                            <TableCell component="th" scope="row" >
                                {level['טיפוס על קירות (%)']}
                            </TableCell>
                            <TableCell component="th" scope="row" >
                                {level['מלאכה עדינה (%)']}
                            </TableCell>
                            <TableCell component="th" scope="row" >
                                {level['הקשבה לרעשים']}
                            </TableCell>
                            <TableCell component="th" scope="row" >
                                {level['הסתתרות בצללים (%)']}
                            </TableCell>
                            <TableCell component="th" scope="row" >
                                {level['תנועה חרישית (%)']}
                            </TableCell>
                            <TableCell component="th" scope="row" >
                                {level['פריצת מנעולים (%)']}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
