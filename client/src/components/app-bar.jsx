import React from 'react';
import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { useAppBarStyles } from '../styles/app-bar-styles';

export const ButtonAppBar = () => {
  const classes = useAppBarStyles();
  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          <IconButton
            edge='start'
            className={classes.menuButton}
            color='inherit'
            aria-label='menu'>
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' className={classes.title}>
            Nodemailer
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};
