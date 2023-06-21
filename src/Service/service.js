import axios from "axios";

export const Posts = ()=>(axios.get("https://jsonplaceholder.typicode.com/posts"));
export const Users = ()=>(axios.get("https://jsonplaceholder.typicode.com/users"));


