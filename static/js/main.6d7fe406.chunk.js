(this["webpackJsonpsimple-react-homeworks"]=this["webpackJsonpsimple-react-homeworks"]||[]).push([[0],[,,,,function(e,a,t){e.exports={img:"Header_img__3onx1",nav:"Header_nav__YOyRg",navCollapsed:"Header_navCollapsed__26N7D",item:"Header_item__1nwSm",activeLink:"Header_activeLink__1Fkc5"}},,,function(e,a,t){e.exports={message:"Message_message__3Uh21",name:"Message_name__2deX0",dialog:"Message_dialog__UN8SP",time:"Message_time__HtGzs",text:"Message_text__1Lna8"}},,,,function(e,a,t){e.exports={error:"Greeting_error__1EmIj",atuinBtn:"Greeting_atuinBtn__3Awsn",total:"Greeting_total__1nSLT",button:"Greeting_button__2z5H8"}},,function(e,a,t){e.exports={errorInput:"SuperInputText_errorInput__3wcXZ",form__label:"SuperInputText_form__label__2t1GE",form__input:"SuperInputText_form__input__3O79U",error:"SuperInputText_error__1Tv7V",superInput:"SuperInputText_superInput__3ZIAE"}},function(e,a,t){e.exports={blue:"HW4_blue__31QsX",column:"HW4_column__3OFAd"}},,,,,function(e,a,t){e.exports={red:"SuperButton_red__2dqt6",default:"SuperButton_default__2jpqW"}},function(e,a,t){e.exports={checkbox:"SuperCheckbox_checkbox__3VpJn",spanClassName:"SuperCheckbox_spanClassName__4hmqI"}},,,,,,function(e,a,t){e.exports={App:"App_App__qQiwY"}},,function(e,a,t){e.exports=t.p+"static/media/klipartz.com.b702be85.png"},function(e,a,t){e.exports={Affairs:"Affairs_Affairs__1Q_qQ"}},,,function(e,a,t){e.exports=t(45)},,,,,function(e,a,t){},,,,,,,,function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(25),c=t.n(l),o=(t(37),t(26)),i=t.n(o),s=t(2),u=t(6),m=t(4),d=t.n(m);var p=function(){var e=Object(n.useState)(!1),a=Object(s.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("img",{className:d.a.img,onClick:function(){return l(!t)},src:t?"https://cdn.icon-icons.com/icons2/1141/PNG/512/1486395882-close_80604.png":"https://cdn.icon-icons.com/icons2/1141/PNG/512/1486395871-menu_80607.png",alt:""}),r.a.createElement("nav",{className:t?d.a.nav:d.a.navCollapsed},r.a.createElement("div",{className:"".concat(d.a.item," ").concat(d.a.active)},r.a.createElement(u.b,{to:"/pre-junior",activeClassName:d.a.activeLink},t?"Prejunior":"")),r.a.createElement("div",{className:"".concat(d.a.item," ").concat(d.a.active)},r.a.createElement(u.b,{to:"/junior",activeClassName:d.a.activeLink},t?"Junior":"")),r.a.createElement("div",{className:"".concat(d.a.item," ").concat(d.a.active)},r.a.createElement(u.b,{to:"/junior-plus",activeClassName:d.a.activeLink},t?"Junior - plus":""))))},E=t(1),_=t(28),f=t.n(_);var v=function(){return r.a.createElement("div",null,r.a.createElement("img",{src:f.a,alt:""}))},h=t(7),b=t.n(h);var g=function(e){return r.a.createElement("div",{className:b.a.message},r.a.createElement("div",null,r.a.createElement("img",{src:e.message.avatar})),r.a.createElement("div",{className:b.a.dialog},r.a.createElement("div",{className:b.a.content},r.a.createElement("span",{className:b.a.name},e.message.name),r.a.createElement("br",null),r.a.createElement("span",{className:b.a.text},e.message.message),r.a.createElement("br",null),r.a.createElement("span",{className:b.a.time},e.message.time))))},k={avatar:"https://avatars.mds.yandex.net/get-pdb/1923366/64426749-ba99-4171-abc5-1219f98640a0/s1200?webp=false",name:"Goga",message:"Hello My name is Goga",time:"22:00"};var C=function(){return r.a.createElement("div",null,"homeworks 1",r.a.createElement("hr",null),r.a.createElement(g,{message:k}),r.a.createElement("hr",null),r.a.createElement("hr",null))};var N=function(e){return r.a.createElement("div",null,"".concat(e.affair.name," - ").concat(e.affair.priority),r.a.createElement("button",{onClick:function(){e.deleteAffairCallback(e.affair._id)}},"X"))},j=t(29),x=t.n(j);var O=function(e){var a=e.data.map((function(a){return r.a.createElement(N,{key:a._id,affair:a,deleteAffairCallback:e.deleteAffairCallback})}));return r.a.createElement("div",{className:x.a.Affairs},r.a.createElement("div",null,a,r.a.createElement("button",{onClick:function(){e.setFilter("all")}},"All"),r.a.createElement("button",{onClick:function(){e.setFilter("high")}},"High"),r.a.createElement("button",{onClick:function(){e.setFilter("middle")}},"Middle"),r.a.createElement("button",{onClick:function(){e.setFilter("low")}},"Low")))},w=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var y=function(){var e=Object(n.useState)(w),a=Object(s.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)("all"),o=Object(s.a)(c,2),i=o[0],u=o[1],m=function(e,a){return"all"===a?e:"low"===a?e.filter((function(e){return"low"===e.priority})):"high"===a?e.filter((function(e){return"high"===e.priority})):"middle"===a?e.filter((function(e){return"middle"===e.priority})):e}(t,i);return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 2",r.a.createElement(O,{data:m,setFilter:u,deleteAffairCallback:function(e){return l(function(e,a){return e.filter((function(e){return e._id!==a}))}(t,e))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},S=t(31),A=t(11),I=t.n(A),T=function(e){var a=e.name,t=e.setNameCallback,n=e.addUser,l=e.error,c=e.totalUsers,o=l?I.a.error:I.a.atuinBtn;return r.a.createElement("div",null,r.a.createElement("input",{value:a,onChange:t,className:o}),r.a.createElement("span",null,l),r.a.createElement("button",{onClick:n,className:I.a.button},"add"),r.a.createElement("span",{className:I.a.total},c))},H=function(e){var a=e.users,t=e.addUserCallback,l=Object(n.useState)(""),c=Object(s.a)(l,2),o=c[0],i=c[1],u=Object(n.useState)(""),m=Object(s.a)(u,2),d=m[0],p=m[1],E=a.length;return r.a.createElement(T,{name:o,setNameCallback:function(e){p(""),i(e.currentTarget.value)},addUser:function(){o.length>0?(alert("Hello "+o+"!"),t(o),i("")):p("Error")},error:d,totalUsers:E})},G=t(30);var U=function(){var e=Object(n.useState)([]),a=Object(s.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 3",r.a.createElement(H,{users:t,addUserCallback:function(e){var a={_id:Object(G.v1)(),name:e};l([a].concat(Object(S.a)(t)))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},F=t(8),L=t(13),M=t.n(L),B=function(e){e.type;var a=e.onChange,t=e.onChangeText,n=e.onKeyPress,l=e.onEnter,c=e.error,o=(e.className,e.spanClassName),i=e.setError,s=Object(F.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName","setError"]),u="".concat(M.a.error," ").concat(o||""),m=c?M.a.errorInput:M.a.superInput;return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({type:"text",onChange:function(e){a&&a(e),t&&t(e.currentTarget.value),i&&i("")},onKeyPress:function(e){n&&n(e),"Enter"===e.key&&l&&l()},className:m},s)),c&&r.a.createElement("span",{className:u},c))},P=t(14),W=t.n(P),q=t(19),J=t.n(q),Q=function(e){var a=e.error,t=(e.className,Object(F.a)(e,["error","className"])),n=a?J.a.red:J.a.default;return r.a.createElement("button",Object.assign({className:n},t))},X=t(20),z=t.n(X),K=function(e){e.type;var a=e.onChange,t=e.onChangeChecked,n=e.className,l=(e.spanClassName,e.children),c=Object(F.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),o="".concat(z.a.checkbox," ").concat(n||"");return r.a.createElement("label",null,r.a.createElement("input",Object.assign({type:"checkbox",onChange:function(e){t&&t(e.currentTarget.checked),a&&a(e)},className:o},c)),l&&r.a.createElement("span",{className:z.a.spanClassName},l))};var R=function(){var e=Object(n.useState)(""),a=Object(s.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)(""),o=Object(s.a)(c,2),i=o[0],u=o[1],m=function(){u(t?"":"error"),i||""===t?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):(alert(t),l(""))},d=Object(n.useState)(!1),p=Object(s.a)(d,2),E=p[0],_=p[1];return r.a.createElement("div",{className:W.a.HW4},r.a.createElement("p",{className:W.a.homeworkNumber},"homework 4"),r.a.createElement("div",{className:W.a.column},r.a.createElement(B,{value:t,onChangeText:l,onEnter:m,error:i,setError:u}),r.a.createElement(Q,{error:i,onClick:m},"delete "),r.a.createElement(K,{checked:E,onChangeChecked:_},"some text "),r.a.createElement(K,{checked:E,onChange:function(e){return _(e.currentTarget.checked)}})))};var V=function(){return r.a.createElement("div",null,r.a.createElement(C,null),r.a.createElement(y,null),r.a.createElement(U,null),r.a.createElement(R,null))};function Y(){return r.a.createElement("div",null)}function Z(){return r.a.createElement("div",null)}var D="/pre-junior",$="/junior",ee="/junior-plus";var ae=function(){return r.a.createElement("div",null,r.a.createElement(E.d,null,r.a.createElement(E.b,{path:"/",exact:!0,render:function(){return r.a.createElement(E.a,{to:D})}}),r.a.createElement(E.b,{path:D,render:function(){return r.a.createElement(V,null)}}),r.a.createElement(E.b,{path:$,render:function(){return r.a.createElement(Y,null)}}),r.a.createElement(E.b,{path:ee,render:function(){return r.a.createElement(Z,null)}}),"// add routes",r.a.createElement(E.b,{render:function(){return r.a.createElement(v,null)}})))};var te=function(){return r.a.createElement("div",null,r.a.createElement(u.a,null,r.a.createElement(p,null),r.a.createElement(ae,null)))};var ne=function(){return r.a.createElement("div",{className:i.a.App},r.a.createElement("div",null,"react homeworks:"),r.a.createElement(te,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ne,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[32,1,2]]]);
//# sourceMappingURL=main.6d7fe406.chunk.js.map