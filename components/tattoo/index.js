import Link from 'next/link'

import Image from 'next/image'

import tattoo1 from '../../public/img/tattoo1.svg'
import tattoo2 from '../../public/img/tattoo2.svg'
import tattoo3 from '../../public/img/tattoo3.svg'


export default function Tattoo(){
    return(
        <div id="layer3" className="layer_container3">

    <div className="container3_text">
        <div className="container3_text1">TATTOO</div>
        <div className="container3_text2">入れ墨</div>
    </div>

    <div className="container3_img">
        <div className="container3_img1">
          <Link href="/tattoo">
            <a>
              <Image
                alt="tattoo1"
                src={tattoo1}
              />
            </a>
          </Link>
    </div>
  <div className="container3_dot1"></div>

  <div className="container3_img2">
  <Link href="/tattoo">
            <a>
              <Image
                alt="tattoo1"
                src={tattoo2}
              />
            </a>
          </Link>
  </div>

  <div className="container3_dot2"></div>
  <div className="container3_img3">
  <Link href="/tattoo">
            <a>
              <Image
                alt="tattoo1"
                src={tattoo3}
              />
            </a>
          </Link>
  </div>
  
</div>

    <div className="container3_text3">
    <Link href="/tattoo">
      <a>Vew All</a>
    </Link>  
    </div>

    <div className="container3_text4">入れ墨</div>

    <style jsx>{`
        a{
            color:black;
        }
        a:hover{
            color:white;
        }
        
    .layer_container3{
            background:white;
            color:black;
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
           
          }
          .container3_text2{
            font-size:18px;
            font-weight:400;
            writing-mode:vertical-rl;
            text-orientation:upright;
          }

          .container3_img{
            display:flex;
            justify-content:center;
            align-items:center;       
            text-align:center;
         
          }
          
          .container3_img1{
            cursor:pointer;
            filter:grayscale(1);
          }
          .container3_img1:hover{
            filter:none;
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
            filter:grayscale(1);
          }
          .container3_img2:hover{
            filter:none;
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
            filter:grayscale(1);
          }
          .container3_img3:hover{
            filter:none; 
          }

          .container3_text3{
            text-align:center;
            background:black;
            
            width:5rem;
            font-size:16px;
            font-weight:500;
            margin-top:2rem;

            margin-right:auto;
            margin-left:auto;
            
            border-radius:0.5rem;
            cursor:pointer;
          }
          .container3_text3 a{
            color:white;
          }

          .container3_text3:hover{
            background-color:red;
            color:white;
            transition:2s;
          }
          .container3_text4{
            font-size:18px;
            font-weight:400;
            writing-mode:vertical-rl;
            text-orientation:upright;
            margin-left:2rem;
            padding-bottom:2rem;
          }

        `}</style>

</div>
    )
}