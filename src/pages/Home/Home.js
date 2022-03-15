import React,{useEffect} from "react";
import "./Home.css";
import { Home1 } from "../../components/HomeComponents/Home1";
import { Home2 } from "../../components/HomeComponents/Home2";
import { Home3 } from "../../components/HomeComponents/Home3";
import { useDocumentTitle } from "../../components/TitleChange/TitleChange";
import { AnimatePage } from "../../components/Animate/AnimatePage";





export const Home = () => {
  useDocumentTitle('Platform | Home')
  
  return (
    <AnimatePage>
      <div>
        <Home1 />
        <Home2 />
        <Home3 />
      </div>
    </AnimatePage>
  );
};
