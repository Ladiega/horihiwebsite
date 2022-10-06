

import Link from 'next/link'

import Image from 'next/image'
import instalogo from '../../public/img/instalogo.svg'

export default function Footer (){
    return(
        <div>
            <div className="footer_container">
          <div className="footer_container1">
            


            <div className="footer_container_grup2">
                <div className="footer_container1_dot"></div>
              <div className="followme">Follow me:</div>
              <div className="instagram">Instagram</div>
              <div className="jp">フォローしてください </div>
            </div>

            <div className="instagram_logo">
            <Link href='https://www.instagram.com/ladiegatattoo/?hl=es-la'>
              <Image
              alt="instalogo"
              src={instalogo}
              />
            </Link>
            </div>
          </div>

           
            <div className="footer_group3_2">
                <div className="footer_container_group3_dot2"></div>
              <div className="footer_group3_1">Desing by:</div>
              <div className="footer_group3_2_2">LadiegaTattoo</div>
              <div className="footer_group3_3">のデザインです</div>
            </div>

            <div className="footer_container_group4">All rights reserved © 2022</div>
          <div className="footer_container2">
           
          </div>
          <div className="footer_container3"></div>

        </div>


        <div className="footer_container2">
          <div className="footer_container2_1">
            <Link href='/'>
            <a>HOME</a>
            </Link>
          </div>
          <div className="footer_container2_2">ホームページ
          </div>
        </div>

        <style jsx>
            {`
            .footer_container{
            background:white;
            
          }
          .footer_container1{
            margin-left:2rem;
            display:flex;
            align-items:center;
           
          }
          .footer_container1_dot{
            background:red;
            border-radius:50%;
            height:0.5rem;
            width:0.5rem;
            margin-right:1rem;
          }
          .followme{
            margin-top:0.5rem;
            text-align:left;
            font-weight:700;
          }
          .instagram{
            font-weight:400;
            text-align:left;
          }
          .jp{
            font-weight:200;
          }
          .instagram_logo{
            cursor:pointer;
            margin-left:1rem;
          }
          

          .footer_container_group3_dot2{
            background:red;
            border-radius:50%;
            height:0.5rem;
            width:0.5rem;
          }
       
          .footer_container_group3_dot2{
            margin-left:2rem;
            margin-top:2rem;
          }
          .footer_group3_1{
            margin-left:2rem;
            font-weight:700;
            
          }
          .footer_group3_2{
            text-align:left;
            border:2px solid red;
          }
          .footer_group3_2_2{
            margin-left:2rem;
          }
          .footer_group3_3{
            margin-left:2rem;
            font-weight:200;
          }
          .footer_container_group4{
            margin-top:3rem;
            margin-left:2rem;
          }
          .footer_container2{
            background:red;
            color:white;
            display:flex;
            justify-content:space-between;
            padding-top:0.5rem;
            padding-bottom:0.5rem;
            font-weight:700;
            
          }
          .footer_container2_1{
            margin-left:2rem;
          }
          .footer_container2_1 a{
            color:white;
          }
          .footer_container2_2{
            margin-right:2rem;
          }

            
            `}
            
        </style>
        </div>
    )
}