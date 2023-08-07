import { useState, useEffect, useContext} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import {ImArrowDown} from 'react-icons/im';
import {ImArrowUp} from 'react-icons/im';
import {Link} from 'react-router-dom';

function PostCategory(){
    const {_id} = useParams();
    const [product, setProduct] = useState([]);

    const [postId, setPostId] = useState('');
    const [postsByTag, setPostsByTag] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    // const handleInputChange = (e) => {
    //     setPostId(e.target.value);
    //   };

    //   const handleSubmit = async (e) => {
    //     e.preventDefault();
    
    //     try {
    //       const response = await axios.get(`/post/tag/${postId}`);
    //       setPostsByTag(response.data);
    //       setError('');
    //     } catch (error) {
    //       setPostsByTag([]);
    //       setError('Post not found');
    //     }
    //   };

    const { tagId } = useParams();
    const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3007/post/tag/${tagId}`)
      .then((response) => {
        console.log(response)
        setPosts(response.data);

      })
      .catch((error) => {
        console.error('Error fetching posts by tag:', error);
      });
  }, [tagId]);

    

    return(
        // <div className="post-bk">
        //     <h1>Posts by Tag</h1>
        //     <div className="ddd">
        //     <div className="posts-grid">
        //         {posts.map((post) => (
        //         <div key={post._id}  className="bkk" >
        //             <div className="post-bk">
        //                 <h2 className="flexx post-title">{post.title  ?? ''}</h2>
        //                     <img src={post.image} alt="images" />
        //                     <p>{post.description}</p>
        //                     <p> {post.tag?.title ?? ''}</p>
        //             </div>
        //         </div>
        //         ))}
        //     </div>
        //     </div>
        // </div>
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
        <div className="post-bk">
            <div className="ddd">
                
                    {posts.map((post) =>{
                        console.log('post',post)
                        return  (
                          
                            <div className="posts-grid">
                                <div key={post._id} className="bkk"  >
                                   <div className="shopComputer-product">
                                        <Link to={`/commentPost/${post._id}`} className="post-bk">
                                            <h2 className="flexx post-title">{post.title ?? ''}</h2>
                                            <img src={post.image} alt="images" />
                                            <p>{post.description}</p>
                                            <p> {post.tag?.title ?? ''}</p>
                                        </Link>
                                        {/* <div className="flexx">
                                            <div className="flexy">
                                                <ImArrowUp onClick={()=>LikePost(product._id)}/>
                                                <div>{product.likes.length}</div>
                                                <ImArrowDown onClick={()=>UnLikePost(product._id)}/>
                                            </div>

                                            <div><FaComment /> {product?.comments?.length}</div>
                                            <div><FaEye /> 12</div>
                                        </div> */}
                                        
                                   </div>
                                </div>
                            </div>
                           
    
                            
            
                           )
                    })}
                
            </div>
           
        </div>
        </div>

     
      
            
    )
}
export default PostCategory;