
import Image from "next/image"
import horihiw from '../../public/img/horihiw.svg'

export default function Form(){
    return(
        <div>
         <div id="layer5" className="layer_container5">
          <div className="container5_text">
            <div className="container5_text1">CONTACT</div>
            <div className="container5_text2">お問い合わせ</div>
          </div>
          <div className="container5_circle">
              <div className="circle_content">
                  
                  <form action="/api/form" method="post">
                    <div className="name">
                      <label htmlFor="first">Name :
                      <input type="text" name="first" id="first" required/>
                      </label>
                    </div>
                    <div className="email">
                        <label htmlFor="last">Last Name :</label>
                        <input type="text" name="last" id="last"/>
                    </div>
                   
                   <div className="email">
                      <label htmlFor="email">Email :
                      <input type="email" name="email" id="email" required/>
                      </label>
                   </div>
                   
                   <div className="textarea" >MESSAGE
                        <label htmlFor="textarea"></label> 
                      <textarea  name="textarea" id="textarea" cols="30" rows="10" ></textarea>
                   </div>
                   
                   <div className="send">
                     <button type="submit">参加する</button>
                   </div>
                 
                  
                </form>
              </div>
          </div>
          <div className="container5_text2">
            <div className="container5_text3">お問い合わせ </div> 

            <div className="container5_text4">
              <Image
                alt="horihi_img"
                src={horihiw}
              />
            </div>
          </div>
        </div>

        <style jsx>{`
        .layer_container5{
            background:black;
            color:white;
            overflow:hidden;
            
          }
          .container5_text{
            display:flex;
            justify-content:space-between;
            padding-top:2rem;
            font-size:18px;
            font-weight:700;
            
            

          }
          .container5_text1{
            margin-left:2rem;
            writing-mode:vertical-rl;
            text-orientation:upright;

          }

          
          .container5_circle{
            
            background:red;
            border-radius:50%;
            height:450px;
            width:450px;
            display:flex;
            align-items:center;
            justify-content:center;
            
            margin:2rem;
            margin-left:auto;
            margin-right:auto;
          }
          .circle_content{
            display:flex;
          }
          .name{
            font-weight:700;
            margin-top:6rem;
            
        
          }
          .name input{
            border:none;
            border-radius:10px;
          }
          .email{
            font-weight:700;
          }
          .email input{
            border:none;
            border-radius:10px;
          }
          .textarea{
            display:flex;
            flex-direction:column;
            font-weight:700;
            margin-top:1.5rem;
          }
          .textarea textarea{
            margin-top:1rem;
            border:none;
            border-radius:10px;
          }
          .send{
            display:flex;
            justify-content:center;
          }
          .send button{
            
            border:none;
            border-radius:10px;
            background:white;
            font-weight:700;
            margin-top:1rem;
            padding:0.5rem 1rem;
            border:2px solid black;
            cursor:pointer;
          }
          .container5_text2{
            display:flex;
            flex-direction:row;
            justify-content:space-between;
            margin-right:2rem;
           
            
          }
          .container5_text3{
            font-size:18px;
            font-weight:700;
            margin-left:2rem;
            writing-mode:vertical-rl;
            text-orientation:upright;
          
          }
          .container5_text4{
           
           padding-bottom:3rem;
          }
          
            
            `}</style>

        </div>
    )
}