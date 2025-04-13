import React from 'react';
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from '@mui/material';

export default function WisdomAbilityScoreView() {
  return (
    <Box dir="rtl" className="main-box main-view" sx={{ textAlign: "right", padding: 2 }}>
      <Typography paragraph>
        תכונת החוכמה מתארת את כוח הרצון של הדמות ואת השכל הישר והאינטואיציה שלה.
        חוכמה היא התכונה העיקרית של כוהנים. היא קובעת את רמת הלחש המרבית שהכוהן יוכל להטיל
        וכן כמה לחשים נוספים מעוצמה ראשונה יוכל להטיל ביום.
      </Typography>

      <TableContainer component={Paper} sx={{ mb: 2 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center">ערך</TableCell>
              <TableCell align="center">רמת לחש מרבית</TableCell>
              <TableCell align="center">תוספת יומית של לחשים מעוצמה ראשונה</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {[
              ['3-7', '2', '-'],
              ['8', '3', '-'],
              ['9', '4', '-'],
              ['10', '4', '-'],
              ['11', '5', '-'],
              ['12', '5', '1+'],
              ['13', '6', '1+'],
              ['14', '6', '2+'],
              ['15', '7', '2+'],
              ['16', '7', '3+'],
              ['17', '7', '3+'],
              ['18', '7', '4+'],
            ].map((row, idx) => (
              <TableRow key={idx}>
                {row.map((cell, i) => (
                  <TableCell key={i} align="center">{cell}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
