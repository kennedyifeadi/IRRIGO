export const lineChartData = {
    labels:[
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
    ],
    datasets: [
        {
            label: "Soil Moisture",
            data: [12, 19, 3, 5, 2, 3, 10],
            fill: false,
            borderColor: "rgb(75, 192, 192)",
            tension: 0.1
        },
        {
            label: "Soil Temperature",
            data: [1, 2, 1, 1, 2, 2, 1],
            fill: false,
            borderColor: "rgb(54, 162, 235)",
            tension: 0.1
        },
        {
            label: "Soil Humidity",
            data: [10, 12, 16, 14, 9, 13, 14],
            fill: false,
            borderColor: "rgb(255, 99, 132)",
            tension: 0.1
        }
    ]
}