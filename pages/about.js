import Navbar from '../components/navbar/index'
import styles from '../components/about.module.css'
import Link from 'next/link'
import Images from 'next/image'
import tebori from '../public/img/about/tebori.jpg'
import ReactPlayer from 'react-player'




export default function AboutMe(){
    return(
        <div className="about_global_container">
            
            <div className="about_container4">
                <div className='player_container'>
                <ReactPlayer 
                className={styles.video}
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
            <div className="about_container3"> Container3
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
            
           
            
        <style jsx>{`
            a{
                color:black;
            }
            .about_global_container{
                display:flex;
                flex-direction:column;
                
                
            }
            .about_container1, .about_container2, .about_container3, .about_container4{
                background-color:grey;
                color:white;
                text-align:center;
                               
            }
           
            .about_container4{
                         
                position:absolute;  
                overflow:hidden;          
                opacity:70%;
               
               text-align:center;
                
            }
           
           
            
         
            `}

        </style>
        </div>
        
        
    )
}