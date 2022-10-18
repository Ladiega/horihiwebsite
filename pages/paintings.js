import Head from "next/head"

import Navbar from "../components/navbar"
import Footer from "../components/footer"

import Image from 'next/image'

import paint1 from '../public/img/paint1.jpg'
import paint2 from '../public/img/paint2.jpg'
import paint3 from '../public/img/paint3.jpg'
import paint4 from '../public/img/paint4.jpg'
import paint5 from '../public/img/paint5.jpg'
import paint6 from '../public/img/paint6.jpg'
import paint7 from '../public/img/paint7.jpg'
import paint8 from '../public/img/paint8.jpg'
import paint9 from '../public/img/paint9.jpg'
import paint10 from '../public/img/paint10.jpg'


export default function Paint(){
    return(
        <div className="paint_contianer">
            <Head>
            <title>Hori-Hi Painting</title>
            </Head>
            <Navbar className='navbar'/>

            <div className="gallery_container">
                <div className="photo">
                    <Image
                    alt="photo"
                    src={paint1}
                    />
                </div>
                <div className="photo">
                    <Image
                    alt="photo"
                    src={paint2}
                    />
                </div>
                <div className="photo">
                    <Image
                    alt="photo"
                    src={paint3}
                    />
                </div>
                <div className="photo">
                    <Image
                    alt="photo"
                    src={paint4}
                    />
                </div>
                <div className="photo">
                    <Image
                    alt="photo"
                    src={paint5}
                    />
                </div>
                <div className="photo">
                    <Image
                    alt="photo"
                    src={paint6}
                    />
                </div>
                <div className="photo">
                    <Image
                    alt="photo"
                    src={paint7}
                    />
                </div>
                <div className="photo">
                    <Image
                    alt="photo"
                    src={paint8}
                    />
                </div>
                <div className="photo">
                    <Image
                    alt="photo"
                    src={paint9}
                    />
                </div>
                <div className="photo">
                    <Image
                    alt="photo"
                    src={paint10}
                    />
                </div>
                
              
            </div>

            <Footer/>
            <style jsx>
                {`
                
                    .gallery_container{
                        text-align:center;
                    }
                
                `}

            </style>
            
            
        </div>
    )
}