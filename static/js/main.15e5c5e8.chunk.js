(window["webpackJsonpreactproj-flight-training"]=window["webpackJsonpreactproj-flight-training"]||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a(17)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),r=a(2),o=a.n(r),c=(a(13),a(3)),s=a(4),l=a(6),m=a(5),d=a(7),g=(a(14),function(e){var t=e.name,a=e.cost,i=e.desc;return n.a.createElement("div",{className:"container grow shadow-5"},n.a.createElement("img",{alt:"plane",src:"https://img.icons8.com/color/48/000000/airplane-front-view.png"}),n.a.createElement("div",{className:"cardFlex"},n.a.createElement("h2",{className:"h2Height"},t),n.a.createElement("p",null,"Cost to complete this training: ",a),n.a.createElement("p",{className:"p2Height"},i)))}),p=function(e){var t=e.courses;return n.a.createElement("div",{className:"courseContainer"},t.map(function(e,a){return n.a.createElement(g,{key:a,id:t[a].id,name:t[a].name,type:t[a].type,cost:t[a].cost,desc:t[a].desc})}))},h=(a(15),function(){return n.a.createElement("div",{className:"flightApp"},n.a.createElement("div",{className:"flightApp-header"},n.a.createElement("i",{className:"fas fa-plane flightApp-logo"}),n.a.createElement("h1",null,"React Flight Training")))}),u=function(){return n.a.createElement("div",{className:"imageContainer"},n.a.createElement("img",{className:"imgSize imgSize imgSize-hide2",alt:"tower",src:"/images/controlTower.jpg"}),n.a.createElement("img",{className:"imgSize",alt:"red and white plane",src:"../images/redPlane.jpg"}),n.a.createElement("img",{className:"imgSize imgSize-hide",alt:"ground crew",src:"images/airportWorker.jpg"}),n.a.createElement("img",{className:"imgSize",alt:"commercialJet",src:"../images/commercialJet.jpg"}),n.a.createElement("img",{className:"imgSize imgSize",alt:"small plane controls",src:"./images/planecontrols2.jpg"}),n.a.createElement("img",{className:"imgSize",alt:"drone",src:"../images/drone.jpg"}))},f=function(e){var t=e.searchChange;return n.a.createElement("div",{className:"pa2 tc"},n.a.createElement("h2",{className:"searchbox-resp"},"With so many opportunities available... pilot training, drone training, airport technology... search our selection of courses and get started today!"),n.a.createElement("input",{type:"search",placeholder:"search courses",onChange:t}))},y=[{id:1,name:"Aircraft Dispatcher Certification Course",type:"ground crew",cost:"$3,400",desc:"FAA Private Pilot and Aircraft Dispatcher Computer Knowledge test plus residency training"},{id:2,name:"Avionics Technology Training",type:"ground crew",cost:"$3,000",desc:"Training to maintain, diagnose and repair aviation electronics equipment and systems"},{id:3,name:"Drone Construction and Flight Training",type:"drone",cost:"$5,000",desc:"Drone construction, airspace classification and operations, and actual flight training"},{id:4,name:"Recreational Pilot Certification",type:"pilot",cost:"$9,000",desc:"Allows you to fly a variety of airplanes on fair weather days with a friend or family member"},{id:5,name:"Private Pilot Certification",type:"pilot",cost:"$12,000",desc:"Allows you to fly day or night into U.S. airports of any size with few restrictions"},{id:6,name:"Commercial Pilot Certification",type:"pilot",cost:"$22,000",desc:"Permits you to act as pilot-in-command of an aircraft for compensation or hire"},{id:7,name:"Instrument Rating",type:"pilot",cost:"$9,600",desc:"Allows you to fly in varied types of weather with reference to the flight instruments only"},{id:8,name:"Multiengine Training",type:"pilot",cost:"$5,300",desc:"This training will allow pilot to fly planes capable of faster speeds and higher altitudes."},{id:9,name:"Airline Transport Pilot",type:"pilot",cost:"$3,000",desc:"Provides the edge needed to move ahead in a competitive pilot job market."}],w=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(l.a)(this,Object(m.a)(t).call(this))).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={courses:y,searchfield:""},e}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.state.courses.filter(function(t){return t.name.toLowerCase().includes(e.state.searchfield.toLowerCase())});return n.a.createElement("div",null,n.a.createElement(h,null),n.a.createElement(u,null),n.a.createElement(f,{searchChange:this.onSearchChange}),n.a.createElement(p,{courses:t}))}}]),t}(i.Component);a(16),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[8,1,2]]]);
//# sourceMappingURL=main.15e5c5e8.chunk.js.map
