(this["webpackJsonpsimple-react-homeworks"]=this["webpackJsonpsimple-react-homeworks"]||[]).push([[0],[,,,,,function(e,t,a){e.exports={img:"Header_img__3onx1",nav:"Header_nav__YOyRg",navCollapsed:"Header_navCollapsed__26N7D",item:"Header_item__1nwSm",activeLink:"Header_activeLink__1Fkc5"}},,,function(e,t,a){e.exports={message:"Message_message__3Uh21",name:"Message_name__2deX0",dialog:"Message_dialog__UN8SP",time:"Message_time__HtGzs",text:"Message_text__1Lna8"}},,,,function(e,t,a){e.exports={error:"Greeting_error__1EmIj",atuinBtn:"Greeting_atuinBtn__3Awsn",total:"Greeting_total__1nSLT",button:"Greeting_button__2z5H8"}},,function(e,t,a){e.exports={errorInput:"SuperInputText_errorInput__3wcXZ",form__label:"SuperInputText_form__label__2t1GE",form__input:"SuperInputText_form__input__3O79U",error:"SuperInputText_error__1Tv7V",superInput:"SuperInputText_superInput__3ZIAE"}},function(e,t,a){e.exports={blue:"HW4_blue__31QsX",column:"HW4_column__3OFAd"}},,,,,function(e,t,a){e.exports={red:"SuperButton_red__2dqt6",default:"SuperButton_default__2jpqW"}},function(e,t,a){e.exports={checkbox:"SuperCheckbox_checkbox__3VpJn",spanClassName:"SuperCheckbox_spanClassName__4hmqI"}},function(e,t,a){e.exports={SuperRadio:"SuperRadio_SuperRadio__2hofd",o:"SuperRadio_o__W40YS"}},,,,,,function(e,t,a){e.exports={App:"App_App__qQiwY"}},function(e,t,a){e.exports=a.p+"static/media/menu.e82bf267.png"},function(e,t,a){e.exports=a.p+"static/media/close.76099b43.png"},,function(e,t,a){e.exports=a.p+"static/media/klipartz.com.b702be85.png"},function(e,t,a){e.exports={Affairs:"Affairs_Affairs__1Q_qQ"}},,function(e,t,a){e.exports={main:"SuperEditableSpan_main__kFtkK"}},function(e,t,a){e.exports={SuperSelect:"SuperSelect_SuperSelect__U5kv-"}},function(e,t,a){e.exports=a(50)},,,,,function(e,t,a){},,,,,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(27),c=a.n(l),o=(a(42),a(28)),u=a.n(o),i=a(1),s=a(7),m=a(5),p=a.n(m),d=a(29),E=a.n(d),f=a(30),v=a.n(f);var _=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),a=t[0],l=t[1],c="/pre-junior",o="/junior",u="/junior-plus";return r.a.createElement("div",null,r.a.createElement("img",{className:p.a.img,onClick:function(){return l(!a)},src:a?v.a:E.a,alt:""}),r.a.createElement("nav",{className:a?p.a.nav:p.a.navCollapsed},r.a.createElement("div",{className:"".concat(p.a.item," ").concat(p.a.active)},r.a.createElement(s.b,{to:c,activeClassName:p.a.activeLink},a?"Prejunior":"")),r.a.createElement("div",{className:"".concat(p.a.item," ").concat(p.a.active)},r.a.createElement(s.b,{to:o,activeClassName:p.a.activeLink},a?"Junior":"")),r.a.createElement("div",{className:"".concat(p.a.item," ").concat(p.a.active)},r.a.createElement(s.b,{to:u,activeClassName:p.a.activeLink},a?"Junior - plus":""))))},h=a(2),g=a(32),b=a.n(g);var k=function(){return r.a.createElement("div",null,r.a.createElement("img",{src:b.a,alt:""}))},C=a(8),O=a.n(C);var j=function(e){return r.a.createElement("div",{className:O.a.message},r.a.createElement("div",null,r.a.createElement("img",{src:e.message.avatar})),r.a.createElement("div",{className:O.a.dialog},r.a.createElement("div",{className:O.a.content},r.a.createElement("span",{className:O.a.name},e.message.name),r.a.createElement("br",null),r.a.createElement("span",{className:O.a.text},e.message.message),r.a.createElement("br",null),r.a.createElement("span",{className:O.a.time},e.message.time))))},N={avatar:"https://avatars.mds.yandex.net/get-pdb/1923366/64426749-ba99-4171-abc5-1219f98640a0/s1200?webp=false",name:"Goga",message:"Hello My name is Goga",time:"22:00"};var S=function(){return r.a.createElement("div",null,"homeworks 1",r.a.createElement("hr",null),r.a.createElement(j,{message:N}),r.a.createElement("hr",null),r.a.createElement("hr",null))};var x=function(e){return r.a.createElement("div",null,"".concat(e.affair.name," - ").concat(e.affair.priority),r.a.createElement("button",{onClick:function(){e.deleteAffairCallback(e.affair._id)}},"X"))},y=a(33),w=a.n(y);var I=function(e){var t=e.data.map((function(t){return r.a.createElement(x,{key:t._id,affair:t,deleteAffairCallback:e.deleteAffairCallback})}));return r.a.createElement("div",{className:w.a.Affairs},r.a.createElement("div",null,t,r.a.createElement("button",{onClick:function(){e.setFilter("all")}},"All"),r.a.createElement("button",{onClick:function(){e.setFilter("high")}},"High"),r.a.createElement("button",{onClick:function(){e.setFilter("middle")}},"Middle"),r.a.createElement("button",{onClick:function(){e.setFilter("low")}},"Low")))},A=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var T=function(){var e=Object(n.useState)(A),t=Object(i.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)("all"),o=Object(i.a)(c,2),u=o[0],s=o[1],m=function(e,t){return"all"===t?e:"low"===t?e.filter((function(e){return"low"===e.priority})):"high"===t?e.filter((function(e){return"high"===e.priority})):"middle"===t?e.filter((function(e){return"middle"===e.priority})):e}(a,u);return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 2",r.a.createElement(I,{data:m,setFilter:s,deleteAffairCallback:function(e){return l(function(e,t){return e.filter((function(e){return e._id!==t}))}(a,e))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},F=a(11),H=a(12),M=a.n(H),B=function(e){var t=e.name,a=e.setNameCallback,n=e.addUser,l=e.error,c=e.totalUsers,o=l?M.a.error:M.a.atuinBtn;return r.a.createElement("div",null,r.a.createElement("input",{value:t,onChange:a,className:o}),r.a.createElement("span",null,l),r.a.createElement("button",{onClick:n,className:M.a.button},"add"),r.a.createElement("span",{className:M.a.total},c))},U=function(e){var t=e.users,a=e.addUserCallback,l=Object(n.useState)(""),c=Object(i.a)(l,2),o=c[0],u=c[1],s=Object(n.useState)(""),m=Object(i.a)(s,2),p=m[0],d=m[1],E=t.length;return r.a.createElement(B,{name:o,setNameCallback:function(e){d(""),u(e.currentTarget.value)},addUser:function(){o.length>0?(alert("Hello "+o+"!"),a(o),u("")):d("Error")},error:p,totalUsers:E})},L=a(34);var G=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],l=t[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 3",r.a.createElement(U,{users:a,addUserCallback:function(e){var t={_id:Object(L.v1)(),name:e};l([t].concat(Object(F.a)(a)))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},P=a(3),J=a(14),W=a.n(J),R=function(e){e.type;var t=e.onChange,a=e.onChangeText,n=e.onKeyPress,l=e.onEnter,c=e.error,o=(e.className,e.spanClassName),u=e.setError,i=Object(P.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName","setError"]),s="".concat(W.a.error," ").concat(o||""),m=c?W.a.errorInput:W.a.superInput;return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({type:"text",onChange:function(e){t&&t(e),a&&a(e.currentTarget.value),u&&u("")},onKeyPress:function(e){n&&n(e),"Enter"===e.key&&l&&l()},className:m},i)),c&&r.a.createElement("span",{className:s},c))},q=a(15),D=a.n(q),z=a(20),K=a.n(z),Q=function(e){var t=e.error,a=(e.className,Object(P.a)(e,["error","className"])),n=t?K.a.red:K.a.default;return r.a.createElement("button",Object.assign({className:n},a))},X=a(21),Y=a.n(X),V=function(e){e.type;var t=e.onChange,a=e.onChangeChecked,n=e.className,l=(e.spanClassName,e.children),c=Object(P.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),o="".concat(Y.a.checkbox," ").concat(n||"");return r.a.createElement("label",null,r.a.createElement("input",Object.assign({type:"checkbox",onChange:function(e){a&&a(e.currentTarget.checked),t&&t(e)},className:o},c)),l&&r.a.createElement("span",{className:Y.a.spanClassName},l))};var Z=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(""),o=Object(i.a)(c,2),u=o[0],s=o[1],m=function(){s(a?"":"error"),u||""===a?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):(alert(a),l(""))},p=Object(n.useState)(!1),d=Object(i.a)(p,2),E=d[0],f=d[1];return r.a.createElement("div",{className:D.a.HW4},r.a.createElement("p",{className:D.a.homeworkNumber},"homework 4"),r.a.createElement("div",{className:D.a.column},r.a.createElement(R,{value:a,onChangeText:l,onEnter:m,error:u,setError:s}),r.a.createElement(Q,{error:u,onClick:m},"delete "),r.a.createElement(V,{checked:E,onChangeChecked:f},"some text "),r.a.createElement(V,{checked:E,onChange:function(e){return f(e.currentTarget.checked)}})))},$=a(35),ee=a.n($),te=function(e){e.autoFocus;var t=e.onBlur,a=e.onEnter,l=e.spanProps,c=Object(P.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),o=Object(n.useState)(!1),u=Object(i.a)(o,2),s=u[0],m=u[1],p=l||{},d=p.children,E=p.onDoubleClick,f=p.className,v=Object(P.a)(p,["children","onDoubleClick","className"]),_="".concat(ee.a.main," ").concat(f);return r.a.createElement(r.a.Fragment,null,s?r.a.createElement(R,Object.assign({autoFocus:!0,onBlur:function(e){m(!1),t&&t(e)},onEnter:function(){m(!1),a&&a()}},c)):r.a.createElement("span",Object.assign({onDoubleClick:function(e){m(!0),E&&E(e)},className:_},v),d||c.value))};function ae(e,t){var a=JSON.stringify(t);localStorage.setItem(e,a)}function ne(e,t){var a=localStorage.getItem(e);return null!==a&&(t=JSON.parse(a)),t}ae("test",{x:"A",y:1});ne("test",{x:"",y:0});var re=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],l=t[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 6",r.a.createElement("div",null,r.a.createElement(te,{value:a,onChangeText:l,spanProps:{children:a?void 0:"enter text..."}})),r.a.createElement(Q,{error:"",onClick:function(){ae("editable-span-value",a)}},"save"),r.a.createElement(Q,{error:"",onClick:function(){l(ne("editable-span-value",a))}},"restore"),r.a.createElement("hr",null),r.a.createElement("hr",null))};var le=function(){return r.a.createElement("div",null,r.a.createElement(S,null),r.a.createElement(T,null),r.a.createElement(G,null),r.a.createElement(Z,null),r.a.createElement(re,null))};function ce(){return r.a.createElement("div",null)}var oe=function(e){var t=e.options,a=(e.onChange,e.onChangeOption),n=Object(P.a)(e,["options","onChange","onChangeOption"]),l=t.map((function(e){return r.a.createElement("option",{key:e},e)}));return r.a.createElement("select",Object.assign({onChange:function(e){a&&a(e.currentTarget.value),console.log(e.currentTarget.value)}},n),l)},ue=a(36),ie=a.n(ue),se=(a(22),function(e){e.type,e.name;var t=e.options,a=(e.value,e.onChange,e.onChangeOption,Object(P.a)(e,["type","name","options","value","onChange","onChangeOption"]),t?t.map((function(e,t){})):[]);return r.a.createElement(r.a.Fragment,null,a)}),me=["x","y","z"];var pe=function(){var e=Object(n.useState)(me[1]),t=Object(i.a)(e,2),a=t[0],l=t[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 7",r.a.createElement("div",null,r.a.createElement(se,{name:"radio",options:me,value:a,onChangeOption:l})),r.a.createElement("div",null,r.a.createElement(oe,{className:ie.a.SuperSelect,options:me,value:a,onChangeOption:l})),r.a.createElement("hr",null),r.a.createElement("hr",null))},de=function(e,t){switch(t.type){case"sort":switch(t.payload){case"up":return e.sort((function(e,t){return e.name>t.name?1:e.name<t.name?-1:0})),Object(F.a)(e);case"down":return e.sort((function(e,t){return e.name<t.name?1:e.name>t.name?-1:0})),Object(F.a)(e);default:return e}case"check":return e.filter((function(e){return e.age>=t.payload}));default:return e}},Ee=[{_id:0,name:"\u041a\u043e\u0442",age:3},{_id:1,name:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440",age:66},{_id:2,name:"\u041a\u043e\u043b\u044f",age:16},{_id:3,name:"\u0412\u0438\u043a\u0442\u043e\u0440",age:44},{_id:4,name:"\u0414\u043c\u0438\u0442\u0440\u0438\u0439",age:40},{_id:5,name:"\u0418\u0440\u0438\u043d\u0430",age:55}];var fe=function(){var e=Object(n.useState)(Ee),t=Object(i.a)(e,2),a=t[0],l=t[1],c=a.map((function(e){return r.a.createElement("div",{key:e._id},"".concat(e.name," ").concat(e.age))}));return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 8",c,r.a.createElement("div",null,r.a.createElement(Q,{error:"",onClick:function(){return l(de(Ee,{type:"sort",payload:"up"}))}},"sort up")),r.a.createElement("div",null,r.a.createElement(Q,{error:"",onClick:function(){return l(de(Ee,{type:"sort",payload:"down"}))}},"sort down")),r.a.createElement("div",null,r.a.createElement(Q,{error:"",onClick:function(){return l(de(Ee,{type:"check",payload:18}))}},"check 18")),r.a.createElement("hr",null),r.a.createElement("hr",null))};var ve=function(){var e=new Date,t="\u0422\u0435\u043a\u0443\u0449\u0435\u0435 \u0432\u0440\u0435\u043c\u044f: "+e.getHours()+":"+e.getMinutes()+":"+e.getSeconds(),a=Object(n.useState)(),l=Object(i.a)(a,2),c=(l[0],l[1]),o=Object(n.useState)(),u=Object(i.a)(o,2),s=u[0],m=u[1],p=Object(n.useState)(!1),d=Object(i.a)(p,2),E=d[0],f=(d[1],function(){}),v=t,_=e;return r.a.createElement("div",null,r.a.createElement("div",{onMouseEnter:function(){},onMouseLeave:function(){}},v),E&&r.a.createElement("div",null,_),r.a.createElement(Q,{error:"",onClick:function(){var e=window.setInterval((function(){m(s)}),1e3);c(e)}},"start"),r.a.createElement(Q,{error:"",onClick:f},"stop"))};var _e=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 9",r.a.createElement(ve,null),r.a.createElement("hr",null),r.a.createElement("hr",null))};var he=function(){return r.a.createElement("div",null,r.a.createElement(pe,null),r.a.createElement(fe,null),r.a.createElement(_e,null))},ge="/pre-junior",be="/junior",ke="/junior-plus";var Ce=function(){return r.a.createElement("div",null,r.a.createElement(h.d,null,r.a.createElement(h.b,{path:"/",exact:!0,render:function(){return r.a.createElement(h.a,{to:ge})}}),r.a.createElement(h.b,{path:ge,render:function(){return r.a.createElement(le,null)}}),r.a.createElement(h.b,{path:be,render:function(){return r.a.createElement(he,null)}}),r.a.createElement(h.b,{path:ke,render:function(){return r.a.createElement(ce,null)}}),"// add routes",r.a.createElement(h.b,{render:function(){return r.a.createElement(k,null)}})))};var Oe=function(){return r.a.createElement("div",null,r.a.createElement(s.a,null,r.a.createElement(_,null),r.a.createElement(Ce,null)))};var je=function(){return r.a.createElement("div",{className:u.a.App},r.a.createElement("div",null,"react homeworks:"),r.a.createElement(Oe,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(je,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[37,1,2]]]);
//# sourceMappingURL=main.3b33fc7b.chunk.js.map