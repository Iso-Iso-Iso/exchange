import{d as p,a as i,o as e,c as r,u as t,b as _,w as s,e as a,f as o,C as f,g as d,h as n,i as h,r as g}from"./index.3b1e4ac0.js";const B={class:"admin-page"},v=n("\u0414\u0435\u043F\u043E\u0437\u0438\u0442\u044B"),C=n("\u0412\u044B\u0432\u043E\u0434\u044B"),k=n("\u0412\u0430\u043B\u044E\u0442\u044B"),x={key:1},E=p({__name:"home-page",setup(y){const u=h(),c=i(()=>u.getters.isUserHaveAdminAccess),m=i(()=>u.state.user.isLoading);return(V,w)=>{const l=g("RouterView");return e(),r("div",B,[t(c)?(e(),_(f,{key:0,class:"mb-medium admin-menu"},{default:s(()=>[a(o,{class:"mr-small",to:{name:"admin.deposit"}},{default:s(()=>[v]),_:1},8,["to"]),a(o,{class:"mr-small",to:{name:"admin.transaction"}},{default:s(()=>[C]),_:1},8,["to"]),a(o,{to:{name:"admin.currencies"}},{default:s(()=>[k]),_:1},8,["to"])]),_:1})):d("",!0),t(m)?(e(),r("div",x,"Loading...")):t(c)?(e(),_(l,{key:2})):d("",!0)])}}});export{E as default};
