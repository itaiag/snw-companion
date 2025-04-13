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

export default function StrengthAbilityScoreView() {
  return (
    <Box dir="rtl" className='main-box main-view' sx={{ textAlign: "right", padding: 2 }}>
      <Typography paragraph>
      תכונת הכוח מייצגת את הכוח הפיזי של הדמות. כוח גבוה מאפשר לדמות לפרוץ דלתות בקלות רבה יותר ולשאת הרבה יותר משקל (ואוצר!). כוח גבוה גם מספק תוספים לפגיעה ולנזק. הטבלה בהמשך מראה את השפעות ערך הכוח על דמותך - רשום את התוספים האלו על דף הדמות שלך. כוח הוא התכונה העיקרית של לוחמים. באמצעות התכונה העיקרית מחשבים את התוספים לנקודות הניסיון שלך, כמתואר בהמשך החוקים. 

      </Typography>

      <TableContainer component={Paper} sx={{ mb: 2 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center">ערך</TableCell>
              <TableCell align="center">מתאם התקפה ונזק*</TableCell>
              <TableCell align="center">פריצת דלתות (ק6)**</TableCell>
              <TableCell align="center">מתאם נשיאה (בק&quot;ג)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {[
              ['3-4', '3-', '-', '10-'],
              ['5-6', '2-', '-', '5-'],
              ['7-8', '1-', '1', '-'],
              ['9-12', '-', '1', '-'],
              ['13-14', '1+', '2-1', '-'],
              ['15-16', '2+', '2-1', '5+'],
              ['17-18', '3+', '3-1', '10+'],
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

      <Typography variant="body2" gutterBottom>
        * זהו מתאם התקפה לנשק פנים אל פנים בלבד – למתאם התקפה בנשק קליעים יש להשתמש בתכונת הזריזות. לעומת זאת, מתאם הנזק ייקבע תמיד לפי ערך הכוח של הדמות, הן לנשק פנים אל פנים והן לנשק קליעים (מלבד רובי קשת, שמופעלים על ידי מנגנון מכני).
      </Typography>
      <Typography variant="body2" gutterBottom>
        ** ניתן לפרוץ דלת נעולה רגילה (עשויה עץ) בתוצאה זו ומטה בגלגול 1ק6 על ידי הפעלת כוח פיזי על הדלת (בעיטה, מכת כתף וכדומה).
      </Typography>
    </Box>
  );
}
