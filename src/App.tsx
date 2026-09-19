import { Suspense, useState } from 'react';
import Nav from './Component/Nav';
import Banner from './Component/Banner';
import Content from './Component/Content/Content';
import type { IContent } from './Type/Content';
import { ToastContainer } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 
import Footer from './Component/Footer';


const ContentPromise = async() : Promise<IContent[]> => {
  const res = await fetch('/data.json');
  const data = await res.json();
  return data;
}

function App() {
  

  return (
    <>
    
    <Nav></Nav>
    <Banner></Banner>
    

    <Suspense fallback = {<p>Loading...</p>}>
      <Content ContentPromise = {ContentPromise()}></Content>
    </Suspense>

     <ToastContainer></ToastContainer> 

     <Footer></Footer>

    </>
  )
}

export default App
