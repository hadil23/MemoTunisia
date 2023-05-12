import React, { useState } from "react";

import {
  Avatar,
  Button,
  Paper,
  Grid,
  Typography,
  Container,
} from "@material-ui/core";
import Fichier1 from "../../images/Fichier1.png";
import fichier2 from "../../images/fichier2.jpg";
import khomsa from "../../images/khomsa2.jpg";

import { LoginSocialGoogle } from "reactjs-social-login";
import { GoogleLoginButton } from "react-social-login-buttons";
import useStyles from "./styles";
import LockIcon from "@material-ui/icons/Lock";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import Input from "./Input";

import { signin, signup } from "../../actions/auth";

const Auth = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  //  const state = null;
  const [showPassword, setShowPassword] = useState(false);
  //const isSignup = false;
  // return  isSignup into a stateField
  const [isSignup, setIsSignup] = useState(false);
  const history = useHistory();
  const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [formData, setFormData] = useState(initialState);
  const handleSubmit = (e) => {
    e.preventDefault();

    /// console.log(formData);
    if (isSignup) {
      dispatch(signup(formData, history));
    } else {
      dispatch(signin(formData, history));
    }
  };
  const switchMode = () => {
    setIsSignup((prevIsSignup) => !prevIsSignup);
    setShowPassword(false);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleShowPassworrd = () =>
    setShowPassword((prevShowPassword) => !prevShowPassword);

  // tester
  console.log("showPassword", showPassword);

  const googleAccess = ({ provider, data }) => {
    // console.log(provider, data);

    // console.log(data.id_token);
    try {
      dispatch({
        type: "AUTH",
        data: { result: data, token: data.access_token },
      });
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };
  const googleFailure = (error) => {
    console.log(error);
  };

  return (
    <Container component="main" maxWidth="lg">
      <Paper
        className={classes.paper}
        elevation={5}
        //elevation color
        style={{ backgroundColor: "#cfd88a8" }}
      >
        <form className={classes.form} onSubmit={handleSubmit}>
          <Avatar className={classes.avatar}>
            <LockIcon />
          </Avatar>
          <Typography style={{ color: "white" }} variant="h5">
            {isSignup ? "Sign up" : "Sign in"}
          </Typography>

          <Grid container spacing={2}>
            {isSignup && (
              <>
                <Input
                  className="inputStyle"
                  //color
                  variant="outlined"
                  name="firstName"
                  label="firstName Name"
                  handleChange={handleChange}
                  autoFocus
                  half
                />
                <Input
                  name="lastName"
                  label="Last Name"
                  handleChange={handleChange}
                  half
                />
              </>
            )}

            <Input
              name="email"
              label="Email Address"
              handleChange={handleChange}
              type="email"
            />

            <Input
              name="password"
              label="Password"
              handleChange={handleChange}
              type={showPassword ? "text" : "password"}
              // type="password"
              handleShowPassworrd={handleShowPassworrd}
            />
            {isSignup && (
              <Input
                name="confirmPassword"
                label="Repeat Password"
                handleChange={handleChange}
                type="password"
              />
            )}
          </Grid>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            className={classes.submit}
          >
            {isSignup ? "Sign up" : "Sign in"}
          </Button>

          <LoginSocialGoogle
            client_id={
              "581059358726-22787fcgsej74t18sgt8u01pqdd3b81a.apps.googleusercontent.com"
            }
            scope="openid profile email"
            discoveryDocs="claims_supported"
            access_type="offline"
            onResolve={googleAccess}
            onReject={googleFailure}
          >
            <Button className={classes.googleButton}>
              connect with google
            </Button>
          </LoginSocialGoogle>

          <Grid container justifyContent="flex-end">
            <Grid item>
              <Button style={{ color: "#006402" }} onClick={switchMode}>
                {isSignup
                  ? "Already have an account ? Sign In"
                  : "You don't have an account ? Sign Up"}
              </Button>
            </Grid>
          </Grid>
        </form>
        <img className={classes.media} src={khomsa} />
      </Paper>
    </Container>
  );
};

export default Auth;
