import Head from 'next/head'
import Link from 'next/link'
import Script from 'next/script'

import Navbar from '../components/navbar/index'
import Tattoo from '../components/tattoo/index'
import Paintings from '../components/paintings/index'


import Image from 'next/image'


import horihibaner from '../public/img/horihibaner.svg'
import imgprofile from '../public/img/imgprofile.svg'


import Form from '../components/form/index'
import Footer from '../components/footer/index'



export default function Home (){
  return(
    <div>
      <Head>
        <title>Hori-Hi Home</title>
        <link rel="icon" href="favicon.ico"/>
      </Head>

      <div className="global_container">
        
      <Navbar/>


        <div className="layer_container1">
        <div className="container1_img">
        <Image
        
        alt="horihi baner"
        src={horihibaner}
        
        />
        </div>
        <p className="container1_p">“The fact that you can drive a nail with a screwdriver does not mean that it is a hammer.”</p>
            
        </div>
        <div className="layer_container2">
         
         <div className="global_text1">
          <div className="container2_text1">
            <p>ABOUT ME </p>
            
          </div>
          <div className="container2_text2">
            <div>私について</div>
            
          </div>
         </div>
         
          <div className="container2_text3">
            <Image
             src={imgprofile}
             alt='imgprofile'
            />
          </div>
          <div id="layer2"className="global_text4">
           <div className="container2_text4">
              <p>Hi, my dear friend thank you so much for taking your time and visit my website. Nice to meet you. I’m Diego but all one calls me Ladiega. I’m was born in Bogota Colombia and I’ve been tattooing since 2004. 
In these years, I traveled around South America, most of the time, and meet a lot of good histories. Many times I took my bike and travel some roads and put myself in an apprenticeship about life and of course, the love of my life THE TATTOO as a way to live. Right now I’m living in Bogota and my principal tattoo references are influenced by the Brazilian tattoo style combining a lot of cultural interpretations.
Hope to see you soon!!!.</p>
            </div>
          </div>

        <div className="global_text5">

          <div className="container2_text5">
             <div className="container2_dot"></div>
              <div className="container2_learnmore">
              
              <Link href="/about">
                <a>LEARN MORE</a>
              </Link>
              </div>
          </div>
        
            
        
        </div>


        </div>

        <Paintings/> 
        <Tattoo/>
        


        


        
       
      </div>
      <Form/>

      <Footer/>

      <style jsx>
        {`
            * > a{
              color:black;
            }
        
          .global_container{
            background:none;
            font-family: 'Noto Sans JP', sans-serif;
            
            
            
          }
          

          .layer_container1{
           
            background:black;
            color:white;
            display: flex;
            flex-direction:column;
            align-items: center;
          }
    
          .container1_img{
            margin: 2rem 0;
          }
           
           
        
          .container1_p{
            font-weight: 400;
            font-size:0.8rem;
            max-width:13.438rem;
            text-align:center;
            margin-bottom:2rem;
          }
          .layer_container2{
            background:white;
          }
          .global_text1{
            display:flex;
            justify-content:space-between;
             margin-top:1rem;
          }
          .container2_text1{
            display:flex;                    
           margin-left:1.5rem;
            font-weight:900;
            font-size:18px:
            
          }
          .container2_text2{
            display:flex;
            align-items:center;
            font-weight:700;
            font-size:18px;
            margin-right:1.5rem;
            writing-mode:vertical-rl;
            text-orientation:upright;
          }
          .container2_dot1{
           background:red;
           border-radius:50%;
           width:0.5rem; 
           height:0.5rem;
           margin-top:0.5rem;

          }
          .container2_text3{
            text-align:center;
          }
          .global_text4{
            display:flex;
            justify-content:center;
            
          }
          .container2_text4{
            text-align:right;
            margin-top:2.125rem;
            width:15.625rem;
            font-size:10px;
            
          }
                  
          .global_text5{
           display:flex;
           justify-content:space-between;
           margin-left:2.5rem;
           margin-top:1rem;
           margin-bottom:2rem;
          }
                   
          .container2_text5{
            display:flex;
            align-items:center;
            margin-left:-0.5rem;
            cursor:pointer;
          
          }

          .container2_text5:hover{
            text-decoration-line:underline;
            text-decoration-color:red;
            transition:0.5s;
            
          }
                   
          .container2_dot{
            background:red;
            border-radius:50%;
            width:0.5rem;
            height:0.5rem;
            margin-right:0.5rem;
            
          
          }
          .container2_learnmore > a{
            color:black;
          }
          .container2_text6{
            writing-mode:vertical-rl;
            text-orientation:upright;
            font-size:18px;
            font-weight:700;
            margin-right:1.5rem;
           
          }


          


          .layer_container4{
            background:white;
          }
          .container4_text{
            display:flex;
            justify-content:space-between;
            margin-left:2rem;
            margin-right:2rem;
            font-size:18px;
            font-weight:700;
            padding-top:2rem;
           
          }
          .container4_text1{
            writing-mode:vertical-rl;
            text-orientation:upright; 
          }
          .container4_text2{
            display:flex;
            align-items:center;
            writing-mode:vertical-rl;
            text-orientation:upright;
          }
          .container4_dot1{
            background:red;
            border-radius:50%;
            margin-top:0.5rem;
            width:0.5rem;
            height:0.5rem;
          }
          .container4_img{
            display:flex;
            flex-direction:column;
            align-items:center;
          }
          .container4_img1{
            margin-bottom:2rem;
          }
          .container4_img2{
            margin-bottom:2rem;
          }
          .container4_text3{
            margin-top:2rem;
            background:black;
            color:white;
            border-radius:0.5rem;
            padding-left:1.5rem;
            padding-right:1.5rem;
            font-size:12px;
          }
          .container4_text3 a{
            color:white;
          }
          .container4_text4{
            writing-mode:vertical-rl;
            text-orientation:upright;
            font-size:18px;
            font-weight:700;
            margin-bottom:2rem;
            margin-left:94.5%;
          }


          
          

          
        `}
      </style>
      <Script strategy="lazyOnload">
        {`
          console.log('index.js it works!!!');
        `}

      </Script>
    </div>
  )
}
