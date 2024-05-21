import { Box, Tab, Tabs, Typography } from "@mui/material";
import "./App.css";
import FactsDisplay from "./FactsDisplay/FactsDisplay";
import React from "react";

function App() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    if (event) setValue(newValue);
  };
  return (
    <div className="App">
      <Box sx={{ width: "100%" }}>
        <div className="facts-container">
          <Typography>Amazing Facts</Typography>
          <Box
            sx={{ borderBottom: 1, borderColor: "divider" }}
            style={{ width: "100%" }}
          >
            <Tabs
              value={value}
              onChange={handleChange}
              textColor="primary"
              indicatorColor="primary"
              variant="fullWidth"
              aria-label="basic tabs example"
            >
              <Tab label="Science" />
              <Tab label="Mindset" />
            </Tabs>
          </Box>
          <FactsDisplay value={value} />
        </div>
      </Box>
    </div>
  );
}

export default App;
