import {Link} from 'react-router-dom';
import Nav from "../Nav";
import {ImArrowDown} from 'react-icons/im';
import {ImArrowUp} from 'react-icons/im';
import {FaHeart} from 'react-icons/fa';
import {FaComment} from 'react-icons/fa';
import Sidecounter from './Sidecounter';
import {AiOutlineGif} from 'react-icons/ai';
import {FaRegImage} from 'react-icons/fa';
import './Comment.css'
import {TbArrowBigUp} from 'react-icons/tb'
import {TbArrowBigDown} from 'react-icons/tb'
import { ImgurContext } from '../Context/ImgurContext';

import { useState, useEffect, useContext} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";

function CommentPost(){

    const {_id} = useParams();
    const [loading, setLoading] = useState(true);
    const [product, setProduct] = useState([]);
    const { userID } = useContext(ImgurContext);
    const [data, setData] = useState({});

    useEffect(() => {
        fetch("http://localhost:3007/post/" + _id )
        .then((resp) => resp.json())
        .then((data) => {
            setProduct(data);
            setLoading(false)
            
        });
    
        
    },[]);
    // console.log(product)

    const [comment, setComment] = useState({
        text: "",
        user: userID.id,
     
    });
   

    const submitForm = (e) => {
        e.preventDefault();
        // const userData = {
        //   text: comment.text,
        // };
    
        // console.log(comment);
        // console.log(userData);
    
        axios
          .post(`http://localhost:3007/comment/${_id}`, comment)
          .then((resp) => resp.json())
          .then((data) => {
            setComment(data)
            // console.log(setComment)

          
          });
         
          if(setComment){
            alert("comment sent")
            setComment({
                text: "",
            
            });
           }
          
          
      };

    //   console.log(userID)

       const handlecommentChange = event =>{
    setComment(event.target.value);
    // console.log(event.target.value)
  }

  const [commentData, setCommentData] = useState([]);

useEffect(() => {
    // getData();
    getCommentData()
  }, []);

const getCommentData = async () => {
    await axios.get("http://localhost:3007/post/" + _id).then((res) => {
        setData(res.data);
    //  console.log (res.data.comments)
    });
  };

    return(
        <div className='comment-bk'>
            <div>
                <div className='navBar'>
                    <div className='flex'>
                        <div className="logo"><Link to="/" className='td'>imgur</Link></div>
                        <div><button><Link to="/newpost" className='newpost'>New post</Link></button></div>
                    </div>

                    <div> <input type='text' placeholder="Images, #tags, @users oh my!" /></div>

                    <div className='flex'>
                        <div><button className='navBar-btn'>Go Ad-Free</button></div>
                        <h2 className='navBar-signin'><Link to="/signin" className='newpost'>Sign In</Link></h2>
                        <div><button><Link to="/signup" className='newpost'>Sign Up</Link></button></div>
                    </div>
                </div>

            </div>

            <div className='comment-grid'>
                <div >
                    <div className='comment-flex'>
                        <Sidecounter/>
                        
                        {loading  === true ? (
                            <div className="shop-computer-con1"> Data Loading, please wait</div>
                            ) : (
                                    <div className='comment-block' key={product._id}>
                                        <p className='comment-user'>{}</p>
                                        {/* <p className='comment-user'>{product?.comment.date}</p> */}
                                        <div className='comment-img'><img src={ product.image} alt="" /></div>
                                        <div className='politics'>
                                            <p>{product.tag.title}</p>
                                        </div>
                                    </div>
                             )

                        }

                    </div>

                    <div className='comment-section'>
                       <form onSubmit={submitForm} value={userID}>
                            <input type="text"  value={comment.text} onChange={(e) => setComment({ ...comment, text: e.target.value })}/>
                              {/* <textarea placeholder='Write a Comment' className='text-area' name="text" value={comment} onChange={handlecommentChange} ></textarea> */}

                            <div className='comment-post'>
                                <div className='comment-posst'>
                                    <div>Read the communities rules</div>

                                    <div className='comment-posts'>
                                        <div><FaRegImage/></div>
                                        <div><AiOutlineGif/></div>
                                        <div>500</div>
                                        <button className="comment-button" >Post</button>
                                    </div>
                                </div>
                            </div>

                        </form>
                   </div>

                   {/* {data?.comments?.map((comment) =>( */}
                    <div >
                    <div className='comment-flexs'>
                        <div><p>{data?.comments?.length} COMMENTS</p></div>
                        
                        <div className='flex'>
                            <p>Expand All</p>
                            <p>Best</p>
                        </div>
                    </div>
               </div>
                   {/* ))} */}
                

                 {data?.comments?.map((comment) =>(
                      <div className='comment-data'>
                      <div className='flex comment-datas'>
                           <p className='comment-user'>{data?.user?.username}</p>
                           {/* <p className='comment-user'>{data?.comments?.username}</p> */}
                           <p className='comment-date'>.</p>
                           <p className='comment-date'>4h ago</p>
                       </div>

                      <div className='comment-text'>
                          <p>{comment.text}</p>
                      </div>

                      <div className='flex comment-stat'>
                          <div className='flexy'>
                               <div><TbArrowBigUp/></div>
                               <div>()</div>
                               <div><TbArrowBigDown/></div>
                          </div>

                          <div>|</div>

                          <div>() replies</div>
                      </div>
                  </div>
                 ))}
                   

                  

                </div>

                <div className='ad-con'>
                  <div>
                    hkefjieei
                  </div>
                </div>
                
                   
                    
                
            </div>

        </div>
    )

}
 export default CommentPost;