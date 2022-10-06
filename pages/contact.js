import Navbar from '../components/navbar/index'

import Link from 'next/link'
import Images from 'next/image'
import bioPhoto from '../public/img/about/tebori.jpg'
import ReactPlayer from 'react-player'




export default function AboutMe(){
    return(
        <div className="about_global_container">
            
            <Navbar className='nav_container'/>
            
            <div className="about_container4">
                <div className='player_container'>
                <ReactPlayer 
                className={`video`}
                url="video/tebori.mp4"
                
                width="100%"
                height="100%"

                loop={true}
                playing={true}
                muted={true}
                />
                </div>
            </div>                        
                       
            <div className="about_container1">
                
            </div>
            
           
            
        <style jsx>{`
            a{
                color:black;
            }
            .about_global_container{
                display:flex;
                flex-direction:column;
                text-align:center;
             
                
            }
       
           
            .about_container4{
                         
                position:absolute;  
                overflow:hidden;          
                opacity:70%;
                top:3rem;
                left: 0;
                right: 0;
                bottom: 0;
                margin:auto;
              
                
            }
            .player_container{
                margin-left:2rem;
                margin-right:2rem;
            }
           
           
            
         
            `}

        </style>
        </div>
        
        
    )
}