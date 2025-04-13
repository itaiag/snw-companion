import React from 'react';
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const abilities = [
  {
    title: "הקסמה",
    description:
      'דמות שנופלת קורבן לכוח זה נמצאת תחת השפעתה של המפלצת (כמו הלחש "הקסמה"). אם המפלצת נהרגת, השפעת ההקסמה חולפת מיד.'
  },
  {
    title: "התאבנות",
    description:
      "על הקורבן לבצע גלגול הצלה נגד מוות ורעל. בכשלון, הוא וכל ציודו הופכים לאבן."
  },
  {
    title: "חנק",
    description:
      "אם למפלצת יש כוח החונק את הקורבן, הוא ימות לאחר מספר סיבובים (נקבע ע\"י קוביה) ללא קשר לכמות הנק\"פ שלו."
  },
  {
    title: "חסינות ללחשים",
    description:
      "המפלצת חסינה לסוגי לחשים מסויימים ואין להם כל השפעה עליה (ללא צורך בגלגול הצלה)."
  },
  {
    title: "חסינות לקסם",
    description:
      "למפלצת סיכוי מסויים (מצויין באחוזים) שכל קסם שמוטל עליה לא ישפיע עליה."
  },
  {
    title: "לחשים וכוחות דמויי לחש",
    description:
      "המפלצת יכולה להטיל לחש או כוח דמוי לחש, פעם אחת בתור."
  },
  {
    title: "נזק מתמשך (חיבוק/מחיצה)",
    description:
      "אם המפלצת מצליחה בגלגול ההתקפה וגורמת נזק, היא מחבקת את הקורבן ובסיבובים הבאים גורמת לו נזק אוטומטי, ללא גלגול נוסף. ניתן לשחרר את הקורבן ע\"י הריגתה או הסחת דעתה."
  },
  {
    title: "ניקוז דרגה",
    description:
      "כאשר דמות נפגעת מהתקפה של מפלצת בעלת יכולת זו, היא מאבדת דרגת ניסיון אחת ללא גלגול הצלה. דמות בדרגה 1 שמנוקזת – מתה (לעיתים אף תקום כאל-מת). המנחה יכולה לאשר גלגול הצלה כדי למנוע מוות מיידי."
  },
  {
    title: "נפגע רק מנשקים כסופים/קסומים",
    description:
      "פגיעה עם נשק רגיל לא תשפיע על מפלצת זו."
  },
  {
    title: "רעל",
    description:
      "התקפת המפלצת גורמת להרעלת הקורבן. ישנם רעלים קטלניים שהורגים בכשלון בגלגול הצלה נגד רעל. המנחה יכולה להחליט על עוצמת הרעל (למשל, כשלון ישאיר את הדמות עם 1 נק\"פ וחסרת הכרה)."
  },
  {
    title: "שיתוק",
    description:
      "קרבן שנפגע ונכשל בגלגול הצלה נגד מלכודות וסכנות נותר משותק. השיתוק נמשך 2ק4 סיבובים. התקפות נגדו תמיד פוגעות ועשויות גם להרוג (לשיקול המנחה)."
  },
  {
    title: "תעופה",
    description:
      "המפלצת מסוגלת לעוף כמספר המטרים המצוין עם היכולת."
  }
];

export default function MonsterAbilitiesView() {
  return (
    <Box dir="rtl" sx={{ textAlign: 'right', padding: 2 }}>
      {abilities.map((ability, index) => (
        <Accordion key={index}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography fontWeight="bold">{ability.title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{ability.description}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
}
