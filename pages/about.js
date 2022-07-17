import Link from 'next/link'
import Image from 'next/image'


export default function AboutMe(){
    return(
        <div className="global_container">
            <div className="about_container1">
                Container 1
            </div>
            <div className="about_container2">
                <Images
                    alt="tattooing img"
                    src={tattooing}

                />
            </div>
            <div className="about_container3">
                Container3
            </div>
            
        <style jsx>{`
            
            `}

        </style>
        </div>
        
        
    )
}