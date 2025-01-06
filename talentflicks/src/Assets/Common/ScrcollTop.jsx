import React from "react";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import KeyboardCapslockIcon from '@mui/icons-material/KeyboardCapslock';

export default function ScrollTop() {

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // for smooth scrolling
    });
  };

  return (
    <div style={{position:"fixed",bottom:12,right:85}}>
      <Box sx={{ "& > :not(style)": { m: 1 } }} onClick={handleScrollToTop}>
        <Fab style={{border:"3px solid #ffd200",background:"transparent"}} aria-label="add">
          <KeyboardCapslockIcon sx={{color:"#ffd200",fontSize:30}} />
        </Fab>
      </Box>
    </div>
  );
}
