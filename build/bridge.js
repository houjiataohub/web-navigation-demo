import amap from '/src/index.js';

//setLocationUpdate(121, 31);

function setLocation() {
    setLocationUpdate(121, 31);
}

function setLocationUpdate(latitude, longitude) {
    amap.setLocation(latitude, longitude);
}