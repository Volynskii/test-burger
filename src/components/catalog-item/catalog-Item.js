import React from "react";
import './catalog-item.scss'
import {addItemToBasket,removeItemFromBasket} from "../../store/basket-items/actions";
import {useDispatch,useSelector} from "react-redux";
 import LazyLoad from "react-lazyload";

export const CatalogItem = ({catalogItem}) => {

    const dispatch = useDispatch();
    const onAdd = () => {
        dispatch(addItemToBasket(catalogItem))
    };
    const onRemove = () => {
      dispatch(removeItemFromBasket(catalogItem))
    };
    const basketItems = useSelector((state) => state.basketItems.basketItems);
    const foundIndex = basketItems.findIndex((item) => item._id === catalogItem._id);
// console.log('basketItems', basketItems)
//     console.log('catalogItem', catalogItem)
    return (
        <>
            <li className="catalog__wrapper__list__item">
                <div className="catalog__wrapper__list__item__wrapper">
                    <div className="catalog__wrapper__list__item__wrapper__picture-block">
                        <div className="catalog__wrapper__list__item__wrapper__picture-block__picture">
                            <LazyLoad height={250} once>
                                <img alt={catalogItem._id} src={catalogItem.img}/>
                            </LazyLoad>
                        </div>
                        {catalogItem.promotion && (
                            <span style={catalogItem.promotion === 'Хит' ? {backgroundColor: 'black'} : {}}
                                  className="catalog__wrapper__list__item__wrapper__picture-block__span">
                                {catalogItem.promotion}</span>)}

                        {catalogItem.itemQuantity > 0 ? (
                            <div className="catalog__wrapper__list__item__wrapper__picture-block__button-block">
                                <button onClick={onRemove}
                                        className="catalog__wrapper__list__item__wrapper__picture-block__button-block__minus"/>
                                <p>{catalogItem.itemQuantity}</p>
                                <button onClick={onAdd}
                            className="catalog__wrapper__list__item__wrapper__picture-block__button-block__plus"/>
                            </div>
                        ) : (<button onClick={onAdd} className="add-button"/>)}
                    </div>
                </div>
                <span className="catalog__wrapper__list__item__wrapper__name">{catalogItem.name}</span>
                <span className="catalog__wrapper__list__item__wrapper__price">{catalogItem.price} ₽</span>
            </li>
        </>
    );
};
export default CatalogItem;
