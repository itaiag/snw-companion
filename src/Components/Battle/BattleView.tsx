import { Box, Typography } from '@mui/material';

export default function BattleView() {
    return (
        <Box dir="rtl" className='main-box main-view' sx={{ textAlign: "right", padding: 2 }}>
            <Typography variant="h6" gutterBottom>
                סדר פעולות בקרב
            </Typography>

            <Typography fontWeight="bold">א. בדיקת הפתעה:</Typography>
            <Typography>• ניתן להפתיע רק מי שלא מודע לקיומך. גלגלי 1ק6 עבור כל צד שעלול להיות מופתע. בתוצאה של 1–2 הוא מופתע. הצד המפתיע זוכה בסיבוב קרב בו המופתע לא יכול להגיב.</Typography>
            <Typography>• כל דמות מופתעת מגלגלת 1ק4. בתוצאה של 1, היא מפילה את מה שהיא אוחזת ביד (נשק וכד').</Typography>

            <Typography fontWeight="bold" sx={{ mt: 2 }}>ב. יוזמה:</Typography>
            <Typography>• כל צד מגלגל 1ק10. הצד בעל התוצאה הגבוהה זוכה ביוזמה ופועל ראשון. סדר הדמויות נקבע לפי ערך הזריזות (אפשר לדחות פעולה לתור מאוחר יותר).</Typography>

            <Typography fontWeight="bold" sx={{ mt: 2 }}>ג. סיבובי הקרב:</Typography>
            <Typography>• סיבוב קרב נמשך 10 שניות (בעולם המשחק). ניתן לנוע, לגלגל התקפה, לגלגל נזק ולהטיל לחשים.</Typography>
            <Typography>• חוק אפשרי – הצלחה מסחררת או כשלון חרוץ: תוצאה של 20 טבעי בגלגול התקפה מהווה פגיעה, בלי קשר לדרג"ש של המטרה. הנזק מוכפל. תוצאה של 1 טבעי בגלגול ההתקפה נחשבת לכישלון חמור – למשל: שבירת נשק או פגיעה בדמות אחרת.</Typography>

            <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
                נזק ומוות
            </Typography>
            <Typography>• כאשר סך הנק"פ של מפלצת מגיע ל־0, היא נופלת לרצפה ומתה.</Typography>
            <Typography>• כאשר סך הנק"פ של דמות שחקן מגיע ל־0, היא נופלת לרצפה מחוסרת הכרה. בכל סיבוב היא מאבדת 1 נק"פ (אלא אם יטפלו בה). כשמגיעה ל־10־ נק"פ, היא מתה.</Typography>
            <Typography>• חוק בית אפשרי (למשחק קטלני יותר): דמות שנופלת יכולה לאבד נק"פ כפי הדרגה שלה לפני מוות. לדוגמה, דמות בדרגה 3 תמות אחרי 3 סיבובים ללא טיפול.</Typography>

            <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
                מצבים מיוחדים בקרב
            </Typography>
            <Typography>• <b>אחיזת נשק בשתי ידיים</b> מקנה +1 לנזק (חוץ מנשק דו־ידני) – לוחם בלבד.</Typography>
            <Typography>• <b>אחיזת שני כלי נשק</b> (אחד בכל יד) מקנה +1 לגלגול ההתקפה – לוחם בלבד.</Typography>
            <Typography>• <b>התקפה מאחור </b>
                מעניקה +2 לגלגול ההתקפה (+4 לגנב).</Typography>
            <Typography>• ירי על אויב המשתתף בקפא"פ גורם למחסר -2 לגלגול ההתקפה. כשלון עלול לפגוע בדמות אקראית.</Typography>
            <Typography>• תנועה בקפא"פ – כל יצור בגודל אנושי חוסם אזור ברוחב 1.5 מטר. לא ניתן לעבור דרכו. אויב שמנסה לעשות זאת – הדמות המשתתפת בקרב זוכה בהתקפה חופשית. אם היא פוגעת, התקדמות האויב נעצרת.</Typography>
            <Typography>• התקפה נגד אויב בלתי נראה (חושך מוחלט, חול בעיניים, לחש/שיקוי היעלמות) נעשית עם מחסר -4.</Typography>
            <Typography>• משתתף שמנסה להימלט מקרב – היריב מולו מקבל התקפה חופשית עם +2 לגלגול ההתקפה (גנב מקבל +4).</Typography>
            <Typography>• ניתן לתקוף בלי כוונה להרוג – יש להכריז מראש. חצי מהנזק ייחשב כנזק הכנעה. אויב שירד ל־0 נק"פ מנזק רגיל – נהרג. מנזק הכנעה – מתעלף ומתרפא 1 נק"פ לשעה.</Typography>
            <Typography>• לחימה ללא נשק גורמת 1 נזק + תוספי כוח. יש 50% סיכוי שהנזק ייחשב כנזק הכנעה.</Typography>
            <Typography>• מחסה ותנאי שטח מעניקים תוספים או מחסרים (1–2, לעיתים עד 4) לגלגול ההתקפה.</Typography>
            <Typography>• תקיפת דמות שרועה: בקפא"פ – +2 לגלגול התקפה, בטווח – -2.</Typography>

            <Box className="small-image-box">
                <img className="image" src={`${process.env.PUBLIC_URL}/images/battle.png`} alt="battle" />
            </Box>
        </Box>
    );
}
