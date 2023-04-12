import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import CloseIcon from "@mui/icons-material/Close";

import {
  Button,
  Container,
  IconButton,
  Snackbar,
  TextField,
  Typography,
  useThemeProps,
} from "@mui/material";
import axios from "axios";
import { SyntheticEvent, useState } from "react";
import { redirect, useNavigate, Link as LinkDOM } from "react-router-dom";
import axiosInstance from "../utils/axiosUtil";
import React from "react";
import CustomSnackbar from "../components/CustomSnackbar";

export default function Register() {
  const [open, setOpen] = useState(false);
  const snackbarClose = () => setOpen(false);
  const snackbarOpen = () => setOpen(true);

  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigate();

  const user = {
    username: username,
    phone: phone,
    email: email,
    password: password,
  };

  const handleSubmit = async (event: any) => {
    if (username !== "" && phone !== "" && email !== "" && password !== "") {
      try {
        await axios
          .post("http://localhost:4000/auth/register", user)
          .then((response) => {
            localStorage.setItem("token", response.data.token);
            console.log("Account successfully created");
            console.log(response);
            navigation("/");
          });
      } catch (err) {
        console.log(err);
        snackbarOpen();
      }
    } else {
      snackbarOpen();
    }
  };
  const handleChangeUsername = async (event: any) => {
    setUsername(event.target.value);
    console.log(username);
  };
  const handleChangePhone = async (event: any) => {
    setPhone(event.target.value);
    console.log(username);
  };
  const handleChangeEmail = async (event: any) => {
    setEmail(event.target.value);
    console.log(username);
  };
  const handleChangePassword = async (event: any) => {
    setPassword(event.target.value);
    console.log(password);
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Make a new Account!
        </Typography>
        <TextField
          margin="normal"
          required
          fullWidth
          id="username"
          label="Username"
          name="username"
          autoComplete="username"
          autoFocus
          onChange={handleChangeUsername}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="phone"
          label="Phone Number"
          name="phone"
          autoComplete="phone"
          autoFocus
          onChange={handleChangePhone}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
          onChange={handleChangeEmail}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          onChange={handleChangePassword}
        />
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
        />
        <Button
          type="submit"
          fullWidth
          onClick={handleSubmit}
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Sign Up
        </Button>
        <Grid container>
          <Grid item xs>
            <Link href="/sign" variant="body2">
              Already have an account?
            </Link>
          </Grid>
        </Grid>
      </Box>
      <CustomSnackbar
        severity={"error"}
        message={"Error Occured"}
        open={snackbarOpen}
        handleClose={snackbarClose}
      />
    </Container>
  );
}
