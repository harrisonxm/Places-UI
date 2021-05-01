import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, IconButton, Toolbar, Collapse } from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link as Scroll } from 'react-scroll';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    fontFamily: 'Nunito',
  },
  appbar: { background: 'none' },
  appbarTitle: {
    flexGrow: '1',
  },
  appbarWrapper: {
    width: '80%',
    margin: '0 auto',
  },
  colorText: {
    color: '#5AFF3D',
  },
  downIcon: {
    color: '#5AFF3D',
    fontSize: '4rem',
  },
  sortIcon: {
    color: '#fff',
    fontSize: '2rem',
  },
  title: {
    color: '#fff',
    fontSize: '4.5rem',
  },
  titleContainer: {
    textAlign: 'center',
  },
}));

function Header() {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);
  return (
    <div className={classes.root} id="header">
      <AppBar className={classes.appbar} elevation={0}>
        <Toolbar className={classes.appbarWrapper}>
          <h1 className={classes.appbarTitle}>
            My<span className={classes.colorText}>Island.</span>
          </h1>
          {/* Icon button wrapper */}
          <IconButton>
            <SortIcon className={classes.sortIcon} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})} collapsedHeight={50}>
        <div className={classes.titleContainer}>
          <h1 className={classes.title}>
            Welcome to <br /> My <span className={classes.colorText}>Island.</span>
          </h1>
          <Scroll to="location-to-visit" smooth={true}>
            <IconButton>
              <ExpandMoreIcon className={classes.downIcon} />
            </IconButton>
          </Scroll>
        </div>
      </Collapse>
    </div>
  );
}

export default Header;
