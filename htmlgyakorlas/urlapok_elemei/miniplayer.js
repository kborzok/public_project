(function(g){var window=this;'use strict';var q4=function(a){g.V.call(this,{D:"div",K:"ytp-miniplayer-ui"});this.Uf=!1;this.player=a;this.N(a,"minimized",this.bh);this.N(a,"onStateChange",this.gC)},r4=function(a){g.cM.call(this,a);
this.i=new q4(this.player);this.i.hide();g.SL(this.player,this.i.element,4);a.Ce()&&(this.load(),g.L(a.getRootNode(),"ytp-player-minimized",!0))};
g.v(q4,g.V);g.k=q4.prototype;
g.k.CA=function(){this.tooltip=new g.wP(this.player,this);g.G(this,this.tooltip);g.SL(this.player,this.tooltip.element,4);this.tooltip.scale=.6;this.hc=new g.TM(this.player);g.G(this,this.hc);this.fg=new g.V({D:"div",K:"ytp-miniplayer-scrim"});g.G(this,this.fg);this.fg.ya(this.element);this.N(this.fg.element,"click",this.Hw);var a=new g.V({D:"button",Da:["ytp-miniplayer-close-button","ytp-button"],U:{"aria-label":"Bez\u00e1r\u00e1s"},S:[g.bK()]});g.G(this,a);a.ya(this.fg.element);this.N(a.element,
"click",this.Eh);a=new g.T_(this.player,this);g.G(this,a);a.ya(this.fg.element);this.Gn=new g.V({D:"div",K:"ytp-miniplayer-controls"});g.G(this,this.Gn);this.Gn.ya(this.fg.element);this.N(this.Gn.element,"click",this.Hw);var b=new g.V({D:"div",K:"ytp-miniplayer-button-container"});g.G(this,b);b.ya(this.Gn.element);a=new g.V({D:"div",K:"ytp-miniplayer-play-button-container"});g.G(this,a);a.ya(this.Gn.element);var c=new g.V({D:"div",K:"ytp-miniplayer-button-container"});g.G(this,c);c.ya(this.Gn.element);
this.rI=new g.tO(this.player,this,!1);g.G(this,this.rI);this.rI.ya(b.element);b=new g.qO(this.player,this);g.G(this,b);b.ya(a.element);this.nextButton=new g.tO(this.player,this,!0);g.G(this,this.nextButton);this.nextButton.ya(c.element);this.hg=new g.jP(this.player,this);g.G(this,this.hg);this.hg.ya(this.fg.element);this.Ac=new g.yO(this.player,this);g.G(this,this.Ac);g.SL(this.player,this.Ac.element,4);this.ww=new g.V({D:"div",K:"ytp-miniplayer-buttons"});g.G(this,this.ww);g.SL(this.player,this.ww.element,
4);a=new g.V({D:"button",Da:["ytp-miniplayer-close-button","ytp-button"],U:{"aria-label":"Bez\u00e1r\u00e1s"},S:[g.bK()]});g.G(this,a);a.ya(this.ww.element);this.N(a.element,"click",this.Eh);a=new g.V({D:"button",Da:["ytp-miniplayer-replay-button","ytp-button"],U:{"aria-label":"Bez\u00e1r\u00e1s"},S:[g.gK()]});g.G(this,a);a.ya(this.ww.element);this.N(a.element,"click",this.MQ);this.N(this.player,"presentingplayerstatechange",this.zc);this.N(this.player,"appresize",this.kb);this.N(this.player,"fullscreentoggled",
this.kb);this.kb()};
g.k.show=function(){this.jd=new g.hn(this.Ao,null,this);this.jd.start();this.Uf||(this.CA(),this.Uf=!0);0!==this.player.getPlayerState()&&g.V.prototype.show.call(this);this.Ac.show();this.player.unloadModule("annotations_module")};
g.k.hide=function(){this.jd&&(this.jd.dispose(),this.jd=void 0);g.V.prototype.hide.call(this);this.player.Ce()||(this.Uf&&this.Ac.hide(),this.player.loadModule("annotations_module"))};
g.k.va=function(){this.jd&&(this.jd.dispose(),this.jd=void 0);g.V.prototype.va.call(this)};
g.k.Eh=function(){this.player.stopVideo();this.player.La("onCloseMiniplayer")};
g.k.MQ=function(){this.player.playVideo()};
g.k.Hw=function(a){if(a.target===this.fg.element||a.target===this.Gn.element)g.R(this.player.T().experiments,"kevlar_miniplayer_play_pause_on_scrim")?g.dJ(this.player.qb())?this.player.pauseVideo():this.player.playVideo():this.player.La("onExpandMiniplayer")};
g.k.bh=function(){g.L(this.player.getRootNode(),"ytp-player-minimized",this.player.Ce())};
g.k.Qd=function(){this.Ac.Tb();this.hg.Tb()};
g.k.Ao=function(){this.Qd();this.jd&&this.jd.start()};
g.k.zc=function(a){g.U(a.state,32)&&this.tooltip.hide()};
g.k.kb=function(){g.JO(this.Ac,0,this.player.Xa().getPlayerSize().width,!1);g.AO(this.Ac)};
g.k.gC=function(a){this.player.Ce()&&(0===a?this.hide():this.show())};
g.k.Zb=function(){return this.tooltip};
g.k.oe=function(){return!1};
g.k.Ee=function(){return!1};
g.k.Ah=function(){return!1};
g.k.gx=function(){};
g.k.Ll=function(){};
g.k.Rp=function(){};
g.k.Yl=function(){return null};
g.k.zi=function(){return new g.Zf(0,0,0,0)};
g.k.handleGlobalKeyDown=function(){return!1};
g.k.handleGlobalKeyUp=function(){return!1};
g.k.Ho=function(a,b,c,d,e){var f=0,h=d=0,l=g.zg(a);if(b){c=g.rn(b,"ytp-prev-button")||g.rn(b,"ytp-next-button");var m=g.rn(b,"ytp-play-button"),n=g.rn(b,"ytp-miniplayer-expand-watch-page-button");c?f=h=12:m?(b=g.xg(b,this.element),h=b.x,f=b.y-12):n&&(h=g.rn(b,"ytp-miniplayer-button-top-left"),f=g.xg(b,this.element),b=g.zg(b),h?(h=8,f=f.y+40):(h=f.x-l.width+b.width,f=f.y-20))}else h=c-l.width/2,d=25+(e||0);b=this.player.Xa().getPlayerSize().width;e=f+(e||0);l=g.de(h,0,b-l.width);e?(a.style.top=e+"px",
a.style.bottom=""):(a.style.top="",a.style.bottom=d+"px");a.style.left=l+"px"};
g.k.showControls=function(){};
g.k.Uj=function(){};
g.k.zj=function(){return!1};g.v(r4,g.cM);r4.prototype.create=function(){};
r4.prototype.Sh=function(){return!1};
r4.prototype.load=function(){this.player.hideControls();this.i.show()};
r4.prototype.unload=function(){this.player.showControls();this.i.hide()};g.iM.miniplayer=r4;})(_yt_player);
