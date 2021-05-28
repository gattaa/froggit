import React from "react"
import {Helmet} from "react-helmet";
import './index.css';
import Navbar from "../components/navbar.jsx"


export default function Home() {
  
  return  <div className="container">
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
    <Navbar></Navbar>
    <div className="content-center flex justify-center items-center whitespace-pre-wrap">
    <h1 className="text-9xl font-bold">404!</h1>
    <h2 className="font-semibold">the page might not exist yet,{"\n"}or you followed a broken link.</h2>
    </div>
    {/* TODO go back home */}
    {/*<h1 className="thatone"><Typed strings={['why do i have a website', 'man...', 'anyways i could write whatever here!', 'but why are you still here.', 'man why are you still here', 'welp thats enough typing for today', 'wade, put the site like how it was before please', 'why did i get a website. man...']} typeSpeed={40} backSpeed={50} /></h1>*/}
  </div>
}
