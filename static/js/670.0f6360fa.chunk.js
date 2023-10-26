"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[670],{670:function(e,n,t){t.r(n),t.d(n,{default:function(){return A}});var r="ContactList_TaskList__ASd5b",i="ContactList_TaskList_item__pjGNc",u="ContactList_TaskList_button__friUZ",a=t(2791),o=t(9434),c=t(241),s="NOT_FOUND";var l=function(e,n){return e===n};function f(e,n){var t="object"===typeof n?n:{equalityCheck:n},r=t.equalityCheck,i=void 0===r?l:r,u=t.maxSize,a=void 0===u?1:u,o=t.resultEqualityCheck,c=function(e){return function(n,t){if(null===n||null===t||n.length!==t.length)return!1;for(var r=n.length,i=0;i<r;i++)if(!e(n[i],t[i]))return!1;return!0}}(i),f=1===a?function(e){var n;return{get:function(t){return n&&e(n.key,t)?n.value:s},put:function(e,t){n={key:e,value:t}},getEntries:function(){return n?[n]:[]},clear:function(){n=void 0}}}(c):function(e,n){var t=[];function r(e){var r=t.findIndex((function(t){return n(e,t.key)}));if(r>-1){var i=t[r];return r>0&&(t.splice(r,1),t.unshift(i)),i.value}return s}return{get:r,put:function(n,i){r(n)===s&&(t.unshift({key:n,value:i}),t.length>e&&t.pop())},getEntries:function(){return t},clear:function(){t=[]}}}(a,c);function d(){var n=f.get(arguments);if(n===s){if(n=e.apply(null,arguments),o){var t=f.getEntries(),r=t.find((function(e){return o(e.value,n)}));r&&(n=r.value)}f.put(arguments,n)}return n}return d.clearCache=function(){return f.clear()},d}function d(e){var n=Array.isArray(e[0])?e[0]:e;if(!n.every((function(e){return"function"===typeof e}))){var t=n.map((function(e){return"function"===typeof e?"function "+(e.name||"unnamed")+"()":typeof e})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+t+"]")}return n}function p(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];var i=function(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];var u,a=0,o={memoizeOptions:void 0},c=r.pop();if("object"===typeof c&&(o=c,c=r.pop()),"function"!==typeof c)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof c+"]");var s=o,l=s.memoizeOptions,f=void 0===l?t:l,p=Array.isArray(f)?f:[f],h=d(r),v=e.apply(void 0,[function(){return a++,c.apply(null,arguments)}].concat(p)),m=e((function(){for(var e=[],n=h.length,t=0;t<n;t++)e.push(h[t].apply(null,arguments));return u=v.apply(null,e)}));return Object.assign(m,{resultFunc:c,memoizedResultFunc:v,dependencies:h,lastResult:function(){return u},recomputations:function(){return a},resetRecomputations:function(){return a=0}}),m};return i}var h=p(f),v=function(e){return e.contacts},m=function(e){return e.filter},y=h([function(e){return e.contacts.items},m],(function(e,n){return e.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}))})),x=t(6907),j=t(678),b=t(184),g=function(){return(0,b.jsx)(b.Fragment,{children:(0,b.jsx)("button",{type:"submit",children:"Add contact"})})};function C(){var e=(0,a.useState)(""),n=(0,j.Z)(e,2),t=n[0],r=n[1],i=(0,a.useState)(""),u=(0,j.Z)(i,2),s=u[0],l=u[1],f=(0,o.I0)(),d=(0,o.v9)(v).items,p=function(){r(""),l("")};return(0,b.jsxs)("form",{onSubmit:function(e){e.preventDefault(),d.some((function(e){return e.name.toLowerCase()===t.toLowerCase()}))?alert("".concat(t," is already in contacts")):0===t.length?alert("Fields must be filled!"):f((0,c.uK)({name:t,number:s})),p()},children:[(0,b.jsxs)("label",{style:{display:"flex"},children:["Name",(0,b.jsx)("input",{type:"text",name:"name",value:t,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:function(e){r(e.target.value)}})]}),(0,b.jsxs)("label",{children:["Number",(0,b.jsx)("input",{type:"tel",name:"number",value:s,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,onChange:function(e){var n=e.target.value;l(n)}}),(0,b.jsx)("br",{})]}),(0,b.jsx)(g,{})]})}var _=t(2484),k=function(){var e=(0,o.v9)(m),n=(0,o.I0)();return(0,b.jsxs)("div",{children:["Find contacts by name",(0,b.jsx)("input",{type:"text",name:e,value:e,onChange:function(e){return n((0,_.T)(e.target.value))}})]})},w=function(e){var n=e.id,t=e.name,r=e.number,i=(0,o.I0)();return(0,b.jsxs)("div",{children:[t+":"+r,(0,b.jsx)("button",{className:u,type:"button",name:"delete",onClick:function(){return i((0,c.GK)(n))},children:"Delete"})]})},A=function(){var e=(0,o.v9)(v),n=e.isLoading,t=e.error,u=(0,o.v9)(y),s=(0,o.I0)();return(0,a.useEffect)((function(){s((0,c.yF)())}),[s]),(0,b.jsxs)("div",{style:{height:"100vh",display:"block",justifyContent:"center",alignItems:"center",fontSize:40,color:"#010101"},children:[(0,b.jsx)(x.B6,{children:(0,b.jsxs)("div",{children:[(0,b.jsx)(x.ql,{children:(0,b.jsx)("title",{children:"Your contacts"})}),(0,b.jsx)("h1",{children:"Phonebook"})]})}),(0,b.jsx)(C,{}),(0,b.jsx)("h2",{children:"Contacts"}),(0,b.jsx)(k,{}),(0,b.jsxs)("div",{children:[n&&(0,b.jsx)("p",{children:"Loading contacts..."}),t&&(0,b.jsx)("p",{children:t}),u.length>0&&(0,b.jsx)("ul",{className:r,children:(0,b.jsx)(b.Fragment,{children:u.map((function(e){var n=e.id,t=e.name,r=e.number;return(0,b.jsx)("li",{className:i,children:(0,b.jsx)(w,{id:n,name:t,number:r})},n)}))})})]})]})}}}]);
//# sourceMappingURL=670.0f6360fa.chunk.js.map