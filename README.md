## Synopsis

A tiny JavaScript library to allow doodling on any webpage by embedding the code as a bookmark.

## Code Example

Add this code to a shortcut your bookmarks bar:

Line drawing:
`javascript:!function(e,t){function n(e,t,n){e.addEventListener(t,n)}function o(e){27==e.which&&(i.removeChild(r),i.removeEventListener("keydown",o))}var i=t.body,d=t.documentElement,r=t.createElement("canvas"),h=r.width=Math.max(e.innerWidth,d.clientWidth,i.clientWidth),a=r.height=Math.max(e.innerHeight,d.clientHeight,i.clientHeight),l=r.style;l.position="absolute",l.left=l.top=0,l.width=h+"px",l.height=a+"px",l.zIndex=1e4,l.cursor="crosshair",i.appendChild(r);var c=r.getContext("2d");c.strokeStyle="undefined"!=typeof BDColor?"#"+BDColor:"#000",c.lineWidth=3;var u=!1,s={x:0,y:0};n(r,"mousedown",function(e){s.x=e.pageX,s.y=e.pageY,u=!0}),n(r,"mouseup",function(){u=!1}),n(r,"mousemove",function(e){if(u){var t=e.pageX,n=e.pageY;c.strokeStyle="undefined"!=typeof BDColor?"#"+BDColor:"#000",c.beginPath(),c.moveTo(s.x,s.y),c.lineTo(t,n),c.stroke(),s.x=t,s.y=n}}),n(i,"keydown",o)}(window,document);void(0);`

Rectangle drawing:
`javascript:!function(e,t){function n(e,t,n){e.addEventListener(t,n)}function o(e){27==e.which&&(i.removeChild(r),i.removeEventListener("keydown",o))}var i=t.body,d=t.documentElement,r=t.createElement("canvas"),a=r.width=Math.max(e.innerWidth,d.clientWidth,i.clientWidth),h=r.height=Math.max(e.innerHeight,d.clientHeight,i.clientHeight),c=r.style;c.position="absolute",c.left=c.top=0,c.width=a+"px",c.height=h+"px",c.zIndex=1e4,c.cursor="crosshair",i.appendChild(r);var l=r.getContext("2d");l.strokeStyle="undefined"!=typeof BDColor?"#"+BDColor:"#000",l.lineWidth=3;var u=!1,s={x:0,y:0};n(r,"mousedown",function(e){s.x=e.pageX,s.y=e.pageY,u=!0}),n(r,"mouseup",function(){u=!1}),n(r,"mousemove",function(e){if(u){var t=e.pageX,n=e.pageY;l.strokeStyle="undefined"!=typeof BDColor?"#"+BDColor:"#000",l.clearRect(0,0,a,h),l.beginPath(),l.rect(s.x,s.y,t-s.x,n-s.y),l.stroke()}}),n(i,"keydown",o)}(window,document);void(0);`

Color selection (applies to the other tools):
`javascript:var BDColor="000";!function(e,n){function o(e){BDColor=e.target.className,i()}function t(e){27==e.which&&i()}function i(){r.removeChild(a),r.removeEventListener("keydown",t)}function d(e,n,o){e.addEventListener(n,o)}var r=n.body,l=["000","009","090","099","900","909","990","CCC","999","00F","0F0","0FF","F00","F0F","FF0","FFF"],a=n.createElement("div"),c=a.style;c.position="fixed",c.left="100px",c.top="100px",c.zIndex="10000";for(var F=0;F<l.length;F++)a.appendChild(function(e){var t=n.createElement("div");t.className=e;var i=t.style;return i.display="inline-block",i.backgroundColor="#"+e,i.width="25px",i.height="25px",d(t,"click",o),t}(l[F]));n.body.appendChild(a),d(r,"keydown",t)}(window,document);void(0);`

COMPATIBILTY WARNING: Uses the GLOBAL variable `BDColor`. This is hardcoded to keep the code short enough to fit in a bookmark.

Then save a screenshot once you're done.

Pressing Esc will stop the doodle.

## Motivation

I often find myself screenshotting a website, then opening in an image editor to doodle on it. This solution allows doodling directly before screenshotting.

## Installation

As above in the **Code Example**.

The JavaScript files in this project are the src for developing only and can't readily be used by themselves.

## Contributors

David Wakelin (MacroMan)

If you make any improvements, please fork and push back for others to take advantage of.

## License

BSD 2-Clause License
See LICENSE
