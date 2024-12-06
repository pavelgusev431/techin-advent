const date = new Date();

const month = document.querySelector("#month");
const weekday = document.querySelector("#weekday");
const day = document.querySelector("#day");
const year = document.querySelector("#year");

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
]

month.innerHTML = months[date.getMonth()];
weekday.innerHTML = weekdays[date.getDay()];
day.innerHTML = date.getDate();
year.innerHTML = date.getFullYear();