import React from "react";
import './Rightbar.css';
import spaceshooter from "../images/spaceshooter.jpeg";
import netflix from "../images/netflix.jpeg";
import academy from "../images/academy.png";
import youtube from "../images/youtube.png";
import js from "../images/js.png";
import { Input } from "web3uikit";


const Rightbar = () => {
  const trends = [
    {
      img: spaceshooter,
      text: "Trons Justin Sun Talks USDD in Wake of LUNA & UST...",
      link: "https://www.coindesk.com/tv/first-mover/first-mover-may-20-2022/",
    },
    {
      img: netflix,
      text: "The fisrt Moralis Project! Let's Netflix and chill...",
      link: "https://moralis.io/moralis-projects-learn-to-build-a-web3-netflix-clone/",
    },
    {
      img: academy,
      text: "Master DeFi in 2022. Start  at the Moralis Academy...",
      link: "https://academy.moralis.io/courses/defi-101",
    },
    {
      img: js,
      text: "Become a Web3 Developer with just simple JS...",
      link: "https://academy.moralis.io/all-courses",
    },
    {
      img: youtube,
      text: "Best youtube channel to learn about Web3...",
      link: "https://www.youtube.com/channel/UCgWS9Q3P5AxCWyQLT2kQhBw",
    },
  ];

  return (
    <>
  <div className="rightbarContent">
   < Input 
   label="search Twitter"
   name="Search Twitter"
   prefix="search"
   labelBgColor="#141d26"
   ></Input>

  <div className="trends">
    News For You
    {trends.map((e) => { 
        return(
          <>
          <div className="trend" onClick={() => window.open(e.link)}> 
          <img src={e.img} className="trendImg"></img>
          <div className="trendText">{e.text}</div>
          </div>
           </>
        )
    })}
   </div>

   
   </div>
    </>
  );
};

export default Rightbar;

