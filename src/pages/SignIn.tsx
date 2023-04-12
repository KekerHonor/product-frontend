import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import {
  Button,
  Container,
  TextField,
  Typography,
  useThemeProps,
} from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { redirect, useNavigate, Link as LinkDOM } from "react-router-dom";
import axiosInstance from "../utils/axiosUtil";

export default function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigate();

  const user = {
    username: username,
    password: password,
  };

  const handleSubmit = async (event: any) => {
    try {
      await axios
        .post("http://localhost:4000/auth/login", user)
        .then((response) => {
          localStorage.setItem("token", response.data.token);

          console.log(response);
          navigation("/");
        });
    } catch (err) {
      console.error(err);
    }
  };
  const handleChangeUsername = async (event: any) => {
    setUsername(event.target.value);
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
          Sign in
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
          Sign In
        </Button>
        <Grid container>
          <Grid item xs>
            <Link href="#" variant="body2">
              Forgot password?
            </Link>
          </Grid>
          <Grid item>
            <Link href="/register" variant="body2">
              {"Don't have an account? Sign Up"}
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
