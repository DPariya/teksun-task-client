import React, { useEffect, useState } from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Button from "@mui/material/Button";
import { connect } from "react-redux";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

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
function CartComponent({ state }) {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);

  console.log("state", state);
  const handleCart = (data) => {
    console.log("e", data);
    if (cart.indexOf(data) === -1) {
      setCart([...cart, data]);
    }
  };
  console.log("cart", cart);
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          p: 1,
          m: 5,
          bgcolor: "background.paper",
          height: 100,
          borderRadius: 1,
        }}
      >
        <Typography variant="h4">Cell Store</Typography>
        <IconButton aria-label="cart">
          <StyledBadge badgeContent={cart.length} color="secondary">
            <ShoppingCartIcon />
          </StyledBadge>
        </IconButton>
      </Box>
      <Box sx={{ flexGrow: 1, margin: 6 }}>
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
                  <Button variant="contained" onClick={() => handleCart(obj)}>
                    Add To cart
                  </Button>
                </Item>
              </Grid>
            ))}
        </Grid>
      </Box>
    </>
  );
}

const mapStateToProps = (state) => ({
  state: state,
});

// const mapDispatchToProps = (dispatch) => ({
//   addCart: (data) => dispatch(addTodo(data)),
// });

export default connect(mapStateToProps)(CartComponent);
