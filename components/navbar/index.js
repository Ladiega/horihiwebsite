import Link from 'next/link' 
import Image from 'next/image'

import hmenu from '../../public/img/hamMenu.svg'
import rlogo from '../../public/img/rlogo.svg'



export default function Navbar (){
    return (
    <div>
        <div className="nav_container">
                <div className="nav_item nav_items1">
                <Image
                alt="hmenu"
                src={hmenu}
                />
                       
                </div>
        
            <div className="nav_item nav_items2">
                <Link href="/">
               
                    <Image
                    alt="rlogo"
                    src={rlogo}
                    /> 
                
                </Link>
       
            </div>
            <div className="nav_item nav_items3">HORI-HI</div>
        
        
        </div>
        <div className="navbar2_container">
          <div className="navbar2text1">
            <Link href="/about">
              <a >ABOUT</a>
            </Link>
          </div>
          <div className="navbar2text2">
            <Link href="/tattoo">
              <a >TATTOO</a>
            </Link>
          </div>
          <div className="navbar2logo">
            <Link href='/'>
            <Image
              alt="rlogo"
              src={rlogo}            
            />
            </Link>
          </div>
          <div className="navbar2text3">
            <Link href="/paintings">
              <a>PAINTINGS</a>
            </Link>
          </div>
          <div className="navbar2text4">
            <Link href="/contact">
              <a>CONTACT</a>
            </Link>
          </div>
        </div>
        <style jsx>
        {`
            * > a{
              color:black;
            }
        
          .global_container{
            background:none;
            font-family: 'Noto Sans JP', sans-serif;
            
            
            
          }
          .nav_container{
            background:white;
            display:flex;
            justify-content: space-between;
            align-items: center;
            margin:2rem 2rem;
            display:none;
            
          }
         
          .nav_items1{
            cursor:pointer;
          }
          .nav_items2{
            margin-left:3rem;
          }
          .nav_items3{
            
            cursor:pointer;
          }

          .navbar2_container{
            display:flex;
            justify-content:space-between;
            
            position:sticky;
            align-items:center;
            margin-left:2rem;
            margin-right:2rem;
            margin-top:1rem;
            margin-bottom:1rem;
            font-size:13px;
            font-weight:500;
            z-index:100;
            }
            .navbar2logo{
              cursor:pointer;
            }

            @media (max-width:600px){
            .nav_container{
              display:block;
              display:flex;
              
            }
            .navbar2_container{
              display:none
            }
          }
          `} 
        
          </style>
        

        
        </div>
    )
}

