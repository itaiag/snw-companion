import { Box, Typography } from '@mui/material';
import CharacterProgressionTable from '../CharacterProgressionTable';
import SavingThrowsTable from '../SavingThrowsTable';
import CharacterTable from '../CharactersTable';
import TrackerHalfingSkillsTable from './TrackerHalfingSkillsTable';



export default function TrackerHalfingCharacterView() {
    
    const characterType: string = 'בן מחצית גשש';

    return (
        <Box className='main-box'>
            <Box component={"span"} display={"block"}>
                <Typography>בני המחצית הם גזע נינוח של כפריים שוכני גבעות. גובהם נמוך, מעט פחות ממטר אחד, כפות רגליהם שעירות והם אינם נועלים דבר לרגליהם שכן עור כף רגלם עבה ומשמש אותם כתחליף לנעליים. תוחלת חייהם ארוכה מזו של בני האדם, אך לא מתקרבת לזו של הגמדים או האלפים, ועומדת על כמאה ועשרים שנים.</Typography>
            </Box>
            <Box className="small-image-box">
                <img className="image" src={`${process.env.PUBLIC_URL}/images/halfing.png`} alt="halfing" />
            </Box>
            <Typography variant='h6' sx={{ p: 3 }}>תכונות דמות</Typography>
            <CharacterTable characterClass={characterType} />
            <Typography variant='h6' sx={{ p: 3 }}>טבלת התקדמות</Typography>
            <CharacterProgressionTable characterClass={characterType} />
            <Typography variant='h6' sx={{ p: 3 }}>גלגולי הצלה</Typography>
            <SavingThrowsTable characterClass={characterType} />
            <Typography variant='h6' sx={{ p: 3 }}>מיומנויות גשש</Typography>
            <TrackerHalfingSkillsTable />
            
        </Box>
        
    );
}

