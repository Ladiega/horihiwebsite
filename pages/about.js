import Navbar from '../components/navbar/index'

import Link from 'next/link'
import Images from 'next/image'
import tebori from '../public/img/about/tebori.jpg'
import ReactPlayer from 'react-player'




export default function AboutMe(){
    return(
        <div className="about_global_container">
            <Navbar/>
            <div className="about_container1">
               <div className="about_img">
                <Images
               
                alt="tebori"
                src={tebori}
                height={100}
                width={100}
                />
               </div> 
            </div>
            
            <div className="about_container2">Container 2
               
            </div>
            <div className="about_container3">
                Container3
            </div>
            <div className="about_container4">Container4
                <ReactPlayer 
                className='videotebori'
                url="video/tebori.mp4"
                
                loop={true}
                playing={true}
                muted={true}
                />
            </div>
           
            
        <style jsx>{`
            a{
                color:black;
            }
            .about_global_container{
                display:flex;
                flex-direction:column;
                
                
            }
            .about_container1{
                background-color:black;
                color:white;
                text-align:center;
                               
            }
            .about_container4{
                display:flex;
                background-color:black;
                justify-content:center;
             
            }
            
         
            `}

        </style>
        </div>
        
        
    )
}