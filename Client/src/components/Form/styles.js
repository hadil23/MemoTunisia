import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
  paper: {
    //placer a la debut de container

    display: "flex",
    flexDirection: "column",
    alignItems: "center",

    width: "100%",

    boxShadow: "0px 1px 10px #9dc190",

    padding: theme.spacing(2),
    
  },
  form: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  fileInput: {
    backgroundColor: "white",

    width: "97%",
    margin: "10px 0",
  },
  buttonSubmit: {
    marginBottom: 10,
    backgroundColor: "#609966",
  },
  buttonClear: {
    backgroundColor: "#929900",
  },
}));
