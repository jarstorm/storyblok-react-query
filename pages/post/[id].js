import Head from "next/head";
import PostDetailComponent from "../../components/PostDetail";
import { SERVER_URL } from '../../config';

export default function PostDetail({data}) {    
    return (
        <div>
          <Head>
            <title>Post detail</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
    
          <PostDetailComponent {...data}/>
        </div>
      );
}


export async function getStaticProps({params}  ) {
  const {id} = params;
  const url = `${SERVER_URL}/posts/${id}`;    
  const response = await fetch(url);    
  const data = await response.json()
  
  return {
    props: {
      data,
    },
  };
}

export async function getStaticPaths() {

    return {
      paths:[{params: {id: "1"}}],
      fallback: true,
    };
  }
  
  