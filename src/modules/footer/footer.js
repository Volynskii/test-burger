import React from "react";
import './footer.scss'

export const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__wrapper">


                <article className="footer__wrapper__subsection">

                    <div className="footer__wrapper__subsection__row">
                        <span className="footer__wrapper__subsection__row__span">Раздел 1</span>
                        <ul className="footer__wrapper__subsection__row__links">
                            <li>Подраздел</li>
                            <li>Подраздел</li>
                            <li>Подраздел</li>
                            <li>Подраздел</li>
                            <li>Подраздел</li>
                        </ul>
                    </div>

                    <div className="footer__wrapper__subsection__row">
                        <span className="footer__wrapper__subsection__row__span">Раздел 1</span>
                        <ul className="footer__wrapper__subsection__row__links">
                            <li>Подраздел</li>
                            <li>Подраздел</li>
                            <li>Подраздел</li>
                            <li>Подраздел</li>
                            <li>Подраздел</li>
                        </ul>
                    </div>

                    <div className="footer__wrapper__subsection__row__picture"/>

                    <div className="footer__wrapper__subsection__row">
                        <span className="footer__wrapper__subsection__row__span">Раздел 1</span>
                        <ul className="footer__wrapper__subsection__row__links">
                            <li>Подраздел</li>
                            <li>Подраздел</li>
                            <li>Подраздел</li>
                            <li>Подраздел</li>
                            <li>Подраздел</li>
                        </ul>
                    </div>

                    <div className="footer__wrapper__subsection__row">
                        <span className="footer__wrapper__subsection__row__span">Раздел 1</span>
                        <ul className="footer__wrapper__subsection__row__links">
                            <li>Подраздел</li>
                            <li>Подраздел</li>
                            <li>Подраздел</li>
                            <li>Подраздел</li>
                            <li>Подраздел</li>
                        </ul>
                    </div>

                </article>


                <div className="footer__wrapper__social-media">

                    <div className="footer__wrapper__social-media__wrapper">

                        <div className="footer__wrapper__social-media__wrapper__social-media">
                            <a target="_blank" rel="noopener noreferrer" id="vk" href="https://vk.com/kfcrussia"> </a>
                            <a target="_blank" rel="noopener noreferrer" id="facebook" href="https://www.facebook.com/kfcrussia"> </a>
                            <a target="_blank" rel="noopener noreferrer" id="twitter" href="https://twitter.com/kfcrussia"> </a>
                            <a target="_blank" rel="noopener noreferrer" id="friends" href="https://ok.ru/group/53854456184833"> </a>
                        </div>

                        <div className="footer__wrapper__social-media__wrapper__download-app">

                            <a  id="app-android" target="_blank" rel="noopener noreferrer" href="https://play.google.com/store/apps/details?id=ru.kfc.kfc_delivery"> </a>
                            <a id="app-ios" target="_blank" rel="noopener noreferrer" href="https://apps.apple.com/ru/app/kfc-%D0%BA%D1%83%D0%BF%D0%BE%D0%BD%D1%8B-%D0%BC%D0%B5%D0%BD%D1%8E-%D1%80%D0%B5%D1%81%D1%82%D0%BE%D1%80%D0%B0%D0%BD%D1%8B/id1074266177"> </a>

                        </div>

                    </div>

                </div>

            </div>
        </div>
    );
};
export default Footer;
