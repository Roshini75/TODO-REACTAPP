(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],[,,,,,,,,,,function(e,t,n){e.exports=n(19)},,,,,function(e,t,n){},function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),i=n(3),o=n.n(i),s=(n(15),n(16),n(17),n(7)),c=n(4),r=n(5),u=n(8),h=n(6),d=n(1),m=n(9),b=(n(18),function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(h.a)(t).call(this,e))).state={item:"",list:[]},n.handleOnChange=n.handleOnChange.bind(Object(d.a)(n)),n.handleOnSubmit=n.handleOnSubmit.bind(Object(d.a)(n)),n.handleOnReset=n.handleOnReset.bind(Object(d.a)(n)),n}return Object(m.a)(t,e),Object(r.a)(t,[{key:"handleOnReset",value:function(e){e.preventDefault(),this.setState({list:[]})}},{key:"handleOnChange",value:function(e){this.setState({item:e.target.value})}},{key:"handleOnSubmit",value:function(e){e.preventDefault(),this.state.item.length&&(this.setState({list:[].concat(Object(s.a)(this.state.list),[this.state.item]),item:""}),this.state.list.map((function(e){e&&console.log("element"+e)})))}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("header",{class:"todo-header"},"Todo List"),l.a.createElement("body",{class:"todo-body"},l.a.createElement("form",{onSubmit:this.handleOnSubmit},l.a.createElement("label",{class:"todo-label"},"Please enter the todo item"),l.a.createElement("input",{class:"todo-input",type:"text",name:"item",placeholder:"Enter your todo item",value:this.state.item,onChange:this.handleOnChange}),l.a.createElement("button",null,"Submit")),l.a.createElement("div",null,l.a.createElement("ul",null,this.state.list?this.state.list.map((function(e){return l.a.createElement("li",{class:"todo-item",key:e},e)})):null)),this.state.list.length?l.a.createElement("button",{onClick:this.handleOnReset},"Reset"):null))}}]),t}(l.a.Component));var O=function(){return l.a.createElement("div",null,l.a.createElement(b,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[10,1,2]]]);
//# sourceMappingURL=main.397abaad.chunk.js.map