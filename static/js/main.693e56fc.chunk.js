(this.webpackJsonprobotsfriends=this.webpackJsonprobotsfriends||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(2),o=a.n(c),s=(a(13),a(3)),l=a(4),i=a(6),u=a(5),h=a(7),m=function(e){var t=e.name,a=e.id,n=e.email;return r.a.createElement("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"},r.a.createElement("img",{src:"https://robohash.org/".concat(a,"?size=200x200"),alt:"robot"}),r.a.createElement("div",null,r.a.createElement("p",null,t),r.a.createElement("p",null,n)))},d=function(e){var t=e.robots.map((function(e){return r.a.createElement(m,{key:e.id,id:e.id,name:e.name,email:e.email})}));return r.a.createElement("div",null,t)},b=function(e){var t=e.searchChange;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",onChange:t,placeholder:"Search robots"}))},f=function(e){return r.a.createElement("div",{style:{overflowY:"scroll",border:"2px solid black",height:"800px"}},e.children)},p=(a(14),a(15),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).onSearchChange=function(e){a.setState({searchfield:e.target.value})},a.state={robots:[],searchfield:""},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robots:t})}))}},{key:"render",value:function(){var e=this,t=this.state.robots.filter((function(t){return t.name.toLowerCase().includes(e.state.searchfield.toLowerCase())}));return 0===this.state.robots.length?r.a.createElement("h2",{className:"tc"}," Loading ..."):r.a.createElement("div",{className:"tc"},r.a.createElement("h1",{className:"title"},"RobotsFriends"),r.a.createElement(b,{searchChange:this.onSearchChange}),r.a.createElement(f,null,r.a.createElement(d,{robots:t})))}}]),t}(n.Component));o.a.render(r.a.createElement(p,null),document.getElementById("root"))},8:function(e,t,a){e.exports=a(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.693e56fc.chunk.js.map