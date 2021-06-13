import React from "react"
import {Helmet} from "react-helmet";
import './index.css';
// import { motion } from "framer-motion";
import Typed from 'react-typed';
import Navbar from "../components/navbar.jsx"
import Banner from "../components/banner.jsx"
/*import TagManager from 'react-gtm-module'
const tagManagerArgs = {
  gtmId: 'GTM-TZL7W9Q'
}

TagManager.initialize(tagManagerArgs)
TODO: put helmet in component. npm run deploy keeps adding domain to CNAME*/
/*gh-pages -d public*/


export default function Home() {
  
  return  <div className="">
    <Helmet htmlAttributes={{ lang : 'en' }}>
      <meta charSet="utf-8" />
      <title>froggit</title>
      <meta name="title" content="froggit"></meta>
      <meta name="description" content="i got a website, but at what cost..." />
      <meta name="image" content="/static/fullfroggit.png"></meta>
      <meta property="og:title" content="froggit"></meta>
      <meta property="og:description" content="i got a website, but at what cost..."></meta>
      <meta property="og:image" content="/static/fullfroggit.png"></meta>
  </Helmet>
    <Banner /> { /* probably put the banner inside the navbar, make the navbar have a true or false banner and a text and color and icon? for the banner. an automatic date thing like it's my bday or happy pride month */ }
    <Navbar />
    <div className="pt-5 px-5 flex justify-center">
      <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
        <span className="block xl:inline"><Typed strings={['why do i have a website', 'man...', 'anyways i could write whatever here!', 'but why are you still here.', 'man why are you still here', 'welp thats enough typing for today', 'why did i get a website. man...']} typeSpeed={40} backSpeed={50} /></span>
      </h1>
      <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 cursor-wait">
        anyways so ye, this is a work in progress.
      </p>
    
      <div className="content-center flex justify-center items-center whitespace-pre-wrap">
        <h1 className="text-3xl font-bold py-10 thatfont"></h1>
      </div>
    </div>
  </div>
}
