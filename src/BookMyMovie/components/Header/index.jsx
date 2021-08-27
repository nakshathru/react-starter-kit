import { useState } from 'react';
import {
  AppBar, Toolbar, IconButton, Typography, Badge,
  CssBaseline, Drawer, Divider, List, Container, Grid,
  Paper, InputBase,
} from '@material-ui/core';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import clsx from 'clsx';
import useStyles from './styledComponents';
import DrawerList from '../DrawerList';

const Header = () => {
  const styles = useStyles();
  const [open, setOpen] = useState(true);
  const fixedHeightPaper = clsx(styles.paper, styles.fixedHeight);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <>
      <CssBaseline />
      <AppBar position="fixed" className={clsx(styles.appBar, open && styles.appBarShift)}>
        <Toolbar className={styles.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            className={clsx(styles.menuButton, open && styles.menuButtonHidden)}
            onClick={handleDrawerOpen}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={styles.title}>
            BookMyMovie
          </Typography>
          <InputBase
            fullWidth
            className={styles.input}
            placeholder="Search"
            inputProps={{ 'aria-label': 'search' }}
          />
          <IconButton type="submit" className={styles.searchButton} aria-label="search">
            <SearchIcon />
          </IconButton>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(styles.drawerPaper, !open && styles.drawerPaperClose),
        }}
        open={open}
      >
        <div className={styles.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
          {DrawerList}
        </List>
      </Drawer>
      <main className={styles.content}>
        <div className={styles.appBarSpacer} />
        <Container maxWidth="lg" className={styles.container}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={8} lg={9}>
              <Paper className={fixedHeightPaper} />
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper} />
            </Grid>
            <Grid item xs={12}>
              <Paper className={styles.paper} />
            </Grid>
          </Grid>
        </Container>
      </main>
    </>

  );
};

export default Header;
