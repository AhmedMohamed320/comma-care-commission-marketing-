"use client";
import React from "react";
import classes from "./Main.module.css";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
    labels: ["الزيارات", "الطلبات"],
    datasets: [
        {
            label: "اجمالي السنه",
            data: [12, 19],
            backgroundColor: ["#3A3A3A", "#00A056"],
            borderColor: ["#3A3A3A", "#00A056"],
            borderWidth: 1,
        },
    ],
};

export const options = {
    plugins: {
        legend: {
            display: false,
        },
    },
    cutout: "75%",
    aspectRatio: 1.5,
};

const Main = () => {
    return (
        <>
            <section className={`${classes.section}`}>
                <div>
                    <header className="mainContainer">
                        <div className="flex flex-col justify-between">
                            <p className="text-6xl font-semibold">احصائياتك</p>
                            <p>اهلا محمد تابع احصائياتك</p>
                            <p className={classes.welcomeParagraph}>
                                تمكنت اليوم من تحقيق نسبة مبيعات أعلى بنسبة 50%
                                مقارنة باليوم السابق.
                            </p>
                        </div>
                        <div>
                            <ul>
                                <li>
                                    <p>اجمالي المبيعات</p>
                                    <p>4524 طلب</p>
                                </li>
                                <li>
                                    <p>اجمالي النسبه المجمعه</p>
                                    <p>25000 ج.م</p>
                                </li>
                                <li>
                                    <p>اجمالي الزيارات عن طريقك</p>
                                    <p>154750 زياره</p>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li>
                                    <p> المبيعات اليوم</p>
                                    <p>44 طلب</p>
                                </li>
                                <li>
                                    <p> النسبه المجمعه اليوم</p>
                                    <p>502 ج.م</p>
                                </li>
                                <li>
                                    <p> الزيارات عن طريقك اليوم</p>
                                    <p>750 زياره</p>
                                </li>
                            </ul>
                        </div>
                        <div className="flex items-center justify-center">
                            <div className="w-11/12 m-auto">
                                <Doughnut data={data} options={options} />
                            </div>
                        </div>
                    </header>
                </div>
                <section className={`mainContainer ${classes.section2}`}>
                    <div>
                        <p>اخر التحديثات</p>
                        <div className={classes.news}>
                            <ul>
                                <li>
                                    <p>
                                        عرض مميز سيتافيل كريم مرطب للبشرة الجافة
                                        إلي الجافة جدا 550 جم بخصم 30% بسعر 500
                                        ج.م
                                    </p>
                                    <p className={classes.link}>المنتج</p>
                                </li>
                                <li>
                                    <p>
                                        هنقدم توصيل مجاني يوم السبت الموافق
                                        9/1/2023 في جميع انحاء الجمهوريه
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        هنقدم توصيل مجاني يوم السبت الموافق
                                        9/1/2023 في جميع انحاء الجمهوريه
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        هنقدم توصيل مجاني يوم السبت الموافق
                                        9/1/2023 في جميع انحاء الجمهوريه
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={classes.orders}>
                        <p>اخر الطلبات</p>
                        <div>
                            <ul>
                                <li>التوقيت</li>
                                <li>القيمه</li>
                                <li>النسبه</li>
                            </ul>
                            <ul>
                                <li>06:30 PM</li>
                                <li>450</li>
                                <li>20 ج.م</li>
                            </ul>
                            <ul>
                                <li>06:30 PM</li>
                                <li>450</li>
                                <li>20 ج.م</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <p>
                          احصائياتك
                        </p>
                    </div>
                </section>
            </section>
        </>
    );
};

export default Main;