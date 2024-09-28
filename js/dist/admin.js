(()=>{var e={n:t=>{var r=t&&t.__esModule?()=>t.default:()=>t;return e.d(r,{a:r}),r},d:(t,r)=>{for(var a in r)e.o(r,a)&&!e.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:r[a]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};(()=>{"use strict";e.r(t),e.d(t,{extend:()=>f});const r=flarum.reg.get("core","admin/app");var a=e.n(r);const s=flarum.reg.get("core","common/Model");var n=e.n(s);const l=flarum.reg.get("core","common/utils/computed");var o=e.n(l);const i=flarum.reg.get("core","common/utils/string");class u extends(n()){content(){return n().attribute("content").call(this)}contentHtml(){return n().attribute("contentHtml").call(this)}renderFailed(){return n().attribute("renderFailed").call(this)}contentPlain(){return o()("contentHtml",(e=>"string"==typeof e?(0,i.getPlainContent)(e):e)).call(this)}createdAt(){return n().attribute("createdAt",n().transformDate).call(this)}dialog(){return n().hasOne("dialog").call(this)}user(){return n().hasOne("user").call(this)}}flarum.reg.add("flarum-messages","common/models/DialogMessage",u);const d=flarum.reg.get("core","common/app");var c=e.n(d);class m extends(n()){title(){return n().attribute("title").call(this)}type(){return n().attribute("type").call(this)}lastMessageAt(){return n().attribute("lastMessageAt",n().transformDate).call(this)}createdAt(){return n().attribute("createdAt",n().transformDate).call(this)}users(){return n().hasMany("users").call(this)}firstMessage(){return n().hasOne("firstMessage").call(this)}lastMessage(){return n().hasOne("lastMessage").call(this)}unreadCount(){return n().attribute("unreadCount").call(this)}lastReadMessageId(){return n().attribute("lastReadMessageId").call(this)}lastReadAt(){return n().attribute("lastReadAt",n().transformDate).call(this)}recipient(){let e=this.users();return e?e.find((e=>e&&e.id()!==c().session.user.id())):null}}flarum.reg.add("flarum-messages","common/models/Dialog",m);const g=flarum.reg.get("core","common/extenders"),f=[(new(e.n(g)().Store)).add("dialogs",m).add("dialog-messages",u)];a().initializers.add("flarum-messages",(()=>{a().extensionData.for("flarum-messages").registerPermission({icon:"fas fa-envelope-open-text",label:a().translator.trans("flarum-messages.admin.permissions.send_messages"),permission:"dialog.sendMessage",allowGuest:!1},"start",98)}))})(),module.exports=t})();
//# sourceMappingURL=admin.js.map