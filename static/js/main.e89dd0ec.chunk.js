(this.webpackJsonpreact_keyboard=this.webpackJsonpreact_keyboard||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var s=n(3),a=n.n(s),r=n(4),c=n(5),o=n(7),i=n(6),u=n(0),p=n.n(u),d=n(1),y=function(e){Object(o.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(r.a)(this,n);for(var s=arguments.length,a=new Array(s),c=0;c<s;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={message:"Nothing was pressed yet"},e.pressedKey=function(t){e.setState({message:"The last pressed key is [".concat(t.key,"]")})},e}return Object(c.a)(n,[{key:"componentDidMount",value:function(){document.addEventListener("keyup",this.pressedKey)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keyup",this.pressedKey)}},{key:"render",value:function(){var e=this.state.message;return Object(d.jsx)("h1",{className:"App__message",children:e})}}]),n}(p.a.Component);n(13);a.a.render(Object(d.jsx)(y,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.e89dd0ec.chunk.js.map