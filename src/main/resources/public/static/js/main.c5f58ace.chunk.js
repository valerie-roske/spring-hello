(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,n){e.exports=n(22)},16:function(e,t,n){},20:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(4),s=n.n(i),c=(n(16),n(2)),o=n.n(c),l=n(5),u=n(6),p=n(7),m=n(9),h=n(8),d=n(10),f=n(1),b=(n(20),function(e){var t=e.onClick;return r.a.createElement("button",{className:"App-button",onClick:t},"It's a bird! It's a plane!")}),g=function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(m.a)(this,Object(h.a)(t).call(this))).state={airplanes:[]},e.getAirplanes=e.getAirplanes.bind(Object(f.a)(Object(f.a)(e))),e}return Object(d.a)(t,e),Object(p.a)(t,[{key:"getAirplanes",value:function(){var e=Object(l.a)(o.a.mark(function e(){var t;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/airplanes");case 2:return t=e.sent,e.t0=this,e.next=6,t.json();case 6:e.t1=e.sent,e.t2={airplanes:e.t1},e.t0.setState.call(e.t0,e.t2);case 9:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.airplanes.length>0,t=this.state.airplanes.map(function(e){return r.a.createElement("div",{key:e.id,style:{margin:"2rem 0 0 0"}},r.a.createElement("p",{style:{margin:"0",fontWeight:"bold"}},e.tailNumber),r.a.createElement("p",{style:{margin:"0"}},e.origin))});return e||(t=r.a.createElement("p",{style:{margin:"0"}},"No airplanes here")),r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("h1",null,"Airplanes"),t,r.a.createElement(b,{onClick:this.getAirplanes})))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[11,2,1]]]);
//# sourceMappingURL=main.c5f58ace.chunk.js.map