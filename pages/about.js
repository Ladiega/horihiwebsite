import Navbar from "../components/navbar"

import styles from "../components/about/about.module.css"

import Image from 'next/image'
import photo1 from '../public/img/about/about2.jpg'



export default function Paint(){
    return(
        <div className="paint_container">
        
            <Navbar/>
            <section className="section_one_container">
               <div className="photo_container">
                
                <div className="about2">
                    <Image
                    className={styles.photo1}
                    alt="Photo"
                    src={photo1}
                    width={300}
                    height={180}
                   
                    />
                </div>
                                
               </div>
            </section>
              
            <section className="section_two_container">
                <div className="text_1">
                <p>Hi, my dear friend thank you so much for taking your time and visit my website. Nice to meet you. I’m Diego but all one calls me Ladiega. I’m was born in Bogota Colombia and I’ve been tattooing since 2004. In these years, I traveled around South America, most of the time, and meet a lot of good histories. Many times I took my bike and travel some roads and put myself in an apprenticeship about life and of course, the love of my life THE TATTOO as a way to live. Right now I’m living in Bogota and my principal tattoo references are influenced by the Brazilian tattoo style combining a lot of cultural interpretations. Hope to see you soon!!!.</p>
                </div>
            </section>
            <style jsx>{`

                .section_one_container{                             
                    margin-left :2rem;
                    margin-right:2rem;
                }
                .about2{
                    text-align:center;
                    border-radius:1rem;
                }
                .photo1{
                    border-radius:10px;
                }
              
                .section_two_container{
                    margin-left:2rem;
                    margin-right:2rem;
                    text-align:justify;
                }
                
                `}

            </style>
           
        

        </div>
    )
}