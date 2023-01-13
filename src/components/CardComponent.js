import React, { useEffect, useState } from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
  height: "150px",
  width: "150px",
});
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
function CardComponent() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = () => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((json) => setData(json.products));
  };
  console.log("data", data);
  return (
    <Box sx={{ flexGrow: 1, margin: 6 }}>
      <Typography variant="h4">Cell Store</Typography>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {data.length > 0 &&
          data.slice(0, 6).map((obj, index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <Item>
                <Img alt="complex" src={obj.thumbnail} />
                <Typography gutterBottom variant="subtitle1" component="div">
                  {obj.title}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Full resolution 1920x1080 • JPEG
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {obj.price}
                </Typography>
              </Item>
            </Grid>
          ))}
      </Grid>
    </Box>
  );
}

export default CardComponent;
