(this["webpackJsonpcursor-timer"]=this["webpackJsonpcursor-timer"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(7),o=n.n(i),s=(n(14),n(15),n(1)),c=n(2),u=n(4),m=n(3),p=n(5),l=n.n(p),d=n(8),f=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){var e;return Object(s.a)(this,n),(e=t.call(this)).onStart=Object(d.a)(l.a.mark((function t(){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.props.onTimeStart(e.state.remainingTime);case 1:if(!(e.state.remainingTime>0)){t.next=9;break}if(!e.state.isStopped){t.next=4;break}return t.abrupt("break",9);case 4:return e.setState({remainingTime:e.state.remainingTime-e.props.step},(function(){e.props.onTick(e.state.remainingTime)})),t.next=7,e.delay(e.props.step);case 7:t.next=1;break;case 9:0===e.state.remainingTime&&(alert("The End"),e.props.onTimeEnd(),e.setState({remainingTime:e.props.time,isStopped:!0}));case 10:case"end":return t.stop()}}),t)}))),e.pause=function(){e.setState({isStopped:!0},(function(){e.props.onTimePause()}))},e.state={remainingTime:0,isStopped:!0},e}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.setState({remainingTime:this.props.time},(function(){e.props.autostart&&e.setState({isStopped:!1},(function(){return e.onStart()}))}))}},{key:"delay",value:function(e){return new Promise((function(t){return setTimeout(t,e)}))}},{key:"render",value:function(){var e=this,t=100*this.state.remainingTime/this.props.time;return r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){e.state.isStopped?e.setState({isStopped:!1},(function(){return e.onStart()})):e.pause()},style:{marginBottom:"10px"}},this.state.isStopped?"Start":"Pause"),r.a.createElement("br",null),r.a.createElement("div",{style:{width:"1000px",margin:"0 auto",backgroundColor:"red"}},r.a.createElement("div",{style:{width:"".concat(t,"%"),backgroundColor:"aqua",height:"25px"}})))}}]),n}(a.Component),h=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={time:1e6},e.onTimeEnd=function(){return e.setState({time:1e6})},e.onTimeChange=function(t){return e.setState({time:t})},e}return Object(c.a)(n,[{key:"render",value:function(){return r.a.createElement(f,{onTick:function(e){return console.log("\u041e\u0441\u0442\u0430\u043b\u043e\u0441\u044c \u0432\u0440\u0435\u043c\u0435\u043d\u0438: "+e)},time:this.state.time,onTimeStart:function(e){return console.log("\u0422\u0430\u0439\u043c\u0435\u0440 \u0437\u0430\u043f\u0443\u0449\u0435\u043d!")},onTimePause:function(e){return console.log("\u0422\u0430\u0439\u043c\u0435\u0440 \u043d\u0430 \u043f\u0430\u0443\u0437\u0435!")},onTimeChange:this.onTimeChange,onTimeEnd:this.onTimeEnd,step:100,autostart:!1})}}]),n}(a.Component);var g=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(h,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,n){e.exports=n(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.523e8321.chunk.js.map