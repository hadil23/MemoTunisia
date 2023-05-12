import React, { useState, useEffect } from "react";
import {
  Container,
  Grow,
  Grid,
  Paper,
  AppBar,
  TextField,
  Button,
  Checkbox,
} from "@material-ui/core";
import Posts from "../Posts/Posts";
import Form from "../Form/Form";
import { useDispatch } from "react-redux";
import { getPosts, getPostsBySearch } from "../../actions/posts";
import useStyles from "./styles";
import "./style.css";
import Pagination from "../pagination";
import { Link, useHistory, useLocation } from "react-router-dom";
// input for tags
import ChipInput from "material-ui-chip-input";

// which page we are and what we are looking for
function useQuery() {
  //we can use it like a hook
  return new URLSearchParams(useLocation().search);
}

const Home = () => {
  const classes = useStyles();
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const query = useQuery();
  const history = useHistory();
  // if there is no page it must be in the first one
  const page = query.get("page") || 1;
  const searchQuery = query.get("searchQuery");
  const [search, setSearch] = useState("");
  const [tags, setTags] = useState([]);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    // alert(checked);
  }, [checked]);
  // useEffect(() => {
  //   dispatch(getPosts());
  // }, [currentId, dispatch]);
  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      searchPost();
    }
  };
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const searchPost = () => {
    //trim: to make sur there is not empty spaces
    if (search.trim() || tags) {
      // dispatch fetch search posts
      dispatch(getPostsBySearch({ search, tags: tags.join(",") }));
      //change the url
      history.push(
        `/posts/search?searchQuery=${search || ""}&tags=${tags.join(",")}`
      );
    } else {
      history.push("/");
    }
  };

  const handleAdd = (tag) => setTags([...tags, tag]);
  const handleDelete = (tagToDelete) =>
    setTags(tags.filter((tag) => tag !== tagToDelete));
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <Grow in>
      <Container maxWidth="xl">
        <Form currentId={currentId} setCurrentId={setCurrentId} />
        <br></br>

        <Grid
          className={classes.gridContainer}
          container
          justifyContent="space-between"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12} sm={6} md={6}>
            <AppBar
              className={classes.appBarSearch}
              position="static"
              color="inherit"
            >
              <TextField
                name="search"
                variant="outlined"
                label="Search Memories"
                onKeyPress={handleKeyPress}
                fullWidth
                // value={searchQuery}
                value={search}
                onChange={(e) =>
                  // history.push(
                  //   `/?searchQuery=${e.target.value || "none"}&page=1`
                  // )
                  setSearch(e.target.value)
                }
              />
              <ChipInput
                style={{ margin: "10px 0" }}
                value={tags}
                onAdd={handleAdd}
                onDelete={handleDelete}
                label="Search Tags"
                variant="outlined"
              />
              <Button
                onClick={searchPost}
                className={classes.searchButton}
                variant="contained"
              >
                Search
              </Button>
            </AppBar>
          </Grid>

          {user ? (
            <Grid item xs={12} sm={6} md={6}>
              <AppBar
                className={classes.appBarSearch}
                position="static"
                color="inherit"
                style={{
                  height: "197px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "row",
                  gap: "20px",
                }}
              >
                <label
                  style={{
                    fontSize: "2rem",
                  }}
                >
                  𝓜𝔂 𝓹𝓸𝓼𝓽𝓼
                </label>

                <label class="switch">
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={(e) => setChecked(e.target.checked)}
                  />
                  <span class="slider round"></span>
                </label>
              </AppBar>
            </Grid>
          ) : (
            <Button
              style={{
                fontSize: "2rem",
                color: "#0a6f10",
                marginRight: "200px",
              }}
              component={Link}
              to="/auth"
            >
              𝓢𝓲𝓰𝓷 𝓘𝓷{" "}
            </Button>
          )}

          <Grid item xs={6} sm={3} md={12}>
            <Posts setCurrentId={setCurrentId} checked={checked} />
          </Grid>
        </Grid>
        {!searchQuery && !tags.length && (
          <Paper className={classes.pagination} elevation={6}>
            <Pagination page={page} />
          </Paper>
        )}
      </Container>
    </Grow>
  );
};

export default Home;
