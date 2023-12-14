import React, { Fragment } from "react";
import classes from "./MainNav.module.css";
import Link from "next/link";
import { IoPersonOutline } from "react-icons/io5";
const MainNav = (props) => {
    return (
        <Fragment>
            <nav
                className={` ${classes.nav}`}
            >
                <div>
                    <Link href="/" className={classes.logo}>
                        <img
                            src="/logo.png"
                            alt="comma care logo"
                            className="h h-5/6"
                        />
                    </Link>
                </div>
                <div className={classes.div2}>

                </div>
                <div>
                    <p>
                        خدمه العملاء
                    </p>
                    <p>
                        +201280626320
                    </p>
                </div>
                <div onClick={props.onShowAside} className="cursor-pointer text-4xl flex justify-center items-center">
                    <IoPersonOutline />
                </div>
            </nav>
        </Fragment>
    );
};

export default MainNav;
