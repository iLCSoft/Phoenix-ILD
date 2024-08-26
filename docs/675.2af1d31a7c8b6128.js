"use strict";(self.webpackChunkphoenix_for_ild=self.webpackChunkphoenix_for_ild||[]).push([[675],{3675:(C,O,d)=>{d.r(O),d.d(O,{THStackPainter:()=>P});var T=d(467),h=d(6998),N=d(9041),H=d(6224),E=d(1516),b=d(4149),v=d(9025);const w=(0,h.BIT)(16);class P extends H.JW{constructor(r,i,n){super(r,i,n),this.firstpainter=null,this.painters=[]}cleanup(){this.getPadPainter()?.cleanPrimitives(r=>r===this.firstpainter||this.painters.indexOf(r)>=0),delete this.firstpainter,delete this.painters,super.cleanup()}buildStack(r){if(!r.fHists)return!1;const i=r.fHists.arr.length;if(i<=0)return!1;const n=(0,h.create)(h.clTList);n.Add((0,h.clone)(r.fHists.arr[0]),r.fHists.opt[0]);for(let s=1;s<i;++s){const t=(0,h.clone)(r.fHists.arr[s]),a=r.fHists.opt[s],o=n.arr[s-1],e=t.fXaxis,f=o.fXaxis;let m=e.fNbins===f.fNbins&&e.fXmin===f.fXmin&&e.fXmax===f.fXmax;if(!m&&e.fNbins>0&&e.fNbins<f.fNbins&&e.fXmin===f.fXmin&&Math.abs((e.fXmax-e.fXmin)/e.fNbins-(f.fXmax-f.fXmin)/f.fNbins)<1e-4){const p=new Array(o.fNcells).fill(0);for(let c=1;c<=e.fNbins;++c)p[c]=t.fArray[c];t.fNcells=o.fNcells,Object.assign(e,f),t.fArray=p,m=!0}if(!m)return console.warn(`When drawing THStack, cannot sum-up histograms ${t.fName} and ${o.fName}`),n.Clear(),!1;for(let p=0;p<t.fArray.length;++p)t.fArray[p]+=o.fArray[p];n.Add(t,a)}return r.fStack=n,!0}getMinMax(r){const i=this.getObject(),n=this.getPadPainter().getRootPad(!0);let s=0,t=0;const a=(e,f)=>{const m={min:0,max:0};let p=!0,c=!0;if(e.fMinimum!==h.kNoZoom&&(m.min=e.fMinimum,p=!1),e.fMaximum!==h.kNoZoom&&(m.max=e.fMaximum,c=!1),!p&&!c)return m;let l=1,X=e.fXaxis.fNbins,S=1,M=1,k=!0;e.fXaxis.TestBit(H.rb.kAxisRange)&&(l=e.fXaxis.fFirst,X=e.fXaxis.fLast),0===e._typename.indexOf(h.clTH2)&&(M=e.fYaxis.fNbins,e.fYaxis.TestBit(H.rb.kAxisRange)&&(S=e.fYaxis.fFirst,M=e.fYaxis.fLast));for(let u=S;u<=M;++u)for(let x=l;x<=X;++x){const _=e.getBinContent(x,u),g=f?e.getBinError(e.getBin(x,u)):0;p&&(k||_-g<m.min)&&(m.min=_-g),c&&(k||_+g>m.max)&&(m.max=_+g),k=!1}return m};if(this.options.nostack)for(let e=0;e<i.fHists.arr.length;++e){const f=a(i.fHists.arr[e],r);0===e?(s=f.min,t=f.max):(s=Math.min(s,f.min),t=Math.max(t,f.max))}else s=a(i.fStack.arr[0],r).min,t=a(i.fStack.arr[i.fStack.arr.length-1],r).max;if(t*=1+h.gStyle.fHistTopMargin,i.fMaximum!==h.kNoZoom&&(t=i.fMaximum),i.fMinimum!==h.kNoZoom&&(s=i.fMinimum),n?.fLogv??(1===this.options.ndim?n?.fLogy:n?.fLogz)){t<=0&&(t=1),s<=0&&(s=1e-4*t);const e=1/(1+.5*Math.log10(t/s)),f=1+.2*Math.log10(t/s);s*=e,t*=f}else s<.9*t&&s!==i.fMinimum&&(s=0);i.fMaximum!==h.kNoZoom&&this.options.nostack&&(t=i.fMaximum),i.fMinimum!==h.kNoZoom&&this.options.nostack&&(s=i.fMinimum);const o={min:s,max:t,hopt:`hmin:${s};hmax:${t}`};return(this.options.nostack||!i.fHistogram?.TestBit(w))&&(o.hopt+=";ignore_min_max"),o}getHistDrawOption(r,i){let n=i||r.fOption||this.options.hopt;return n.toUpperCase().indexOf(this.options.hopt)<0&&(n+=" "+this.options.hopt),this.options.draw_errors&&!n&&(n="E"),this.options.pads||(n+=" same nostat"+this.options.auto),n}drawNextHisto(r,i){var n=this;return(0,T.A)(function*(){const s=n.getObject(),t=n.options.nostack?s.fHists:s.fStack,a=t?.arr?.length||0;if(r>=a)return n;const o=n.options.horder?r:a-r-1,e=n.options.nostack?`hists_${o}`:`stack_${o}`,f=t.arr[o],m=n.getHistDrawOption(f,t.opt[o]);if(i){const p=i.getSubPadPainter(r+1);if(!p)return n;const c=p.selectCurrentPad(p.this_pad_name);return n.hdraw_func(p.getDom(),f,m).then(l=>(l&&(l.setSecondaryId(n,e),n.painters.push(l)),p.selectCurrentPad(c),n.drawNextHisto(r+1,i)))}return o>0&&!n.options.nostack&&(f.$baseh=t.arr[o-1]),n.options.auto&&(f.$num_histos=a),n.hdraw_func(n.getDom(),f,m).then(p=>(p.setSecondaryId(n,e),n.painters.push(p),n.drawNextHisto(r+1,i)))})()}decodeOptions(r){this.options||(this.options={}),Object.assign(this.options,{ndim:1,nostack:!1,same:!1,horder:!0,has_errors:!1,draw_errors:!1,hopt:"",auto:""});const i=this.getObject(),n=i.fHistogram||(i.fHists?i.fHists.arr[0]:null)||(i.fStack?i.fStack.arr[0]:null),s=o=>{if(o.fSumw2&&o.fSumw2.length>0)for(let e=0;e<o.fSumw2.length;++e)if(o.fSumw2[e]>0)return!0;return!1};if(n&&0===n._typename.indexOf(h.clTH2)&&(this.options.ndim=2),2===this.options.ndim&&!r&&(r="lego1"),i.fHists&&!this.options.nostack)for(let o=0;o<i.fHists.arr.length;++o)this.options.has_errors=this.options.has_errors||s(i.fHists.arr[o]);this.options.nhist=i.fHists?.arr?.length??1;const t=new N.nC(r);this.options.nostack=t.check("NOSTACK"),t.check("STACK")&&(this.options.nostack=!1),this.options.same=t.check("SAME"),t.check("NOCLEAR"),["PFC","PLC","PMC"].forEach(o=>{t.check(o)&&(this.options.auto+=" "+o)}),this.options.pads=t.check("PADS"),this.options.pads&&(this.options.nostack=!0),this.options.hopt=t.remain();const a=t.check("LEGO");this.options.errors=t.check("E"),!this.options.nostack&&this.options.has_errors&&!a&&!t.check("HIST")&&this.options.hopt.indexOf("E")<0&&(this.options.draw_errors=!0),this.options.horder=this.options.nostack||a}createHistogram(r){const i=r.fHists,n=i?i.arr.length:0;if(!n){const a=(0,h.createHistogram)(h.clTH1I,100);return(0,h.setHistogramTitle)(a,r.fTitle),a.fBits|=h.kNoStats,a}const s=i.arr[0],t=(0,h.createHistogram)(1===this.options.ndim?h.clTH1I:h.clTH2I,s.fXaxis.fNbins,s.fYaxis.fNbins);t.fName="axis_hist",t.fBits|=h.kNoStats,Object.assign(t.fXaxis,s.fXaxis),2===this.options.ndim&&Object.assign(t.fYaxis,s.fYaxis);for(let a=1;a<n;++a){const o=i.arr[a];t.fXaxis.fLabels||(t.fXaxis.fXmin=Math.min(t.fXaxis.fXmin,o.fXaxis.fXmin),t.fXaxis.fXmax=Math.max(t.fXaxis.fXmax,o.fXaxis.fXmax)),2===this.options.ndim&&!t.fYaxis.fLabels&&(t.fYaxis.fXmin=Math.min(t.fYaxis.fXmin,o.fYaxis.fXmin),t.fYaxis.fXmax=Math.max(t.fYaxis.fXmax,o.fYaxis.fXmax))}return t.fTitle=r.fTitle,t}updateObject(r){if(!this.matchObjectType(r))return!1;const i=this.getObject();if(i.fHists=r.fHists,i.fStack=r.fStack,i.fTitle=r.fTitle,i.fMinimum=r.fMinimum,i.fMaximum=r.fMaximum,this.options.nostack||(this.options.nostack=!this.buildStack(i)),this.firstpainter){let t=r.fHistogram;t||(t=i.fHistogram=this.createHistogram(i));const a=this.getMinMax(this.options.errors||this.options.draw_errors);this.firstpainter.options.hmin=a.min,this.firstpainter.options.hmax=a.max,this.firstpainter._checked_zooming=!1,1===this.options.ndim?(this.firstpainter.ymin=a.min,this.firstpainter.ymax=a.max):(this.firstpainter.zmin=a.min,this.firstpainter.zmax=a.max),this.firstpainter.updateObject(t),this.firstpainter.options.ignore_min_max=this.options.nostack||!t.TestBit(w)}const n=this.options.nostack?i.fHists:i.fStack,s=n?.arr?.length??0;if(s!==this.painters.length)this.did_update=1,this.getPadPainter()?.cleanPrimitives(t=>this.painters.indexOf(t)>=0),this.painters=[];else{this.did_update=2;for(let t=0;t<s;++t){const a=this.options.horder?t:s-t-1,o=n.arr[a];this.painters[t].updateObject(o,this.getHistDrawOption(o,n.opt[a]))}}return!0}redraw(r){if(!this.did_update)return;const i=1===this.did_update;return delete this.did_update,(this.firstpainter?this.firstpainter.redraw(r):Promise.resolve(this)).then(()=>{if(i)return this.drawNextHisto(0,this.options.pads?this.getPadPainter():null);const s=t=>t>=this.painters.length?this:this.painters[t].redraw(r).then(()=>s(t+1));return s(0)})}fillContextMenuItems(r){r.addchk(this.options.draw_errors,"Draw errors",i=>{this.options.draw_errors=i;const n=this.getObject(),s=this.options.nostack?n.fHists:n.fStack,t=s?.arr?.length??0;for(let a=0;a<t;++a){const o=this.options.horder?a:t-a-1;this.painters[a].decodeOptions(this.getHistDrawOption(s.arr[o],s.opt[o]))}this.redrawPad()},"Change draw erros in the stack")}static draw(r,i,n){return(0,T.A)(function*(){if(!i.fHists||!i.fHists.arr)return null;const s=new P(r,i,n);let t=null,a=!1;return(0,v.ensureTCanvas)(s,!1).then(()=>{if(s.decodeOptions(n),s.hdraw_func=1===s.options.ndim?E.TH1Painter.draw:b.TH2Painter.draw,s.options.pads)return t=s.getPadPainter(),t.doingDraw()&&t.pad?.fPrimitives&&t.pad.fPrimitives.arr.length>1&&0===t.pad.fPrimitives.arr.indexOf(i)?(a=!0,void console.log("special case with THStack with is already rendered - do nothing")):(t.cleanPrimitives(m=>m!==s),t.divide(s.options.nhist));if(s.options.nostack||(s.options.nostack=!s.buildStack(i)),s.options.same||!i.fHists?.arr.length)return void s.addToPadPrimitives();!i.fHistogram&&(i.fHistogram=s.createHistogram(i));const e=s.getMinMax(s.options.errors||s.options.draw_errors);return s.hdraw_func(r,i.fHistogram,s.options.hopt+";"+e.hopt).then(m=>{s.addToPadPrimitives(),s.firstpainter=m,m.setSecondaryId(s,"hist")})}).then(()=>a?s:s.drawNextHisto(0,t))})()}}}}]);