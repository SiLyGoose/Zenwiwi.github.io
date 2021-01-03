document.addEventListener('DOMContentLoaded', () =>
    requestAnimationFrame(updateTime)
)

function updateTime() {
    document.documentElement.style.setProperty('--timer-day', "'" + moment().format("dd") + "'");
    document.documentElement.style.setProperty('--timer-hours', "'" + (moment().format("k") > 12 ? parseInt(moment().format("k")) - 12 : moment().format("k")) + "'");
    document.documentElement.style.setProperty('--timer-minutes', "'" + moment().format("mm") + "'");
    document.documentElement.style.setProperty('--timer-seconds', "'" + moment().format("ss") + "'");
    document.documentElement.style.setProperty('--timer-meridiem', "'" + moment().format("a") + "'");
    requestAnimationFrame(updateTime);
}