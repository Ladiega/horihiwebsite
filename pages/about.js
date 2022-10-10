import Head from "next/head"

import Navbar from "../components/navbar"

import styles from "../components/about/about.module.css"

import Image from 'next/image'

import about1 from '../public/img/about1.jpg'
import about2 from '../public/img/about2.jpg'
import about3 from '../public/img/about3.jpg'
import about4 from '../public/img/about4.jpg'
import about5 from '../public/img/about5.jpg'


import Footer from '../components/footer/index'


export default function Paint(){
    return(
        <div className="paint_container">
            <Head>
            <title>Hori-Hi About</title>
            </Head>
        
            <Navbar/>
            <section className="section_one_container">
               <div className="photo_container">
                
                <div className="about2">
                    <Image
                    className={styles.photo1}
                    alt="Photo"
                    src={about1}
                  
                   
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
                    src={about2}                                    
                    />
                </div>                                
               </div>
            </section>

            <section className="section_two_container">
                <div className="text_1">
                <p>My path in the world of professional tattooing began in Zone Colors, one of the most important tattoo shops at the moment in the city of Bogotá. I started my apprenticeship under Nelson Neva, Caterine Acosta, and Jhon Rodriguez. The most popular tattoo style was new school stuff and in these times we needed a lot of visas to travel the world. For that reason it was easier to travel around South America and my inspiration was the travels of Neva, who made it along the way in many ways, including crossing the Amazon River from Colombia to Brazil.


Brazil and Argentina had and still have important tattooists in the world of tattooing, and more development around tattoo forms. That's why I decided to go there and try to learn more about the tattoo routes.</p>

                </div>

            </section>

            <section className="section_one_container">
               <div className="photo_container">
                
                <div className="about3">
                    <Image
                    className={styles.photo1}
                    alt="Photo"
                    src={about3}                                    
                    />
                </div>                                
               </div>
            </section>

            <section className="section_two_container">
                <div className="text_1">
                <p>In 2011 I arrived in Porto Alegre where I met Dudu and Zk, they inspired me in the path of traditional tattooing and especially in the Japanese tattoo style. Zk invited me to work with him in the city of Sao Paulo at the New Wind and Old Wind tattoo shop in Porto Alegre. There in these times I saw, learned and met people who changed my perspective of tattooing forever.</p>

                </div>

            </section>

            <section className="section_one_container">
               <div className="photo_container">
                
                <div className="about4">
                    <Image
                    className={styles.photo1}
                    alt="Photo"
                    src={about4}                                    
                    />
                </div>                                
               </div>
            </section>

            <section className="section_two_container">
                <div className="text_1">
                <p>In 2012 I met Walter from Paraguay. One of the most important tattoo artists in Latin America. He was a bridge between the Brazilian tattoo and the rest of South America.
He was the creator of the now-extinct Tattoo Down Babylon. that during a decade of events became an obligatory port of learning and camaraderie around the tattoo. This moment marked a lot in my way of seeing the profession.</p>

                </div>

            </section>

            <section className="section_one_container">
               <div className="photo_container">
                
                <div className="about5">
                    <Image
                    className={styles.photo1}
                    alt="Photo"
                    src={about5}                                    
                    />
                </div>                                
               </div>
            </section>

            <section className="section_two_container">
                <div className="text_1">
                <p>Since 2016 I have been living in the city of Bogotá. Many thanks to those who took the time to read a little about my biography. Thank you very much to all the people who have given me a hand on this long road.

Diego Humberto.</p>

                </div>

            </section>

            <Footer/>

          



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