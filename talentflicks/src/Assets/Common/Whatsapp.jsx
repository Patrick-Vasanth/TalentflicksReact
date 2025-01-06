import React from "react";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
export default function Whatsapp() {
  return (
    <div style={{ position: "fixed", bottom: 20, right: 20 }}>
      <Box>
        <a href="https://wa.me/6382815355?" rel="noreferrer" target="_blank">
          <Fab
            style={{ border: "3px solid #ffd200", background: "transparent" }}
            aria-label="add"
          >
            <WhatsAppIcon sx={{ color: "#ffd200", fontSize: 30 }} />
          </Fab>
        </a>
      </Box>
    </div>
  );
}
