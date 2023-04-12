import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axiosInstance from "../utils/axiosUtil";
import {
  Box,
  Card,
  CardActionArea,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState<any>({});
  const [isLoading, setLoading] = useState(false);

  const fetchProductData = async () => {
    setLoading(true);
    await axiosInstance.get(`/products/${id}`).then((res) => {
      console.log(res.data);
      setProduct(res.data);
      console.log(product);
    });
    setLoading(false);
  };

  useEffect(() => {
    fetchProductData();
  }, []);

  return isLoading ? (
    <>Loading...</>
  ) : (
    <Box sx={{ flexGrow: 1 }}>
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Link to={"/"}>
          <ArrowBackRoundedIcon></ArrowBackRoundedIcon>
        </Link>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Card>
              <CardActionArea sx={{ "&:hover": { cursor: "zoom-in" } }}>
                <CardMedia
                  component="img"
                  height="400"
                  image={product.image}
                  alt={product.name}
                />
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ pl: 2 }}>
              <Typography variant="h4" gutterBottom>
                {product.name}
              </Typography>
              <Typography variant="h6" gutterBottom>
                {product.price}₮
              </Typography>
              <Typography variant="body1" gutterBottom>
                {product.location}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
