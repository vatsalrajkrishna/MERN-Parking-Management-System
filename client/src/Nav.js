import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import {getUser, logout} from './helpers';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import HomeIcon from '@material-ui/icons/Home';
import AddIcon from '@material-ui/icons/Add';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty';
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
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
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

const  Nav= ({history}) => {
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
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            PARKING MANAGEMENT SYSTEM
          </Typography>
          <Typography>
          {!getUser() && (
              
                <li className="nav-item"  style={{ marginLeft: 700}}>
                <Link to="/Login"  style={{ color: 'white'}}    >ADMIN LOGIN
                <img src="../sales.png"  alt="admin" width="28" height="30"  />
                </Link>
                </li>
            )}
            {getUser() && (
               
                <li onClick={() => logout(()=>history.push('/'))} className="nav-item" style={{ marginLeft: 700}}>
                    <Link style={{ color: 'white'}}>LOGOUT
                <img src="../sales.png"  alt="admin" width="28" height="30"  />
                </Link>
                </li>
            )}
            </Typography>
        </Toolbar>
       
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="navbar"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        
        <List>
            
            <ListItem button >
                <Link to="/" className="nav-link">
                <ListItemIcon> <HomeIcon />HOME
                </ListItemIcon>
                </Link>
            </ListItem>
            <ListItem button >
            <Link to="/Create" className="nav-link">
            <ListItemIcon> <AddIcon />ADD DATA
            </ListItemIcon>
            </Link>
            </ListItem>
            <ListItem button >
            <Link to="/Read" className="nav-link">
            <ListItemIcon> <InboxIcon /> READ RECORDS
            </ListItemIcon>
            </Link>
            </ListItem>
            <ListItem button >
            <Link to="/Token" className="nav-link">
            <ListItemIcon> <VpnKeyIcon /> READ TOKEN
            </ListItemIcon>
            </Link>
            
            </ListItem>
            <ListItem button >
            <Link to="/Expiry" className="nav-link">
            <ListItemIcon> <HourglassEmptyIcon /> EXPIRED
            </ListItemIcon>
            </Link>
            
            </ListItem>
            
        </List>
      </Drawer>
      
       
       
    </div>
  );
}


export default withRouter(Nav);
