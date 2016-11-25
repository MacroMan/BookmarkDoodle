## Synopsis

A tiny JavaScript library to allow doodling on any webpage by embedding the code as a bookmark.

## Code Example

Add this to your bookmarks bar:
`javascript:!function(a){"use strict";function k(a,b,c){a.addEventListener(b,c)}function l(){b.removeChild(d),b.removeEventListener("keydown",l)}var b=a.body,c=a.documentElement,d=a.createElement("canvas"),e=d.width=a.documentElement.clientWidth,f=d.height=Math.max(b.scrollHeight,b.offsetHeight,c.clientHeight,c.scrollHeight,c.offsetHeight),g=d.style;g.position="absolute",g.left=g.top=0,g.width=e+"px",g.height=f+"px",g.zIndex=1e4,g.cursor="crosshair",b.appendChild(d);var h=d.getContext("2d");h.strokeStyle="#F00",h.lineWidth=3;var i=!1,j={x:0,y:0};k(d,"mousedown",function(a){j.x=a.pageX,j.y=a.pageY,i=!0}),k(d,"mouseup",function(){i=!1}),k(d,"mousemove",function(a){if(i){var b=a.pageX,c=a.pageY;h.beginPath(),h.moveTo(j.x,j.y),h.lineTo(b,c),h.stroke(),j.x=b,j.y=c}}),k(b,"keydown",l)}(document);void(0);`
Then save a screenshot once you're done.

Any keydown will stop the doodle.

## Motivation

I often find myself screenshotting a website, then opening in an image editor to doodle on it. This solution allows doodling directly before screenshotting.

## Installation

As above in the **Code Example**.
The JavaScript files in this project are the src for developing only and can't readily be used by themselves.

## Contributors

@MacroMan
If you make any improvements, please fork and push back for others to take advantage of.

## License

BSD 2-Clause License
See LICENSE
