import React, { useState , useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@mui/material';
import { useDispatch } from 'react-redux';

import { getPosts } from './actions/posts';
import memories from './images/memories.png';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import useStyles from './styles';

const App = () => {
  const [currentId , setCurrentId] = useState(null);
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <Typography className={classes.heading} variant="h2" align="center">
            Memories
          </Typography>
          <img className={classes.image} src={memories} alt="icon" height="60" />
        </div>
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justifyContent="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid size={{ xs: 12, md: 7 }}>
              <Posts setCurrentId={setCurrentId}/>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Form currentId = {currentId} setCurrentId={setCurrentId}/>
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
