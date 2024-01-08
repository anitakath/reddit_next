
import { useEffect, useState } from "react";

//COMPONENTS
import Header from '@/components/Header/Header';
import Main from '@/components/Main/Main';

//REDUX
import {Provider} from 'react-redux'
import store from '@/store';

//HOOKS
import useSWR from 'swr'

import { supabase } from "@/services/supabaseClient";

  //fetchet hits the endpoint (api/get-posts) and retrieves its result as json. result is named data
const fetcher = (...args) => fetch(...args).then((res) => res.json());


export default function Home() {

  

  const [myPosts, setMyPosts] = useState()

  const {data, error} = useSWR('/api/get-post', fetcher /*, {refreshInterval: 200} */)



  useEffect(() => {
    if (error) {
      console.error("Error fetching data:", error);
    }
    if (data && data.data.length > 0) {
      setMyPosts(data);
    }
  }, [data, error]);

  useEffect(()=>{
    if(!data) return

    setMyPosts(data.data)
  }, [data])



  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Main posts={myPosts} />
      </div>
    </Provider>
  );
          
       
}
