import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import clsx from 'clsx';
import ListItem from '@material-ui/core/ListItem';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import Logo from "../assets/Quiz_image.png";
import styles from './Landing.module.css';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: 'flex',
  },
  menuBtn: {
    border: 'none',
    '&:focus': {
      border: 'none',
      outline: 'none',
    }
  },
  appBar: { 
    backgroundColor: "white" ,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    zIndex: 400,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
  },
  content: {
    flexGrow: 1,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },

  toolBar: { justifyContent: "space-between", flexWrap: "wrap" },
  title: {
    flexGrow: 1,
    color: "black"
  },
}));

const menuLinks = [
  { label: 'Home', id: 1, route: '/' },
  { label: 'Mission', id: 2, route: '/Mission' },
  { label: 'Create Your Quiz', id: 3, route: '/Login' },
  { label: 'Demo', id: 4, route: '/Demo' },
  { label: 'Login', id: 5, route: '/Login' }
];

const Header = () => {
    const classes = useStyles();

    const theme = useTheme();

    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
      setOpen(true);
    };

    const handleDrawerClose = () => {
      setOpen(false);
    };

    return ( 
        <>
            <div className={classes.root}>
                <AppBar 
                  position="fixed"
                  className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                  })}
                  variant="elevation"
                  color="transparent"
                  style={{zIndex:100000}}
                >
                    <Toolbar className={classes.toolBar}>
                        <Box m={1}>
                          <img 
                            src={Logo}
                            alt="Logo"
                            className={styles.logo_image}
                          />
                        </Box>
                        {menuLinks.map((menu) => (
                          <Link key={menu.id} component={RouterLink} to={menu.route} className={styles.allBtn}>
                            <Button className={styles.allBtn} color="inherit">
                              {menu.label}
                            </Button>
                          </Link>
                        ))}
                        <IconButton 
                          aria-label="open drawer" 
                          edge="end" 
                          onClick={handleDrawerOpen}
                          className={clsx(classes.menuBtn, {
                            [classes.hide]: open,
                          })} 
                          color="inherit"
                          >
                          <MenuIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <main 
                  className={clsx(classes.content, {
                    [classes.contentShift]: open,
                  })}>

                <div className={classes.drawerHeader} />

                </main>
                <Drawer
                  className={classes.drawer}
                  variant="temporary"
                  anchor="right"
                  open={open}
                  classes={{
                  paper: classes.drawerPaper,
                  }}
                >
                <div className={classes.drawerHeader}>
                  <IconButton className={styles.menuBtn} onClick={handleDrawerClose}>
                    {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                  </IconButton>
            </div>
            <Divider />
            <List>
              {menuLinks.map((menu) => (
                <ListItem component={RouterLink} to={menu.route} button key={menu.id}>
                  {menu.label}
                </ListItem>
              ))}
            </List>
            </Drawer> 
            </div>
        </>
     );
}
 
export default Header;