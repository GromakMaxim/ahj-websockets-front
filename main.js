(()=>{"use strict";class t{static avatars=null;AVATARS_URL="https://netology-front-pictures.herokuapp.com/?method=getPictures&content=avatars";BACKGROUND_URL="https://netology-front-pictures.herokuapp.com/?method=getPictures&content=background";constructor(){this.showBackground(),this.showAvatars()}async receivePics(t){if(null==t)return null;const e=await fetch(t);return await e.json()}async showAvatars(){const e=await this.receivePics(this.AVATARS_URL);document.getElementsByClassName("window-login-avatar-selection")[0].style.backgroundImage="url('data:image/png;base64, "+e[0].content+"')",t.avatars=e}async showBackground(){const t=await this.receivePics(this.BACKGROUND_URL),e=document.getElementsByTagName("body")[0];e.style.backgroundImage="linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5) ), url('data:image/png;base64, "+t.content+"')",e.style.backgroundRepeat="no-repeat",e.style.backgroundSize="cover",e.style.backgroundAttachment="fixed",e.style.backgroundPosition="top"}}class e{constructor(t,e,n){this._nickname=t,this._picContent=e,this._status=null!=n?n:""}getNickname(){return this._nickname}setNickname(t){this._nickname=t}getPicContent(){return this._picContent}setPicContent(t){this._picContent=t}getStatus(){return this._status}setStatus(t){this._status=t}}function n(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function a(t){return n(1,arguments),t instanceof Date||"object"==typeof t&&"[object Date]"===Object.prototype.toString.call(t)}function r(t){n(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||"object"==typeof t&&"[object Date]"===e?new Date(t.getTime()):"number"==typeof t||"[object Number]"===e?new Date(t):("string"!=typeof t&&"[object String]"!==e||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}function i(t){if(n(1,arguments),!a(t)&&"number"!=typeof t)return!1;var e=r(t);return!isNaN(Number(e))}var s={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};const o=function(t,e,n){var a,r=s[t];return a="string"==typeof r?r:1===e?r.one:r.other.replace("{{count}}",e.toString()),null!=n&&n.addSuffix?n.comparison&&n.comparison>0?"in "+a:a+" ago":a};function c(t){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.width?String(e.width):t.defaultWidth,a=t.formats[n]||t.formats[t.defaultWidth];return a}}var u={date:c({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:c({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:c({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})};var d={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function l(t){return function(e,n){var a,r=n||{};if("formatting"===(r.context?String(r.context):"standalone")&&t.formattingValues){var i=t.defaultFormattingWidth||t.defaultWidth,s=r.width?String(r.width):i;a=t.formattingValues[s]||t.formattingValues[i]}else{var o=t.defaultWidth,c=r.width?String(r.width):t.defaultWidth;a=t.values[c]||t.values[o]}return a[t.argumentCallback?t.argumentCallback(e):e]}}function h(t){return function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=n.width,r=a&&t.matchPatterns[a]||t.matchPatterns[t.defaultMatchWidth],i=e.match(r);if(!i)return null;var s,o=i[0],c=a&&t.parsePatterns[a]||t.parsePatterns[t.defaultParseWidth],u=Array.isArray(c)?g(c,(function(t){return t.test(o)})):m(c,(function(t){return t.test(o)}));s=t.valueCallback?t.valueCallback(u):u,s=n.valueCallback?n.valueCallback(s):s;var d=e.slice(o.length);return{value:s,rest:d}}}function m(t,e){for(var n in t)if(t.hasOwnProperty(n)&&e(t[n]))return n}function g(t,e){for(var n=0;n<t.length;n++)if(e(t[n]))return n}var f;const w={code:"en-US",formatDistance:o,formatLong:u,formatRelative:function(t,e,n,a){return d[t]},localize:{ordinalNumber:function(t,e){var n=Number(t),a=n%100;if(a>20||a<10)switch(a%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:l({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:l({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:l({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:l({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:l({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(f={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}},function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.match(f.matchPattern);if(!n)return null;var a=n[0],r=t.match(f.parsePattern);if(!r)return null;var i=f.valueCallback?f.valueCallback(r[0]):r[0];i=e.valueCallback?e.valueCallback(i):i;var s=t.slice(a.length);return{value:i,rest:s}}),era:h({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:h({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:h({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:h({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:h({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};function v(t){if(null===t||!0===t||!1===t)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function y(t,e){n(2,arguments);var a=r(t).getTime(),i=v(e);return new Date(a+i)}function b(t,e){n(2,arguments);var a=v(e);return y(t,-a)}var p=864e5;function C(t){n(1,arguments);var e=1,a=r(t),i=a.getUTCDay(),s=(i<e?7:0)+i-e;return a.setUTCDate(a.getUTCDate()-s),a.setUTCHours(0,0,0,0),a}function N(t){n(1,arguments);var e=r(t),a=e.getUTCFullYear(),i=new Date(0);i.setUTCFullYear(a+1,0,4),i.setUTCHours(0,0,0,0);var s=C(i),o=new Date(0);o.setUTCFullYear(a,0,4),o.setUTCHours(0,0,0,0);var c=C(o);return e.getTime()>=s.getTime()?a+1:e.getTime()>=c.getTime()?a:a-1}function T(t){n(1,arguments);var e=N(t),a=new Date(0);a.setUTCFullYear(e,0,4),a.setUTCHours(0,0,0,0);var r=C(a);return r}var k=6048e5;function E(t,e){n(1,arguments);var a=e||{},i=a.locale,s=i&&i.options&&i.options.weekStartsOn,o=null==s?0:v(s),c=null==a.weekStartsOn?o:v(a.weekStartsOn);if(!(c>=0&&c<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var u=r(t),d=u.getUTCDay(),l=(d<c?7:0)+d-c;return u.setUTCDate(u.getUTCDate()-l),u.setUTCHours(0,0,0,0),u}function S(t,e){n(1,arguments);var a=r(t),i=a.getUTCFullYear(),s=e||{},o=s.locale,c=o&&o.options&&o.options.firstWeekContainsDate,u=null==c?1:v(c),d=null==s.firstWeekContainsDate?u:v(s.firstWeekContainsDate);if(!(d>=1&&d<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var l=new Date(0);l.setUTCFullYear(i+1,0,d),l.setUTCHours(0,0,0,0);var h=E(l,e),m=new Date(0);m.setUTCFullYear(i,0,d),m.setUTCHours(0,0,0,0);var g=E(m,e);return a.getTime()>=h.getTime()?i+1:a.getTime()>=g.getTime()?i:i-1}function M(t,e){n(1,arguments);var a=e||{},r=a.locale,i=r&&r.options&&r.options.firstWeekContainsDate,s=null==i?1:v(i),o=null==a.firstWeekContainsDate?s:v(a.firstWeekContainsDate),c=S(t,e),u=new Date(0);u.setUTCFullYear(c,0,o),u.setUTCHours(0,0,0,0);var d=E(u,e);return d}var x=6048e5;function U(t,e){for(var n=t<0?"-":"",a=Math.abs(t).toString();a.length<e;)a="0"+a;return n+a}const L={y:function(t,e){var n=t.getUTCFullYear(),a=n>0?n:1-n;return U("yy"===e?a%100:a,e.length)},M:function(t,e){var n=t.getUTCMonth();return"M"===e?String(n+1):U(n+1,2)},d:function(t,e){return U(t.getUTCDate(),e.length)},a:function(t,e){var n=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];default:return"am"===n?"a.m.":"p.m."}},h:function(t,e){return U(t.getUTCHours()%12||12,e.length)},H:function(t,e){return U(t.getUTCHours(),e.length)},m:function(t,e){return U(t.getUTCMinutes(),e.length)},s:function(t,e){return U(t.getUTCSeconds(),e.length)},S:function(t,e){var n=e.length,a=t.getUTCMilliseconds();return U(Math.floor(a*Math.pow(10,n-3)),e.length)}};var D="midnight",P="noon",O="morning",B="afternoon",A="evening",W="night",Y={G:function(t,e,n){var a=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(a,{width:"abbreviated"});case"GGGGG":return n.era(a,{width:"narrow"});default:return n.era(a,{width:"wide"})}},y:function(t,e,n){if("yo"===e){var a=t.getUTCFullYear(),r=a>0?a:1-a;return n.ordinalNumber(r,{unit:"year"})}return L.y(t,e)},Y:function(t,e,n,a){var r=S(t,a),i=r>0?r:1-r;return"YY"===e?U(i%100,2):"Yo"===e?n.ordinalNumber(i,{unit:"year"}):U(i,e.length)},R:function(t,e){return U(N(t),e.length)},u:function(t,e){return U(t.getUTCFullYear(),e.length)},Q:function(t,e,n){var a=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(a);case"QQ":return U(a,2);case"Qo":return n.ordinalNumber(a,{unit:"quarter"});case"QQQ":return n.quarter(a,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(a,{width:"narrow",context:"formatting"});default:return n.quarter(a,{width:"wide",context:"formatting"})}},q:function(t,e,n){var a=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(a);case"qq":return U(a,2);case"qo":return n.ordinalNumber(a,{unit:"quarter"});case"qqq":return n.quarter(a,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(a,{width:"narrow",context:"standalone"});default:return n.quarter(a,{width:"wide",context:"standalone"})}},M:function(t,e,n){var a=t.getUTCMonth();switch(e){case"M":case"MM":return L.M(t,e);case"Mo":return n.ordinalNumber(a+1,{unit:"month"});case"MMM":return n.month(a,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(a,{width:"narrow",context:"formatting"});default:return n.month(a,{width:"wide",context:"formatting"})}},L:function(t,e,n){var a=t.getUTCMonth();switch(e){case"L":return String(a+1);case"LL":return U(a+1,2);case"Lo":return n.ordinalNumber(a+1,{unit:"month"});case"LLL":return n.month(a,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(a,{width:"narrow",context:"standalone"});default:return n.month(a,{width:"wide",context:"standalone"})}},w:function(t,e,a,i){var s=function(t,e){n(1,arguments);var a=r(t),i=E(a,e).getTime()-M(a,e).getTime();return Math.round(i/x)+1}(t,i);return"wo"===e?a.ordinalNumber(s,{unit:"week"}):U(s,e.length)},I:function(t,e,a){var i=function(t){n(1,arguments);var e=r(t),a=C(e).getTime()-T(e).getTime();return Math.round(a/k)+1}(t);return"Io"===e?a.ordinalNumber(i,{unit:"week"}):U(i,e.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getUTCDate(),{unit:"date"}):L.d(t,e)},D:function(t,e,a){var i=function(t){n(1,arguments);var e=r(t),a=e.getTime();e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0);var i=e.getTime(),s=a-i;return Math.floor(s/p)+1}(t);return"Do"===e?a.ordinalNumber(i,{unit:"dayOfYear"}):U(i,e.length)},E:function(t,e,n){var a=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return n.day(a,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(a,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},e:function(t,e,n,a){var r=t.getUTCDay(),i=(r-a.weekStartsOn+8)%7||7;switch(e){case"e":return String(i);case"ee":return U(i,2);case"eo":return n.ordinalNumber(i,{unit:"day"});case"eee":return n.day(r,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(r,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},c:function(t,e,n,a){var r=t.getUTCDay(),i=(r-a.weekStartsOn+8)%7||7;switch(e){case"c":return String(i);case"cc":return U(i,e.length);case"co":return n.ordinalNumber(i,{unit:"day"});case"ccc":return n.day(r,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(r,{width:"narrow",context:"standalone"});case"cccccc":return n.day(r,{width:"short",context:"standalone"});default:return n.day(r,{width:"wide",context:"standalone"})}},i:function(t,e,n){var a=t.getUTCDay(),r=0===a?7:a;switch(e){case"i":return String(r);case"ii":return U(r,e.length);case"io":return n.ordinalNumber(r,{unit:"day"});case"iii":return n.day(a,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(a,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},a:function(t,e,n){var a=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(a,{width:"narrow",context:"formatting"});default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},b:function(t,e,n){var a,r=t.getUTCHours();switch(a=12===r?P:0===r?D:r/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(a,{width:"narrow",context:"formatting"});default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},B:function(t,e,n){var a,r=t.getUTCHours();switch(a=r>=17?A:r>=12?B:r>=4?O:W,e){case"B":case"BB":case"BBB":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(a,{width:"narrow",context:"formatting"});default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){var a=t.getUTCHours()%12;return 0===a&&(a=12),n.ordinalNumber(a,{unit:"hour"})}return L.h(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getUTCHours(),{unit:"hour"}):L.H(t,e)},K:function(t,e,n){var a=t.getUTCHours()%12;return"Ko"===e?n.ordinalNumber(a,{unit:"hour"}):U(a,e.length)},k:function(t,e,n){var a=t.getUTCHours();return 0===a&&(a=24),"ko"===e?n.ordinalNumber(a,{unit:"hour"}):U(a,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):L.m(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):L.s(t,e)},S:function(t,e){return L.S(t,e)},X:function(t,e,n,a){var r=(a._originalDate||t).getTimezoneOffset();if(0===r)return"Z";switch(e){case"X":return H(r);case"XXXX":case"XX":return I(r);default:return I(r,":")}},x:function(t,e,n,a){var r=(a._originalDate||t).getTimezoneOffset();switch(e){case"x":return H(r);case"xxxx":case"xx":return I(r);default:return I(r,":")}},O:function(t,e,n,a){var r=(a._originalDate||t).getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+_(r,":");default:return"GMT"+I(r,":")}},z:function(t,e,n,a){var r=(a._originalDate||t).getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+_(r,":");default:return"GMT"+I(r,":")}},t:function(t,e,n,a){var r=a._originalDate||t;return U(Math.floor(r.getTime()/1e3),e.length)},T:function(t,e,n,a){return U((a._originalDate||t).getTime(),e.length)}};function _(t,e){var n=t>0?"-":"+",a=Math.abs(t),r=Math.floor(a/60),i=a%60;if(0===i)return n+String(r);var s=e||"";return n+String(r)+s+U(i,2)}function H(t,e){return t%60==0?(t>0?"-":"+")+U(Math.abs(t)/60,2):I(t,e)}function I(t,e){var n=e||"",a=t>0?"-":"+",r=Math.abs(t);return a+U(Math.floor(r/60),2)+n+U(r%60,2)}const G=Y;function q(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});default:return e.date({width:"full"})}}function R(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});default:return e.time({width:"full"})}}var F={p:R,P:function(t,e){var n,a=t.match(/(P+)(p+)?/)||[],r=a[1],i=a[2];if(!i)return q(t,e);switch(r){case"P":n=e.dateTime({width:"short"});break;case"PP":n=e.dateTime({width:"medium"});break;case"PPP":n=e.dateTime({width:"long"});break;default:n=e.dateTime({width:"full"})}return n.replace("{{date}}",q(r,e)).replace("{{time}}",R(i,e))}};const J=F;function j(t){var e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),t.getTime()-e.getTime()}var z=["D","DD"],X=["YY","YYYY"];function Q(t){return-1!==z.indexOf(t)}function V(t){return-1!==X.indexOf(t)}function K(t,e,n){if("YYYY"===t)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("YY"===t)throw new RangeError("Use `yy` instead of `YY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("D"===t)throw new RangeError("Use `d` instead of `D` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("DD"===t)throw new RangeError("Use `dd` instead of `DD` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"))}var $=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Z=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,tt=/^'([^]*?)'?$/,et=/''/g,nt=/[a-zA-Z]/;function at(t){return t.match(tt)[1].replace(et,"'")}class rt{wsClient=null;constructor(t,e,n){if(null==t||null==e)throw new Error("unknown user");this.actionsController=e,this.chatService=n,this.user=t,this.wsClient=new WebSocket("wss://netology-chat-server.herokuapp.com/"),this.wsClient.onopen=function(t){console.log("подключился")},this.wsClient.onmessage=e=>{switch((e=JSON.parse(e.data)).action){case"STATUS":let n=JSON.parse(e.data);"ok"===n.status&&"status_changed"===n.oper&&this.actionsController.changeStatus(n.who,n.changeTo);case"GOODBYE":let a=JSON.parse(e.data);"user_left"===a.oper&&this.actionsController.removeUser(a.who);break;case"AVATAR":let r=JSON.parse(e.data);"ok"===r.status&&"avatar_changed"===r.oper&&this.actionsController.changeAvatar(r.who,JSON.parse(r.changeTo));break;case"WHOAREYOU":let i={oper:"new_user",who:t.getNickname(),payload:{pic:t.getPicContent(),status:""}};i=JSON.stringify(i),this.wsClient.send(JSON.stringify({action:"IAMNEW",data:i}));break;case"WELCOME":let s=JSON.parse(e.data);"ok"===s.status&&"new_user"===s.oper&&s.who===this.user.getNickname()&&(console.log("successfully registered as '"+s.who+"' "),console.log(s),this.actionsController.allowEnter(s)),"ok"===s.status&&"new_user"===s.oper&&s.who!==this.user.getNickname()&&(console.log("new user: '"+s.who+"' "),this.chatService.addOtherUsers(s));break;case"IDNYOU":console.log(e);break;case"MSG":e=JSON.parse(e.data),this.chatService.receiveMessage(e)}}}sendMsg(t){console.log("worked"),t=JSON.stringify(t),this.wsClient.send(JSON.stringify({action:"MSG",data:t}))}async changeAvatar(t){t=JSON.stringify(t);let e={oper:"avatar_changed",who:this.user.getNickname(),changeTo:t},n=JSON.stringify(e);this.wsClient.send(JSON.stringify({action:"AVATAR",data:n}))}async changeStatus(t){if(1===this.wsClient.readyState){let e={oper:"status_changed",who:this.user.getNickname(),changeTo:t},n=JSON.stringify(e);this.wsClient.send(JSON.stringify({action:"STATUS",data:n}))}}}class it{constructor(t,e){if(null==t||null==e)throw new Error("cant init Chat Service ");this.actionsController=e,this.user=t,this.chatClient=new rt(this.user,this.actionsController,this)}setNewMessageSendFunction(){const t=document.getElementsByClassName("chat-window-type-here")[0];t.addEventListener("keypress",(e=>{if("Enter"===e.key){let e=t.value.trim(),n={from:this.user.getNickname(),msg:e};this.chatClient.sendMsg(n)}}))}async receiveMessage(t){this.showMsgInChat(t.from,t.msg),console.log(t)}async showMsgInChat(t,e){const n=document.getElementsByClassName("chat-window-log")[0],a=await this.buildNewMessage(t,e);console.log(a),n.children[0].before(a);document.getElementsByClassName("chat-window-type-here")[0].value=""}async buildNewMessage(t,e){const a=document.createElement("div");a.classList.add("chat-message"),t===this.user.getNickname()&&a.classList.add("owner");const s=document.createElement("div");s.classList.add("chat-message-info");const o=document.createElement("div");o.classList.add("message-from"),o.textContent=t,s.appendChild(o);const c=document.createElement("div");c.classList.add("message-date"),c.textContent=class{constructor(){}static getCurrentDate(t){return function(t,e,a){n(2,arguments);var s=String(e),o=a||{},c=o.locale||w,u=c.options&&c.options.firstWeekContainsDate,d=null==u?1:v(u),l=null==o.firstWeekContainsDate?d:v(o.firstWeekContainsDate);if(!(l>=1&&l<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var h=c.options&&c.options.weekStartsOn,m=null==h?0:v(h),g=null==o.weekStartsOn?m:v(o.weekStartsOn);if(!(g>=0&&g<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!c.localize)throw new RangeError("locale must contain localize property");if(!c.formatLong)throw new RangeError("locale must contain formatLong property");var f=r(t);if(!i(f))throw new RangeError("Invalid time value");var y=b(f,j(f)),p={firstWeekContainsDate:l,weekStartsOn:g,locale:c,_originalDate:f};return s.match(Z).map((function(t){var e=t[0];return"p"===e||"P"===e?(0,J[e])(t,c.formatLong,p):t})).join("").match($).map((function(n){if("''"===n)return"'";var a=n[0];if("'"===a)return at(n);var r=G[a];if(r)return!o.useAdditionalWeekYearTokens&&V(n)&&K(n,e,t),!o.useAdditionalDayOfYearTokens&&Q(n)&&K(n,e,t),r(y,n,c.localize,p);if(a.match(nt))throw new RangeError("Format string contains an unescaped latin alphabet character `"+a+"`");return n})).join("")}(new Date,t)}}.getCurrentDate("dd.MM.yyyy"),s.appendChild(c),a.appendChild(s);const u=document.createElement("div");return u.classList.add("message-content"),u.textContent=e,a.appendChild(u),a}async addUserToPanel(){const t=await this.buildNewUser(this.user);document.getElementsByClassName("contacts")[0].children[0].after(t);document.getElementsByClassName("widget-user-panel-data-nickname")[0].textContent=this.user.getNickname();document.getElementsByClassName("widget-user-panel-avatar")[0].style.backgroundImage=this.user.getPicContent()}async addOtherUsers(t){let n=JSON.parse(t.payload),a=[];for(let t of n){let n=JSON.parse(t);a.push(new e(n[0],n[1].pic,n[1].status))}Array.from(document.getElementsByClassName("contacts")[0].children).forEach((t=>{t.classList.contains("room-title")||t.parentNode.removeChild(t)}));for(let t of a){const e=await this.buildNewUser(t);document.getElementsByClassName("contacts")[0].children[0].after(e)}}async buildNewUser(t){null!==t.getNickname()&&void 0!==t.getNickname()||console.log("error has been occured while builind new user"),null!==t.getPicContent()&&void 0!==t.getPicContent()||console.log("error has been occured while builind new user");let e=document.createElement("div");e.classList.add("contact"),e.setAttribute("data-status",t.getStatus());let n=document.createElement("div");n.classList.add("contact-pic"),n.style.backgroundImage=t.getPicContent(),e.append(n);let a=document.createElement("div");a.classList.add("contact-data");let r=document.createElement("div");r.classList.add("contact-nickname"),r.textContent=t.getNickname(),a.append(r);let i=document.createElement("div");i.classList.add("contact-status");let s=document.createElement("div");s.classList.add("contact-status-pic");let o=document.createElement("div");o.classList.add("contact-status-text"),o.textContent="Online";let c=document.createElement("div");return c.classList.add("contact-status-hover"),c.classList.add("hidden"),c.textContent="status: "+t.getStatus(),i.append(s),i.append(o),a.append(i),e.append(a),e.append(c),e.addEventListener("mouseenter",(t=>{null!==e.getAttribute("data-status")&&void 0!==e.getAttribute("data-status")&&0!==e.getAttribute("data-status").length&&c.classList.remove("hidden")})),e.addEventListener("mouseleave",(t=>{c.classList.add("hidden")})),e}async changeAvatar(t){this.chatClient.changeAvatar(t)}async changeStatus(t){this.chatClient.changeStatus(t.trim())}}class st{index=0;LOGIN_MIN_LENGTH=5;LOGIN_MAX_LENGTH=13;constructor(){this.setBtnLeft(),this.setBtnRight(),this.setLoginInputInteraction(),this.setEnterBtn(),this.setUserPanelBehaviour(),this.setContactsPanelBehaviour()}removeUser(t){for(let e of Array.from(document.getElementsByClassName("contact"))){if(e.getElementsByClassName("contact-nickname")[0].textContent===t){document.getElementsByClassName("contacts")[0].removeChild(e);break}}}async setContactsPanelBehaviour(){let t=Array.from(document.getElementsByClassName("contact"));console.log(t);for(let e of t)e.addEventListener("mouseenter",(t=>{console.log("hover!")})),e.addEventListener("mouseleave",(t=>{console.log("unhover")}))}async setUserPanelBehaviour(){const t=document.getElementsByClassName("widget-input-status-msg")[0],e=document.getElementsByClassName("avatar-dropdown")[0];t.addEventListener("keydown",(n=>{13===n.keyCode&&(t.setAttribute("disabled","true"),e.classList.add("hidden"),null!==this.chatServise&&void 0!==this.chatServise&&this.chatServise.changeStatus(t.value))})),document.addEventListener("click",(n=>{n.preventDefault(),n.target===t?(t.removeAttribute("disabled"),t.focus()):n.target===document.getElementsByClassName("widget-user-panel-avatar")[0]?(e.classList.toggle("hidden"),e.classList.contains("hidden")||this.fillAvatarsTable()):n.target.classList.contains("table-pic")?this.chatServise.changeAvatar(n.target.style.backgroundImage):(t.setAttribute("disabled","true"),e.classList.add("hidden"),null!==this.chatServise&&void 0!==this.chatServise&&this.chatServise.changeStatus(t.value))}))}changeStatus(t,e){t===this.user.getNickname()&&(document.getElementsByClassName("widget-input-status-msg")[0].value=e),Array.from(document.getElementsByClassName("contact")).forEach((n=>{n.getElementsByClassName("contact-nickname")[0].textContent===t&&(n.setAttribute("data-status",e),n.getElementsByClassName("contact-status-hover")[0].textContent="status: "+e)}))}changeAvatar(t,e){t===this.user.getNickname()&&(document.getElementsByClassName("widget-user-panel-avatar")[0].style.backgroundImage=e),Array.from(document.getElementsByClassName("contact")).forEach((n=>{n.getElementsByClassName("contact-nickname")[0].textContent===t&&(n.getElementsByClassName("contact-pic")[0].style.backgroundImage=e)}))}async fillAvatarsTable(){const e=document.getElementsByClassName("avatar-dropdown-table")[0];for(;e.firstChild;)e.removeChild(e.firstChild);let n,a=0;for(let r of t.avatars){if(0===a&&(n=document.createElement("tr")),a<6){let t=document.createElement("td");t.classList.add("table-pic"),t.style.backgroundImage="url('data:image/png;base64, "+r.content+"')",n.append(t)}6===a&&(e.append(n),a=-1),a++}}async setEnterBtn(){document.getElementsByClassName("window-login-confirm")[0].addEventListener("click",(t=>{t.preventDefault();let n=document.getElementsByClassName("window-input-login")[0].value;if(n.length>this.LOGIN_MIN_LENGTH&&n.length<this.LOGIN_MAX_LENGTH&&!n.includes(" ")){const t=document.getElementsByClassName("window-login-avatar-selection")[0].style.backgroundImage;this.user=new e(n,t),this.chatServise=new it(this.user,this)}}))}async allowEnter(t){const e=document.getElementsByClassName("window-login")[0],n=document.getElementsByClassName("widget")[0];e.classList.add("hidden"),n.classList.remove("hidden"),await this.chatServise.addUserToPanel(),await this.chatServise.addOtherUsers(t),this.chatServise.setNewMessageSendFunction()}setBtnLeft(){document.getElementsByClassName("window-login-avatar-selection-arr-left")[0].addEventListener("click",(e=>{e.preventDefault(),0===this.index?this.index=t.avatars.length-1:this.index--;document.getElementsByClassName("window-login-avatar-selection")[0].style.backgroundImage="url('data:image/png;base64, "+t.avatars[this.index].content+"')",console.log(this.index)}))}setBtnRight(){document.getElementsByClassName("window-login-avatar-selection-arr-right")[0].addEventListener("click",(e=>{e.preventDefault(),this.index===t.avatars.length-1?this.index=0:this.index++;document.getElementsByClassName("window-login-avatar-selection")[0].style.backgroundImage="url('data:image/png;base64, "+t.avatars[this.index].content+"')",console.log(this.index)}))}setLoginInputInteraction(){const t=document.getElementsByClassName("window-input-login")[0];t.addEventListener("input",(e=>{e.preventDefault();const n=document.getElementsByClassName("window-login-confirm")[0];let a=t.value;a.length>this.LOGIN_MIN_LENGTH&&a.length<this.LOGIN_MAX_LENGTH&&!a.includes(" ")?(n.classList.remove("off"),n.classList.add("on")):(n.classList.remove("on"),n.classList.add("off"))}))}}(new class{async f(){new t,new st}}).f()})();