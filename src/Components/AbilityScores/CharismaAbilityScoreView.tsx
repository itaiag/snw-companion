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

export default function CharismaAbilityScoreView() {
  return (
    <Box dir="rtl" className="main-box main-view" sx={{ textAlign: "right", padding: 2 }}>
      <Typography paragraph>
        תכונת הכריזמה מייצגת את הקסם האישי ואת יכולות השכנוע והתקשורת של הדמות.
        לדמויות כריזמטיות יש סיכוי טוב יותר לצאת מצרות באמצעות דיבור ושכנוע, והן יכולות להוביל יותר מלווים מאשר דמויות בעלות כריזמה מועטה.
        כריזמה מגבילה גם את מספר המלווים המיוחדים שדמותך יכולה למשוך לשירותה.
        אלו הם משרתים שאינם אנשי קרבות פשוטים, אלא בעלי מקצוע דמות: קוסמים, כוהנים ואחרים.
        כאשר דמותך תגיע לדרגות גבוהות, היא עוד תזדקק למשרתים אלו!
        כריזמה לא משפיעה על מספר החיילים הרגילים, נושאי העששיות והסבלים שאתה יכול להעסיק,
        אם כי היא עשויה להשפיע על נאמנותם.
        כל דמות בעלת ערך כריזמה של 13 ומעלה זוכה בתוסף <strong>+5%</strong> למענקי נקודות הניסיון.
      </Typography>

      <TableContainer component={Paper} sx={{ mb: 2 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center">ערך</TableCell>
              <TableCell align="center">מספר מלווים מיוחדים מרבי</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {[
              ['3-4', '1'],
              ['5-6', '2'],
              ['7-8', '3'],
              ['9-12', '4'],
              ['13-14', '5'],
              ['15-16', '6'],
              ['17-18', '7'],
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
