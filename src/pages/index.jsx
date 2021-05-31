import React from "react"
import {Helmet} from "react-helmet";
import './index.css';
// import { motion } from "framer-motion";
import Typed from 'react-typed';
import Navbar from "../components/navbar.jsx"
import Banner from "../components/banner.jsx"


export default function Home() {
  
  return  <div className="">
    <Helmet>
      <meta charSet="utf-8" />
      <title>froggit</title>
      <meta name="title" content="froggit"></meta>
      <meta name="description" content="i got a website, but at what cost..." />
      <meta name="image" content="../../static/fullfroggit.png"></meta>
      <meta property="og:title" content="froggit"></meta>
      <meta property="og:description" content="i got a website, but at what cost..."></meta>
      <meta property="og:image" content="../../static/fullfroggit.png"></meta>
  </Helmet>
    <Banner /> { /* probably put the banner inside the navbar, make the navbar have a true or false banner and a text and color and icon? for the banner. an automatic date thing like it's my bday or happy pride month */ }
    <Navbar></Navbar>
    <div className="content-center flex justify-center items-center whitespace-pre-wrap">
    <h1 className="text-3xl font-bold py-10 thatfont"><Typed strings={['why do i have a website', 'man...', 'anyways i could write whatever here!', 'but why are you still here.', 'man why are you still here', 'welp thats enough typing for today', 'why did i get a website. man...']} typeSpeed={40} backSpeed={50} /></h1>
    </div>
    
  </div>
}
