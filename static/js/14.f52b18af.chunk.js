(this.webpackJsonpivooo=this.webpackJsonpivooo||[]).push([[14],{1297:function(r,n){},1518:function(r,n,t){"use strict";t.r(n),function(r){t.d(n,"getED25519Key",(function(){return i}));var a=t(103),o=t(1340),e=t.n(o).a.lowlevel;function i(n){var t;t="string"===typeof n?r.from(n,"hex"):n;var o=new Uint8Array(64),i=[e.gf(),e.gf(),e.gf(),e.gf()],c=new Uint8Array([].concat(Object(a.a)(new Uint8Array(t)),Object(a.a)(new Uint8Array(32)))),f=new Uint8Array(32);e.crypto_hash(o,c,32),o[0]&=248,o[31]&=127,o[31]|=64,e.scalarbase(i,o),e.pack(f,i);for(var s=0;s<32;s+=1)c[s+32]=f[s];return{sk:r.from(c),pk:r.from(f)}}}.call(this,t(23).Buffer)}}]);
//# sourceMappingURL=14.f52b18af.chunk.js.map