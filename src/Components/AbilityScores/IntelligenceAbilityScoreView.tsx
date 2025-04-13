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

export default function IntelligenceAbilityScoreView() {
  return (
    <Box dir="rtl" className="main-box main-view" sx={{ textAlign: "right", padding: 2 }}>
      <Typography paragraph>
        תכונת התבונה קובעת עד כמה הדמות שלך טובה בלמידה ובשימוש בהיגיון. דמות בעלת תבונה גבוהה יכולה לדבר בשפות נוספות, כמצוין בטבלה.
        תבונה היא התכונה העיקרית עבור קוסמים. היא קובעת את רמת הלחש המרבית שהקוסם יוכל ללמוד וכן כמה לחשים נוספים מעוצמה ראשונה יוכל להטיל ביום.
      </Typography>

      <TableContainer component={Paper} sx={{ mb: 2 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center">ערך</TableCell>
              <TableCell align="center">שפות נוספות</TableCell>
              <TableCell align="center">רמת לחש מרבית</TableCell>
              <TableCell align="center">תוספת יומית של לחשים מעוצמה ראשונה</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {[
              ['3-7', '0', '2', '-'],
              ['8', '1', '3', '-'],
              ['9', '1', '4', '-'],
              ['10', '2', '5', '-'],
              ['11', '2', '6', '-'],
              ['12', '3', '7', '1+'],
              ['13', '3', '8', '1+'],
              ['14', '4', '8', '2+'],
              ['15', '4', '9', '2+'],
              ['16', '5', '9', '3+'],
              ['17', '6', '9', '3+'],
              ['18', '6', '9', '4+'],
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

      <Typography variant="body2">
        השפות הזמינות הן: השפה המדוברת (אותה דוברות כל הדמויות), גמדית, אלפית, דרקונית, ענקית (המדוברת גם בקרב עוגים), גובלינית (המדוברת גם בקרב אורקים),
        וייתכנו אפשרויות נוספות בהתאם למערכה שמריצה המנחה.
      </Typography>
    </Box>
  );
}
