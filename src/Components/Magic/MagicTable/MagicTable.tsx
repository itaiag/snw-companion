import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useNavigate } from 'react-router-dom';

export default function MagicTable({ magics, type, level }: { magics: string[]; type: string; level: string }) {
  const navigate = useNavigate();

  const handleRowClick = (magicName: string) => {
    navigate(`/magic?name=${encodeURIComponent(magicName)}`, { state: { type, level } });
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 100 }} aria-label="spells table">
        <TableBody>
          {magics.map((magic) => (
            <TableRow
              key={magic}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              onClick={() => handleRowClick(magic)}
            >
              <TableCell component="th" scope="row" align="right">
                {magic}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}