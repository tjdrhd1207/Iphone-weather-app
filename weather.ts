const RAINY = require('./assets/rainy-icon.png');
const CLOUD_WITH_MOON = require('./assets/cloud-with-moon-icon.png');
const MOON = require('./assets/moon-icon.png');
const SUNNY = require('./assets/sunny-icon.png');
const CLOUDY = require('./assets/cloud-with-sun-icon.png');
const BLUR = require('./assets/cloud-icon.png');
const SNOW = require('./assets/snow-icon.png');


export default function weather(category: Array<String>, value: Array<number>) {
    let PTY_CODE = { 0 : '강수 없음', 1 : '비', 2 : '비/눈', 3 : '눈', 5 : '빗방울', 6 : '진눈깨비', 7 : '눈날림'};
    let SKY_CODE = { 1 : '맑음', 3 : '구름많음', 4 : '흐림' };
    console.log(category[0], value[0]);
    let ICON_SRC = '';

    let weatherCategory = category[0];
    if (weatherCategory === 'SKY') {
        let atmosphere = SKY_CODE[value[0]];
        if (value[0] === 1) {
            ICON_SRC = SUNNY;
        } else if (value[0] === 3) {
            ICON_SRC = CLOUDY;
        } else if (value[0] === 4) {
            ICON_SRC = BLUR;
        }
    }

    // 강수 여부
    if (weatherCategory === 'PTY') {
        console.log('강수 여부');
        let rainy = PTY_CODE[value[0]];
        console.log(rainy);
        if (value[0] === 1) {
            ICON_SRC = RAINY;
        } else if (value[0] === 3) {
            ICON_SRC = SNOW;
        }
    }

    // 강수 있을 때, 
    if (weatherCategory === 'RN1') {
    
    }

    // 기온
    if (weatherCategory === 'T1H') {
        let template = value[0];
        console.log(template + "도");
    }

    // 습도
    if (weatherCategory === 'REH') {
        let humidity = value[0];
        console.log(humidity + "%");
    }

    // 풍속
    if (weatherCategory === 'VEC') {
        let windMeter = value[0];
        console.log('풍속 : ', windMeter, 'm/s');
    }

    if (weatherCategory === 'WSD') {
        let windDirection = value[0];
        console.log('풍향 : ', windDirection);
    }
}