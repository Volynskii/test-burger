import React from "react";
import './catalog-item.scss'
import {addItemToBasket,removeItemFromBasket} from "../../store/basket-items/actions";
import {useDispatch,useSelector} from "react-redux";


export const CatalogItem = ({catalogItem}) => {

    const dispatch = useDispatch();

    const onAdd = () => {
        dispatch(addItemToBasket(catalogItem.id))
    };

    const onRemove = () => {
      dispatch(removeItemFromBasket(catalogItem.id))
    };
    const basketItems = useSelector((state) => state.basketItems.basketItems);

    var foundIndex = basketItems.findIndex((item) => item.id === catalogItem.id);

    return (
        <>
            <li className="catalog__wrapper__list__item"
            >


                <div className="catalog__wrapper__list__item__wrapper">

                    <div className="catalog__wrapper__list__item__wrapper__picture-block">
                        <div className="catalog__wrapper__list__item__wrapper__picture-block__picture">
                        <img  alt={catalogItem.id} src={catalogItem.img}/>
                        </div>
                        {catalogItem.promotion && (
                            <span style={catalogItem.promotion === 'Хит' ? {backgroundColor: 'black'}: {}} className="catalog__wrapper__list__item__wrapper__picture-block__span">
                                {catalogItem.promotion}
</span>
                        )}

                        {basketItems[foundIndex].itemQuantity > 0 ? (
                            <div className="catalog__wrapper__list__item__wrapper__picture-block__button-block">
                                <button onClick={onRemove} className="catalog__wrapper__list__item__wrapper__picture-block__button-block__minus"/>
                                <p>
                                    {basketItems[foundIndex].itemQuantity}
                                </p>
                                <button onClick={onAdd} className="catalog__wrapper__list__item__wrapper__picture-block__button-block__plus"/>
                            </div>
                        ): (
                            <button onClick={onAdd} className="add-button"/>
                        )}


                    </div>

                </div>
                <span className="catalog__wrapper__list__item__wrapper__name">{catalogItem.name}</span>
                <span className="catalog__wrapper__list__item__wrapper__price">{catalogItem.price}</span>

            </li>
        </>
    );
};
export default CatalogItem;
