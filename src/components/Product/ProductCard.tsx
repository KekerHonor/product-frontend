import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

interface ProductCardProps {
  id: string;
  name: string;
  price: string;
  image: string;
  location: string;
}

export default function ProductCard({
  id,
  name,
  price,
  image,
  location,
}: ProductCardProps) {
  return (
    <>
      <Card sx={{ width: 260 }}>
        <CardActionArea href={`/product/${id}`}>
          <CardMedia component="img" height="160" image={image} alt={name} />
          <CardContent>
            <Typography>{name}</Typography>
            <Typography variant="body2">{price}₮</Typography>
            <Typography variant="body2" color="text.secondary">
              {location}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
}
