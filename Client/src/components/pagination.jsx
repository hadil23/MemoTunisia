import React, {useEffect} from "react";
import {Pagination , PaginationItem} from '@material-ui/lab';
import useStyles from './styles';
import { Link } from "react-router-dom";
import { useDispatch , useSelector} from "react-redux";
import { getPosts } from "../actions/posts";



const Paginate = ({page}) => {

    const {numberOfPages}=useSelector((state)=>state.posts);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        if (page) {
          dispatch(getPosts(page));
        }
      }, [dispatch, page]);


    return (
        <Pagination

            classes={{ ul: classes.ul }}
            //nbr of pages 
            count={numberOfPages}
            //current page
            page={Number(page) || 1}
            //size of the pagination
            variant="outlined"
            //color of the pagination
            color="#afffb8"
            
            //shape of the pagination
            renderItem={(item) => (

                <PaginationItem {...item} 
                style={{backgroundColor:"white" , color:"#4b6d4f" }}
                component={Link} to={`/posts?page=${item.page}`}

                />
            )}
        />
    )




};

export default Paginate;
