import Head from 'next/head'
import Link from 'next/link'
import Script from 'next/script'

import Image from 'next/image'

import hmenu from '../public/img/hamMenu.svg'
import rlogo from '../public/img/rlogo.svg'
import horihibaner from '../public/img/horihibaner.svg'
import imgprofile from '../public/img/imgprofile.svg'

import tattoo1 from '../public/img/tattoo1.svg'
import tattoo2 from '../public/img/tattoo2.svg'
import tattoo3 from '../public/img/tattoo3.svg'

import tattoo4 from '../public/img/tattoo4.svg'
import tattoo5 from '../public/img/tattoo5.svg'
import tattoo6 from '../public/img/tattoo6.svg'

import horihiw from '../public/img/horihiw.svg'

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
              <div className="dot2">LEARN MORE</div>
          </div>
        
            <div className="container2_text6">私について</div>
        
        </div>


        </div>
        <div className="layer_container3">

          <div className="container3_text">
            <div className="container3_text1">TATTOO</div>
            <div className="container3_text2">入れ墨</div>
          </div>

          <div className="container3_img">
            <div className="container3_img1">
              <Image
                alt="tattoo1"
                src={tattoo1}
              />
            </div>
            <div className="container3_dot1"></div>

            <div className="container3_img2">
              <Image
                alt="tattoo2"
                src={tattoo2}
              />
            </div>

            <div className="container3_dot2"></div>
            <div className="container3_img3">
              <Image
                alt="tattoo3"
                src={tattoo3}
              />
            </div>
            <div className="container3_text3">vewAll</div>
          </div>

          <div className="container3_text4">入れ墨</div>
        
        </div>



        <div className="layer_container4">
          <div className="container4_text">
            <div className="container4_text1">水彩</div>
            <div className="container4_text2">WATERCOLOR  <div 
            className="container4_dot1"></div>
            </div>
            
          </div>
          <div className="container4_img">
            <div className="container4_img1">
              <Image
              alt="tattoo4"
              src={tattoo4}
              />
            </div>
            <div className="container4_img2">
              <Image
              alt="tattoo5"
              src={tattoo5}
              />
            </div>
            <div className="container4_img3">
              <Image
              alt="tattoo6"
              src={tattoo6}
              />
            </div>
            <div className="container4_text3">vewAll</div>
          </div>
          <div className="container4_text4">水彩</div>

        </div>


        <div className="layer_container5">
          <div className="container5_text">
            <div className="container5_text1">CONTACT</div>
            <div className="container5_text2">お問い合わせ</div>
          </div>
          <div className="container5_circle">
              <div className="circle_content">
                  
                  <form action="">
                    <div className="name">
                      <label htmlFor="name">NAME
                      <input type="text" name="name" id="email"/>
                      </label>
                    </div>
                   
                   <div className="email">
                      <label htmlFor="email">EMAIL
                      <input type="email" name="email" id="email"/>
                      </label>
                   </div>
                   
                   <div className="textarea">MESSAGE
                   :
                      <textarea name="message" id="message" cols="30" rows="10">MESSAGE</textarea>
                   </div>
                   
                   <div className="send">
                     <button type="submit">参加する</button>
                   </div>
                 
                  
                </form>
              </div>
          </div>
          <div className="container5_text2">
            <div className="container5_text3">お問い合わせ </div> 

            <div className="container5_text4">
              <Image
                alt="horihi_img"
                src={horihiw}
              />
            </div>

          </div>
        </div>
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
            align-items:end;
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
            margin-bottom:0.5rem;
          
          }
          .container2_text6{
            writing-mode:vertical-rl;
            text-orientation:upright;
            font-size:18px;
            font-weight:700;
            margin-right:1.5rem;
           
          }


          .layer_container3{
            background:black;
            color:white;
            padding-top:2rem;

          }

          .container3_text{
            display:flex;
            justify-content:space-between;
            margin-left:2rem;
            margin-right:1.5rem;
            
          }

          .container3_text1{
            font-size:18px;
            font-weight:900;
            writing-mode:vertical-rl;
            text-orientation:upright;
          }
          .container3_text2{
            font-size:18px;
            font-weight:400;
            writing-mode:vertical-rl;
            text-orientation:upright;
          }

          .container3_img{
            display:flex;
            flex-direction:column;
            align-items:center;       
            text-align:center;
          }
          .container3_img1{
            cursor:pointer;
          }
          .container3_dot1{
            background:red;
            border-radius:50%;
            width:0.5rem;
            height:0.5rem;
            margin-top:0.5rem;
            margin-bottom:0.5rem;           
          }
          .container3_img2{
            cursor:pointer;
          }
          .container3_dot2{
            background:red;
            border-radius:50%;
            width:0.5rem;
            height:0.5rem;
            margin-top:0.5rem;
            margin-bottom:0.5rem;
          }
          .container3_img3{
            cursor:pointer;
          }

          .container3_text3{
            background:white;
            color:black;
            font-size:12px;
            font-weight:500;
            margin-top:2rem;
            padding-left:1.5rem;
            padding-right:1.5rem;
            border-radius:0.5rem;
            cursor:pointer;
          }
          .container3_text4{
            font-size:18px;
            font-weight:400;
            writing-mode:vertical-rl;
            text-orientation:upright;
            margin-left:2rem;
            padding-bottom:2rem;
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
          .container4_text4{
            writing-mode:vertical-rl;
            text-orientation:upright;
            font-size:18px;
            font-weight:700;
            margin-bottom:2rem;
            margin-left:94.5%;
          }


          
          .layer_container5{
            background:black;
            color:white;
            
          }
          .container5_text{
            display:flex;
            justify-content:space-between;
            padding-top:2rem;
            font-size:18px;
            font-weight:700;
            

          }
          .container5_text1{
            margin-left:2rem;
            writing-mode:vertical-rl;
            text-orientation:upright;

          }

          
          .container5_circle{
            background:red;
            border-radius:50%;
            height:24rem;
            width:24rem;
            display:flex;
            align-items:center;
            justify-content:center;
            margin:2rem;
            margin-left:auto;
            margin-right:auto;
          }
          .circle_content{
            display:flex;
          }
          .name{
            font-weight:700;
            margin-top:2.3rem;
          }
          .name input{
            border:none;
            border-radius:10px;
          }
          .email{
            font-weight:700;
          }
          .email input{
            border:none;
            border-radius:10px;
          }
          .textarea{
            display:flex;
            flex-direction:column;
            font-weight:700;
            margin-top:1.5rem;
          }
          .textarea textarea{
            margin-top:1rem;
            border:none;
            border-radius:10px;
          }
          .send{
            display:flex;
            justify-content:center;
          }
          .send button{
            
            border:none;
            border-radius:10px;
            background:white;
            font-weight:700;
            margin-top:1rem;
            padding:0.5rem 1rem;
            border:2px solid black;
            cursor:pointer;
          }
          .container5_text2{
            display:flex;
            flex-direction:row;
            justify-content:space-between;
            margin-right:2rem;
           
            
          }
          .container5_text3{
            font-size:18px;
            font-weight:700;
            margin-left:2rem;
            writing-mode:vertical-rl;
            text-orientation:upright;
          
          }
          .container5_text4{
           
           padding-bottom:3rem;
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
