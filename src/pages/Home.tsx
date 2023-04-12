import { useEffect, useState } from "react";
import axiosInstance from "../utils/axiosUtil";
import { Button, Container } from "@mui/material";
import ProductList from "../components/Product/ProductList";
import { useNavigate } from "react-router-dom";

export default function Home(props: any) {
  const navigation = useNavigate();
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    await axiosInstance.get("/products/get").then((res) => {
      console.log(res.data);
      setData(res.data);
      console.log(data);
    });
    setLoading(false);
  };

  const logout = async () => {
    localStorage.removeItem("token");
    console.log("Logged Out");
    navigation("sign");
  };

  useEffect(() => {
    fetchData();
  }, []);

  return isLoading ? (
    <>Loading...</>
  ) : (
    <Container component={"main"}>
      <Button onClick={logout}>Logout</Button>
      <ProductList props={data} />
    </Container>
  );
}
