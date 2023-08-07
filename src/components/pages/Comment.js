import {Link} from 'react-router-dom';
import Nav from "../Nav";
import {ImArrowDown} from 'react-icons/im';
import {ImArrowUp} from 'react-icons/im';
import {FaHeart} from 'react-icons/fa';
import {FaComment} from 'react-icons/fa';
import tweet from "../../images/YOEM8fV_d.webp";
import riri from "../../images/20230203_120804.jpg"
import Sidecounter from './Sidecounter';
function Comment(){
   
    return(
        <div className='comment-bk'>
             <div>
             <div className='navBar'>
          <div className='flex'>
            {/* <div><img className="logo" src={logo} alt=""/></div> */}
            <div className="logo">imgur</div>
            <div><button><Link to="/newpost" className='newpost'>New post</Link></button></div>
          </div>

          <div> <input type='text' placeholder="Images, #tags, @users oh my!" /></div>

          <div className='flex'>
            <div><button className='navBar-btn'>Go Ad-Free</button></div>
            <h2 className='navBar-signin'><Link to="/signin" className='newpost'>Sign In</Link></h2>
            <div><button><Link to="/signup" className='newpost'>Sign Up</Link></button></div>

               {/* {login.fname ? (
                <h2>{login.fname}</h2>
               ) :(
                    <div>
                      <div><button className='navBar-btn'>Go Ad-Free</button></div>
                      <div> <h2 className='navBar-signin'><Link to="/signin">Sign In</Link></h2></div>
                      <div><button><Link to="/signup">Sign Up</Link></button></div> 
                    </div>
               )} */}

          
          </div>

             </div>
             </div>
             
            <div className='pos-grid'>
              <div className='post-grid'>
             

                <div className='comment-flex'>

             {/* <div className='comment-wd'>
              <div>
                <div className='likes-count'>
                  <div className='arw-up'><ImArrowUp /></div>
                  <div>473</div>
                  <div className='arw-dw'><ImArrowDown/></div>
                  <div className='heart'><FaHeart/></div>
                </div>

                <div className='share'>
                  <div><FaHeart/></div>
                </div>

                <div className='likes-count comment'>
                  <div className='comment'><FaComment /></div>
                  <div>473</div>
                  
                </div>
              </div>

             </div> */}
             <Sidecounter/>
              <div className='comment-block'>
                  <div className='comment-img'><img src={tweet} alt="" /></div>

                  <div className='politics'>
                    <p>Politics</p>
                  </div>
                  
                  <div>
                    
                  <form className='textarea-form'>
                  <div className='comment-area'>
                    <textarea placeholder='Write a Comment' className='text-area'></textarea>
                  </div>
                  </form>
                  </div>
              </div>

              
            </div>

                <div>
              <div>
                hkefjieei
              </div>
              </div>

              </div>

             

            </div>
            
        </div>
    )
}

export default Comment;