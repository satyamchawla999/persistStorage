import { createAsyncThunk } from "@reduxjs/toolkit";
import { Posts,Users } from "../../Service/service";
import { fetchUserss,fetchPostss } from "./actionType";
import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com/posts";

export const fetchPosts = createAsyncThunk(
    fetchPostss,
    async()=>{
        const response = await Posts();
        console.log(response.data)
        return response?.data
    }
)


export const fetchUsers = createAsyncThunk(
    fetchUserss,
    async()=>{
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        console.log(response.data)
        return response?.data
    }
)


