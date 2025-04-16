import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import MagicTableView from './MagicTableView/MagicTableView';
import { useLocation } from 'react-router-dom';

import { Divider, Typography } from '@mui/material';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}

      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function TabbedMagicView() {
  const location = useLocation();
  const { type: initialType, level: initialLevel } = location.state || { type: 'כוהן', level: '1' };

  const [value, setValue] = React.useState(
    initialType === 'כוהן' ? 0 :
    initialType === 'קוסם' ? 1 :
    initialType === 'פלאדין' ? 2 :
    initialType === 'דרואיד' ? 3 :
    4);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs 
          value={value} 
          onChange={handleChange} 
          aria-label="magic tabs"
          variant="scrollable"
          scrollButtons="auto"
        >
          <Tab label="כוהן" {...a11yProps(0)} />
          <Tab label="קוסם" {...a11yProps(1)} />
          <Tab label="פלאדין" {...a11yProps(2)} />
          <Tab label="דרואיד" {...a11yProps(3)} />
          <Tab label="לוחש-סלעים" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Typography variant="h5">לחשי כוהן</Typography>
        <Divider />
        <MagicTableView type="כוהן" initialLevel={initialLevel || '1'} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Typography variant="h5">לחשי קוסם, אלף קשת ואלף אומן רונות</Typography>
        <Divider />
        <MagicTableView type="קוסם" initialLevel={initialLevel || '1'} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <Typography variant="h5">לחשי פלאדין</Typography>
        <Divider />
        <MagicTableView type="פלאדין" initialLevel={initialLevel || '1'} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <Typography variant="h5">לחשי דרואיד</Typography>
        <Divider />
        <MagicTableView type="דרואיד" initialLevel={initialLevel || '1'} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
        <Typography variant="h5">לחשי לוחש-סלעים</Typography>
        <Divider />
        <MagicTableView type="לוחש-סלעים" initialLevel={initialLevel || '1'} />
      </CustomTabPanel>

    </Box>
  );
}