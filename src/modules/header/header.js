import React from "react";
import './header.scss'
import Filter from "../../components/filter/filter";
import {useSelector} from "react-redux";
import { Link} from "react-scroll";
// import filters from "../../mocks/filter";
import {navItems} from "../../mocks/filter";
import cx from "classnames";
import categories from "../../mocks/categories";
import {useDispatch} from "react-redux";
import {changeDelivery} from "../../store/basket-items/actions";
import ReactTooltip from 'react-tooltip';

export const Header = () => {

    const basketItems = useSelector((state) => state.basketItems.basketItems);

    const totalPrice = basketItems.reduce((currentTotal, item) => {
        return item.price * item.itemQuantity + currentTotal
    }, 0);

    const dispatch = useDispatch();

    const delivery = {
        delivery: 'Доставка',
        selfPickup:'Самовызов'
    }
    const activeButton = useSelector((state) => state.basketItems.delivery);

    const onClick = (e) => {
        // setActiveButton(!activeButton)
dispatch(changeDelivery(!activeButton))
    }
    return (
        <>
        <section className="headline">
            <div className="headline__wrapper" >


                <article className="headline__wrapper__basket-menu">
<div className="headline__wrapper__basket-menu__menu">
</div>
                <div className="headline__wrapper__basket-menu__basket">
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
        <form className="delivery-address__form">
            <ul className="delivery-address__list">

                <li className="delivery-address__list__item">
                    <label className="label-address" htmlFor="address">Улица </label>
                    <input data-for="main"
                           data-iscapture="true"
                           data-tip = "Нужно заполнить для оформления заказа"
                           data-place="bottom"
                           type="text" id="address" placeholder="Остороженка" />

                    {/*<ReactTooltip*/}
                    {/*    id="main"*/}
                    {/*    // place={place}*/}
                    {/*    // type={type}*/}
                    {/*    // effect={effect}*/}
                    {/*    multiline={true}*/}
                    {/*/>*/}
                    {/*<a data-tip='custom show' data-event='click'>( •̀д•́)</a>*/}
                    {/*<ReactTooltip globalEventOff='click' />*/}


                    {/*<a data-tip='custom show and hide' data-event='click' data-event-off='dblclick'>( •̀д•́)</a>*/}
                    {/*<ReactTooltip/>*/}
                </li>

                <li className="delivery-address__list__item pd">
                    <label className="label-house-number" htmlFor="house-number">Дом</label>
                    <input type="text" id="house-number"
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
