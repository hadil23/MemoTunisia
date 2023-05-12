import { makeStyles } from "@material-ui/core/styles";
import { deepPurple, red } from "@material-ui/core/colors";

export default makeStyles((theme) => ({
  appBar: {
    //shadow
    boxShadow: "0px 1px 70px #9dc190",
    background: "black",
    //borderRadius: 15,
    marginBottom: "30px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 50px",
    width: "100vw",
    position: "fixed",
  },
  heading: {
    color: "white",
    textDecoration: "none",
  },
  image: {
    marginLeft: "15px",
  },
  toolbar: {
    color: "white !important",

    display: "flex",
    justifyContent: "flex-end",
    width: "700px",
  },
  profile: {
    paddingLeft:"15px",
    display: "flex",
    // backgroundColor: "red",

    justifyContent: "space-between",
    width: "200px",
  },
  // userName: {
  //   display: "flex",
  //   alignItems: "center",
  // },
  brandContainer: {
    display: "flex",
    alignItems: "center",
  },
  purple: {
    color: "#4b6d4f",
    backgroundColor: "white",
  },
}));
