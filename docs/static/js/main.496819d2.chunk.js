(this["webpackJsonpto-do"]=this["webpackJsonpto-do"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var i=n(0),s=n(1),a=n.n(s),l=n(3),c=n.n(l),o=(n(14),n(6)),d=n(4),r=n(5),u=n(8),h=n(7),m=function(e){return Object(i.jsxs)("div",{className:"card ".concat(e.element.isCompleted?"completed":""),children:[Object(i.jsx)("span",{children:e.element.title}),Object(i.jsx)("button",{onClick:function(){return e.markClicked(e.element.id)},className:"".concat(e.element.isCompleted?"button-clicked":""),children:e.element.isCompleted?"Done":"To do"})]},e.element.id)},p=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(d.a)(this,n);for(var i=arguments.length,s=new Array(i),a=0;a<i;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).state={elements:[{id:1,isCompleted:!0,title:"go shop"},{id:2,isCompleted:!0,title:"feed the dog"},{id:3,isCompleted:!1,title:"water the plants"}],inputValue:""},e}return Object(r.a)(n,[{key:"markCompleted",value:function(e){var t=this.state.elements.findIndex((function(t){return t.id===e})),n=this.state.elements;n[t].isCompleted=!this.state.elements[t].isCompleted,this.setState({elements:n})}},{key:"addItem",value:function(){var e=[{id:Math.floor(1e3*Math.random())+10,title:this.state.inputValue}].concat(Object(o.a)(this.state.elements));this.setState({elements:e}),this.setState({inputValue:""})}},{key:"inputHandler",value:function(e){var t=e.target.value;this.setState({inputValue:t})}},{key:"handleKeyPress",value:function(e){"Enter"===e.key&&(console.log(this),this.addItem())}},{key:"render",value:function(){var e=this,t=this.state.elements.map((function(t){return Object(i.jsx)(m,{element:t,markClicked:e.markCompleted.bind(e)})}));return Object(i.jsxs)("div",{class:"main",children:[Object(i.jsx)("h2",{children:"To do List"}),Object(i.jsx)("input",{type:"text",value:this.state.inputValue,onChange:this.inputHandler.bind(this),onKeyUp:this.handleKeyPress.bind(this)}),Object(i.jsx)("button",{onClick:this.addItem.bind(this),children:"Add"}),t]})}}]),n}(a.a.Component);var j=function(){return Object(i.jsx)(p,{})},b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,i=t.getFID,s=t.getFCP,a=t.getLCP,l=t.getTTFB;n(e),i(e),s(e),a(e),l(e)}))};c.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(j,{})}),document.getElementById("root")),b()}},[[15,1,2]]]);
//# sourceMappingURL=main.496819d2.chunk.js.map