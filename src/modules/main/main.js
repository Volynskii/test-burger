import React, {useEffect} from "react";
import './main.scss'
import CatalogItem from "../../components/catalog-item/catalog-Item";
import categories from "../../mocks/categories";
import {useSelector} from "react-redux";
import {getPosts} from "../../store/basket-items/actions";
import {useDispatch} from "react-redux";
import {navItems} from "../../mocks/filter";
import cx from "classnames";


export const Main = () => {

    // state from redux
    const initialCatalogItems = useSelector((state) => state.basketItems.catalogItems);
    const delivery = useSelector((state) => state.basketItems.delivery);

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
 if(categoriesIds[i].includes(item.id)) {
     catalogArrays[i].push(item)
    }
})
    }


    const dispatch = useDispatch();


   /* useEffect(() => {
        dispatch(getPosts());
    }, []);*/

    return (
        <>
            {catalogArrays.map((filteredCategory,index) =>
                {

                    return (
<main>
                    <section   id={navItems[index]} key={index}
                               className={cx(`catalog`, {
                                   [`white-background`]: Number.isInteger(index / 2)
                               })}
                    >
                        <div className="catalog__wrapper">
                            <h1 className="catalog__wrapper__headline" >{categories[index].name}</h1>
                            <ul className="catalog__wrapper__list">
                                {filteredCategory.map((catalogItem, index) => (
                                    <CatalogItem
                                        key={index}
                                        catalogItem={catalogItem}
                                    />
                                ))}
                            </ul>
                        </div>
                    </section>
</main>
                )
            }
            )}
        </>
    );
};
export default Main;
