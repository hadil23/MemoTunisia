import React from "react";
import Post from "./Post/Post";
import useStyles from "./styles";
import { useSelector } from "react-redux";
import { Grid, CircularProgress } from "@material-ui/core";
const Posts = ({ setCurrentId, checked }) => {
  const { posts, isLoading } = useSelector((state) => state.posts);

  const classes = useStyles();
  if (!posts.length && !isLoading) return "no posts ";

  //console.log(posts);
  // return !posts?.length ? (
  return isLoading ? (
    <CircularProgress />
  ) : (
    <Grid
      className={classes.container}
      container
      alignItems="stretch"
      spacing={3}
    >
      {checked
        ? posts
            .filter(
              (post) =>
                post.creator ===
                JSON.parse(localStorage.getItem("profile")).result._id
            )
            .map((post) => (
              <Grid key={post._id} item xs={12} sm={12} md={12} lg={6}>
                <Post post={post} setCurrentId={setCurrentId} />
              </Grid>
            ))
        : posts.map((post) => (
            <Grid key={post._id} item xs={12} sm={12} md={12} lg={6}>
              <Post post={post} setCurrentId={setCurrentId} />
            </Grid>
          ))}
    </Grid>
  );
};
export default Posts;
