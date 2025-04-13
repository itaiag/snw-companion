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

export default function DexterityAbilityScoreView() {
  return (
    <Box dir="rtl" className='main-box main-view' sx={{ textAlign: "right", padding: 2 }}>
      <Typography paragraph>
        תכונת הזריזות מייצגת את הגמישות, הרפלקסים ושיווי המשקל של הדמות. זריזות גבוהה נותנת לדמותך תוספים להתקפה עם קשת או נשק קליעים אחר (אך שים לב שהתוסף לנזק נקבע על פי ערך הכוח). בנוסף, זריזות גבוהה משפרת את דירוג השריון ובכך מקשה על מפלצות לפגוע בך. זריזות היא התכונה העיקרית של דמות הגנב.
      </Typography>

      <TableContainer component={Paper} sx={{ mb: 2 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center">ערך</TableCell>
              <TableCell align="center">מתאם התקפה בנשק קליעים</TableCell>
              <TableCell align="center">השפעה על דירוג שריון</TableCell>
              <TableCell align="center">השפעה על מיומנויות גנב*</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {[
              ['3-4', '3-', '2-', '15%-'],
              ['5-6', '2-', '2-', '10%-'],
              ['7-8', '1-', '1-', '5%-'],
              ['9-12', '-', '-', '-'],
              ['13-14', '1+', '1+', '5%+'],
              ['15-16', '2+', '2+', '10%+'],
              ['17-18', '3+', '2+', '15%+'],
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
        * רק אם סוג דמותך הוא גנב או בן מחצית גשש, השפעה זו חלה על מיומנויות הגנב: מלאכה עדינה, הסתתרות בצללים, תנועה חרישית ופריצת מנעולים בלבד.
      </Typography>
    </Box>
  );
}
