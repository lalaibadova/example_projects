import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Container, Grid } from "@mui/material";
import { useGetAllMenuQuery } from "../../services/menuApi";
import { Link } from "react-router-dom";
const Home = () => {
  const { data: menu } = useGetAllMenuQuery();

  return (
    <Container>
      <Grid container spacing={2}>
        <Card sx={{ maxWidth: 345, marginTop: 10 }}>
          {menu &&
            menu.data.map((item) => {
                return (
                <Grid item xs={8}>
                  <CardMedia
                    sx={{ height: 100 }}
                    image={item.image}
                    title={item.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      <b>{item.title}</b>
                    </Typography>
                    <Typography variant="body2">{item.price}$</Typography>
                  </CardContent>
                  <CardActions>
                    <Button>
                      <Link to={`/detail/${item._id}`}>Detail</Link>
                    </Button>
                  </CardActions>
                </Grid>
              );
            })}
        </Card>
      </Grid>
    </Container>
  );
};

export default Home;
