if ('geolocation' in navigator) {
    console.log('Geolocation available!');

    navigator.geolocation.getCurrentPosition(async position => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        const apiURL = `weather/${lat},${lon}`;
        const res = await fetch(apiURL);
        const json = await res.json();
        console.log(json);
        layoutData(json.json);
    });
} else {
    console.log('Geolocation not available!');
    const alert = document.querySelector('.noGeo');
    alert.style.visibility = 'visible';
    alert.style.width = '100%';
    alert.style.height = 'auto';
    alert.textContent = "Geolocation not available!"
}