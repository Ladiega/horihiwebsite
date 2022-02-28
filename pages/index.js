import Head from 'next/head'
import Image from 'next/image'
import hmenu from '../public/img/hamMenu.svg'
import rlogo from '../public/img/rlogo.svg'

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
        <Image
          alt="rlogo"
          src={rlogo}
        />
        
        
        </div>
        <div className="nav_item nav_items3">HORI-HI</div>
        
        </div>

        <div className="layer_container1">container1</div>
        <div className="layer_container2">container2</div>
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
            background:red;
            font-family: 'Noto Sans JP', sans-serif;
            
          }
          .nav_container{
            background:white;
            display:flex;
            justify-content: space-between;
            align-items: center;
            
            
          }
          .nav_item{
            /* margin-left:1rem; */
          }
          .layer_container1{
            background:black;
            color:white;

          }
          .layer_container2{
            background:white;
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
    </div>
  )
}
