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
                <video src=""></video>
            </div>
            <div className="about_container3">
                Container3
            </div>
            <ReactPlayer url="https://www.youtube.com/watch?v=J-YxDDX506w&t=21s" />
            
        <style jsx>{`
            
            `}

        </style>
        </div>
        
        
    )
}