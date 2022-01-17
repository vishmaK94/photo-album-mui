import React, { useState } from "react";
import {
  Typography,
  CssBaseline,
  AppBar,
  Toolbar,
  Container,
  Grid,
  Button,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  TextField,
} from "@material-ui/core";
import { PhotoCamera } from "@material-ui/icons";
import useStyles from "./styles";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

const App = () => {
  const classes = useStyles();
  const [photoName, setPhotoName] = useState("");
  return (
    <>
      <CssBaseline />
      <AppBar position="sticky">
        <Toolbar>
          <PhotoCamera className={classes.icon} />
          <Typography variant="h6">TheRed</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div className={classes.container}>
          <Container maxWidth="sm">
            <Typography
              align="center"
              variant="h2"
              color="textPrimary"
              gutterBottom
            >
              TheRed
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
              gutterBottom
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
              recusandae quis eum quo voluptatibus, veritatis quibusdam alias
              quam in maxime voluptatum? Suscipit voluptatum blanditiis
              consequatur veritatis. Doloremque nulla necessitatibus rerum?
            </Typography>
            <div className={classes.buttons}>
              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    Check this one!
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    And this one!
                  </Button>
                </Grid>
              </Grid>
            </div>
            <div className={classes.buttons}>
              <TextField
                label="Search Photo"
                id="custom-css-outlined-input"
                value={photoName}
                onChange={(e) =>
                  setPhotoName(() => {
                    console.log(e.target.value);
                  })
                }
              />
            </div>
          </Container>
        </div>
        <Container maxWidth="md">
          <Grid container className={classes.cardGrid} spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography variant="h5" gutterBottom>
                      Hello World
                    </Typography>
                    <Typography>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nobis, exercitationem?
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Share
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <footer className={classes.footer}>
        <Typography variant="h6" align="center">
          Trademark @CORT
        </Typography>
      </footer>
    </>
  );
};

export default App;
