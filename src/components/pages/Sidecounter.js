import {ImArrowDown} from 'react-icons/im';
import {ImArrowUp} from 'react-icons/im';
import {FaHeart} from 'react-icons/fa';
import {FaComment} from 'react-icons/fa';
import {AiOutlineShareAlt} from 'react-icons/ai';
import {GoComment} from 'react-icons/go';
import {TbArrowBigUp} from 'react-icons/tb';
import {TbArrowBigDown} from 'react-icons/tb';
import {AiOutlineHeart} from 'react-icons/ai';
import { useState, useEffect, useContext} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";
import { ImgurContext } from '../Context/ImgurContext';

function Sidecounter(){
  const {userID,setUserID,show, show1, likes, setLikes, } = useContext(ImgurContext);
  const {_id} = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    // getData();
    getCommentData()
  }, []);

const getCommentData = async () => {
    await axios.get("http://localhost:3007/post/" + _id).then((res) => {
        setData(res.data);
     console.log (res.data.comments)
    });
  };

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

    return(
        <div>
             <div className='comment-wd'>
              <div>
                <div className='likes-count'>
                  <div className='arw-up'><TbArrowBigUp /> </div>
                  <div>473 </div>
                  <div className='arw-dw'><TbArrowBigDown /> </div>
                  <div className='heart'><AiOutlineHeart/></div>
                </div>

                <div className='share'>
                  <div><AiOutlineShareAlt/></div>
                </div>

                <div className='likes-count comment'>
                  <div className='comment'><GoComment /></div>
                  <div>{data?.comments?.length}</div>
                  
                </div>
              </div>

             </div>

        </div>
    )
}

export default Sidecounter;