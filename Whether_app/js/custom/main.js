

var weather;
var city;
function setup(){
    
    createCanvas(700,500);
    var input=createInput('');
     city=input.value();
    var button=createButton('submit');
    button.mousePressed(WeatherInfo);
//    loadJSON('http://api.openweathermap.org/data/2.5/weather?q='+ city+'&APPID=4300ce1519819eddbc01ec09c189f412&units=Metric',gotData);
}
function gotData(data){
    weather=data;
 console.log(weather.main.temp);
}
function WeatherInfo(city){
    
    loadJSON('http://api.openweathermap.org/data/2.5/weather?q= ghaziabad&APPID=4300ce1519819eddbc01ec09c189f412&units=Metric',gotData);
     if(weather){
      var temp=(weather.main.temp_min);
       fill("grey");
      text("cloudes",50,210);
      text((weather.clouds.all)+"%",200,210);
      text("wind speed",50,260);
      text((weather.wind.speed)+"meter/sec",200,260);
      text("pressure",50,230);
      text((weather.main.pressure)+"hpa",200,230);
      text("Temprature",50,300);
      text(temp+ "C",190,300);
       text("humidity",300,300);
      text((weather.main.humidity)+"%",410,300);
      textSize(25);
      var d = new Date();
      var n=d.toLocaleString();
      text(n,20,470);
}
    
}
function draw(){
   background("pink");
    WeatherInfo();
 
}