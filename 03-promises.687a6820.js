function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},i=t.parcelRequire7bc7;null==i&&((i=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var i={id:e,exports:{}};return o[e]=i,t.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){n[e]=t},t.parcelRequire7bc7=i);var r=i("7Y9D8");const l=document.querySelector(".form");function s(e,t){const o=Math.random()>.3;return new Promise(((n,i)=>{setTimeout((()=>{o?n({position:e,delay:t}):i({position:e,delay:t})}),t)}))}l.addEventListener("submit",(t=>{t.preventDefault();const o=Number.parseInt(l.amount.value);let n=Number.parseInt(l.delay.value);const i=Number.parseInt(l.step.value);for(let t=1;t<=o;t++)s(t,n).then((({position:t,delay:o})=>{e(r).Notify.success(`Fulfilled promise ${t} in ${o}ms`,{timeout:2e3,cssAnimationStyle:"zoom"})})).catch((({position:t,delay:o})=>{e(r).Notify.failure(`Rejected promise ${t} in ${o}ms`,{timeout:2e3,cssAnimationStyle:"zoom"})})),n+=i}));
//# sourceMappingURL=03-promises.687a6820.js.map