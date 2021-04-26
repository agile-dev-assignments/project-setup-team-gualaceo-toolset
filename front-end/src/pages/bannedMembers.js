import React, { useEffect, useState } from "react";
import { Container, CssBaseline, AppBar, Toolbar } from "@material-ui/core";
import Avatar from "@material-ui/core/avatar";
import withStyles from "@material-ui/core/styles/withStyles";
import { useHistory, useLocation } from "react-router-dom";
import Button from "@material-ui/core/Button";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { Typography, Card, CardContent } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Loading from "../components/loading";
import styles from "../styles/bannedMembersStyles";
import {is_expired} from "../components/authentication.js"
import Logout from "../components/logout";

const BannedMembers = (props) => {
  let history = useHistory();
  let location = useLocation()
  let state = location.state
  let group_id = state.id
  const { classes } = props;
  const [uiLoading, setuiLoading] = useState(true);
  const [openConfirmLogout, setOpenConfirmLogout] = useState(false);


  const BannedMembers = [
    {
      name: "Jerry",
      username: "tro11er",
    },
    {
      name: "Alfredo",
      username: "al23",
    },
    {
      name: "Jackie",
      username: "jackijax",
    },
    {
      name: "Henry",
      username: "hen-wryyy",
    },
  ];

  const goLastPage = () => {
    return history.push({
      pathname: "/membersOwner",
      state: state
    })
  }

  useEffect(() => {
    if (is_expired(localStorage))
    {
        return history.push("/"); 
    }

    setuiLoading(false);
  }, []);

  const handleUnban = (username) => {
    console.log(`You have unbanned user: ${username}`);
  };

  if (uiLoading === true) {
    return <Loading />;
  } else {
    return (
      <div className={classes.body}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.root}>
            <div className={classes.padding}></div>
            <AppBar>
              <Toolbar className={classes.toolbar}>
                <Button
                  onClick={goLastPage}
                  startIcon={<ArrowBackIosIcon className={classes.back} />}
                ></Button>
                <Typography variant="h5" className={classes.heading}>
                  Banned Members
                </Typography>
                <Button
                  color="inherit"
                  onClick={() => {
                    setOpenConfirmLogout(!openConfirmLogout);
                  }}
                  className={classes.logout}
                >
                  Logout
                </Button>
                <div style={{ position: "absolute" }}>
                  <Logout
                    open={openConfirmLogout}
                    setOpen={setOpenConfirmLogout}
                  />
                </div>
              </Toolbar>
            </AppBar>
            {BannedMembers.map((member) => (
              <Card fullWidth className={classes.cards}>
                <CardContent className={classes.cardContent}>
                  <Box className={classes.member}>
                    <Box>
                      <Avatar className={classes.avatar} variant="rounded" />
                    </Box>
                    <Box>
                      <Typography className={classes.cardText}>
                        {member.name}
                      </Typography>
                    </Box>
                    <Box>
                      <Typography className={classes.cardText}>
                        ({member.username})
                      </Typography>
                    </Box>
                    <Box>
                      <Button
                        color="primary"
                        size="small"
                        variant="contained"
                        onClick={() => handleUnban(member.username)}
                      >
                        <Typography color="secondary">Unban</Typography>
                      </Button>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </div>
    );
  }
};

export default withStyles(styles)(BannedMembers);
