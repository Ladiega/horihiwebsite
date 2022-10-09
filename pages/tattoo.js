import Navbar from "../components/navbar"
import Footer from "../components/footer"

import Image from "next/image"

import photo1 from '../public/img/tattoos/photo1.png'
import photo2 from '../public/img/tattoos/photo2.png'
import photo3 from '../public/img/tattoos/photo3.png'
import photo4 from '../public/img/tattoos/photo4.png'
import photo5 from '../public/img/tattoos/photo5.png'
import photo6 from '../public/img/tattoos/photo6.png'
import photo7 from '../public/img/tattoos/photo7.png'
import photo8 from '../public/img/tattoos/photo8.png'
import photo9 from '../public/img/tattoos/photo9.png'
import photo10 from '../public/img/tattoos/photo10.png'

import photo11 from '../public/img/tattoos/photo11.png'
import photo12 from '../public/img/tattoos/photo12.png'
import photo13 from '../public/img/tattoos/photo13.png'
import photo14 from '../public/img/tattoos/photo14.png'
import photo15 from '../public/img/tattoos/photo15.png'
import photo16 from '../public/img/tattoos/photo16.png'

import photo17 from '../public/img/tattoos/photo17.png'
import photo18 from '../public/img/tattoos/photo18.png'
import photo19 from '../public/img/tattoos/photo19.png'
import photo20 from '../public/img/tattoos/photo20.png'
import photo21 from '../public/img/tattoos/photo21.png'
import photo22 from '../public/img/tattoos/photo22.png'
import photo23 from '../public/img/tattoos/photo23.png'
import photo24 from '../public/img/tattoos/photo24.png'
import photo25 from '../public/img/tattoos/photo25.png'
import photo26 from '../public/img/tattoos/photo26.png'


export default function Tattoo(){
    return(
        <div className="tattoo_container">
            <Navbar/>
            <div className="gallery_container">
                <div className="photo">
                    <Image
                    alt='tattoo photo'
                    src={photo1}
                    />
                </div>

                
                <div className="photo">
                    <Image
                    alt='tattoo photo'
                    src={photo2}
                    />
                </div>

                <div className="photo">
                    <Image
                    alt='tattoo photo'
                    src={photo3}
                    />
                </div>

                <div className="photo">
                    <Image
                    alt='tattoo photo'
                    src={photo4}
                    />
                </div>

                <div className="photo">
                    <Image
                    alt='tattoo photo'
                    src={photo5}
                    />
                </div>

                <div className="photo">
                    <Image
                    alt='tattoo photo'
                    src={photo6}
                    />
                </div>

                <div className="photo">
                    <Image
                    alt='tattoo photo'
                    src={photo7}
                    />
                </div>
                <div className="photo">
                    <Image
                    alt='tattoo photo'
                    src={photo8}
                    />
                </div>
                <div className="photo">
                    <Image
                    alt='tattoo photo'
                    src={photo9}
                    />
                </div>
                <div className="photo">
                    <Image
                    alt='tattoo photo'
                    src={photo10}
                    />
                </div>
                <div className="photo">
                    <Image
                    alt='tattoo photo'
                    src={photo11}
                    />
                </div>
                <div className="photo">
                    <Image
                    alt='tattoo photo'
                    src={photo12}
                    />
                </div>
                <div className="photo">
                    <Image
                    alt='tattoo photo'
                    src={photo13}
                    />
                </div>
                <div className="photo">
                    <Image
                    alt='tattoo photo'
                    src={photo14}
                    />
                </div>
                <div className="photo">
                    <Image
                    alt='tattoo photo'
                    src={photo15}
                    />
                </div>
                <div className="photo">
                    <Image
                    alt='tattoo photo'
                    src={photo16}
                    />
                </div>
                <div className="photo">
                    <Image
                    alt='tattoo photo'
                    src={photo17}
                    />
                </div>
                <div className="photo">
                    <Image
                    alt='tattoo photo'
                    src={photo18}
                    />
                </div>
                <div className="photo">
                    <Image
                    alt='tattoo photo'
                    src={photo19}
                    />
                </div>
                <div className="photo">
                    <Image
                    alt='tattoo photo'
                    src={photo20}
                    />
                </div>
                <div className="photo">
                    <Image
                    alt='tattoo photo'
                    src={photo21}
                    />
                </div>
                <div className="photo">
                    <Image
                    alt='tattoo photo'
                    src={photo22}
                    />
                </div>
                <div className="photo">
                    <Image
                    alt='tattoo photo'
                    src={photo23}
                    />
                </div>
                <div className="photo">
                    <Image
                    alt='tattoo photo'
                    src={photo24}
                    />
                </div>
                <div className="photo">
                    <Image
                    alt='tattoo photo'
                    src={photo25}
                    />
                </div>
                <div className="photo">
                    <Image
                    alt='tattoo photo'
                    src={photo26}
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