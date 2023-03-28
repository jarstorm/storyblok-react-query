import React, { useState } from "react";
import "../styles/globals.css";
import { storyblokInit, apiPlugin } from "@storyblok/react";
import Feature from "../components/Feature";
import Grid from "../components/Grid";
import Page from "../components/Page";
import Teaser from "../components/Teaser";
import Image from "../components/Image";
import PostList from "../components/PostList";
import Layout from "../components/Layout";
import SinglePost from "../components/SinglePost";
import { STORYBLOK_TOKEN } from "../config";
import FilterProjects from "../components/FilterProjects";
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { AuthContext } from "../context/context";

const components = {
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
  page: Page,
  Image: Image,
  PostList: PostList,
  post: SinglePost,
  filterprojects: FilterProjects
};

storyblokInit({
  accessToken: STORYBLOK_TOKEN,
  use: [apiPlugin],
  components,
});

function MyApp({ Component, pageProps }) {  
  const [queryClient] = React.useState(() => new QueryClient())

  const [user, setUser] = useState(null);  
  
  return (     
    <AuthContext.Provider value={{user, setUser}}>      
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Hydrate>
      </QueryClientProvider>      
    </AuthContext.Provider>
  );
}

export default MyApp;

