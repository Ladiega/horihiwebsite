import Head from 'next/head'
import Link from 'next/link'
import Script from 'next/script'


import Image from 'next/image'
import hmenu from '../public/img/hamMenu.svg'
import rlogo from '../public/img/rlogo.svg'
import horihibaner from '../public/img/horihibaner.svg'
import imgprofile from '../public/img/imgprofile.svg'

export default function Home (){
  return(
    <div>
      <Head>
        <title>Hori-Hi Home</title>
        <link rel="icon" href="favicon.ico"/>
      </Head>

      <div className="global_container">
        

        <div className="nav_container">
        <div className="nav_item nav_items1">
        <Image
          alt="hmenu"
          src={hmenu}
        />
                       
        </div>
        
        <div className="nav_item nav_items2">
        <Link href="/post">
         <a>
          <Image
          alt="rlogo"
          src={rlogo}
          /> 
          </a>
        </Link>
       
        </div>
        <div className="nav_item nav_items3">HORI-HI</div>
        
        </div>

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
            <p> 私について</p>
          </div>
          <div className="container2_text2">
            <div>ABOUT ME</div>
            <div className="container2_dot1"></div>
          </div>
         </div>
         
          <div className="container2_text3">
            <Image
             src={imgprofile}
             alt='imgprofile'
            />
          </div>
          <div className="global_text4">
           <div className="container2_text4">
              <p>Hi, my dear friend thank you so much for taking your time and visit my website. Nice to meet you. I’m Diego but all one calls me Ladiega. I’m was born in Bogota Colombia and I’ve been tattooing since 2004. 
In these years, I traveled around South America, most of the time, and meet a lot of good histories. Many times I took my bike and travel some roads and put myself in an apprenticeship about life and of course, the love of my life THE TATTOO as a way to live. Right now I’m living in Bogota and my principal tattoo references are influenced by the Brazilian tattoo style combining a lot of cultural interpretations.
Hope to see you soon!!!.</p>
            </div>
          </div>

        <div className="global_text5">
        <div className="container2_text5">
            <div className="container2_dot"></div>
            <p>LEARN MORE</p>
          </div>
          <div className="container2_text6">私について</div>
        </div>
        </div>
        
        <div className="layer_container3">container3</div>
        <div className="layer_container4">container4</div>
        <div className="layer_container5">container5</div>
        <div className="footer_container">footer
        <div className="footer_container2">footer2</div>
        </div>
      </div>

      <style jsx>
        {`
          .global_container{
            background:none;
            font-family: 'Noto Sans JP', sans-serif;
            
            
            
          }
          .nav_container{
            background:white;
            display:flex;
            justify-content: space-between;
            align-items: center;
            margin:0.5rem 1.5rem;
            
          }
          .nav_item{
            /* margin-left:1rem; */
          }
          .nav_items2{
            margin-left:3rem;
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
           writing-mode:vertical-rl;
           text-orientation:upright;
           margin-left:1.5rem;
            font-weight:700;
            font-size:14px:
            
          }
          .container2_text2{
            display:flex;
            flex-direction:clolumn;
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
           
          }
          .container2_text5{
            display:flex;
            flex-direction:row;
          }
          .container2_dot{
            background:red;
            border-radius:50%;
            width:0.5rem;
            height:0.5rem;
          }

          .layer_container3{
            background:black;
            color:white;
          }
          .layer_container4{
            background:white;
          }
          .layer_container5{
            background:black;
            color:white;
          }
          .footer_container{
            background:white;
          }
          .footer_container2{
            background:red;
          }

        `}
      </style>
      <Script strategy="lazyOnload">
        {`
          console.log('it works!!!');
        `}

      </Script>
    </div>
  )
}
