(function(D){
 var
 ce=function(e,n){var a=D.createEvent("CustomEvent");a.initCustomEvent(n,true,true,e.target);e.target.dispatchEvent(a);a=null;return 1},
 m=(/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)?'touch':'mouse'),
 nm=1,
 bd=0,
 sx,
 sy,
 ex,
 ey,
 M=Math,
 MA=M.abs,
 MM=M.max,
 x,
 y,
 xr,
 yr,
 f={
  touch:{
   touchstart:function(e){
    return ce(e,(sx=e.touches[0].pageX,sy=e.touches[0].pageY,'sfc'))
   },
   touchmove:function(e){
    return nm=0,ex=e.touches[0].pageX,ey=e.touches[0].pageY,1
   },
   touchend:function(e){
    return ce(e,nm?'fc':(x=ex-sx,xr=MA(x),y=ey-sy,yr=MA(y),nm=1,MM(xr,yr)>20?xr>yr?x<0?'swl':'swr':y<0?'swu':'swd':'fc'))
   },
   touchcancel:function(e){
    return nm=0,1
   }
  },
  mouse:{
   mousedown:function(e){
    return e.button||(bd=1,sx=e.x,sy=e.y,ce(e,'sfc'))
   },
   mousemove:function(e){
    return !bd||(nm=0,ex=e.x,ey=e.y,1)
   },
   mouseup:function(e){
    return e.button||(bd=0,ce(e,nm?'fc':(nm=1,x=ex-sx,xr=MA(x),y=ey-sy,yr=MA(y),MM(xr,yr)>20?xr>yr?x<0?'swl':'swr':y<0?'swu':'swd':'fc')))
   }
  }
 };
 for(var a in f[m]){D.addEventListener(a,f[m][a],false)}
})(document)
