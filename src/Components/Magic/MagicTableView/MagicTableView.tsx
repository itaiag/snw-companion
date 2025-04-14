import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { MenuItem, FormControl, InputLabel } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { magicsData } from '../../../data/magicsData';
import MagicTable from '../MagicTable/MagicTable';

export default function MagicTableView({ type, initialLevel }: { type: string; initialLevel: string }) {
  const [level, setLevel] = React.useState(initialLevel);
  const [magicList, setMagicList] = useState<null | string[]>();

  const handleChange = (event: SelectChangeEvent | null) => {
    setMagicList(null);
    const selectedLevel = event ? event.target.value : initialLevel;
    setLevel(selectedLevel);
    const magicListToShow: Array<string> = magicsData
      .filter((m) => m.סוג === type)
      .filter((m) => m.עוצמה === parseInt(selectedLevel))
      .map((m) => m.שם);
    setMagicList(magicListToShow);
  };

  useEffect(() => {
    handleChange(null);
  }, [type, initialLevel]);

  return (
    <Box className="main-box">
      <Box
        className="main-box"
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '35ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <FormControl fullWidth>
          <InputLabel id="magic-list">עוצמה</InputLabel>
          <Select
            labelId="magic-level"
            id="magic-level"
            value={level}
            label="עוצמה"
            onChange={handleChange}
          >
            <MenuItem value={1}>עוצמה ראשונה</MenuItem>
            <MenuItem value={2}>עוצמה שנייה</MenuItem>
            {type !== 'כוהן' && <MenuItem value={3}>עוצמה שלישית</MenuItem>}
          </Select>
        </FormControl>
      </Box>
      {magicList && <MagicTable magics={magicList} type={type} level={level} />}
    </Box>
  );
}