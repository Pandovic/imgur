import { useState, createContext, useEffect } from "react";

export const ImgurContext = createContext();

function ImgurProvider(props) {
    const [login, setLogin] = useState({});
    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);
    const [online, setOnline] = useState(false)
    const [userID, setUserID] = useState({})
    const [likes, setLikes] = useState();
    const [dislike, setDislike] = useState();;

    return <ImgurContext.Provider value={{login, setLogin, show, setShow, show1, setShow1, online, setOnline, userID, setUserID, likes, setLikes, dislike, setDislike}}>{props.children}</ImgurContext.Provider>

}

export default ImgurProvider;