(this["webpackJsonpgoit-react-hw-05-phonebook"]=this["webpackJsonpgoit-react-hw-05-phonebook"]||[]).push([[0],{16:function(t,e,n){t.exports=n(26)},21:function(t,e,n){},22:function(t,e,n){},25:function(t,e,n){},26:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),r=n(3),o=n.n(r),u=(n(21),n(13)),l=n(5),s=n(6),i=n(9),m=n(8),h=n(27),d=n(12),f=function(t){Object(i.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.changeValue=function(e){var n=e.target,a=n.value,c=n.name;t.setState(Object(d.a)({},c,a))},t.handleSubmit=function(e){e.preventDefault();var n=t.state,a=n.name,c=n.number,r={id:Date.now(),name:a,number:c};console.log(r),t.props.addContact(r),t.setState({name:"",number:""})},t}return Object(s.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return c.a.createElement("form",{onSubmit:this.handleSubmit},c.a.createElement("input",{type:"text",value:e,name:"name",onChange:this.changeValue}),c.a.createElement("input",{type:"number",value:n,name:"number",onChange:this.changeValue}),c.a.createElement("button",null,"Add contact"))}}]),n}(a.Component),p=n(28),b=(n(22),function(t){var e=t.contacts,n=t.deleteContact;return c.a.createElement(p.a,{component:"ul",className:"list"},e.map((function(t){var e=t.name,a=t.number,r=t.id;return c.a.createElement(h.a,{key:r,classNames:"change",timeout:250},c.a.createElement("li",{className:"item"},c.a.createElement("p",null,e),c.a.createElement("p",null,a),c.a.createElement("button",{onClick:function(){return n(r)}},"close")))})))}),E=(n(25),function(t){Object(i.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],hasNameInContacts:!1,search:"",isLoade:!1},t.hasContact=function(e){return t.state.contacts.some((function(t){return t.name===e}))},t.addContact=function(e){t.hasContact(e.name)?t.setState({hasNameInContacts:!0}):t.setState((function(t){return{contacts:[].concat(Object(u.a)(t.contacts),[e]),hasNameInContacts:!1}}))},t.deleteContact=function(e){console.log(e),t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.handleInputSearch=function(e){var n=e.target;t.setState({search:n.value})},t.findContact=function(){var e=t.state,n=e.contacts,a=e.search;return a?n.filter((function(t){return t.name.includes(a)})):n},t}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.setState({isLoade:!0})}},{key:"render",value:function(){var t=this,e=this.state,n=e.contacts,a=e.hasNameInContacts,r=e.search,o=e.isLoade;return c.a.createElement("div",null,c.a.createElement(h.a,{classNames:"phonebook",timeout:1500,in:o,mountOnEnter:!0},c.a.createElement("div",null,c.a.createElement("h1",null,"Phonebook"))),c.a.createElement(h.a,{in:a,classNames:"alert",unmountOnExit:!0,timeout:2500,onEntered:function(){return t.setState({hasNameInContacts:!1})}},c.a.createElement("div",{className:"alert-wrapper"},c.a.createElement("h1",{className:"alert-title"},"SPARTAAAAAAAAAAAA"))),c.a.createElement(f,{addContact:this.addContact}),c.a.createElement(h.a,{in:n.length>1,unmountOnExit:!0,classNames:"search",timeout:250},c.a.createElement("label",null,"Find contacts by name",c.a.createElement("input",{type:"text",name:"search",value:r,onChange:this.handleInputSearch}))),c.a.createElement(b,{contacts:this.findContact(),deleteContact:this.deleteContact}))}}]),n}(a.Component));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(E,null)),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.0ef5dcef.chunk.js.map