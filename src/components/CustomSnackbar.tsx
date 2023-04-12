import React from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";

function Alert(props: any) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function CustomSnackbar(props: {
  open: any;
  handleClose: any;
  message: any;
  severity: any;
}) {
  const { open, handleClose, message, severity } = props;

  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
    >
      <Alert onClose={handleClose} severity={severity}>
        {message}
      </Alert>
    </Snackbar>
  );
}
