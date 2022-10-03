import Navbar from '../components/navbar/index'
import styles from '../components/about.module.css'
import Link from 'next/link'
import Images from 'next/image'
import tebori from '../public/img/about/tebori.jpg'
import ReactPlayer from 'react-player'




export default function AboutMe(){
    return(
        <div className="about_global_container">
            
            <div className="about_container4">Container4
                <div className='player_container'>
                <ReactPlayer 
                className='videotebori'
                url="video/tebori.mp4"
                
                width={300}
                height={250}

                loop={true}
                playing={true}
                muted={true}
                />
                </div>


            </div>
            
                       
            <Navbar className='nav_container'/>
            
            <div className="about_container1">
               <div className="about_img_container">
                    <Images
                className={styles.img}
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
                position:absolute;
                background-color:black;
                justify-content:center;
                color:white;
                opacity:70%;
                top:3rem;
                left:35%;   
            }
            .player_container {
                background-color:red;
            }
            .about_img_container{
                background-color:salmon;
                position:relative;
                border-radius:4rem;
                
            }
            .about_img_container .about_img{
                border-radius:3rem;
            }
           
         
            `}

        </style>
        </div>
        
        
    )
}