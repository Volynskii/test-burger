import React from "react";
import { Link} from "react-scroll";
import {navItems} from "../../mocks/filter";
import categories from "../../mocks/categories";


export const Filter = () => {

    return (
        <>
            <div  className="filter">
                <div className="filter-wrapper">
                    {navItems.map((navItem,index) => {
                        return (
                            <Link key={index} activeClass="active" to={navItem}
                                  isDynamic={true}
                                  spy={true} smooth={true} offset={-200} duration={200}>
                                {navItem}
                            </Link>
                        )
                    })}
                </div>
            </div>

             </>
    );
};
export default Filter;
