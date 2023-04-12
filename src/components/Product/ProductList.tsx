import { Box, Grid } from "@mui/material";
import ProductCard from "./ProductCard";

export default function ProductList(props: any) {
  console.log(props.props);
  return (
    // <Box sx={{ flexGrow: 1, backgroundColor: "black" }}>
    <Grid container spacing={3} wrap="wrap" sx={{ backgroundColor: "black" }}>
      {props.props.map((product: any) => (
        <Grid item>
          <ProductCard
            id={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
            location={product.location}
          ></ProductCard>
        </Grid>
      ))}
    </Grid>
    // </Box>
  );
}
