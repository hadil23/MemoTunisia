import React, { useState, useEffect } from "react";
import useStyles from "./styles";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";
import { createPost, updatePost } from "../../actions/posts";
import { Link, useHistory } from "react-router-dom";

const Form = ({ currentId, setCurrentId }) => {
  const post = useSelector((state) =>
    currentId ? state.posts.posts.find((p) => p._id === currentId) : null
  );

  const [postData, setPostData] = useState({
    // creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });
  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const user = JSON.parse(localStorage.getItem("profile"));
  const clear = () => {
    setCurrentId(null);
    setPostData({
      // creator: "",
      title: "",
      message: "",
      tags: "",
      selectedFile: " ",
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentId === 0) {
      dispatch(createPost({ ...postData, name: user?.result?.name }, history));

      clear();
    } else {
      dispatch(
        updatePost(currentId, { ...postData, name: user?.result?.name })
      );

      clear();
    }
  };
  const [paperTag, setPaperTag] = useState("");
  const [paperTagDispalyed, setPaperTagDisplayed] = useState(false);

  useEffect(() => {
    const paper = document.getElementById("paperT");
    console.log(paper);
    setPaperTag(paper);
  }, []);

  const showFormm = () => {
    //how to change paper style
    setPaperTagDisplayed(!paperTagDispalyed);
    if (paperTagDispalyed) {
      paperTag.style.height = "95px";
    } else {
      paperTag.style.height = "505px";
    }
  };

  if (!user?.result?.name) {
    return (
      <Paper className={classes.paper} elevation={7}>
        <Typography variant="h6" align="center">
          Please Sign In to create your own memories and like other's memories.
        </Typography>
      </Paper>
    );
  }

  return (
    <Paper
      style={{
        height: "95px",
        minWidth: "1100PX",
        overflow: "hidden",
        transition: "height 1s ease-out",
      }}
      className={classes.paper}
      id="paperT"
    >
      <button
        style={{
          border: "none",
          background: "none",
          outline: "none",
          cursor: "pointer",
        }}
        onClick={showFormm}
      >
        {paperTagDispalyed ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="40"
            viewBox="0 0 24 24"
            width="40"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="40"
            viewBox="0 0 24 24"
            width="40"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
          </svg>
        )}
      </button>

      <form
        autoComplete="off"
        // noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6" onClick={showFormm}>
          {currentId
            ? "Editing "
            : "Share your experience with others and create your "}
          {"  "}
          Memo
        </Typography>

        {/*ho create the post */}
        {/* <TextField
    name="creator"
    variant="outlined"
    label="Creator"
    fullWidth
    value={postData.creator}
    onChange={(e) =>
      setPostData({ ...postData, creator: e.target.value })
    }
  /> */}
        <TextField
          style={
            {
              //backgroundColor: "#eee5b0",
            }
          }
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          required
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />

        <TextField
          style={
            {
              // backgroundColor: "#eee5b0",
            }
          }
          name="message"
          variant="outlined"
          label="Message"
          fullWidth
          required
          value={postData.message}
          onChange={(e) =>
            setPostData({ ...postData, message: e.target.value })
          }
        />
        <TextField
          style={
            {
              //backgroundColor: "#eee5b0",
            }
          }
          name="tags"
          variant="outlined"
          label="Tags (coma separated)"
          fullWidth
          required
          value={postData.tags}
          onChange={(e) =>
            setPostData({ ...postData, tags: e.target.value.split(",") })
          }
        />

        {/*we will use this to upload images */}

        <div className={classes.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
        </div>
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          Submit
        </Button>
        <Button
          variant="contained"
          className={classes.buttonClear}
          size="small"
          //onClick={clear}
          fullWidth
          type="reset"
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
