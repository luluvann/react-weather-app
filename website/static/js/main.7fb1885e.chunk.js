(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a(17)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(7),c=a.n(r),i=a(1),s=a(2),o=a(5),u=a(4),m=a(3),d=function(e){var t=e,a=t.slice(0,1).toUpperCase(),n=t.length;return a+t.slice(1,n+1)},h=function(e,t){return new Date(1e3*(e+t)).toUTCString().slice(-12,-7)},p=function(){var e=new Date,t=("0"+e.getHours()).slice(-2),a=("0"+e.getMinutes()).slice(-2);return e.toDateString()+" "+t+":"+a},E={search:function(e,t){var a=encodeURIComponent(e),n=encodeURIComponent(t);return fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(a,"&units=").concat(n,"&appid=").concat("d8d349d845326a05731f3af54ad5e65e")).then((function(e){return e.json()})).then((function(e){return console.log(JSON.stringify(e)),{city:e.name,country:e.sys.country,weatherConditionCode:e.weather[0].id,description:d(e.weather[0].description),temp:Math.round(e.main.temp),feelslike:Math.round(e.main.feels_like),tempmin:Math.round(e.main.temp_min),tempmax:Math.round(e.main.temp_max),humidity:e.main.humidity,sunrise:h(e.sys.sunrise,e.timezone),sunset:h(e.sys.sunset,e.timezone),cloudiness:e.clouds.all,iconSource:"http://openweathermap.org/img/wn/"+e.weather[0].icon+"@2x.png",windspeedKnot:Math.round(1.95*e.wind.speed),windspeedKmH:Math.round(3.6*e.wind.speed),winddeg:e.wind.deg,currentTime:p()}}))}},v=(a(13),a(14),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){return Object(i.a)(this,a),t.call(this,e)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props.weatherData.weatherConditionCode;return 800==e?l.a.createElement("div",{className:"icon sunny"},l.a.createElement("div",{className:"sun"},l.a.createElement("div",{className:"rays"}))):e>800?l.a.createElement("div",{className:"icon cloudy"},l.a.createElement("div",{className:"cloud"}),l.a.createElement("div",{className:"cloud"})):e>=700?l.a.createElement("img",{src:this.props.weatherData.iconSource}):e>=600?l.a.createElement("div",{className:"icon flurries"},l.a.createElement("div",{className:"cloud"}),l.a.createElement("div",{className:"snow"},l.a.createElement("div",{className:"flake"}),l.a.createElement("div",{className:"flake"}))):e>=5||e>=3?l.a.createElement("div",{className:"icon rainy"},l.a.createElement("div",{className:"cloud"}),l.a.createElement("div",{className:"rain"})):e>=2?l.a.createElement("div",{className:"icon thunder-storm"},l.a.createElement("div",{className:"cloud"}),l.a.createElement("div",{className:"lightning"},l.a.createElement("div",{className:"bolt"}),l.a.createElement("div",{className:"bolt"}))):null}}]),a}(l.a.Component)),f=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){return Object(i.a)(this,a),t.call(this,e)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props.weatherData.winddeg;return 0===e?l.a.createElement("div",null,"from S to N"):e<=45?l.a.createElement("div",null,"from SW to NE"):e<=90?l.a.createElement("div",null,"from W to E"):e<=135?l.a.createElement("div",null,"from NW to SE"):e<=180?l.a.createElement("div",null,"from N to S"):e<=225?l.a.createElement("div",null,"from NE to SW"):e<=270?l.a.createElement("div",null,"from E to W"):l.a.createElement("div",null,"from SE to NW")}}]),a}(l.a.Component),b=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={celsius:!0,tempUnit:"\xb0C"},n.handleClickToFarenheit=n.handleClickToFarenheit.bind(Object(o.a)(n)),n.handleClickToCelsius=n.handleClickToCelsius.bind(Object(o.a)(n)),n.handleConversion=n.handleConversion.bind(Object(o.a)(n)),n}return Object(s.a)(a,[{key:"handleClickToFarenheit",value:function(){console.log("celsius to false"),this.setState({celsius:!1,tempUnit:"\xb0F"})}},{key:"handleClickToCelsius",value:function(){console.log("celsius to true"),this.setState({celsius:!0,tempUnit:"\xb0C"})}},{key:"handleConversion",value:function(){var e=this.props.weatherData.temp;return this.state.celsius?e:Math.round(1.8*(e+32))}},{key:"handleConversionRealFeel",value:function(){var e=this.props.weatherData.feelslike;return this.state.celsius?e:Math.round(1.8*(e+32))}},{key:"render",value:function(){var e=this.props.weatherData;return null==e?null:l.a.createElement("div",null,l.a.createElement("div",{className:"main-container"},l.a.createElement("h2",{className:"font-weight-lg"},e.city,", ",e.country),l.a.createElement("h6",null,"Last updated: ",e.currentTime),l.a.createElement("span",null,l.a.createElement("span",{onClick:this.handleClickToCelsius,className:1==this.state.celsius?"activeTemp temp-clickable":"temp-clickable"},"\xb0C")," ",l.a.createElement("span",null,"|")," ",l.a.createElement("span",{onClick:this.handleClickToFarenheit,className:0==this.state.celsius?"activeTemp temp-clickable":"temp-clickable"},"\xb0F")),l.a.createElement("div",{className:"flex-container"},l.a.createElement("div",null,l.a.createElement(v,{weatherData:this.props.weatherData}),l.a.createElement("h3",null,e.description),l.a.createElement("h1",null,l.a.createElement("span",{className:"font-weight-lg"},this.handleConversion(),l.a.createElement("span",null,this.state.tempUnit))),l.a.createElement("h5",null,l.a.createElement("span",null,"feels like: ",this.handleConversionRealFeel(),l.a.createElement("span",null,this.state.tempUnit))))),l.a.createElement("div",{className:"flex-container"},l.a.createElement("table",null,l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",{className:"font-weight-lg"},"Humidity:"),l.a.createElement("td",null,e.humidity,"%")),l.a.createElement("tr",null,l.a.createElement("td",{className:"font-weight-lg"},"Cloudiness:"),l.a.createElement("td",null,e.cloudiness,"%")),l.a.createElement("tr",null,l.a.createElement("td",{className:"font-weight-lg"},"Wind speed:"),l.a.createElement("td",null,e.windspeedKnot," knots | ",e.windspeedKmH," km/h")),l.a.createElement("tr",null,l.a.createElement("td",{className:"font-weight-lg"},"Wind direction:"),l.a.createElement("td",null,l.a.createElement(f,{weatherData:this.props.weatherData}))),l.a.createElement("tr",null,l.a.createElement("td",{className:"font-weight-lg"},"Sunrise:"),l.a.createElement("td",null,e.sunrise)),l.a.createElement("tr",null,l.a.createElement("td",{className:"font-weight-lg"},"Sunset:"),l.a.createElement("td",null,e.sunset)))))))}}]),a}(l.a.Component),w=(a(15),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={weatherData:{city:"Montreal"}},n.handleCityChange=n.handleCityChange.bind(Object(o.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(o.a)(n)),n}return Object(s.a)(a,[{key:"handleCityChange",value:function(e){this.setState({city:e.target.value})}},{key:"handleSubmit",value:function(){this.props.onSearchStarted(this.state.city)}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("input",{type:"text",placeholder:"Search for city...",onChange:this.handleCityChange,className:"no-outline"}),l.a.createElement("button",{type:"submit",onClick:this.handleSubmit},"Search"))}}]),a}(l.a.Component)),C=(a(16),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"footer"},l.a.createElement("div",null," Developed in React by ",l.a.createElement("a",{href:"https://github.com/luluvann/react-weather-app"},"Lulu")))}}]),a}(l.a.Component)),g=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).state={weatherData:void 0},e.startSearch=e.startSearch.bind(Object(o.a)(e)),e.getWeather=e.getWeather.bind(Object(o.a)(e)),e.startSearch("Montreal"),e}return Object(s.a)(a,[{key:"startSearch",value:function(e){this.getWeather(e,"metric")}},{key:"getWeather",value:function(e,t){var a=this;null!=e&&null!=t&&E.search(e,t).then((function(e){a.setState({weatherData:e})}))}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(w,{onSearchStarted:this.startSearch}),l.a.createElement(b,{weatherData:this.state.weatherData}),l.a.createElement(C,null))}}]),a}(l.a.Component);c.a.render(l.a.createElement(g,null),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.7fb1885e.chunk.js.map