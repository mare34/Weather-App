function layoutData(data) {
    const cur = data.currently;

    document.querySelector('.summ').textContent = cur.summary;
    document.querySelector('.aprTemp').textContent = cur.apparentTemperature;
    document.querySelector('.temp').textContent = cur.temperature;
    document.querySelector('.pressure').textContent = cur.pressure;
    document.querySelector('.uvInd').textContent = cur.uvIndex;
    document.querySelector('.winSpd').textContent = cur.windSpeed;
    document.querySelector('.visibility').textContent = cur.visibility;
    document.querySelector('.dailySumm').textContent = data.daily.summary;

    const icon = document.querySelector('.weatherIcon');
    icon.src = `../img/${cur.icon}.svg`;
    icon.alt = cur.icon;
}