import Navbar from "../components/navbar"

import styles from "../components/about/about.module.css"

import Image from 'next/image'
import photo1 from '../public/img/about/about1.jpg'
import photo2 from '../public/img/about/about2.jpg'
import photo3 from '../public/img/about/about3.jpg'
import photo4 from '../public/img/about/about4.jpg'
import photo5 from '../public/img/about/about5.jpg'





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
                  
                   
                    />
                </div>
                                
               </div>
            </section>
              
            <section className="section_two_container">
                <div className="text_1">
                <p>I’m Diego but all one calls me <b>Ladiega.</b> I’m was born in Bogota Colombia and I’ve been tattooing since 2004. In these years, I traveled around South America, most of the time, and meet a lot of good histories. Many times I took my bike and travel some roads and put myself in an apprenticeship about life and of course, the love of my life THE TATTOO as a way to live.</p>

                </div>

            </section>

            <section className="section_one_container">
               <div className="photo_container">
                
                <div className="about2">
                    <Image
                    className={styles.photo1}
                    alt="Photo"
                    src={photo2}                                    
                    />
                </div>                                
               </div>
            </section>

            <section className="section_two_container">
                <div className="text_1">
                <p>My way into the professional tattoo world started in Zone Colors one of the most crucial tattoo shops in this time. I startad my linership under Nelson Neva , Caterine Acosta and Jhon Rodriguez. At this time the most popular tattoo style was the new school stuff and these times we needed a lot of visas to travel around the world. For that reason easier traveled around South America, my inspiration for traveling was the journies of Neva who did it on the road in many ways including crossing the amazon river and arriving in Brazil.


                Brazil and Argentina at this time had important tattoo artists, and more development around the tattoo ways for that reason, I decided to go there and try to learn deeper about the tattoo routes.</p>

                </div>

            </section>

            <section className="section_one_container">
               <div className="photo_container">
                
                <div className="about3">
                    <Image
                    className={styles.photo1}
                    alt="Photo"
                    src={photo3}                                    
                    />
                </div>                                
               </div>
            </section>

            <section className="section_two_container">
                <div className="text_1">
                <p>My way into the professional tattoo world started in Zone Colors one of the most crucial tattoo shops in this time. I startad my linership under Nelson Neva , Caterine Acosta and Jhon Rodriguez. At this time the most popular tattoo style was the new school stuff and these times we needed a lot of visas to travel around the world. For that reason easier traveled around South America, my inspiration for traveling was the journies of Neva who did it on the road in many ways including crossing the amazon river and arriving in Brazil.


                Brazil and Argentina at this time had important tattoo artists, and more development around the tattoo ways for that reason, I decided to go there and try to learn deeper about the tattoo routes.</p>

                </div>

            </section>

            <section className="section_one_container">
               <div className="photo_container">
                
                <div className="about4">
                    <Image
                    className={styles.photo1}
                    alt="Photo"
                    src={photo4}                                    
                    />
                </div>                                
               </div>
            </section>

            <section className="section_two_container">
                <div className="text_1">
                <p>My way into the professional tattoo world started in Zone Colors one of the most crucial tattoo shops in this time. I startad my linership under Nelson Neva , Caterine Acosta and Jhon Rodriguez. At this time the most popular tattoo style was the new school stuff and these times we needed a lot of visas to travel around the world. For that reason easier traveled around South America, my inspiration for traveling was the journies of Neva who did it on the road in many ways including crossing the amazon river and arriving in Brazil.


                Brazil and Argentina at this time had important tattoo artists, and more development around the tattoo ways for that reason, I decided to go there and try to learn deeper about the tattoo routes.</p>

                </div>

            </section>

            <section className="section_one_container">
               <div className="photo_container">
                
                <div className="about5">
                    <Image
                    className={styles.photo1}
                    alt="Photo"
                    src={photo5}                                    
                    />
                </div>                                
               </div>
            </section>

            <section className="section_two_container">
                <div className="text_1">
                <p>My way into the professional tattoo world started in Zone Colors one of the most crucial tattoo shops in this time. I startad my linership under Nelson Neva , Caterine Acosta and Jhon Rodriguez. At this time the most popular tattoo style was the new school stuff and these times we needed a lot of visas to travel around the world. For that reason easier traveled around South America, my inspiration for traveling was the journies of Neva who did it on the road in many ways including crossing the amazon river and arriving in Brazil.


                Brazil and Argentina at this time had important tattoo artists, and more development around the tattoo ways for that reason, I decided to go there and try to learn deeper about the tattoo routes.</p>

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