import React from "react";
import classes from "./LineChart.module.css";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
);

export const LineChart = (props) => {
    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: false,
                text: "Chart.js Line Chart",
            },
        },
        scales: {
            x: {
                display: false, // Hide x-axis labels
                grid: {
                    display: false,
                },
            },
            y: {
                display: false, // Hide y-axis labels
                grid: {
                    display: false,
                },
            },
        },
        elements: {
            point: {
                backgroundColor: "#ffffff00",
                borderWidth: 0,
            },
            line: {
                borderColor: "#00A056",
                borderWidth: 2,
                tension: 0.3,
            },
        },
    };
    const labels = [
        "1/10",
        "2/10",
        "3/10",
        "4/10",
        "5/10",
        "6/10",
        "7/10",
        "1/10",
        "2/10",
        "3/10",
        "4/10",
        "5/10",
        "6/10",
        "7/10",
        "1/10",
        "2/10",
        "3/10",
        "4/10",
        "5/10",
        "6/10",
        "7/10",
        "1/10",
        "2/10",
        "3/10",
        "4/10",
        "5/10",
        "6/10",
        "7/10",
    ];
    const data = {
        labels,
        datasets: [
            {
                fill: false,
                label: "الزيارات",
                data: [
                    100, 200, 222, 300, 400, 500, 545, 545, 401, 410, 452, 500, 568, 600, 622, 645, 730,
                    725, 620, 630, 540, 430, 341, 341, 345, 230, 235, 125,
                ],
            },

            {
                label: "المبيعات",
                data: [
                    20, 20, 25, 100, 80, 90, 70, 78, 70, 68, 60, 55, 50, 90, 95, 99,
                    95, 80, 70, 60, 45, 30, 35, 25, 30, 25, 20, 20,
                ],
                borderColor: "#FF005E",
                fill: false,
            },
            {
                label: "النسبه",
                data: [
                    5, 8, 9, 8, 2, 2, 4, 3, 5, 2, 3, 4, 7, 8, 8, 9,
                    5, 8, 1, 1, 4, 3, 5, 5, 3, 4, 1, 2,
                ],
                borderColor: "#3A3A3A",
                fill: false,
            },
        ],
    };
    return (
        <>
            <div className={classes.chart}>
                <Line options={options} data={data} />
            </div>
        </>
    );
};

export default LineChart;
