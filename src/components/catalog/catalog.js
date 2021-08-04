import React from "react";
import {navItems} from "../../mocks/filter";
import categories from "../../mocks/categories";
import cx from "classnames";
import CatalogItem from "../catalog-item/catalog-Item";

const Catalog = ({catalogArrays}) => (
        <>
            {catalogArrays.map((filteredCategory,indexCatalog) => (
                        <section id={navItems[indexCatalog]} key={indexCatalog}
                                 className={cx(`catalog`, {
                                     [`white-background`]: Number.isInteger(indexCatalog / 2)
                                 })}>
                            <div className="catalog__wrapper">
                                <h1 className="catalog__wrapper__headline">{categories[indexCatalog].name}</h1>
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
                    ))}
        </>
    );
export default Catalog;
