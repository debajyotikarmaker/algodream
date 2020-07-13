(this.webpackJsonpalgodream=this.webpackJsonpalgodream||[]).push([[0],{28:function(e,t,a){e.exports=a(41)},33:function(e,t,a){},34:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(23),s=a.n(r),o=(a(33),a(7)),l=a(10),c=(a(34),function(){return i.a.createElement("div",null,i.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark"},i.a.createElement(o.b,{className:"navbar-brand",to:"/"},"Algo Dream"),i.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},i.a.createElement("span",{className:"navbar-toggler-icon"})),i.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},i.a.createElement("ul",{className:"navbar-nav m-auto"},i.a.createElement("li",{className:"nav-item active"},i.a.createElement(o.b,{className:"nav-link ml-3",to:"/"},"Home")),i.a.createElement("li",{className:"nav-item"},i.a.createElement(o.b,{className:"nav-link ml-3",to:"/data-structure"},"Data Structure")),i.a.createElement("li",{className:"nav-item"},i.a.createElement(o.b,{className:"nav-link ml-3",to:"/sort"},"Sort")),i.a.createElement("li",{className:"nav-item"},i.a.createElement(o.b,{className:"nav-link ml-3",to:"/search"},"Search")),i.a.createElement("li",{className:"nav-item"},i.a.createElement(o.b,{className:"nav-link ml-3",to:"/genetic-algorithm"},"Genetic Algorithm")),i.a.createElement("li",{className:"nav-item"},i.a.createElement(o.b,{className:"nav-link ml-3",to:"/deep-learning"},"Deep Learning"))))))}),m=function(){return i.a.createElement("footer",{className:"footer fixed-bottom"},i.a.createElement("div",{className:"container-fluid"},i.a.createElement("span",{className:"text-muted"},"\xa9 Copyright 2020 by Debajyoti Karmaker")))},h=a(2),u=a(3),d=a(6),p=a(5),v=a(14),f=a.n(v),E=a(12),y=a.n(E),g=function(){function e(t,a,n,i,r,s,o,l,c,m){Object(h.a)(this,e);var u={friction:0,restitution:.8,isStatic:c};this.p=t,this.r=o,this.name=l,this.body=a.circle(r,s,o,u),this.World=n,this.world=i,this.type=m,n.add(i,this.body)}return Object(u.a)(e,[{key:"removeFromWorld",value:function(){this.World.remove(this.world,this.body)}},{key:"offScreen",value:function(){return this.body.position.y>this.p.height}},{key:"show",value:function(){var e=this.body.position,t=this.body.angle;this.p.push(),this.p.translate(e.x,e.y),this.p.rotate(t),this.p.rectMode(this.p.CENTER),this.p.strokeWeight(1),this.p.stroke(100),"r"===this.type?this.p.rect(0,0,2*this.r,50):this.p.ellipse(0,0,2*this.r),this.p.pop(),this.p.textSize(this.r/3),this.p.textAlign(this.p.CENTER,this.p.CENTER),this.p.text(this.name,e.x,e.y)}}]),e}(),b=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;return Object(h.a)(this,a),(e=t.call(this)).myP5=null,e.myRef=i.a.createRef(),e.sketch=function(t){var a,n,i,r,s=y.a.Engine,o=y.a.World,l=y.a.Bodies,c=y.a.Constraint,m=y.a.Mouse,h=y.a.MouseConstraint,u=[],d=[{name:"Algo Dream",url:"",child:[{name:"Data \n Structure",url:""},{name:"Sort",url:""},{name:"Search",url:""},{name:"Agents",url:""},{name:"Genetic \n Algorithm",url:""},{name:"Deep \n Learning",url:""}]}];t.setup=function(){var p=t.createCanvas(1e3,500).parent(e.myRef.current);a=s.create(),n=a.world;var v=t.width/2;i=new g(t,l,o,n,v,100,50,d[0].name,!0,"r");for(var f=0;f<d.length;f++){v+=40;for(var E=d[f].child,y=0;y<E.length;y++){console.log(E[y].name);var b=new g(t,l,o,n,v,100,40,E[y].name,!1,"c");u.push(b),v+=0;var N={bodyA:i.body,bodyB:b.body,length:200,stiffness:.5},w=c.create(N);o.add(n,w);var S=m.create(p.elt);S.pixelRatio=t.pixelDensity();var k={mouse:S};r=h.create(a,k),o.add(n,r)}}},t.draw=function(){t.background(255),s.update(a);for(var e=i.body.position,n=0;n<u.length;n++){var o=u[n].body.position;t.line(o.x,o.y,e.x,e.y),u[n].show()}if(i.show(),r.body){var l=r.body.position,c=r.mouse.position,m=r.constraint.pointB;t.push(),t.stroke(0,0,255),t.line(l.x+m.x,l.y+m.y,c.x,c.y),t.pop()}}},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.myP5=new f.a(this.sketch)}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("div",null,"This project is an effort to visually understand and begin able to communicating how data-structure & algorithm works."),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col",ref:this.myRef})))}}]),a}(n.Component),N=function(e){var t=e.item;return i.a.createElement("li",null,i.a.createElement(o.b,{to:t.to},i.a.createElement("span",null,t.id)," ",t.name))},w=function(){var e=[{id:1,name:"Stack (Array)",to:"/stack-array"},{id:2,name:"Stack (LL)",to:"/stack-linked-list"},{id:3,name:"Queue (Array)",to:"/queue-array"},{id:4,name:"Queue (LL)",to:"/queue-linked-list"},{id:5,name:"Circular Queue (Array)",to:"/circular-queue-array"},{id:6,name:"Circular Queue (LL)",to:"/circular-queue-link-list"},{id:7,name:"Priority Queue",to:"/priority-queue"}].map((function(e){return i.a.createElement(N,{key:e.id,item:e})}));return i.a.createElement("ul",null,e)},S=function(){return i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-2 side-bar"},i.a.createElement(w,null)),i.a.createElement("div",{className:"col-10 main-content"},"Data Structure Page"))},k=function(){var e=[{id:1,name:"Bubble Sort",to:"/bubble-sort"},{id:2,name:"Selection Sort",to:"/selection-sort"},{id:3,name:"Insertion Sort",to:"/insertion-sort"},{id:4,name:"Merge Sort",to:"/merge-sort"},{id:5,name:"Quick Sort",to:"/quick-sort"},{id:6,name:"Heap Sort",to:"/heap-sort"},{id:7,name:"Counting Sort",to:"/counting-sort"},{id:8,name:"Radix Sort",to:"/radix-sort"},{id:9,name:"Bucket Sort",to:"/bucket-sort"},{id:10,name:"Bogo Sort",to:"/bogo-sort"}].map((function(e){return i.a.createElement(N,{key:e.id,item:e})}));return i.a.createElement("ul",null,e)},x=function(){return i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-2 side-bar"},i.a.createElement(k,null)),i.a.createElement("div",{className:"col-10 main-content"},"Sorting page"))},C=function(){var e=[{id:1,name:"Binary Search",to:"/"},{id:2,name:"Binary Search Tree",to:"/"},{id:3,name:"Balanced BST",to:"/"},{id:4,name:"Breadth First Search",to:"/"},{id:5,name:"Depth First Search",to:"/"},{id:6,name:"Uniform Cost Search",to:"/"},{id:7,name:"Dijkstra Algorithm",to:"/"},{id:8,name:"Best-First Search",to:"/"},{id:9,name:"Greedy BFS",to:"/"},{id:10,name:"IDS",to:"/"},{id:11,name:"Depth Limit Search",to:"/"},{id:12,name:"Bidirectional Search",to:"/"},{id:13,name:"A* Search",to:"/a-star-search"}].map((function(e){return i.a.createElement(N,{key:e.id,item:e})}));return i.a.createElement("ul",null,e)},j=function(){return i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-2 side-bar"},i.a.createElement(C,null)),i.a.createElement("div",{className:"col-10 main-content"},"Search page"))},R=function(){return i.a.createElement("div",null,"Genetic algorithm")},A=function(){return i.a.createElement("div",null,"Deep Learning")},z=a(26),O=a.n(z),P=(a(22),a(15)),M=a.n(P),B=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;return Object(h.a)(this,a),(e=t.call(this)).handleChecked=function(){e.setState({isRandom:!e.state.isRandom},(function(){}))},e.handleInputSize=function(t){e.setState({inputSize:parseInt(t.target.value)},(function(){}))},e.handleMinValue=function(t){e.setState({minValue:parseInt(t.target.value)},(function(){}))},e.handleMaxValue=function(t){e.setState({maxValue:parseInt(t.target.value)},(function(){}))},e.state={inputSize:50,minValue:0,maxValue:100,isRandom:!0,animationSpeed:1},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this;return i.a.createElement("fieldset",{className:"fieldset-container"},i.a.createElement("legend",null,i.a.createElement("span",{className:"legend-border"}," ===[ ")," ",this.props.title,i.a.createElement("span",{className:"legend-border"}," ]=== ")),i.a.createElement("div",{className:"row align-items-center"},i.a.createElement("div",{className:"col-5 border"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-12"},i.a.createElement(O.a,{size:"sm",checked:this.state.isRandom,onChange:this.handleChecked,onlabel:"Input type: Randomized",offlabel:"Input type: Manual",onstyle:"success",offstyle:"danger",width:430}))),i.a.createElement("div",{className:"row"},this.state.isRandom&&i.a.createElement("div",{className:"col-12"},i.a.createElement("div",{className:"row m-1 align-items-center"},i.a.createElement("div",{className:"col-1"},"Size:"),i.a.createElement("div",{className:"col-2"},i.a.createElement("input",{className:"form-control form-control-sm",type:"number",value:this.state.inputSize,onChange:this.handleInputSize,min:3,max:100})),i.a.createElement("div",{className:"col-1"},"Min:"),i.a.createElement("div",{className:"col-2"},i.a.createElement("input",{type:"number",className:"form-control form-control-sm",value:this.state.minValue,onChange:this.handleMinValue})),i.a.createElement("div",{className:"col-1"},"Max:"),i.a.createElement("div",{className:"col-2"},i.a.createElement("input",{type:"number",className:"form-control form-control-sm",value:this.state.maxValue,onChange:this.handleMaxValue})),i.a.createElement("div",{className:"col"},i.a.createElement("button",{type:"button",className:"btn-sm btn-secondary",onClick:function(){return e.props.initRandom(e.state.inputSize,e.state.minValue,e.state.maxValue)}},"Initialize Array")))),!this.state.isRandom&&i.a.createElement("div",{className:"col-12"},i.a.createElement("div",{className:"row m-1 align-items-center"},i.a.createElement("div",{className:"col-3"},"Enter Values:"),i.a.createElement("div",{className:"col-6"},i.a.createElement("input",{className:"form-control form-control-sm",type:"text",placeholder:"Comma seperated values"})),i.a.createElement("div",{className:"col-3 text-right"},i.a.createElement("button",{type:"button",className:"btn-sm btn-secondary",onClick:this.handleDataGeneration},"Initialize Array")))),i.a.createElement("div",{className:"col-5"}))),i.a.createElement("div",{className:"col-7"},i.a.createElement("div",{className:" mr-4 ml-2"},i.a.createElement("span",null,"Animation Speed"),i.a.createElement(M.a,{"data-tip":"Animation Speed",value:this.state.animationSpeed,min:1,max:100,tooltip:"off",labels:{0:"Low",100:"High"},onChange:function(t){e.setState({animationSpeed:parseInt(t.target.value)}),console.log(e.state.animationSpeed)}})),i.a.createElement("div",null,i.a.createElement("button",{type:"button",className:"btn btn-secondary"},this.props.title)))))}}]),a}(n.Component),W=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;return Object(h.a)(this,a),(e=t.call(this)).handleRandom=function(t,a,n){e.myP5.initializeRandomValue(t,a,n)},e.myP5=null,e.canvasRef=i.a.createRef(),e.canvasWidth=null,e.canvasHeight=null,e.arr=[],e.normArr=[],e.sketch=function(t){t.setup=function(){t.createCanvas(e.canvasWidth,e.canvasHeight).parent(e.canvasRef.current),t.noLoop()},t.draw=function(){t.background(255);var a=t.width/e.normArr.length-1;console.log(a);for(var n=0;n<e.normArr.length;n++){var i=n*(t.width/e.normArr.length),r=t.height,s=-e.normArr[n];t.noStroke(),t.fill("rgba(37,188,255, 1)"),t.rect(i,r,a,s,0,0,2,2),e.arr.length<=150&&(t.fill(100),t.textSize(a/2),t.textAlign(t.CENTER,t.TOP),t.text(e.arr[n],i+a/2,r+s-t.textSize()))}},t.initializeRandomValue=function(a,n,i){e.arr=[];for(var r=0;r<a;r++)e.arr.push(t.floor(t.random(n,i+1)));console.log(e.arr),e.normArr=e.arr.map((function(e){return t.floor(t.map(e,n,i,1,t.height-200,!0))})),console.log(e.normArr),t.redraw()}},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=document.getElementById("drawing-canvas").getBoundingClientRect();this.canvasWidth=e.width-20,this.canvasHeight=e.height,this.myP5=new f.a(this.sketch)}},{key:"render",value:function(){return i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-2 side-bar"},i.a.createElement(k,null)),i.a.createElement("div",{className:"col-10 main-content"},i.a.createElement(B,{title:"Bubble Sort",initRandom:this.handleRandom}),i.a.createElement("div",{className:"row mt-3 drawing-canvas"},i.a.createElement("div",{className:"col",id:"drawing-canvas",ref:this.canvasRef}))))}}]),a}(n.Component),D=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){return Object(h.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-2 side-bar"},i.a.createElement(k,null)),i.a.createElement("div",{className:"col-10 main-content"},i.a.createElement(B,{title:"Selection Sort"}),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col",ref:this.myRef}))))}}]),a}(n.Component),I=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;return Object(h.a)(this,a),(e=t.call(this)).state={animationSpeed:30},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this;return i.a.createElement("fieldset",{className:"fieldset-container"},i.a.createElement("legend",null,i.a.createElement("span",{className:"legend-border"}," ===[ ")," ",this.props.title,i.a.createElement("span",{className:"legend-border"}," ]=== ")),i.a.createElement("div",{className:"input-group mb-3"},i.a.createElement("div",{className:"input-group-prepend"},i.a.createElement("label",{className:"input-group-text",htmlFor:"inputGroupSelect01"},"Maze Type")),i.a.createElement("select",{className:"custom-select mr-4 ",id:"inputGroupSelect01"},i.a.createElement("option",{value:"0"},"Empty Maze"),i.a.createElement("option",{value:"1"},"One"),i.a.createElement("option",{value:"2"},"Two"),i.a.createElement("option",{value:"3"},"Three")),i.a.createElement("div",{className:"input-group-prepend"},i.a.createElement("label",{className:"input-group-text",htmlFor:"inputGroupSelect02"},"Animation Speed")),i.a.createElement("div",{className:"mr-4 ml-2",id:"inputGroupSelect02"},i.a.createElement(M.a,{"data-tip":"Animation Speed",value:this.state.animationSpeed,min:1,max:30,tooltip:"off",onChange:function(t){e.setState({animationSpeed:parseInt(t.target.value)}),e.props.setAnimationSpeed(t.target.value)}})),i.a.createElement("div",{className:"mr-4"},i.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:function(){return e.props.playButton()}},"Play")),i.a.createElement("div",{className:"mr-4"},i.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:function(){return e.props.pauseButton()}},"Pause")),i.a.createElement("div",{className:"mr-4"},i.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:function(){return e.props.setpForwardButton()}},"Step Forward")),i.a.createElement("div",{className:"mr-4"},i.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:function(){return e.props.initializeMaze()}},"Clear board"))))}}]),a}(n.Component),V=function(){function e(t,a,n,i,r,s,o,l){Object(h.a)(this,e),this.p=t,this.i=a,this.j=n,this.w=i,this.h=r,this.rows=s,this.cols=o,this.ff=0,this.fg=0,this.fh=0,this.neighbours=[],this.parent=void 0,this.type=l,this.x=this.i*this.w,this.y=this.j*this.h}return Object(u.a)(e,[{key:"show",value:function(e){this.p.fill(e),this.p.strokeWeight(.3),this.p.stroke("rgba(37,188,255, 1)"),this.p.rectMode(this.p.CORNER),this.p.ellipseMode(this.p.CENTER),this.p.rect(this.i*this.w,this.j*this.h,this.w,this.h),"S"===this.type?(this.p.stroke("rgba(255, 0, 255, 1)"),this.p.fill("rgba(255, 0, 255, 0.2)"),this.p.push(),this.p.rectMode(this.p.CENTER),this.p.rect(this.i*this.w+this.w/2,this.j*this.h+this.h/2,this.w/2,this.h/2),this.p.pop()):"E"===this.type?(this.p.stroke("rgba(255, 0, 255, 1)"),this.p.fill("rgba(255, 0, 255, 0.2)"),this.p.ellipse(this.i*this.w+this.w/2,this.j*this.h+this.h/2,this.w),this.p.ellipse(this.i*this.w+this.w/2,this.j*this.h+this.h/2,this.w/5)):"W"===this.type?(this.p.stroke("rgba(255, 0, 255, 1)"),this.p.fill(20),this.p.rect(this.i*this.w,this.j*this.h,this.w,this.h)):this.p.rect(this.i*this.w,this.j*this.h,this.w,this.h)}},{key:"addNeighbours",value:function(e){var t=this.i,a=this.j;t<this.cols-1&&this.neighbours.push(e[t+1][a]),t>0&&this.neighbours.push(e[t-1][a]),a<this.rows-1&&this.neighbours.push(e[t][a+1]),a>0&&this.neighbours.push(e[t][a-1])}},{key:"mousePressed",value:function(e,t){return e>this.x&&e<this.x+this.w&&t>this.y&&t<this.y+this.h&&"S"===this.type?"S":e>this.x&&e<this.x+this.w&&t>this.y&&t<this.y+this.h&&"E"===this.type?"E":e>this.x&&e<this.x+this.w&&t>this.y&&t<this.y+this.h&&"_"===this.type?"_":e>this.x&&e<this.x+this.w&&t>this.y&&t<this.y+this.h&&"W"===this.type?"W":void 0}},{key:"setStartingPosition",value:function(e,t){e>this.x&&e<this.x+this.w&&t>this.y&&t<this.y+this.h&&"_"===this.type&&(this.type="S")}},{key:"setEndingPosition",value:function(e,t){e>this.x&&e<this.x+this.w&&t>this.y&&t<this.y+this.h&&"_"===this.type&&(this.type="E")}},{key:"setWall",value:function(e,t){e>this.x&&e<this.x+this.w&&t>this.y&&t<this.y+this.h&&"_"===this.type&&(this.type="W")}},{key:"unSetWall",value:function(e,t){e>this.x&&e<this.x+this.w&&t>this.y&&t<this.y+this.h&&"W"===this.type&&(this.type="_")}}]),e}(),F=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;return Object(h.a)(this,a),(e=t.call(this)).initializeMaze=function(){e.myP5.initializeSetUp()},e.setPlay=function(){e.myP5.setPlay()},e.setPause=function(){e.myP5.setPause()},e.setSetpForward=function(){e.myP5.setSetpForward()},e.setAnimationSpeed=function(t){e.myP5.setAnimationSpeed(t)},e.myP5=null,e.canvasRef=i.a.createRef(),e.canvasWidth=null,e.canvasHeight=null,e.sketch=function(t){var a=[],n=0,i=0,r=[],s=[],o=[],l=0,c=!1,m=null,h=null,u=!1,d=!1,p=!1,v=!1;t.setup=function(){t.initializeSetUp()},t.initializeSetUp=function(){t.loop(),a=[],r=[],s=[],o=[],c=!1,l=.2,t.createCanvas(e.canvasWidth,e.canvasHeight).parent(e.canvasRef.current),n=t.width/60,i=t.height/30;for(var u=0;u<60;u++)a[u]=new Array(30);for(var d=0;d<60;d++)for(var p=0;p<30;p++)a[d][p]=new V(t,d,p,n,i,30,60,"_");for(var v=0;v<60;v++)for(var f=0;f<30;f++)a[v][f].addNeighbours(a);m=a[t.floor(3)][t.floor(15)],h=a[57][t.floor(15)],m.type="S",h.type="E",r.push(m),e.drawMaze()},e.drawMaze=function(){t.background(255);for(var e=0;e<60;e++)for(var n=0;n<30;n++)a[e][n].show(t.color(255,255,255));for(var i=0;i<s.length;i++)s[i].show(t.color(255,0,255,255*l)),l+=.05;for(var c=0;c<r.length;c++)r[c].show(t.color(0,255,0));for(var u=0;u<o.length;u++)o[u].show(t.color(0,0,255));m.show(t.color(255,255,255)),h.show(t.color(255,255,255))},t.setPlay=function(){c=!0},t.setPause=function(){c=!1},t.setSetpForward=function(){c=!0,t.redraw(),c=!1},t.setAnimationSpeed=function(e){t.frameRate(parseInt(e)),console.log(e)},t.mousePressed=function(){for(var e=0;e<60;e++)for(var n=0;n<30;n++){var i=a[e][n].mousePressed(t.mouseX,t.mouseY);if("S"===i)u=!0;else if("E"===i)d=!0;else{if("_"===i){p=!0;break}if("W"===i){v=!0;break}}}},t.mouseDragged=function(){if(u){for(var n=0;n<60;n++)for(var i=0;i<30;i++)"S"===a[n][i].type&&(a[n][i].type="_");for(var s=0;s<60;s++)for(var o=0;o<30;o++)a[s][o].setStartingPosition(t.mouseX,t.mouseY);for(var l=0;l<60;l++)for(var c=0;c<30;c++)"S"===a[l][c].type&&(m=a[l][c],(r=[]).push(m))}else if(d){for(var f=0;f<60;f++)for(var E=0;E<30;E++)"E"===a[f][E].type&&(a[f][E].type="_");for(var y=0;y<60;y++)for(var g=0;g<30;g++)a[y][g].setEndingPosition(t.mouseX,t.mouseY);for(var b=0;b<60;b++)for(var N=0;N<30;N++)"E"===a[b][N].type&&(h=a[b][N])}else if(p)for(var w=0;w<60;w++)for(var S=0;S<30;S++)"_"!==a[w][S].type&&"W"!==a[w][S].type||a[w][S].setWall(t.mouseX,t.mouseY);else if(v)for(var k=0;k<60;k++)for(var x=0;x<30;x++)"_"!==a[k][x].type&&"W"!==a[k][x].type||a[k][x].unSetWall(t.mouseX,t.mouseY);e.drawMaze()},t.mouseReleased=function(){u=!1,d=!1,p=!1,v=!1},t.draw=function(){if(!0===c){if(r.length>0){for(var a=0,n=0;n<r.length;n++)r[n].ff<r[a].ff&&(a=n);var i=r[a];if(i===h){var l=i;for((o=[]).push(l);l.parent;)o.push(l.parent),l=l.parent;console.log("DONE!!"),t.noLoop()}for(var m=r.length;m>=0;m--)r[m]===i&&r.splice(m,1);s.push(i);for(var u=i.neighbours,d=0;d<u.length;d++){var p=u[d];if(!s.includes(p)&&"W"!==p.type){var v=i.fg+1;r.includes(p)?v<p.fg&&(p.fg=v):(p.fg=v,r.push(p)),p.fh=t.dist(p.i,p.j,h.i,h.j),p.ff=p.fg+p.fh,p.parent=i}}}e.drawMaze()}}},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){console.log("mount");var e=document.getElementById("drawing-canvas").getBoundingClientRect();this.canvasWidth=e.width-20,this.canvasHeight=e.height,this.myP5=new f.a(this.sketch)}},{key:"render",value:function(){return i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-2 side-bar"},i.a.createElement(C,null)),i.a.createElement("div",{className:"col-10 main-content"},i.a.createElement(I,{title:"A* Search",initializeMaze:this.initializeMaze,playButton:this.setPlay,pauseButton:this.setPause,setpForwardButton:this.setSetpForward,setAnimationSpeed:this.setAnimationSpeed}),i.a.createElement("div",{className:"row mt-3 drawing-canvas"},i.a.createElement("div",{className:"col",id:"drawing-canvas",ref:this.canvasRef}))))}}]),a}(n.Component);var T=function(){return i.a.createElement(o.a,null,i.a.createElement("div",{className:"App"},i.a.createElement(c,null),i.a.createElement("div",{className:"container-fluid"},i.a.createElement(l.c,null,i.a.createElement(l.a,{exact:!0,path:"/",component:b}),i.a.createElement(l.a,{path:"/data-structure",component:S}),i.a.createElement(l.a,{path:"/sort",component:x}),i.a.createElement(l.a,{path:"/bubble-sort",component:W}),i.a.createElement(l.a,{path:"/selection-sort",component:D}),i.a.createElement(l.a,{path:"/search",component:j}),i.a.createElement(l.a,{path:"/a-star-search",component:F}),i.a.createElement(l.a,{path:"/genetic-algorithm",component:R}),i.a.createElement(l.a,{path:"/deep-learning",component:A}))),i.a.createElement(m,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(T,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[28,1,2]]]);
//# sourceMappingURL=main.b37fdbf0.chunk.js.map