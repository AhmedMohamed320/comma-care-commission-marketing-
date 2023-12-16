"use client";
import React, { Fragment, useState } from "react";
import classes from "./MainNav.module.css";
import Link from "next/link";
import { IoPersonOutline } from "react-icons/io5";
import { MdCopyAll } from "react-icons/md";

const MainNav = (props) => {
    const [showComponent, setShowComponent] = useState(false);

    const handleMouseEnter = () => {
        setShowComponent(true);
    };

    const handleMouseLeave = () => {
        setShowComponent(false);
    };

    const handleCopyClick = (text) => {
        navigator.clipboard.writeText(text);
        alert("تم النسخ")
    };

    return (
        <Fragment>
            <nav className={` ${classes.nav}`}>
                <div>
                    <Link href="/" className={classes.logo}>
                        <img
                            src="/logo.png"
                            alt="comma care logo"
                            className="h h-5/6"
                        />
                    </Link>
                </div>
                <div className={classes.div2}></div>
                <div>
                    <p>خدمه العملاء</p>
                    <p>+201280626320</p>
                </div>
                <div
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onClick={props.onShowAside}
                    className="cursor-pointer text-4xl flex justify-center items-center relative"
                >
                    <IoPersonOutline />
                    {showComponent && (
                        <div className={classes.popAccount}>
                            <ul>
                                <li>
                                    <p>كودك الحالي</p>
                                    <div>
                                        <p>Ahmed50</p>
                                        <MdCopyAll
                                            className="text-3xl"
                                            onClick={() =>
                                                handleCopyClick("Ahmed50")
                                            }
                                        />
                                    </div>
                                </li>
                                <li>
                                    <p>لينك الاحاله الخاص بك</p>
                                    <div>
                                        <p>https://commacare.net/457165</p>
                                        <MdCopyAll
                                            className="text-3xl"
                                            onClick={() =>
                                                handleCopyClick(
                                                    "https://commacare.net/457165"
                                                )
                                            }
                                        />
                                    </div>
                                </li>
                                <li>تسجيل الخروج</li>
                            </ul>
                        </div>
                    )}
                </div>
            </nav>
        </Fragment>
    );
};

export default MainNav;
