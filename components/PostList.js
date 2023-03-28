import { storyblokEditable } from "@storyblok/react";
import { useQuery } from "react-query";
import { getPosts } from "../actions/actions";
import Post from "./Post";

const PostList = ({ blok, fetchData }) => {      
  
  const { data: posts } = useQuery('posts', getPosts);
  
  if(!posts) {
    return <></>;    
  }

  return (
    <div className="mt-20 mb-20">
      <span className="text-blue-800 block mb-10 text-lg">List of posts. This comes from "our backend"</span>    
      <div className="flex flex-row flex-wrap" {...storyblokEditable(blok)}>        
          {posts.map(p => <Post key={p.id} {...p} />)}        
      </div>
    </div>
  );
};

export default PostList;
