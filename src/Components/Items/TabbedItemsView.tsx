import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import MeleeWeaponTable from './MeleeWeaponTable/MeleeWeaponTable'
import MeleeRangedTable from './RangedWeaponTable/RangedWeaponTable'

import { Divider, Typography } from '@mui/material';
import ArmorTable from './ArmorTable/ArmorTable';
import GeneralItemsTable from './GeneralItemData/GeneralItemsTable';

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

export default function TabbedItemsView() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="ציוד" {...a11yProps(0)} />
          <Tab label='נשק קפא"פ' {...a11yProps(1)} />
          <Tab label="קליעים" {...a11yProps(2)} />
          <Tab label="שריונות" {...a11yProps(3)} />       
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>        
      <Typography variant='h5'>ציוד כללי</Typography>
        <Divider />
        <GeneralItemsTable />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>        
      <Typography variant='h5'>כלי נשק פנים אל פנים</Typography>
        <Divider />
        <MeleeWeaponTable />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <Typography variant='h5'>נשקי קליעים</Typography>
        <Divider />
        <MeleeRangedTable/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <Typography variant='h5'>שריונות</Typography>
        <Divider />
        <ArmorTable/>
      </CustomTabPanel>
    </Box>
  );
}
