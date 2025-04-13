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

export default function ConstitutionAbilityScoreView() {
  return (
    <Box dir="rtl" className="main-box main-view" sx={{ textAlign: "right", padding: 2 }}>
      <Typography paragraph>
        תכונת החוסן מייצגת את הבריאות, הכושר הפיזי והסיבולת של הדמות. חוסן גבוה נותן לדמותך נקודות פגיעה נוספות עבור כל קוביית פגיעה. אף סוג דמות לא משתמש בחוסן כתכונה העיקרית היחידה שלו (היא אחת משתי תכונות עיקריות של הגמד). אבל נקודות פגיעה נוספות אלו יכולות להועיל לך מאוד, בכל דמות שתבחר לשחק.
      </Typography>

      <TableContainer component={Paper} sx={{ mb: 2 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center">ערך</TableCell>
              <TableCell align="center">מתאם נקודות פגיעה (לכל קובייה)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {[
              ['3-4', '3-'],
              ['5-6', '2-'],
              ['7-8', '1-'],
              ['9-12', '-'],
              ['13-14', '1+'],
              ['15-16', '2+'],
              ['17-18', '3+'],
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
