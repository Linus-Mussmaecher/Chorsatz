let L=`undefined`,S=0,X=4,Q=`utf-8`,V=`string`,U=`function`,W=`Object`,O=null,P=1,_=348,N=Array,R=Error,Z=Object,Y=Reflect,T=Uint8Array,M=undefined;var D=((a,b)=>{a=a>>>S;return C().subarray(a/X,a/X+ b)});var y=((a,c,d)=>{b.wasm_bindgen__convert__closures__invoke1_mut__h329e1004e9a71c49(a,c,f(d))});var p=((a,b,c)=>{if(c===M){const c=n.encode(a);const d=b(c.length,P)>>>S;k().subarray(d,d+ c.length).set(c);m=c.length;return d};let d=a.length;let e=b(d,P)>>>S;const f=k();let g=S;for(;g<d;g++){const b=a.charCodeAt(g);if(b>127)break;f[e+ g]=b};if(g!==d){if(g!==S){a=a.slice(g)};e=c(e,d,d=g+ a.length*3,P)>>>S;const b=k().subarray(e+ g,e+ d);const f=o(a,b);g+=f.written};m=g;return e});var g=(a=>{if(a<132)return;c[a]=e;e=a});var u=((a,c,d,e)=>{const f={a:a,b:c,cnt:P,dtor:d};const g=(...a)=>{f.cnt++;const c=f.a;f.a=S;try{return e(c,f.b,...a)}finally{if(--f.cnt===S){b.__wbindgen_export_2.get(f.dtor)(c,f.b)}else{f.a=c}}};g.original=f;return g});var G=(()=>{const c={};c.wbg={};c.wbg.__wbindgen_object_clone_ref=(a=>{const b=d(a);return f(b)});c.wbg.__wbindgen_object_drop_ref=(a=>{h(a)});c.wbg.__wbindgen_number_new=(a=>{const b=a;return f(b)});c.wbg.__wbindgen_string_new=((a,b)=>{const c=l(a,b);return f(c)});c.wbg.__wbindgen_cb_drop=(a=>{const b=h(a).original;if(b.cnt--==P){b.a=S;return !0};const c=!1;return c});c.wbg.__wbindgen_is_undefined=(a=>{const b=d(a)===M;return b});c.wbg.__wbindgen_is_null=(a=>{const b=d(a)===O;return b});c.wbg.__wbindgen_is_falsy=(a=>{const b=!d(a);return b});c.wbg.__wbg_instanceof_Window_9029196b662bc42a=(a=>{let b;try{b=d(a) instanceof Window}catch{b=!1}const c=b;return c});c.wbg.__wbg_document_f7ace2b956f30a4f=(a=>{const b=d(a).document;return q(b)?S:f(b)});c.wbg.__wbg_fetch_336b6f0cb426b46e=((a,b)=>{const c=d(a).fetch(d(b));return f(c)});c.wbg.__wbg_setTimeout_eb1a0d116c26d9f6=function(){return z(((a,b,c)=>{const e=d(a).setTimeout(d(b),c);return e}),arguments)};c.wbg.__wbg_body_674aec4c1c0910cd=(a=>{const b=d(a).body;return q(b)?S:f(b)});c.wbg.__wbg_createComment_6b5ea2660a7c961a=((a,b,c)=>{var e=A(b,c);const g=d(a).createComment(e);return f(g)});c.wbg.__wbg_createDocumentFragment_2570c0407199fba9=(a=>{const b=d(a).createDocumentFragment();return f(b)});c.wbg.__wbg_createElement_4891554b28d3388b=function(){return z(((a,b,c)=>{var e=A(b,c);const g=d(a).createElement(e);return f(g)}),arguments)};c.wbg.__wbg_createElementNS_119acf9e82482041=function(){return z(((a,b,c,e,g)=>{var h=A(b,c);var i=A(e,g);const j=d(a).createElementNS(h,i);return f(j)}),arguments)};c.wbg.__wbg_createTextNode_2fd22cd7e543f938=((a,b,c)=>{var e=A(b,c);const g=d(a).createTextNode(e);return f(g)});c.wbg.__wbg_setinnerHTML_b089587252408b67=((a,b,c)=>{var e=A(b,c);d(a).innerHTML=e});c.wbg.__wbg_outerHTML_f7749ceff37b5832=((a,c)=>{const e=d(c).outerHTML;const f=p(e,b.__wbindgen_malloc,b.__wbindgen_realloc);const g=m;s()[a/X+ P]=g;s()[a/X+ S]=f});c.wbg.__wbg_removeAttribute_d8404da431968808=function(){return z(((a,b,c)=>{var e=A(b,c);d(a).removeAttribute(e)}),arguments)};c.wbg.__wbg_setAttribute_e7e80b478b7b8b2f=function(){return z(((a,b,c,e,f)=>{var g=A(b,c);var h=A(e,f);d(a).setAttribute(g,h)}),arguments)};c.wbg.__wbg_before_208bff4b64d8f1f7=function(){return z(((a,b)=>{d(a).before(d(b))}),arguments)};c.wbg.__wbg_remove_48288e91662163dc=(a=>{d(a).remove()});c.wbg.__wbg_newwithu8arraysequenceandoptions_854056d2c35b489c=function(){return z(((a,b)=>{const c=new Blob(d(a),d(b));return f(c)}),arguments)};c.wbg.__wbg_warn_d60e832f9882c1b2=(a=>{console.warn(d(a))});c.wbg.__wbg_keyCode_dfa86be31f5ef90c=(a=>{const b=d(a).keyCode;return b});c.wbg.__wbg_length_7aeee1534dbcb390=(a=>{const b=d(a).length;return b});c.wbg.__wbg_connect_3f8f5ba805800c62=function(){return z(((a,b)=>{const c=d(a).connect(d(b));return f(c)}),arguments)};c.wbg.__wbg_createObjectURL_d82f2880bada6a1d=function(){return z(((a,c)=>{const e=URL.createObjectURL(d(c));const f=p(e,b.__wbindgen_malloc,b.__wbindgen_realloc);const g=m;s()[a/X+ P]=g;s()[a/X+ S]=f}),arguments)};c.wbg.__wbg_instanceof_AudioBuffer_504894dfc6d62b96=(a=>{let b;try{b=d(a) instanceof AudioBuffer}catch{b=!1}const c=b;return c});c.wbg.__wbg_copyToChannel_6e4bd2545a53db54=function(){return z(((a,b,c,e)=>{d(a).copyToChannel(D(b,c),e)}),arguments)};c.wbg.__wbg_getChannelData_9cb78bbf8321e074=function(){return z(((a,c,e)=>{const f=d(c).getChannelData(e>>>S);const g=E(f,b.__wbindgen_malloc);const h=m;s()[a/X+ P]=h;s()[a/X+ S]=g}),arguments)};c.wbg.__wbg_setdata_8eae47221c7bc167=((a,b,c)=>{var e=A(b,c);d(a).data=e});c.wbg.__wbg_newwithstrandinit_cad5cd6038c7ff5d=function(){return z(((a,b,c)=>{var e=A(a,b);const g=new Request(e,d(c));return f(g)}),arguments)};c.wbg.__wbg_addEventListener_5651108fc3ffeb6e=function(){return z(((a,b,c,e)=>{var f=A(b,c);d(a).addEventListener(f,d(e))}),arguments)};c.wbg.__wbg_addEventListener_a5963e26cd7b176b=function(){return z(((a,b,c,e,f)=>{var g=A(b,c);d(a).addEventListener(g,d(e),d(f))}),arguments)};c.wbg.__wbg_setbuffer_beeece042e02534f=((a,b)=>{d(a).buffer=d(b)});c.wbg.__wbg_start_99ecc2647eb67ca6=function(){return z(((a,b)=>{d(a).start(b)}),arguments)};c.wbg.__wbg_append_5739c748cab384b5=function(){return z(((a,b)=>{d(a).append(d(b))}),arguments)};c.wbg.__wbindgen_string_get=((a,c)=>{const e=d(c);const f=typeof e===V?e:M;var g=q(f)?S:p(f,b.__wbindgen_malloc,b.__wbindgen_realloc);var h=m;s()[a/X+ P]=h;s()[a/X+ S]=g});c.wbg.__wbg_checked_5ccb3a66eb054121=(a=>{const b=d(a).checked;return b});c.wbg.__wbg_value_9423da9d988ee8cf=((a,c)=>{const e=d(c).value;const f=p(e,b.__wbindgen_malloc,b.__wbindgen_realloc);const g=m;s()[a/X+ P]=g;s()[a/X+ S]=f});c.wbg.__wbg_instanceof_Response_fc4327dbfcdf5ced=(a=>{let b;try{b=d(a) instanceof Response}catch{b=!1}const c=b;return c});c.wbg.__wbg_arrayBuffer_288fb3538806e85c=function(){return z((a=>{const b=d(a).arrayBuffer();return f(b)}),arguments)};c.wbg.__wbg_instanceof_ShadowRoot_b64337370f59fe2d=(a=>{let b;try{b=d(a) instanceof ShadowRoot}catch{b=!1}const c=b;return c});c.wbg.__wbg_host_e1c47c33975060d3=(a=>{const b=d(a).host;return f(b)});c.wbg.__wbg_destination_9e793cf556243084=(a=>{const b=d(a).destination;return f(b)});c.wbg.__wbg_sampleRate_951ae4b792d7f810=(a=>{const b=d(a).sampleRate;return b});c.wbg.__wbg_currentTime_c6831b97750b898c=(a=>{const b=d(a).currentTime;return b});c.wbg.__wbg_new_1b59056b80579a3b=function(){return z((()=>{const b=new a();return f(b)}),arguments)};c.wbg.__wbg_createBuffer_13cd030d2b48e8fa=function(){return z(((a,b,c,e)=>{const g=d(a).createBuffer(b>>>S,c>>>S,e);return f(g)}),arguments)};c.wbg.__wbg_createBufferSource_58423f6345b5f559=function(){return z((a=>{const b=d(a).createBufferSource();return f(b)}),arguments)};c.wbg.__wbg_decodeAudioData_b70a9a8f86d300c6=function(){return z(((a,b)=>{const c=d(a).decodeAudioData(d(b));return f(c)}),arguments)};c.wbg.__wbg_target_f171e89c61e2bccf=(a=>{const b=d(a).target;return q(b)?S:f(b)});c.wbg.__wbg_cancelBubble_90d1c3aa2a76cbeb=(a=>{const b=d(a).cancelBubble;return b});c.wbg.__wbg_composedPath_cf1bb5b8bcff496f=(a=>{const b=d(a).composedPath();return f(b)});c.wbg.__wbg_parentNode_9e53f8b17eb98c9d=(a=>{const b=d(a).parentNode;return q(b)?S:f(b)});c.wbg.__wbg_childNodes_64dab37cf9d252dd=(a=>{const b=d(a).childNodes;return f(b)});c.wbg.__wbg_previousSibling_7ddf39401682f643=(a=>{const b=d(a).previousSibling;return q(b)?S:f(b)});c.wbg.__wbg_nextSibling_304d9aac7c2774ae=(a=>{const b=d(a).nextSibling;return q(b)?S:f(b)});c.wbg.__wbg_appendChild_51339d4cde00ee22=function(){return z(((a,b)=>{const c=d(a).appendChild(d(b));return f(c)}),arguments)};c.wbg.__wbg_cloneNode_1f7cce4ea8b708e2=function(){return z((a=>{const b=d(a).cloneNode();return f(b)}),arguments)};c.wbg.__wbg_get_44be0491f933a435=((a,b)=>{const c=d(a)[b>>>S];return f(c)});c.wbg.__wbg_new_898a68150f225f2e=(()=>{const a=new N();return f(a)});c.wbg.__wbg_newnoargs_581967eacc0e2604=((a,b)=>{var c=A(a,b);const d=new Function(c);return f(d)});c.wbg.__wbg_get_97b561fb56f034b5=function(){return z(((a,b)=>{const c=Y.get(d(a),d(b));return f(c)}),arguments)};c.wbg.__wbg_call_cb65541d95d71282=function(){return z(((a,b)=>{const c=d(a).call(d(b));return f(c)}),arguments)};c.wbg.__wbg_new_b51585de1b234aff=(()=>{const a=new Z();return f(a)});c.wbg.__wbg_self_1ff1d729e9aae938=function(){return z((()=>{const a=self.self;return f(a)}),arguments)};c.wbg.__wbg_window_5f4faef6c12b79ec=function(){return z((()=>{const a=window.window;return f(a)}),arguments)};c.wbg.__wbg_globalThis_1d39714405582d3c=function(){return z((()=>{const a=globalThis.globalThis;return f(a)}),arguments)};c.wbg.__wbg_global_651f05c6a0944d1c=function(){return z((()=>{const a=global.global;return f(a)}),arguments)};c.wbg.__wbg_encodeURIComponent_3f637a8dc95a03b2=((a,b)=>{var c=A(a,b);const d=encodeURIComponent(c);return f(d)});c.wbg.__wbg_push_ca1c26067ef907ac=((a,b)=>{const c=d(a).push(d(b));return c});c.wbg.__wbg_call_01734de55d61e11d=function(){return z(((a,b,c)=>{const e=d(a).call(d(b),d(c));return f(e)}),arguments)};c.wbg.__wbg_is_205d914af04a8faa=((a,b)=>{const c=Z.is(d(a),d(b));return c});c.wbg.__wbg_resolve_53698b95aaf7fcf8=(a=>{const b=Promise.resolve(d(a));return f(b)});c.wbg.__wbg_then_f7e06ee3c11698eb=((a,b)=>{const c=d(a).then(d(b));return f(c)});c.wbg.__wbg_then_b2267541e2a73865=((a,b,c)=>{const e=d(a).then(d(b),d(c));return f(e)});c.wbg.__wbg_buffer_085ec1f694018c4f=(a=>{const b=d(a).buffer;return f(b)});c.wbg.__wbg_newwithbyteoffsetandlength_6da8e527659b86aa=((a,b,c)=>{const e=new T(d(a),b>>>S,c>>>S);return f(e)});c.wbg.__wbg_new_8125e318e6245eed=(a=>{const b=new T(d(a));return f(b)});c.wbg.__wbg_buffer_f5b7059c439f330d=(a=>{const b=d(a).buffer;return f(b)});c.wbg.__wbg_set_092e06b0f9d71865=function(){return z(((a,b,c)=>{const e=Y.set(d(a),d(b),d(c));return e}),arguments)};c.wbg.__wbindgen_debug_string=((a,c)=>{const e=t(d(c));const f=p(e,b.__wbindgen_malloc,b.__wbindgen_realloc);const g=m;s()[a/X+ P]=g;s()[a/X+ S]=f});c.wbg.__wbindgen_throw=((a,b)=>{throw new R(l(a,b))});c.wbg.__wbindgen_memory=(()=>{const a=b.memory;return f(a)});c.wbg.__wbindgen_closure_wrapper717=((a,b,c)=>{const d=u(a,b,_,v);return f(d)});c.wbg.__wbindgen_closure_wrapper719=((a,b,c)=>{const d=u(a,b,_,w);return f(d)});c.wbg.__wbindgen_closure_wrapper721=((a,b,c)=>{const d=u(a,b,_,v);return f(d)});c.wbg.__wbindgen_closure_wrapper723=((a,b,c)=>{const d=u(a,b,_,v);return f(d)});c.wbg.__wbindgen_closure_wrapper867=((a,b,c)=>{const d=u(a,b,414,x);return f(d)});c.wbg.__wbindgen_closure_wrapper2325=((a,b,c)=>{const d=u(a,b,475,y);return f(d)});return c});var s=(()=>{if(r===O||r.byteLength===S){r=new Int32Array(b.memory.buffer)};return r});var E=((a,b)=>{const c=b(a.length*X,X)>>>S;C().set(a,c/X);m=a.length;return c});var C=(()=>{if(B===O||B.byteLength===S){B=new Float32Array(b.memory.buffer)};return B});var x=((a,c,d)=>{b.wasm_bindgen__convert__closures__invoke1_mut__hcf05ef8116ba4af2(a,c,f(d))});var q=(a=>a===M||a===O);var v=((a,c,d)=>{b.wasm_bindgen__convert__closures__invoke1_mut__h65c50f414062e89c(a,c,f(d))});var k=(()=>{if(j===O||j.byteLength===S){j=new T(b.memory.buffer)};return j});var t=(a=>{const b=typeof a;if(b==`number`||b==`boolean`||a==O){return `${a}`};if(b==V){return `"${a}"`};if(b==`symbol`){const b=a.description;if(b==O){return `Symbol`}else{return `Symbol(${b})`}};if(b==U){const b=a.name;if(typeof b==V&&b.length>S){return `Function(${b})`}else{return `Function`}};if(N.isArray(a)){const b=a.length;let c=`[`;if(b>S){c+=t(a[S])};for(let d=P;d<b;d++){c+=`, `+ t(a[d])};c+=`]`;return c};const c=/\[object ([^\]]+)\]/.exec(toString.call(a));let d;if(c.length>P){d=c[P]}else{return toString.call(a)};if(d==W){try{return `Object(`+ JSON.stringify(a)+ `)`}catch(a){return W}};if(a instanceof R){return `${a.name}: ${a.message}\n${a.stack}`};return d});var J=(a=>{if(b!==M)return b;const c=G();H(c);if(!(a instanceof WebAssembly.Module)){a=new WebAssembly.Module(a)};const d=new WebAssembly.Instance(a,c);return I(d,a)});function z(a,c){try{return a.apply(this,c)}catch(a){b.__wbindgen_exn_store(f(a))}}var d=(a=>c[a]);var w=((a,c)=>{b.wasm_bindgen__convert__closures__invoke0_mut__hcc46b0e12b66c7cb(a,c)});var K=(async(a)=>{if(b!==M)return b;if(typeof a===L){a=new URL(`chorsatz_bg.wasm`,import.meta.url)};const c=G();if(typeof a===V||typeof Request===U&&a instanceof Request||typeof URL===U&&a instanceof URL){a=fetch(a)};H(c);const {instance:d,module:e}=await F(await a,c);return I(d,e)});var F=(async(a,b)=>{if(typeof Response===U&&a instanceof Response){if(typeof WebAssembly.instantiateStreaming===U){try{return await WebAssembly.instantiateStreaming(a,b)}catch(b){if(a.headers.get(`Content-Type`)!=`application/wasm`){console.warn(`\`WebAssembly.instantiateStreaming\` failed because your server does not serve wasm with \`application/wasm\` MIME type. Falling back to \`WebAssembly.instantiate\` which is slower. Original error:\\n`,b)}else{throw b}}};const c=await a.arrayBuffer();return await WebAssembly.instantiate(c,b)}else{const c=await WebAssembly.instantiate(a,b);if(c instanceof WebAssembly.Instance){return {instance:c,module:a}}else{return c}}});var h=(a=>{const b=d(a);g(a);return b});var f=(a=>{if(e===c.length)c.push(c.length+ P);const b=e;e=c[b];c[b]=a;return b});var l=((a,b)=>{a=a>>>S;return i.decode(k().subarray(a,a+ b))});var I=((a,c)=>{b=a.exports;K.__wbindgen_wasm_module=c;B=O;r=O;j=O;b.__wbindgen_start();return b});var A=((a,b)=>{if(a===S){return d(b)}else{return l(a,b)}});var H=((a,b)=>{});const a=typeof AudioContext!==L?AudioContext:(typeof webkitAudioContext!==L?webkitAudioContext:M);let b;const c=new N(128).fill(M);c.push(M,O,!0,!1);let e=c.length;const i=typeof TextDecoder!==L?new TextDecoder(Q,{ignoreBOM:!0,fatal:!0}):{decode:()=>{throw R(`TextDecoder not available`)}};if(typeof TextDecoder!==L){i.decode()};let j=O;let m=S;const n=typeof TextEncoder!==L?new TextEncoder(Q):{encode:()=>{throw R(`TextEncoder not available`)}};const o=typeof n.encodeInto===U?((a,b)=>n.encodeInto(a,b)):((a,b)=>{const c=n.encode(a);b.set(c);return {read:a.length,written:c.length}});let r=O;let B=O;export default K;export{J as initSync}