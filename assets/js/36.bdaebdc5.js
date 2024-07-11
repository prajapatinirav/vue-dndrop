(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{485:function(t,e,n){"use strict";n.r(e);var a=n(53),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"container"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#container"}},[t._v("#")]),t._v(" Container")]),t._v(" "),n("p",[t._v("Component that contains the draggable elements or components. Each of its children should be wrapped by "),n("strong",[t._v("Draggable")]),t._v(" component")]),t._v(" "),n("hr"),t._v(" "),n("h2",{attrs:{id:"properties"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#properties"}},[t._v("#")]),t._v(" Properties")]),t._v(" "),n("p",[t._v("Properties define the visual behaviour of the library:")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("Property")]),t._v(" "),n("th",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),n("th",{staticStyle:{"text-align":"center"}},[t._v("Default")]),t._v(" "),n("th",[t._v("Description")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v(":orientation")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[n("code",[t._v("vertical")])]),t._v(" "),n("td",[t._v("Orientation of the container. Can be "),n("strong",[t._v("horizontal")]),t._v(" or "),n("strong",[t._v("vertical")]),t._v(".")])]),t._v(" "),n("tr",[n("td",[t._v(":behaviour")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[n("code",[t._v("move")])]),t._v(" "),n("td",[t._v("Property to describe wether the dragging item will be moved or copied to target container. Can be "),n("strong",[t._v("move")]),t._v(" or "),n("strong",[t._v("copy")]),t._v(" or "),n("strong",[t._v("drop-zone")]),t._v(" or "),n("strong",[t._v("contain")]),t._v(".")])]),t._v(" "),n("tr",[n("td",[t._v(":tag")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("string or NodeDescription")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[n("code",[t._v("div")])]),t._v(" "),n("td",[n("em",[t._v("See descriptions below")])])]),t._v(" "),n("tr",[n("td",[t._v(":group-name")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[n("code",[t._v("undefined")])]),t._v(" "),n("td",[t._v("Draggables can be moved between the containers having the same group names. If not set container will not accept drags from outside. This behaviour can be overwritten by shouldAcceptDrop function. See below.")])]),t._v(" "),n("tr",[n("td",[t._v(":lock-axis")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[n("code",[t._v("undefined")])]),t._v(" "),n("td",[t._v("Locks the movement axis of the dragging. Possible values are "),n("strong",[t._v("x")]),t._v(", "),n("strong",[t._v("y")]),t._v(" or "),n("strong",[t._v("undefined")]),t._v(".")])]),t._v(" "),n("tr",[n("td",[t._v(":drag-handle-selector")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[n("code",[t._v("undefined")])]),t._v(" "),n("td",[t._v("Css selector to test for enabling dragging. If not given item can be grabbed from anywhere in its boundaries.")])]),t._v(" "),n("tr",[n("td",[t._v(":non-drag-area-selector")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[n("code",[t._v("undefined")])]),t._v(" "),n("td",[t._v("Css selector to prevent dragging. Can be useful when you have form elements or selectable text somewhere inside your draggable item. It has a precedence over "),n("strong",[t._v("dragHandleSelector")]),t._v(".")])]),t._v(" "),n("tr",[n("td",[t._v(":drag-begin-delay")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("number")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[n("code",[t._v("0")]),t._v(" ("),n("code",[t._v("200")]),t._v(" for touch devices)")]),t._v(" "),n("td",[t._v("Time in milisecond. Delay to start dragging after item is pressed. Moving cursor before the delay more than 5px will cancel dragging.")])]),t._v(" "),n("tr",[n("td",[t._v(":animation-duration")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("number")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[n("code",[t._v("250")])]),t._v(" "),n("td",[t._v("Animation duration in milisecond. To be consistent this animation duration will be applied to both drop and reorder animations.")])]),t._v(" "),n("tr",[n("td",[t._v(":auto-scroll-enabled")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("boolean")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[n("code",[t._v("true")])]),t._v(" "),n("td",[t._v("First scrollable parent will scroll automatically if dragging item is close to boundaries.")])]),t._v(" "),n("tr",[n("td",[t._v(":drag-class")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[n("code",[t._v("undefined")])]),t._v(" "),n("td",[t._v("Class to be added to the ghost item being dragged. The class will be added after it's added to the DOM so any transition in the class will be applied as intended.")])]),t._v(" "),n("tr",[n("td",[t._v(":drop-class")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[n("code",[t._v("undefined")])]),t._v(" "),n("td",[t._v("Class to be added to the ghost item just before the drop animation begins.")])]),t._v(" "),n("tr",[n("td",[t._v(":remove-on-drop-out")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("boolean")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[n("code",[t._v("undefined")])]),t._v(" "),n("td",[t._v("When set true onDrop will be called with a removedIndex if you drop element out of any relevant container")])]),t._v(" "),n("tr",[n("td",[t._v(":drop-placeholder")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("boolean,object")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[n("code",[t._v("undefined")])]),t._v(" "),n("td",[t._v("Options for drop placeholder. "),n("strong",[t._v("className")]),t._v(", "),n("strong",[t._v("animationDuration")]),t._v(", "),n("strong",[t._v("showOnTop")])])]),t._v(" "),n("tr",[n("td",[t._v(":fire-related-events-only")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("boolean")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[n("code",[t._v("false")])]),t._v(" "),n("td",[t._v("Defines if only events related to the selected containers will be fired")])])])]),t._v(" "),n("h2",{attrs:{id:"tag"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#tag"}},[t._v("#")]),t._v(" "),n("code",[t._v("tag")])]),t._v(" "),n("p",[t._v("Tag name or the node definition to render the root element of the Container.\nDefault value is 'div'.")]),t._v(" "),n("div",{staticClass:"language-ts extra-class"},[n("pre",{pre:!0,attrs:{class:"language-ts"}},[n("code",[n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("tag"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"{value: 'table', props: {class: 'my-table'}}\"")]),t._v("\n")])])]),n("div",{staticClass:"language-ts extra-class"},[n("pre",{pre:!0,attrs:{class:"language-ts"}},[n("code",[t._v("tag "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"table"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("hr"),t._v(" "),n("h4",{attrs:{id:"possible-values"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#possible-values"}},[t._v("#")]),t._v(" Possible values")]),t._v(" "),n("ul",[n("li",[n("strong",[t._v("string")]),t._v(" : The tag name of the root element to be created")]),t._v(" "),n("li",[n("strong",[t._v("object")]),t._v(": Node definition\n"),n("ul",[n("li",[n("strong",[t._v("value")]),t._v(": string : tag name")]),t._v(" "),n("li",[n("strong",[t._v("props")]),t._v(": data object to define element properties. see "),n("a",{attrs:{href:"https://vuejs.org/v2/guide/render-function.html#The-Data-Object-In-Depth",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://vuejs.org/v2/guide/render-function.html#The-Data-Object-In-Depth"),n("OutboundLink")],1)])])])])])}),[],!1,null,null,null);e.default=r.exports}}]);