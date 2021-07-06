import React, {useState} from "react";
import './header.scss'
import Filter from "../../components/filter/filter";
import {useSelector} from "react-redux";
import cx from "classnames";
import {useDispatch} from "react-redux";
import {changeDelivery,emptyBasket,sendToBack} from "../../store/basket-items/actions";

export const Header = () => {


const isSend = useSelector((state) => state.basketItems.sendToBack);

    const basketItems = useSelector((state) => state.basketItems.basketItems);
    const totalPrice = basketItems.reduce((currentTotal, item) => {
        return item.price * item.itemQuantity + currentTotal
    }, 0);



    const dispatch = useDispatch();

    const [values, setValues] = useState({
        streetNumber: '',
        street: ''
    });

    const handleChange = e => {

        const {name, value} = e.target;
        setValues({
            ...values,
            [name]: value
        });
    };

    const activeButton = useSelector((state) => state.basketItems.delivery);

    const onClickBasket = () => {
        if(activeButton === true) {

            if (values.street || values.streetNumber) {
                dispatch(emptyBasket())
                dispatch(sendToBack())
                console.log('send to backend!')
            }

        }

        if(activeButton === false) {
            dispatch(emptyBasket());
            dispatch(sendToBack())
            console.log('send to backend!')
        }

    };

    const delivery = {
        delivery: 'Доставка',
        selfPickup:'Самовызов'
    };


    const onClick = (e) => {
dispatch(changeDelivery(!activeButton))
    };

    return (
        <>
        <section className="headline">
            <div className="headline__wrapper" >


                <article className="headline__wrapper__basket-menu">
<div className="headline__wrapper__basket-menu__menu">
</div>
                <div className="headline__wrapper__basket-menu__basket"
                onClick={onClickBasket}
                >
                    {totalPrice} ₽
                </div>

                </article>


                <article className="delivery">
                    <div className="delivery__choosen-city">
                <h1 className="delivery__choosen-city__city" >
                    Доставка г.Москва
                </h1>
                    </div>

                    <div className="delivery__type">
                        <button onClick={(e) => onClick(e)}
                        className={cx(`delivery__type__button`, {
                        [`button-active`]: activeButton
                    })}
                        >{delivery.delivery}</button>
                        <button onClick={(e) => onClick(e)}
                                className={cx(`delivery__type__button`, {
                                    [`button-active`]: !activeButton
                                })}
                        >{delivery.selfPickup}</button>
                    </div>
                </article>


{activeButton === true && (

    <div className="delivery-address">
        <form  className="delivery-address__form">
            <ul className="delivery-address__list">

                <li className="delivery-address__list__item">
                    <label className="label-address" htmlFor="address">Улица </label>
                    <input
                        name="street"
                        onChange={handleChange}
                        data-for="main"
                           data-iscapture="true"
                           data-tip = "Нужно заполнить для оформления заказа"
                           data-place="bottom"
                           type="text" id="address" placeholder="Остороженка" />
                </li>

                <li className="delivery-address__list__item pd">
                    <label className="label-house-number" htmlFor="house-number">Дом</label>
                    <input
                        name="streetNumber"
                        onChange={handleChange}
                        type="text" id="house-number"
                           className="input-error"
                           placeholder="Остороженка"/>
                </li>
            </ul>
        </form>



    </div>

)}
            </div>
        </section>

           <Filter/>

            </>
    );
};
export default Header;
