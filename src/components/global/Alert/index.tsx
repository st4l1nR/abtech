import React, { useState } from "react";
import { Snackbar, Alert } from "@mui/material";
import type { SnackbarProps, AlertProps } from "@mui/material";

type props = SnackbarProps & {
  onClose: () => void;
  severity: AlertProps["severity"];
  message: string;
};

const index =  React.forwardRef(({ open, onClose, message, severity, ...props }: props, ref:any) => {
  return (
    <Snackbar
      open={open}
      onClose={onClose}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      autoHideDuration={6000}
      {...props}
    >
      <Alert severity={severity} onClose={onClose} sx={{ width: '100%' }} ref={ref}> 
        { message && message[0].toUpperCase() + message.slice(1)}
      </Alert>
    </Snackbar>
  );
});

export default index;
