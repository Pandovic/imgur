import { useState, useRef, useEffect, useContext} from "react";
// import {useDropzone} from 'react-dropzone';
import {Link} from 'react-router-dom';
import {BsArrowLeftShort} from 'react-icons/bs';
import {FaCross} from 'react-icons/fa';
import {BiDownload} from 'react-icons/bi';
import {AiOutlineDelete} from 'react-icons/ai';
import {ImEmbed} from 'react-icons/im';
import { ImgurContext } from '../Context/ImgurContext';
import { useNavigate } from 'react-router-dom';
// import {React} from "react";

import axios from "axios";

function Newpost() {
  const navigate = useNavigate();
  const [options, setOptions] =useState();
  const [values, setValues] =useState([]);
  const [err, setErr] = useState(false);
  const [title, setTitle] =useState("");
  const [tag, setTag] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const {userID,setUserID} = useContext(ImgurContext)
//   e.preventDefault();
//   const postData = {
//       title: post.title,
//       avatar: post.avatar,
//       description: post.description,
//       tag: post.tag,
//   };
//   console.log(postData)

//   if ( post.title ==="" || post.avatar ==="" || post.description ==="" || post.tag ==="" ){
//     setErr(true);
//   }else {
//       axios.post("http://localhost:3007/post", postData)
//       .then((resp) => {
//           console.log(resp.data)
//           .catch((error) => {console.error(error);})
//           let response = resp.data.error
//           // if (response){
//           //     alert("User exist")
//           // }else {
//           //    alert("Registered Succesfully")
//           // }
       
//       })
//       // setUser({
//       //     username: "",
//       //     email: "",
//       //     password: "",
//       //     phoneNumber: "",
//       // });
//       // setErr(false);
//       // navigate("/signin");
      
//   }
// };

const check =async() => {
  // e.preventdefault();
  console.log('Request Started');
let formdata = new FormData()
formdata.append('title', title);
formdata.append('tag', tag);
formdata.append('description', description);
formdata.append('image', image);
formdata.append('user', userID.data.id);
console.log("form data",formdata.get('image'));
//  return false;
let response = await fetch("http://localhost:3007/post",{
method:"Post",
body:formdata,
// headers:{
//   'Content-Type':"multipart/form-data",
// }
});


if(response.status === 200){
alert("Post created");
navigate("/");
}
console.log('response',response.data);


}

useEffect(() => {
  if(localStorage){
    let rawData = localStorage.getItem("Imgur_USER")
    let localData = JSON.parse(rawData)
    setUserID(localData)
  }
  console.log('I restarted');
  fetch("http://localhost:3007/tag",)
  .then((data) => data.json())
  .then((val) => {
    setValues(val);
  });

},[]);
// console.log(values, "values")

console.log(userID.data.id);
  
    return (
      <section className="container">
         
        <div className='navBar'>
          <div className='flex'>
            {/* <div><img className="logo" src={logo} alt=""/></div> */}
            <div className="logo"><Link to="/" className='td'>imgur</Link></div>
            {/* <div><button><Link to="/newpost" className='newpost'>New post</Link></button></div> */}
          </div>

          {/* <div> <input type='text' placeholder="Images, #tags, @users oh my!" /></div> */}

          <div className='flex'>
            <div><button className='navBar-btn'>Go Ad-Free</button></div>
            <h2 className='navBar-signin'><Link to="/signin" className='newpost'>Sign In</Link></h2>
            <div><button><Link to="/signup" className='newpost'>Sign Up</Link></button></div>

          
          </div>

        </div>

        <form className="grid-2" onSubmit={(e)=>{e.preventDefault();}} >
            <div className="container1" value={userID}>

              <div className="input-title"> <input type="text"  placeholder="Give your post a unique title..." onChange={(e)=>setTitle(e.target.value)} /></div>

              <input type="file" id="image" name="image" onChange={(e)=>setImage(e.target.files[0])} />

              <div className="input-title2"> <input type="text"  placeholder="Add a description" onChange={(e)=>setDescription(e.target.value)} /></div>
        
            </div>

            <div className="container2">
              <div className="poost"><p>Post</p></div>
              <div className="postOptions">
                <button className="Button Button-community" onClick={check}>To Community</button>
                <button className="Button Button-grabLink">Grab Link</button>
                <p className="postStatus"> Your post is currently Hidden</p>

                <div className="checkbox-tag flex">
                    <label><input className="checkbox" type="checkbox"/></label>
                    <label className="mature">Mature (?)</label>

                </div>

                <div className="add-tags">Add Tags</div>
                {/* <div className='cross-tag'><FaCross/> Tag</div> */}
                {/* <input type="text" className="tag-in" value={post.tag} placeholder=" Tag" onChange={(e) => setPost({...post, tag: e.target.value})} /> */}
                <select name="tag" onChange={(e)=>setTag(e.target.value)}>
              {
                values.map((opts,i) => <option key={i} value={opts._id}>{opts.title}</option>)
              }
            </select>
                </div>

                <div className="add-tags">IMG TOOLS</div>
                
               
                <div className='span-tag'><span className='span-tag'><FaCross/></span>Add more images</div>
                <div className='span-tag'><span><ImEmbed/> </span>Embed post</div>
                <div className='span-tag'><span><BiDownload/> </span>Down post</div>
                <div className='span-tags'><span><AiOutlineDelete/> </span>Delete post</div>
                
                    
              </div>
            {/* </div> */}
        </form>
      </section>
    );
  }
  

 
  export default Newpost;