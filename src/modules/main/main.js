import React, {useEffect} from "react";
import './main.scss'
import categories from "../../mocks/categories";
import {useSelector} from "react-redux";
import {getPosts} from "../../store/basket-items/actions";
import {useDispatch} from "react-redux";
import Loading from "../../components/loading/loading";
import Catalog from "../../components/catalog/catalog";


export const Main = () => {
    const dispatch = useDispatch();



    // state from redux
    const initialCatalogItems = useSelector((state) => state.basketItems.catalogItems);
    const delivery = useSelector((state) => state.basketItems.delivery);

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);


    // check if delivery is falsy, if yes filter items
    const catalogItems =
        !delivery ?
            initialCatalogItems:
            initialCatalogItems.filter((it) => {
                return it.delivery === delivery;
            });

    var categoriesIds = [];
    var catalogArrays = [];

    for (var i = 0; i < categories.length; i++) {

        // create ids of needed items
        categoriesIds[i] = categories[i].products;

        // create empty arrays to fill in
        catalogArrays[i] = [];

        // fill empty arrays
        catalogItems.forEach((item) => {
 if(categoriesIds[i].includes(item._id)) {
     catalogArrays[i].push(item)
    }
})
    }


    return (
        <>

            {!initialCatalogItems.length ? <Loading/> : (
               <Catalog catalogArrays={catalogArrays}/>
            )
            }
        </>
    );
};
export default Main;
