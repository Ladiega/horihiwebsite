import ReactPlayer from 'react-player'

import Navbar from '../components/navbar/index'
import Form from '../components/form/index'
import Footer from '../components/footer/index'


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
                       
           <Form/>
            
           <Footer/>
            
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
                         
                    
                opacity:70%;
                top:4.5rem;
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