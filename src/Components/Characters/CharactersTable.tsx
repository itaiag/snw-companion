import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { charactersData } from '../../data/charactersData';

export default function CharacterTable({ characterClass }: { characterClass: string }) {
    const character = charactersData.find((char) => char.סוג === characterClass);

    if (!character) {
        return <div>לא נמצאו נתונים עבור סוג הדמות</div>;
    }

    return (
        <TableContainer component={Paper} className="main-box">
            <Table sx={{ minWidth: 100 }} aria-label="character table">
                <TableBody>
                    <TableRow>
                        <TableCell align="right">תכונה עיקרית:</TableCell>
                        <TableCell align="right">{character['תכונה עיקרית']}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="right">קוביית פגיעה:</TableCell>
                        <TableCell align="right">{character['קוביית פגיעה']}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="right">שריונות ומגינים מותרים:</TableCell>
                        <TableCell align="right">{character['שריונות ומגינים מותרים']}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="right">נשקים מותרים:</TableCell>
                        <TableCell align="right">{character['נשקים מותרים']}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="right">יכולות:</TableCell>
                        <TableCell align="right">
                            {character.יכולות.split('\n').map((line, index) => (
                                <div key={index}>{line}</div>
                            ))}
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
}