import React, {useEffect} from "react";
import Header from "../modules/header/header";
import Main from "../modules/main/main";
import Footer from "../modules/footer/footer";
import {getPosts} from "../store/basket-items/actions";
import {useDispatch} from "react-redux";

export const MainPage = () => {

    // const dispatch = useDispatch();
    // useEffect(() => {
    //     dispatch(getPosts());
    // }, []);

    return (
        <div>
        <Header/>
            <Main />
            <Footer/>
        </div>
    );
};
export default MainPage;
