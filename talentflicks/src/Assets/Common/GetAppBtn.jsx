import React from "react";
import "./NavBar.css";
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import AppImage from "../Images/OnePlus 10T.png"

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));


export default function GetAppBtn() {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button className="btn getApp" onClick={handleClickOpen}>Get App</button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 ,textAlign:"center",fontSize:"24px",fontWeight:"700",background:"#ffd200"}} id="customized-dialog-title">
          Our Exciting App is Here !!!!
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={(theme) => ({
            position: 'absolute',
            right: 10,
            top: 15,
            color: "#000",
            border:"2px solid #000"
          })}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
         <div className="mainApp">
          <div className="appContnet">
            <h3>Comming soon....</h3>
          </div>
          <div className="appImage">
            <img src={AppImage} alt="appImage" width={205} height={350} />
          </div>
         </div>
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
}
