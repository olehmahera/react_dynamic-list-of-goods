(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{12:function(t,n,e){},14:function(t,n,e){"use strict";e.r(n);var r=e(5),o=e.n(r),c=e(3),a=e(6),s=e(1),u=e.n(s),i=e(2),d=(e(12),e(0)),f=function(t){var n=t.goods;return Object(d.jsx)("ul",{children:n.map((function(t){return Object(d.jsx)("li",{"data-cy":"good",className:t.color,children:t.name},t.id)}))})};function l(){return fetch("https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json").then((function(t){if(!t.ok)throw new Error("".concat(t.status," - ").concat(t.statusText));return t.json()}))}var p=function(){var t=Object(i.useState)([]),n=Object(a.a)(t,2),e=n[0],r=n[1],o=function(){var t=Object(c.a)(u.a.mark((function t(){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l();case 2:n=t.sent,r(n);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),s=function(){var t=Object(c.a)(u.a.mark((function t(){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l().then((function(t){return t.sort((function(t,n){return t.name.localeCompare(n.name)})).slice(0,5)}));case 2:n=t.sent,r(n);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),p=function(){var t=Object(c.a)(u.a.mark((function t(){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l().then((function(t){return t.filter((function(t){return"red"===t.color}))}));case 2:n=t.sent,r(n);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{children:"Dynamic list of Goods"}),Object(d.jsx)("button",{type:"button","data-cy":"all-button",onClick:o,children:"Load all goods"}),Object(d.jsx)("button",{type:"button","data-cy":"first-five-button",onClick:s,children:"Load 5 first goods"}),Object(d.jsx)("button",{type:"button","data-cy":"red-button",onClick:p,children:"Load red goods"}),Object(d.jsx)(f,{goods:e})]})};o.a.render(Object(d.jsx)(p,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.25d1ef67.chunk.js.map