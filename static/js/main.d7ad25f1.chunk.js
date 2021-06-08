(this["webpackJsonpreact-hw-03-phonebook"]=this["webpackJsonpreact-hw-03-phonebook"]||[]).push([[0],{13:function(t,e,n){t.exports={container:"Container_container__1JImC"}},19:function(t,e,n){},2:function(t,e,n){t.exports={formTitle:"ContactForm_formTitle__3wlAg",formText:"ContactForm_formText__tf6nP",formInput:"ContactForm_formInput__1vhaR",formBtn:"ContactForm_formBtn__1_bCV"}},24:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(10),o=n.n(r),s=(n(19),n(14)),i=n(4),l=n(5),u=n(7),m=n(6),d=n(26),f=n(11),b=n(2),h=n.n(b),j=n(0),p=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(f.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault();var n=t.state;t.props.onSubmit(n),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(j.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(j.jsx)("h1",{className:h.a.formTitle,children:"Phonebook"}),Object(j.jsxs)("label",{children:[Object(j.jsx)("p",{className:h.a.formText,children:"Name:"}),Object(j.jsx)("input",{className:h.a.formInput,value:e,onChange:this.handleChange,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(j.jsxs)("label",{children:[Object(j.jsx)("p",{className:h.a.formText,children:"Number:"}),Object(j.jsx)("input",{className:h.a.formInput,value:n,onChange:this.handleChange,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(j.jsx)("button",{type:"submit",className:h.a.formBtn,children:"Add contact"})]})}}]),n}(a.Component),C=n(8),x=n.n(C),_=function(t){var e=t.contacts,n=t.onClick;return Object(j.jsx)("ul",{className:x.a.contactsList,children:e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(j.jsxs)("li",{className:x.a.contactsItem,children:[a,": ",c,Object(j.jsx)("button",{className:x.a.contactsBtn,onClick:function(){return n(e)},type:"button",children:"X"})]},e)}))})},O=n(3),v=n.n(O),g=function(t){var e=t.value,n=t.onChange;return Object(j.jsxs)("div",{className:v.a.filterWrapp,children:[Object(j.jsx)("h2",{className:v.a.filterTitle,children:"Contacts"}),Object(j.jsxs)("label",{children:[Object(j.jsx)("p",{className:v.a.filterText,children:"Find Contacts By Name"}),Object(j.jsx)("input",{className:v.a.filterInput,type:"text",value:e,onChange:n})]})]})},y=n(12),N=n.n(y),S=n(13),T=n.n(S),I=function(t){var e=t.children;return Object(j.jsx)("div",{className:T.a.container,children:e})};I.protoType={children:N.a.node.isRequired};var L=I,w=(n(23),function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.addContact=function(e){var n=e.name,a=e.number,c=t.state.contacts,r={id:Object(d.a)(),name:n,number:a};c.find((function(t){return t.name.toLocaleLowerCase()===n.toLocaleLowerCase()}))?alert("".concat(n," is already in conacts ")):t.setState({contacts:[r].concat(Object(s.a)(c))})},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.handlerFilterConacts=function(e){var n=e.currentTarget.value;t.setState({filter:n})},t.getFilteredContacts=function(){var e=t.state,n=e.contacts,a=e.filter.toLocaleLowerCase();return n.filter((function(t){return t.name.toLocaleLowerCase().includes(a)}))},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=JSON.parse(localStorage.getItem("contacts"));t&&this.setState({contacts:t})}},{key:"componentDidUpdate",value:function(t,e){var n=this.state.contacts;n!==e.contacts&&localStorage.setItem("contacts",JSON.stringify(n))}},{key:"render",value:function(){var t=this.state.filter,e=this.getFilteredContacts();return Object(j.jsxs)(L,{children:[Object(j.jsx)(p,{onSubmit:this.addContact}),Object(j.jsx)(g,{value:t,onChange:this.handlerFilterConacts}),Object(j.jsx)(_,{contacts:e,onClick:this.deleteContact})]})}}]),n}(a.Component));o.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(w,{})}),document.getElementById("root"))},3:function(t,e,n){t.exports={filterWrapp:"Filter_filterWrapp__3Tnr1",filterTitle:"Filter_filterTitle__2syzW",filterText:"Filter_filterText__30cAw",filterInput:"Filter_filterInput__XXxw3"}},8:function(t,e,n){t.exports={contactsList:"ContactList_contactsList__oCam_",contactsItem:"ContactList_contactsItem__39ro4",contactsBtn:"ContactList_contactsBtn__3mW0E"}}},[[24,1,2]]]);
//# sourceMappingURL=main.d7ad25f1.chunk.js.map