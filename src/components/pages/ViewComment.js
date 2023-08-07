import {Link} from 'react-router-dom';
import Nav from "../Nav";
import {ImArrowDown} from 'react-icons/im';
import {ImArrowUp} from 'react-icons/im';
import {FaHeart} from 'react-icons/fa';
import {FaComment} from 'react-icons/fa';
import tweet from "../../images/YOEM8fV_d.webp";
import tweet2 from "../../images/WSI8seB_d.webp"
import riri from "../../images/20230203_120804.jpg"
import Sidecounter from './Sidecounter';

function ViewComment(){
    return(
        <div className='comment-bk'>
             <div>
                <div className='navBar'>
                 <div className='flex'>
            {/* <div><img className="logo" src={logo} alt=""/></div> */}
            <div className="logo"><Link to="/" className='Logo-Link'>imgur</Link></div>
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

             <div>
                <div className='view-grid'>
                    <Sidecounter/>
                    <div className='comment-block'>
                        <div className='comment-img'><img src={tweet2} alt="" /></div>

                        <div className='politics'>
                            <p>Meme</p>
                        </div>
                        <div>
                            <div>
                            <textarea placeholder='Write a Comment'/>
                            </div>
                            <div className='flexx k9'>
                                <p>Read the community rules</p>
                                <div className='flex'>
                                <FaComment/>
                                <FaComment/>
                                <p>500</p>
                                <button className='comment-btn'>Post</button>
                                </div>
                            </div>
                        </div>
                  
                        {/* <div>
                    
                           <form className='textarea-form'>
                                <div className='comment-area'>
                                    <textarea placeholder='Write a Comment' className='text-area'/>
                                </div>
                            </form>
                        </div> */}
                    </div>

                </div>
             </div>

        </div>
    )
}

export default ViewComment;