//Carousel con react: via: npm i react-responsive-carousel

import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import Image from 'next/image'
import Tattoo1 from '../public/img/tattoo1.svg'
import Tattoo2 from '../public/img/tattoo2.svg'
import Tattoo3 from '../public/img/tattoo3.svg'
import Tattoo4 from '../public/img/tattoo4.svg'
import Tattoo5 from '../public/img/tattoo5.svg'

export default class NextJsCarousel extends Component {
    render() {
        return (
            <div>
              <h2>NextJs Carousel - GeeksforGeeks</h2>
              <Carousel>
                  <div>
                      <Image 
                      src={Tattoo1} 
                      alt="image1"/>
                     
  
                  </div>
                  <div>
                  <Image 
                      src={Tattoo2} 
                      alt="image1"/>
                      
  
                  </div>
                  <div>
                  <Image 
                      src={Tattoo3} 
                      alt="image1"/>
                
  
                  </div>
                  <div>
                  <Image 
                      src={Tattoo4} 
                      alt="image1"/>
                      
  
                  </div>
                  <div>
                  <Image 
                      src={Tattoo5} 
                      alt="image1"/>
                    
  
                  </div>
              </Carousel>
            </div>
        );
    }
};