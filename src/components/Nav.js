import {Link} from 'react-router-dom';
import logo from '../images/imgur-logo3.jfif';
import img from '../images/bk-img-1.jpg';
import img1 from '../images/bk-img-1.jpg';
import img2 from '../images/bk-img-2.jpg';
import img3 from '../images/bk-img-3.jpg';
import img4 from '../images/bk-img-4.jpg';
import img5 from '../images/bk-img-5.jpg';
import img6 from '../images/bk-img-6.jpg';
import img7 from '../images/bk-img-7.png';
import { ImgurContext } from './Context/ImgurContext';
import { useContext, useEffect, useState } from 'react';
import {useParams} from "react-router-dom";

import Signin from './pages/Signin';
import SignUp from './pages/SignUp';



function Nav() {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [tags, setTags] = useState([]);
  const [tagpolitics, setTagpoitics] = useState([]);
  const [tagbeauty, setTagbeauty] = useState([]);
  const [tagfunny, setTagfunny] = useState([]);
  const [taghealth, setTaghealth] = useState([]);
  const [tagmovies, setTagmovies] = useState([]);
  const [tagmusic, setTagmusic] = useState([]);
  const [tagphotography, setTagphotography] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3007/tag/64c37062247c94d040ff5fb1")
    .then((resp) => resp.json())
    .then((data) => {
        console.log('data',data);
        setTags(data);
 
    })
    .catch((error) => {
      console.error('Error fetching tag:', error);
    });
 
  },[]);

  useEffect(() => {
    fetch("http://localhost:3007/tag/64c37046247c94d040ff5fad")
    .then((resp) => resp.json())
    .then((data) => {
        console.log('data',data);
        setTagpoitics(data);
 
    })
    .catch((error) => {
      console.error('Error fetching tag:', error);
    });
 
  },[]);

  useEffect(() => {
    fetch("http://localhost:3007/tag/64ca3418d29336b993e7203b")
    .then((resp) => resp.json())
    .then((data) => {
        console.log('data',data);
        setTagbeauty(data);
 
    })
    .catch((error) => {
      console.error('Error fetching tag:', error);
    });
 
  },[]);

  useEffect(() => {
    fetch("http://localhost:3007/tag/64ca83fe2bd1a99effc1a81e")
    .then((resp) => resp.json())
    .then((data) => {
        console.log('data',data);
        setTagfunny(data);
 
    })
    .catch((error) => {
      console.error('Error fetching tag:', error);
    });
 
  },[]);

  useEffect(() => {
    fetch("http://localhost:3007/tag/64c37059247c94d040ff5faf")
    .then((resp) => resp.json())
    .then((data) => {
        console.log('data',data);
        setTaghealth(data);
 
    })
    .catch((error) => {
      console.error('Error fetching tag:', error);
    });
 
  },[]);

  useEffect(() => {
    fetch("http://localhost:3007/tag/64c372c1247c94d040ff5fc9")
    .then((resp) => resp.json())
    .then((data) => {
        console.log('data',data);
        setTagmovies(data);
 
    })
    .catch((error) => {
      console.error('Error fetching tag:', error);
    });
 
  },[]);

  useEffect(() => {
    fetch("http://localhost:3007/tag/64c37031247c94d040ff5fab")
    .then((resp) => resp.json())
    .then((data) => {
        console.log('data',data);
        setTagmusic(data);
 
    })
    .catch((error) => {
      console.error('Error fetching tag:', error);
    });
 
  },[]);

  useEffect(() => {
    fetch("http://localhost:3007/tag/64ca81ab2bd1a99effc1a805")
    .then((resp) => resp.json())
    .then((data) => {
        console.log('data',data);
        setTagphotography(data);
 
    })
    .catch((error) => {
      console.error('Error fetching tag:', error);
    });
 
  },[]);

    
    return (
      <nav>
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

        <div className='welcome-text'>Life is what happens when you're busy making memes.</div>

        <div className='tags'>
          <div className='trending-tags'>
             <div>Explore Tags</div>
             <div>More Tags +</div>
          </div>
        </div>

        {/* {tags.map((tag) =>{ */}
          <div className='trending-container' >
          <div className='grid'>
            <div>
            <div><img className="trending-img1" src={img} alt=""/></div>
            <div className='tag-tittle' key={tags._id}>
            <Link to={`/postcategory/${tags.id}`} className='td'><div className='tag-name'>{tags.title}</div>
            <div className='tag-posts'>FEATURED + {tags.title?.length} Posts</div></Link>
            </div>
            </div>

            <div>
            <div><img className="trending-img" src={img2} alt=""/></div>
            <div className='tag-tittle' key={tagpolitics._id}>
            <Link to={`/postcategory/${tagpolitics.id}`} className='td'><div className='tag-name'>{tagpolitics.title}</div>
            <div className='tag-posts'> {tags.title?.length} Posts</div></Link>
            </div>
            </div>

            <div>
            <div><img className="trending-img" src={img3} alt=""/></div>
            <div className='tag-tittle' key={tagbeauty._id}>
            <Link to={`/postcategory/${tagbeauty.id}`} className='td'><div className='tag-name'>{tagbeauty.title}</div>
            <div className='tag-posts'> 1,549 Posts</div></Link>
            </div>
            </div>

            <div>
            <div><img className="trending-img" src={img4} alt=""/></div>
            <div className='tag-tittle'  key={tagfunny._id}>
            <Link to={`/postcategory/${tagfunny.id}`} className='td'><div className='tag-name'>{tagfunny.title}</div>
            <div className='tag-posts'> 1,549 Posts</div></Link>
            </div>
            </div>

            <div>
            <div><img className="trending-img" src={img5} alt=""/></div>
            <div className='tag-tittle'  key={taghealth._id}>
            <Link to={`/postcategory/${taghealth.id}`} className='td'><div className='tag-name'>{taghealth.title}</div>
            <div className='tag-posts'> 1,549 Posts</div></Link>
            </div>
            </div>

            <div>
            <div><img className="trending-img" src={img2} alt=""/></div>
            <div className='tag-tittle' key={tagmovies._id}>
            <Link to={`/postcategory/${tagmovies.id}`} className='td'><div className='tag-name'>{tagmovies.title}</div>
            <div className='tag-posts'> 1,549 Posts</div></Link>
            </div>
            </div>

            <div>
            <div><img className="trending-img" src={img6} alt=""/></div>
            <div className='tag-tittle' key={tagmusic._id}>
            <Link to={`/postcategory/${tagmusic.id}`} className='td'><div className='tag-name'>{tagmusic.title}</div>
            <div className='tag-posts'> 1,549 Posts</div></Link>
            </div>
            </div>

            <div>
            <div><img className="trending-img" src={img7} alt=""/></div>
            <div className='tag-tittle'  key={tagphotography._id}>
            <Link to={`/postcategory/${tagphotography.id}`} className='td'><div className='tag-name'>{tagphotography.title}</div>
            <div className='tag-posts'> 1,549 Posts</div></Link>
            </div>
            </div>

           
          </div>
        </div>
        {/* })

        } */}
        
        {show ? <SignUp /> : null}
        {show1 ? <Signin /> : null}
      </nav>
    );
  }
  
  export default Nav;