(this["webpackJsonpsimple-react-homeworks"]=this["webpackJsonpsimple-react-homeworks"]||[]).push([[0],[,,,,,function(e,a,t){e.exports={message:"Message_message__2OTWf","message__img-link":"Message_message__img-link__1i7GU",message__img:"Message_message__img__1CA1E",message__box:"Message_message__box__1z1xL",message__content:"Message_message__content__1ebVL",message__name:"Message_message__name__3x8q-",message__text:"Message_message__text__8oJ6A",message__time:"Message_message__time__3a72Q"}},function(e,a,t){e.exports={greeting:"Greeting_greeting__SUfFf","greeting__box-input":"Greeting_greeting__box-input__3UiLj",greeting__input:"Greeting_greeting__input__2fpri","greeting__box-button":"Greeting_greeting__box-button__1O53d",greeting__btn:"Greeting_greeting__btn__2_PsD",greeting__total:"Greeting_greeting__total__2lNwO",greeting__error:"Greeting_greeting__error__2A5fV",error:"Greeting_error__g6T1H"}},,,,,function(e,a,t){e.exports={errorInput:"SuperInputText_errorInput__2WVuu",error:"SuperInputText_error__1q9LJ",forSuperIputText:"SuperInputText_forSuperIputText__3gdJu",forSuperIputTextSpan:"SuperInputText_forSuperIputTextSpan__nv1hS"}},,function(e,a,t){e.exports={affair:"Affair_affair__3w9Sd",affair__name:"Affair_affair__name__16sMh",affair__btn:"Affair_affair__btn__3oPnx"}},function(e,a,t){e.exports={affairs:"Affairs_affairs__7mFE7",affairs__btn:"Affairs_affairs__btn__3H6uz",active:"Affairs_active__3Vesn"}},function(e,a,t){e.exports={header:"Header_header__2bTHS",header__active:"Header_header__active__2ve6d"}},,function(e,a,t){e.exports={defaultBtn:"SuperButton_defaultBtn__3LjnE",red:"SuperButton_red__1kMAj"}},function(e,a,t){e.exports={checkbox:"SuperCheckbox_checkbox__3K1AE",spanClassName:"SuperCheckbox_spanClassName__1EtFI"}},,,,,,,function(e,a,t){e.exports={App:"App_App__2nZgH"}},function(e,a,t){e.exports={hw1__title:"HW1_hw1__title__2P4oP"}},function(e,a,t){e.exports={blue:"HW4_blue__1NkWD",column:"HW4_column__3pCXx",forSuperIputText:"HW4_forSuperIputText__7CvRv"}},,,function(e,a,t){e.exports=t(41)},,,,,function(e,a,t){},,,,,,function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(24),c=t.n(l),i=(t(35),t(25)),s=t.n(i),o=t(7),_=t(1),u=t(5),m=t.n(u);function f(e){var a=e.avatar,t=e.name,n=e.message,l=e.time,c=e.link,i=void 0===c?"https://github.com/Mirudistok32":c;return r.a.createElement("div",{className:m.a.message},r.a.createElement("a",{className:m.a["message__img-link"],href:i,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{className:m.a.message__img,src:a,alt:"avatar"})),r.a.createElement("div",{className:m.a.message__box},r.a.createElement("div",{className:m.a.message__content},r.a.createElement("a",{className:m.a.message__name,href:i,target:"_blank",rel:"noopener noreferrer"},t),r.a.createElement("div",{className:m.a.message__text},n)),r.a.createElement("span",{className:m.a.message__time},l)))}var g=t(26),d=t.n(g),p="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",E="\u0421\u0442\u0430\u043d\u0438\u0441\u043b\u0430\u0432 (mirudistok) \u041f\u043e\u0441\u0442\u043d\u0438\u043a\u043e\u0432",h="`\u0423\u0441\u043f\u0435\u0445 \u043f\u0440\u0438\u0445\u043e\u0434\u0438\u0442 \u043b\u0438\u0448\u044c \u043a \u0442\u0435\u043c, \u043a\u0442\u043e \u043d\u0435 \u0431\u043e\u0438\u0442\u0441\u044f \u0441\u0442\u043e\u043b\u043a\u043d\u0443\u0442\u044c\u0441\u044f \u0441 \u0442\u0440\u0443\u0434\u043d\u043e\u0441\u0442\u044f\u043c\u0438 \u0438 \u043f\u043e\u0436\u0435\u0440\u0442\u0432\u043e\u0432\u0430\u0442\u044c \u0441\u0432\u043e\u0438\u043c\u0438 \u0431\u043b\u0430\u0433\u0430\u043c\u0438. \u0414\u0436\u0435\u0439\u043c\u0441 \u0410\u043b\u043b\u0435\u043d`",b="22:00";var v=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),r.a.createElement("span",{className:d.a.hw1__title},"homeworks 1"),r.a.createElement(f,{avatar:p,name:E,message:h,time:b}),r.a.createElement("hr",null),r.a.createElement("hr",null))},x=t(3),N=t(13),k=t.n(N);var C=function(e){return r.a.createElement("div",{className:k.a.affair},r.a.createElement("span",{className:k.a.affair__name},e.affair.name),r.a.createElement("button",{className:k.a.affair__btn,onClick:function(){e.deleteAffairCallback(e.affair._id)}},"X"))},S=t(14),O=t.n(S);var j=function(e){var a=e.data.map((function(a){return r.a.createElement(C,{key:a._id,affair:a,deleteAffairCallback:e.deleteAffairCallback})}));return r.a.createElement("div",{className:O.a.affairs},a,[{name:"All",filter:"all",_id:1},{name:"High",filter:"high",_id:2},{name:"Middle",filter:"middle",_id:3},{name:"Low",filter:"low",_id:4}].map((function(a){return r.a.createElement("button",{key:a._id,className:"\n                            ".concat(O.a.affairs__btn," \n                            ").concat(a.filter===e.filter?O.a.active:"","\n                        "),onClick:function(){return e.setFilter(a.filter)}},a.name)})))},w=[{_id:1,name:"React-high",priority:"high"},{_id:2,name:"anime-low",priority:"low"},{_id:3,name:"games-low",priority:"low"},{_id:4,name:"work-high",priority:"high"},{_id:5,name:"html & css-middle",priority:"middle"}];var T=function(){var e=Object(n.useState)(w),a=Object(x.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)("all"),i=Object(x.a)(c,2),s=i[0],o=i[1],_=function(e,a){switch(a){case"all":return e;case"high":return e.filter((function(e){return"high"===e.priority}));case"middle":return e.filter((function(e){return"middle"===e.priority}));case"low":return e.filter((function(e){return"low"===e.priority}));default:return e}}(t,s);return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 2",r.a.createElement(j,{data:_,setFilter:o,deleteAffairCallback:function(e){return l(function(e,a){return e.filter((function(e){return e._id!==a}))}(t,e))},filter:s}),r.a.createElement("hr",null),r.a.createElement("hr",null))},y=t(29),A=t(6),I=t.n(A),H=function(e){var a=e.name,t=e.setNameCallback,n=e.addUser,l=e.error,c=e.totalUsers,i=void 0===c?0:c,s=I.a.greeting__input;return s=l?s+" "+I.a.error:s,r.a.createElement("div",{className:I.a.greeting},r.a.createElement("div",{className:I.a["greeting__box-input"]},r.a.createElement("input",{className:s,value:a,onChange:t,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f"}),r.a.createElement("span",{className:I.a.greeting__error},l)),r.a.createElement("div",{className:I.a["greeting__box-button"]},r.a.createElement("button",{className:I.a.greeting__btn,onClick:n},"add"),r.a.createElement("span",{className:I.a.greeting__total},i)))},M=function(e){var a=e.users,t=e.addUserCallback,l=Object(n.useState)(""),c=Object(x.a)(l,2),i=c[0],s=c[1],o=Object(n.useState)(""),_=Object(x.a)(o,2),u=_[0],m=_[1],f=a.length;return r.a.createElement(H,{name:i,setNameCallback:function(e){s(e.currentTarget.value),m("")},addUser:function(){i.trim()?(t(i),alert("Hello  ".concat(i,"!")),s("")):(m("* \u0412\u044b \u0437\u0430\u0431\u044b\u043b\u0438 \u0432\u0432\u0435\u0441\u0442\u0438 \u0438\u043c\u044f"),s(""))},error:u,totalUsers:f})},P=t(43);var U=function(){var e=Object(n.useState)([]),a=Object(x.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 3",r.a.createElement(M,{users:t,addUserCallback:function(e){var a={name:e,_id:Object(P.a)()};l([].concat(Object(y.a)(t),[a]))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},W=t(8),G=t(11),B=t.n(G),J=function(e){e.type;var a=e.onChange,t=e.onKeyPress,n=e.className,l=e.onChangeText,c=e.onEnter,i=e.error,s=e.spanClassName,o=e.setError,_=Object(W.a)(e,["type","onChange","onKeyPress","className","onChangeText","onEnter","error","spanClassName","setError"]),u=B.a.forSuperIputTextSpan+" ".concat(s||"");u+=" ".concat(i?B.a.error:"");var m=B.a.forSuperIputText+" ".concat(n||"");return m+=" ".concat(i?B.a.errorInput:""),r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({type:"text",onChange:function(e){a&&a(e),l&&l(e.currentTarget.value),o("")},onKeyPress:function(e){t&&t(e),"Enter"===e.key&&c&&c()},className:m},_)),i&&r.a.createElement("span",{className:u},"*",i))},F=t(27),L=t.n(F),R=t(17),K=t.n(R),V=function(e){var a=e.red,t=e.className,n=Object(W.a)(e,["red","className"]),l="".concat(a?K.a.red:""," ").concat(K.a.defaultBtn+" "+t," ");return r.a.createElement("button",Object.assign({className:l},n))},q=t(18),X=t.n(q),z=function(e){e.type;var a=e.onChange,t=e.onChangeChecked,n=e.className,l=(e.spanClassName,e.children),c=Object(W.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),i="".concat(X.a.checkbox," ").concat(n||"");return r.a.createElement("label",null,r.a.createElement("input",Object.assign({type:"checkbox",onChange:function(e){a&&a(e),t&&t(e.currentTarget.checked)},className:i},c)),l&&r.a.createElement("span",{className:X.a.spanClassName},l))};var D=function(){var e=Object(n.useState)(""),a=Object(x.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)(""),i=Object(x.a)(c,2),s=i[0],o=i[1],_=function(){o(t?"":"error"),s?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):(alert(t),l(""))},u=Object(n.useState)(!1),m=Object(x.a)(u,2),f=m[0],g=m[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 4",r.a.createElement("div",{className:L.a.column},r.a.createElement(J,{value:t,onChangeText:l,onEnter:_,error:s,setError:o,placeholder:"\u042f input, \u0447\u0438\u0442\u0430\u044e \u0432\u0430\u0448\u0438..."}),r.a.createElement(V,{red:!1,onClick:_},"delete"),r.a.createElement(z,{checked:f,onChangeChecked:g},"some text "),r.a.createElement(z,{checked:f,onChange:function(e){return g(e.currentTarget.checked)}})),r.a.createElement("hr",null),r.a.createElement("hr",null))};var Z=function(){return r.a.createElement("div",null,r.a.createElement(v,null),r.a.createElement(T,null),r.a.createElement(U,null),r.a.createElement(D,null))};var Q=function(){return r.a.createElement("div",null,r.a.createElement("div",null,"404"),r.a.createElement("div",null,"Page not found!"),r.a.createElement("div",null,"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"))};var Y=function(){return r.a.createElement("div",null,r.a.createElement(T,null))},$="/pre-junior",ee="/pre-junior-plus";var ae=function(){return r.a.createElement("div",null,r.a.createElement(_.d,null,r.a.createElement(_.b,{path:"/",exact:!0,render:function(){return r.a.createElement(_.a,{to:$})}}),r.a.createElement(_.b,{path:$,render:function(){return r.a.createElement(Z,null)}}),r.a.createElement(_.b,{path:ee,render:function(){return r.a.createElement(Y,null)}}),r.a.createElement(_.b,{render:function(){return r.a.createElement(Q,null)}})))},te=t(15),ne=t.n(te);var re=function(){return r.a.createElement("div",{className:ne.a.header},r.a.createElement(o.b,{activeClassName:ne.a.header__active,to:$},"PRE_JUNIOR"),r.a.createElement(o.b,{activeClassName:ne.a.header__active,to:ee},"PRE_JUNIOR_PLUS"))};var le=function(){return r.a.createElement("div",null,r.a.createElement(o.a,null,r.a.createElement(re,null),r.a.createElement(ae,null)))};var ce=function(){return r.a.createElement("div",{className:s.a.App},r.a.createElement("div",null,"react homeworks:"),r.a.createElement(le,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ce,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[30,1,2]]]);
//# sourceMappingURL=main.19e771ac.chunk.js.map