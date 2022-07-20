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
                Container 1
            </div>
            <div>
                <Images
                alt="tebori"
                src={tebori}

                />
                <Link href="/">
                    <a >HOME</a>
                </Link>
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
                controls={true}
                loop={true}
                playing={true}
                />
            </div>
           
            
        <style jsx>{`
            
            `}

        </style>
        </div>
        
        
    )
}