import React from "react";
import img6 from '../../images/bk-img-1.jpg';
import {FaArrowDown, FaGoogle} from 'react-icons/fa';
import {FaYahoo} from 'react-icons/fa';
import {FaComment} from 'react-icons/fa';
import {FaEye} from 'react-icons/fa';
import {ImArrowDown} from 'react-icons/im';
import {ImArrowUp} from 'react-icons/im';
import {Link} from 'react-router-dom';
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import {useParams} from "react-router-dom";
import { ImgurContext } from '../Context/ImgurContext';
import Signin from '../pages/Signin';
import Signup from '../pages/SignUp';
   
function Posts(){
  const {userID,setUserID,show, show1, likes, setLikes, } = useContext(ImgurContext);
//  console.log(userID.data.id)
    const { _id } = useParams();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState({});

    useEffect(() => {
        fetch("http://localhost:3007/post")
        .then((resp) => resp.json())
        .then((data) => {
            console.log('data',data);
            setProducts(data);
            setLoading(false)
        });

        
    },[]);
    // console.log(products)
  
    async   function LikePost(a){
      const loggedin = {
        user:userID.data.id
      }
      console.log(userID.data.id)
         try{
           await  axios.put('http://localhost:3007/likes/'+ a, loggedin ).then(res=>{
              console.log(res)
              if(res.status === 200){
                alert("post has been liked")
              }
            
            })
         }catch(err){
          console.log(err)
         }
         console.log(loggedin);
         
    };
 
    
   async function UnLikePost(a){
    const loggedin = {
      user:userID.data.id
    }
     
        try {
          await    axios.put('http://localhost:3007/unlike/'+ a, loggedin).then(res=>{
              console.log(res)
              if(res.status === 200){
                alert("you just unliked this post")
                
              }
            })
        } catch (error) {
          console.log(error);
        }
    }

    const LikeAmount = (a) =>{
      setLikes(a)
    }

    useEffect(() => {
      // getData();
      getCommentData()
      LikePost()
    }, [LikePost]);
  
  const getCommentData = async () => {
      await axios.get("http://localhost:3007/post/" + _id).then((res) => {
          setData(res.data);
       console.log (res.data.comments)
      });
    };

    // useEffect(() => {
    //   if(localStorage){
    //     let rawData = localStorage.getItem("Imgur_USER")
    //     let localData = JSON.parse(rawData)
    //     setUserID(localData)
    //   }
    //   console.log('I restarted');
      
    
    // },[]);

    
    // console.log(userID.data.id);
    return (
        <div className="post-bk">
            <div className="ddd">
                {loading ? (
                    <div>Data Loading, please wait....</div>
                ) : (
                    products.map((product) =>{
                        // console.log('product',product)
                        return  (
                          // http://localhost:3007/postimage/2-c.jpg
                            <div className="posts-grid">
                                <div key={product._id} className="bkk"  >
                                   <div className="shopComputer-product">
                                        <Link to={`/commentPost/${product._id}`} className="post-bk">
                                            <h2 className="flexx post-title">{product.title ?? ''}</h2>
                                            <img src={product.image} alt="images" />
                                            <p>{product.description}</p>
                                            <p> {product.tag?.title ?? ''}</p>
                                        </Link>
                                        <div className="flexx">
                                            <div className="flexy">
                                                <ImArrowUp onClick={()=>LikePost(product._id)}/>
                                                <div>{product.likes.length}</div>
                                                <ImArrowDown onClick={()=>UnLikePost(product._id)}/>
                                            </div>

                                            <div><FaComment /> {product?.comments?.length}</div>
                                            <div><FaEye /> 12</div>
                                        </div>
                                        
                                   </div>
                                </div>
                            </div>
                           
    
                            
            
                           )
                    })
                )}
            </div>
            {show ? <Signup /> : null}
            {show1 ? <Signin /> : null}
        </div>

       
          
     )

  
  
}
export default Posts;