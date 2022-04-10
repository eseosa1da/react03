import React, {useContext } from 'react';
import Button from '../UI/Button/Button';
import AuthContext from '../store/auth-context';
import Card from '../UI/Card/Card';
import classes from './Home.module.css';

const Home = () => {


  const logoutCtx = useContext(AuthContext);

  return (
    <Card className={classes.home}>
      <h1>Welcome back!</h1>
      <Button onClick={logoutCtx.onLogout}>Logout</Button>
    </Card>
  );
};

export default Home;
