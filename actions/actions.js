import axios from "axios";
import { SERVER_URL, STORYBLOK_SERVER_URL } from "../config";

export const loginUserAction = async () => {    
    return {user: "test"};
}


export const getPosts = async () => {
    const url = `${SERVER_URL}/posts`;
    const {data} = await axios.get(url);    
    return data;   
}


export const getProjects = async (filter) => {
    let url = `${STORYBLOK_SERVER_URL}`;          
    if (filter !== "all") {
        url += `&filter_query[type][in]=${filter}`;
    } 
    const {data} = await axios.get(url);       
    return data.stories;   
}