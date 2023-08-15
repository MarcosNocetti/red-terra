import { Box, Tab, Tabs as MuiTabs } from '@mui/material'

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  }
}
function Tabs({ value, handleChange, labels }: any) {
  return (
    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <MuiTabs value={value} onChange={handleChange}>
        {labels?.length &&
          labels.map((label: string, i: number) => (
            <Tab label={label} key={i} {...a11yProps(i)} />
          ))}
      </MuiTabs>
    </Box>
  )
}

export default Tabs
