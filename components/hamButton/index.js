import Head from 'next/head'
import Script from 'next/script'
import Link from 'next/link'

export default function Ham(){


    return(
        <div className="ham_contaniner">
            

<header className="main-header" >
    
    <nav id="nav" className="main-nav" >
      <div className="nav-links" >
        <Link href="/about">
          <a className="link-item">About</a>
        </Link>
        <Link href="/tattoo">
          <a className="link-item"  >Tattoo</a>
        </Link>
        <Link href="/paintings">
          <a className="link-item"  >Paintings</a>
        </Link>
        <Link href="/contact">
           <a className="link-item"  >Contact</a>
        </Link>
       
      </div>
    </nav>
    <button id="button-menu" className="button-menu" >
      <span></span>
      <span></span>
      <span></span>
    </button>
  </header>

        <style jsx>
            {`
                *{
                    margin: 0;
                    padding: 0;
                  }
                  
                  .main-header{
                    height: 50px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    background-color: yellow;
                    padding: 0; 
                    width:0;
                  }
                  
                  .main-logo{
                    color: black;
                    font-size:32px;
                    text-decoration:none;
                  }
                  
                  .main-nav{
                    position: fixed;
                    top: 0;
                    left: 0;
                    height: 100vh;
                    width: 100%;
                    margin-left: -100%;
                    transition: all .2s linear;
                    background-color: rgba(0,0,0,.7);
                    z-index: 100;
                  }
                  
                  .main-nav.show{
                    margin-left: 0;
                  }
                  
                  .nav-links{
                    background-color: rgb(250,250,250);
                    display: flex;
                    flex-direction: column;
                    width: 70%;
                    height: 100%;
                    align-items: center;
                    justify-content: flex-start;
                  }
                  
                  .link-item{
                    margin-top: 2rem;
                    color: #444444;
                    text-decoration: none;
                    font-weight: bold;
                    position: relative;
                  }
                  
                  .link-item::after {
                    position: absolute;
                    content: "";
                    background-color: black;
                    bottom: -5px;
                    left: 0;
                    width: 0%;
                    height: 3px;
                    transition: 0.3s ease all;
                  }
                  
                  .link-item:hover::after {
                    width: 100%;
                  }
                  
                  .button-menu{
                    z-index: 200;
                    
                    border: none;
                    display: flex;
                    background: none;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                  }
                  
                  .button-menu span{
                    width: 30px;
                    height: 3px;
                    margin-bottom: 5px;
                    position: relative;
                    background: black;
                    border-radius: 3px;
                    transform-origin: 4px 0px;
                    transition: all .2s linear;
                  }
                  
                  .button-menu.close span {
                    opacity: 1;
                    transform: rotate(45deg) translate(0px, 0px);
                    background: red;
                  }
                  
                  .button-menu.close span:nth-child(2){
                    transform: rotate(-45deg) translate(-7px, 3px);
                  }
                  
                  .button-menu.close span:nth-child(3){
                    display: none;
                  }
                  
                  
                  @media screen and (min-width:768px) {
                    .button-menu{
                      display: none;
                    }
                  
                    .main-logo{
                      flex-basis: 30%;
                    }
                  
                    .main-nav{
                      position: static;
                      margin-left: 0;
                      flex-basis: 70%;
                      height: 100%;
                    }
                  
                    .nav-links{
                      width: 100%;
                      flex-direction: row;
                      flex-wrap: wrap;
                      align-items: center;
                      justify-content: flex-end;
                      background: white;
                    }
                  
                    .link-item{
                      display: inline-block;
                      margin-top: 0;
                      margin-right: 2rem;
                    }
                  }

            
            `}


            
        </style>
        

        <Script id="show-banner" strategy="lazyOnload">
  {`const toggleButton = document.getElementById('button-menu')
const navWrapper = document.getElementById('nav')

toggleButton.addEventListener('click',() => {
  toggleButton.classList.toggle('close')
  navWrapper.classList.toggle('show')
})

navWrapper.addEventListener('click',e => {
  if(e.target.id === 'nav'){
    navWrapper.classList.remove('show')
    toggleButton.classList.remove('close')
  }
})
`}
   </Script>  
        

        
        </div>
    )
}