import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  Link,
  TextField,
  Typography,
  private_createTypography,
} from "@mui/material";
import axiosInstance from "../utils/axiosUtil";
import { useState } from "react";

export default function ProductCreate() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [image, setImage] = useState("");
  const data = {
    name: name,
    price: price,
    location: location,
    image: image,
  };
  const handleSubmit = () => {
    axiosInstance.post("/product/create", data).then((response) => {
      console.log(response);
    });
  };
  const handleChangeName = async (event: any) => {
    setName(event.target.value);
  };
  const handleChangePrice = async (event: any) => {
    setPrice(event.target.value);
  };
  const handleChangeLocation = async (event: any) => {
    setLocation(event.target.value);
  };
  const handleChangeImage = async (event: any) => {
    setImage(event.target.value);
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <Typography component="h1" variant="h5">
          Create a Product
        </Typography>
        <TextField
          margin="normal"
          required
          fullWidth
          id="name"
          label="Name"
          name="name"
          autoComplete="name"
          autoFocus
          onChange={handleChangeName}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="price"
          label="Price"
          name="price"
          autoComplete="price"
          autoFocus
          onChange={handleChangePrice}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="location"
          label="Location"
          name="location"
          autoComplete="location"
          autoFocus
          onChange={handleChangeLocation}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="image"
          label="Image Link"
          //   type="image"
          id="image"
          autoComplete="mage"
          autoFocus
          onChange={handleChangeImage}
        />
        <Button
          type="submit"
          fullWidth
          onClick={handleSubmit}
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Create
        </Button>
      </Box>
    </Container>
  );
}
