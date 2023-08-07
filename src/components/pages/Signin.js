import {Link} from 'react-router-dom';
import { useContext, useState } from "react";
import {FaFacebook} from 'react-icons/fa';
import {FaTwitter} from 'react-icons/fa';
import {FaApple} from 'react-icons/fa';
import {FaGoogle} from 'react-icons/fa';
import {FaYahoo} from 'react-icons/fa';
import {BsArrowLeftShort} from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { ImgurContext } from '../Context/ImgurContext';
import axios from "axios";

function Signin(){

    const {userID, setShow, setShow1, setUserID, setOnline, online, show1} = useContext(ImgurContext)

    const navigate = useNavigate()
    const [err, setErr] = useState(false);
    const [user, setUser] = useState({
       username: "",
       password: "",
    });
    let login = user;

    function check(){
        setShow(false);
        setShow1(false)
      }

      function check1(){
        if(show1){
            setShow1(false)
        setShow(true)
        }
      }
    
    const submitForm =(e) => {
        e.preventDefault();
        if ( user.username ==="" || user.password ==="" ){
          setErr(true);
        }else {
            setErr(false)
            axios.post("http://localhost:3007/login", login)
            .then((resp) => {
                if(resp.data.msg === 'login successful'){
                    console.log(resp.data);
                localStorage.setItem('Imgur_USER', JSON.stringify(resp.data))
                setOnline(true)
                setShow(false)
                setShow1(false)
                let rawData = localStorage.getItem("Imgur_USER")
                let localData = JSON.parse(rawData)
                setUserID(localData)
                console.log(userID);
                    alert("successfully logged in")
                    navigate("/");
                }else{
                    alert("invalid user please signup..")
                    setShow(true);
                    setShow1(false);
                    
                }
             
            })
            
        }
     };

     console.log(userID);
     return(
        <div className="reg-bk">
            <div className='back'><Link to="/" className='td'><BsArrowLeftShort/> back to Imgur</Link></div>
            <div className='reg-text'><h2>imgur</h2></div>
           
            <div className="form-heading">
                <h2>Sign In with</h2>
            </div>

            <div className='imgur-icons'>
                <div className='grid-5'>
                    <div className='sc-bk'><FaFacebook className='imgur-social-icons'/></div>
                    <div className='sc-bk'><FaTwitter className='imgur-social-icons'/></div>
                    <div className='sc-bk'><FaApple className='imgur-social-icons'/></div>
                    <div className='sc-bk'><FaGoogle className='imgur-social-icons'/></div>
                    <div className='sc-bk'><FaYahoo className='imgur-social-icons'/></div>
                </div>
            </div>

            <div className="form-heading2">
                <h2>or with Imgur</h2>
            </div>

            <form className="form-content" onSubmit={submitForm}>
                <div className="form-control">
                    
                    <input type="text" value={user.username} placeholder='Username' onChange={(e) => setUser({...user, username: e.target.value})}/>
                    {err === true && user.username === "" ? <span>Username required</span> : null}
                </div>
               
                <div className="form-control">
                   
                    <input type="text" value={user.password} placeholder='Password' onChange={(e) => setUser({...user, password: e.target.value})}/>
                    {err === true && user.password === "" ? <span>Password required</span> : null}
                </div>

                <div className="form-btn2">
                    <p>need an account?</p>
                    <button >Sign In</button>
                </div>
            </form>
        </div>
         
     )
}
export default Signin;