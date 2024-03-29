!function(e,t,n,i){var o=e(t);e.fn.lazyload=function(r){function f(){var t=0;l.each(function(){var n=e(this);if(!h.skip_invisible||n.is(":visible"))if(e.abovethetop(this,h)||e.leftofbegin(this,h));else if(e.belowthefold(this,h)||e.rightoffold(this,h)){if(++t>h.failure_limit)return!1}else n.trigger("appear"),t=0})}var a,l=this,h={threshold:0,failure_limit:0,event:"scroll",effect:"show",container:t,data_attribute:"original",skip_invisible:!0,appear:null,load:null,placeholder:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAMAAAAoyzS7AAAAA1BMVEVHcEyC+tLSAAAAAXRSTlMAQObYZgAAAApJREFUCNdjYAAAAAIAAeIhvDMAAAAASUVORK5CYII="};return r&&(i!==r.failurelimit&&(r.failure_limit=r.failurelimit,delete r.failurelimit),i!==r.effectspeed&&(r.effect_speed=r.effectspeed,delete r.effectspeed),e.extend(h,r)),a=h.container===i||h.container===t?o:e(h.container),0===h.event.indexOf("scroll")&&a.bind(h.event,function(){return f()}),this.each(function(){var t=this,n=e(t);t.loaded=!1,n.attr("src")!==i&&n.attr("src")!==!1||n.is("img")&&n.attr("src",h.placeholder),n.one("appear",function(){if(!this.loaded){if(h.appear){var i=l.length;h.appear.call(t,i,h)}e("<img />").bind("load",function(){var i=n.attr("data-"+h.data_attribute);n.hide(),n.parent().is(".flex_ori")?n.attr("src",i):n.parent().css("background-image","url('"+i+"')"),n[h.effect](h.effect_speed),t.loaded=!0;var o=e.grep(l,function(e){return!e.loaded});if(l=e(o),h.load){var r=l.length;h.load.call(t,r,h)}}).attr("src",n.attr("data-"+h.data_attribute))}}),0!==h.event.indexOf("scroll")&&n.bind(h.event,function(){t.loaded||n.trigger("appear")})}),o.bind("resize",function(){f()}),/(?:iphone|ipod|ipad).*os 5/gi.test(navigator.appVersion)&&o.bind("pageshow",function(t){t.originalEvent&&t.originalEvent.persisted&&l.each(function(){e(this).trigger("appear")})}),e(n).ready(function(){f()}),this},e.belowthefold=function(n,r){var f;return f=r.container===i||r.container===t?(t.innerHeight?t.innerHeight:o.height())+o.scrollTop():e(r.container).offset().top+e(r.container).height(),f<=e(n).offset().top-r.threshold},e.rightoffold=function(n,r){var f;return f=r.container===i||r.container===t?o.width()+o.scrollLeft():e(r.container).offset().left+e(r.container).width(),f<=e(n).offset().left-r.threshold},e.abovethetop=function(n,r){var f;return f=r.container===i||r.container===t?o.scrollTop():e(r.container).offset().top,f>=e(n).offset().top+r.threshold+e(n).height()},e.leftofbegin=function(n,r){var f;return f=r.container===i||r.container===t?o.scrollLeft():e(r.container).offset().left,f>=e(n).offset().left+r.threshold+e(n).width()},e.inviewport=function(t,n){return!(e.rightoffold(t,n)||e.leftofbegin(t,n)||e.belowthefold(t,n)||e.abovethetop(t,n))},e.extend(e.expr[":"],{"below-the-fold":function(t){return e.belowthefold(t,{threshold:0})},"above-the-top":function(t){return!e.belowthefold(t,{threshold:0})},"right-of-screen":function(t){return e.rightoffold(t,{threshold:0})},"left-of-screen":function(t){return!e.rightoffold(t,{threshold:0})},"in-viewport":function(t){return e.inviewport(t,{threshold:0})},"above-the-fold":function(t){return!e.belowthefold(t,{threshold:0})},"right-of-fold":function(t){return e.rightoffold(t,{threshold:0})},"left-of-fold":function(t){return!e.rightoffold(t,{threshold:0})}})}(jQuery,window,document);

var all_scroll = function(){
  "use strict";	

  $(window).scroll(function(){
    var scroll_position = $(window).scrollTop();

    if(scroll_position >= 15){
      $('#btt').css("display","flex");
    }

    else{
      $('#btt').css("display","none");
    }
  });  
};

var back_to_top = function(){
  "use strict";
  $('#btt').click(function(){
	$('body,html').animate({scrollTop:0},800);
  });	
};

var scroll_reveal_show = function(){
  window.sr = ScrollReveal({mobile:true,viewFactor:0.2,reset:true});
  sr.reveal('.cover > span > *', 100);
  sr.reveal('.cover-feature > *', 100);
  sr.reveal('.highlight > span > *', 100);
  sr.reveal('.highlight-info > span > *', 100);
  sr.reveal('.character-content > span > *', 100);
  sr.reveal('.reduce > span > *', 100);
  sr.reveal('.reduce-content > *', 100);
  sr.reveal('.cost-content > span > *', 100);
  sr.reveal('.profit-content > span > *', 100);
  sr.reveal('.win-content > span > *', 100);
  sr.reveal('.testimoni-list > *', 100);
  sr.reveal('.address-info > *', 100);
  sr.reveal('.address-contact-link', 100);
  sr.reveal('.address-socmed-link', 100);
  sr.reveal('footer > span > *', 100);
  sr.reveal('.footer-office-info > *', 100);
}

$(document).ready(function(){
  "use strict";
  all_scroll();
  back_to_top();
  scroll_reveal_show();
});

$(".flex_ori > img").lazyload({effect:"fadeIn"});
$(".flex_lazy > img").lazyload({});
