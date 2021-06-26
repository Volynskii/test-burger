import React from "react";
import './header.scss'

export const Header = () => {
    return (
        <>
        <section className="headline">
            <div className="headline__wrapper" >

                <article className="headline__wrapper__basket-menu">

<div className="headline__wrapper__basket-menu__menu">
    ЗНАЧОК МЕНЮ
</div>

                <div className="headline__wrapper__basket-menu__basket">
                   300 &#8381;
                </div>

                </article>


                <article className="delivery">
                <h1 className="delivery__choosen-city">
                    Доставка г.Москва
                </h1>

                    <div className="delivery__type">
                        <button className="delivery__type__take-out">Доставка</button>
                        <button className="delivery__type__take-in">Самовызов</button>
                    </div>
                </article>


<div className="delivery-address">
    <form>
        <ul className="delivery-address__list">

            <li className="delivery-address__list__item">
                <label className="label-address" htmlFor="address">Улица </label>
                <input type="text" id="address" placeholder="Остороженка" />
            </li>

            <li className="delivery-address__list__item pd">
                <label className="label-house-number" htmlFor="house-number">Дом</label>
                <input type="text" id="house-number" placeholder="Остороженка"/>
            </li>
        </ul>
    </form>
</div>

                <ul className="filter">
                    <li className="active-filter">Бургеры</li>
                    <li>Твистеры</li>
                    <li>Курица</li>
                    <li>Баскеты</li>
                    <li>Снэки</li>
                    <li>Соусы</li>
                    <li>Напитки</li>
                    <li>Кофе и чай</li>
                    <li>Десерты</li>
                    <li>Хиты по 50</li>
                </ul>


            </div>

        </section>
            </>
    );
};
export default Header;
