import React from "react";
import { useParams } from "react-router";
import { useGetMenuByIdQuery } from "../../services/menuApi";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const { data} = useGetMenuByIdQuery(id);
  console.log(data)
  return (
    <Container>
      <Grid container spacing={2}>
        <Card sx={{ maxWidth: 345, marginTop: 10 }}>
          {data && (
            <Grid item xs={8}>
              <CardMedia
                sx={{ height: 100 }}
                image={data.image}
                title={data.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  <b>{data.title}</b>
                </Typography>
                <Typography variant="body2">{data.price}$</Typography>
              </CardContent>
              <CardActions>
                <Button>
                  <Link>Back Home</Link>
                </Button>
              </CardActions>
            </Grid>
          )}
        </Card>
      </Grid>
    </Container>
  );
};

export default Detail;
