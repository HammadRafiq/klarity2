import React, { useEffect, useState } from "react";
import { Tabs, Tab, Box, Grid } from "@mui/material";

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
};

const a11yProps = (index) => {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
};

export const CustomTabs = ({
  mapperObjProp,
  justifyContent = "center",
  alignItems = "center",
  padding,
  paddingTab,
  paddingPanel,
  xs = 12,
  sm = 12,
  md = 12,
  lg = 12,
  xl = 12,
  orientation = "horizontal",
  justifyContentTab = "center",
  alignItemsTab = "center",
  onCustomChange,
  tabsWidth,
  tabsShadow,
  tabsBorderRadius,
  tabsContainerPadding,
}) => {

const [value, setValue] = useState(0)

  const handleChange = (event, newValue) => {
    if (onCustomChange) {
      onCustomChange(value); //Preserving the previous value of tabs index. Tabs index current value can be fetched from redux store
    }
    setValue(newValue)
  };

  return (
    <Grid container sx={{ padding }}>
      <Grid
        container
        sx={{
          justifyContent: justifyContentTab,
          alignItems: alignItemsTab,
          padding: paddingTab,
        }}
      >
        <Grid
          item
          boxShadow={tabsShadow}
          width={tabsWidth}
          borderRadius={tabsBorderRadius}
          p={tabsContainerPadding}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            orientation={orientation}
            variant="scrollable"
            scrollButtons="auto"
            allowScrollButtonsMobile
            aria-label="basic tabs example"
          >
            {mapperObjProp?.map((item, i) => (
              <Tab
                key={i}
                disableRipple
                sx={{
                //   fontFamily: "fontFamilyPoppins",
                //   fontStyle: "fontStyle",
                //   fontWeight: "fontWeight800",
                //   fontSize: "fontSize",
                //   lineHeight: "lineHeight",
                //   color: "secondary.main",
                //   textTransform: "textTransformCaplitalize",
                }}
                label={item?.label}
                {...a11yProps(i)}
              />
            ))}
          </Tabs>
        </Grid>
      </Grid>

      <Grid
        container
        sx={{
          justifyContent,
          alignItems,
          padding: paddingPanel,
        }}
      >
        <Grid item xs={xs} sm={sm} md={md} lg={lg} xl={xl}>
          {mapperObjProp?.map((item, i) => (
            <TabPanel value={value} index={i} key={i}>
              {item?.content}
            </TabPanel>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};
