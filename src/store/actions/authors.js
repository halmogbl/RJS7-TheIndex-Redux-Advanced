//(to be dispatched when fetching and filtering authors)
/*
-------------------from the task redux advance ---------------------
2.In actions/authors.js
    * Import the actionTypes.
    * Create a fetchAuthors action (requires an axios call) that dispatches a payload of authors fetched from the axios call.
    * Create a filterAuthors action. This action receives a query as a parameter, and returns that query as its payload.
---------------------------Explainations---------------------------
A) 
Create a fetchAuthors action 
means we will do AXIOS call to specific url 
then we will get whatever this call return 
then we will send it (dispatch it) to reducer through payload
so we need to import the axios library 

B)  now we need to dispatch all of this, so the reducer can get it
    if the dispatch is an axios call it will take payload and type else it just retun an object 
C) redux dunck is dealing wiht axios dispatch


-------------------------------------------------------------------
*/

import * as actionTypes from "./actionTypes";
import axios from "axios"; //A

const instance = axios.create({
  baseURL: "https://the-index-api.herokuapp.com"
});

// create the action its self
export const fetchAuthors = () => {
  return async dispatch => {
    try {
      const res = await instance.get("api/authors/"); // this is where i make my axios request.

      const authors = res.data; // authors is an array of all the authors, it is our payload
      //B
      dispatch({
        type: actionTypes.FETCH_AUTHORS,
        payload: authors
      });
    } catch (error) {
      console.error(error);
    }
  };
};
// simply this actoin will receive a query and then we will pass the query to the reducer as payload
// no dispatch here cause there is no axios request

export const filterAuthors = query => {
  return {
    type: actionTypes.FILTER_AUTHORS,
    payload: query
  };
};
