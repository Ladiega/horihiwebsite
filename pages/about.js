import Link from 'next/link'
import Images from 'next/image'
import tebori from '../public/img/about/tebori.jpg'
import ReactPlayer from 'react-player'




export default function AboutMe(){
    return(
        <div className="global_container">
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
            <div className="about_container2">
               
            </div>
            <div className="about_container3">
                Container3
            </div>
           <ReactPlayer 
           className='videotebori'
            url="video/tebori.mp4"
            controls={true}

           />
            
        <style jsx>{`
            
            `}

        </style>
        </div>
        
        
    )
}