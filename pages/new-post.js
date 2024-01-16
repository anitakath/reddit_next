import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

//COMPONENTS
import Header from "@/components/Header/Header";
import NewPostForm from "@/components/Main/NewPost/NewPostForm";
import WebUser from "@/components/Main/WebUser";
import Start from "@/components/Start";





//STYLES
import styles from '../styles/Main/CreatePost.module.css'




const NewPost = () =>{





  

    return (
      <div>
        <div className="App">
          <Header />
          
          <NewPostForm />
        </div>
      </div>
    );
}

export default NewPost;