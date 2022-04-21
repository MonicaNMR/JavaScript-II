
const APP_ID = '4090239d69cdb3874de692fd18539299';
import '../index.css'

const fetchData = position => {
    const { latitude, longitude } = position.coords;
    console.log(position);
    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${APP_ID}`)
        .then(response => response.json())
        .then(data => setWeatherData(data));
}

const setWeatherData = data => {
    const weatherData = {
        location: data.name,
        temperature: Math.floor(data.main.temp),
        date: getDate(),
        reloj: startTime(),
    }

    Object.keys(weatherData).forEach( key => {
        setTextContent(key, weatherData[key]);
    });

}

//const makeArray = () =>{
function makeArray() {  //esta funcion llena arreglo con los meses
    for (i = 0; i<makeArray.arguments.length; i++)
    this[i + 1] = makeArray.arguments[i];}

    var months = new makeArray('Enero','Febrero','Marzo','Abril','Mayo',
    'Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre');
    
const getDate = () => {
    let date = new Date();
    return `Hoy es ${date.getDate()} de ${months[(date.getMonth() + 1)]} del ${date.getFullYear()}`;
}

const setTextContent = (element, text) => {
    document.getElementById(element).textContent = text;
    console.log(element,text);
}

const onLoad = () => {
    navigator.geolocation.getCurrentPosition(fetchData)
}


const startTime = () => {  //funcion para cargar reloj
    let today=new Date();
    h=today.getHours();
    m=today.getMinutes();
    s=today.getSeconds();
    m=checkTime(m);
    s=checkTime(s);
    document.getElementById('reloj').innerHTML=h+":"+m+":"+s;  //cambiar completamente los contenidos de un elemento por contenido nuevo, esta actualizando constantemente la hora
    t=setTimeout('startTime()',500);
}  //funcion a ejecutar, numero de milisegundos que se tarda ejecutarla

//function checkTime(i)
const checkTime = (i) =>
    {if (i<10) {i="0" + i;}return i;}
    window.onload=function(){startTime();
    //    return ` ${h}: ${m}: ${s}`
}  //se ejecuta la funcion tan pronto como se carga la pagina onload

