(this["webpackJsonpsocial-network-react-ts"]=this["webpackJsonpsocial-network-react-ts"]||[]).push([[5],{247:function(e,t,a){e.exports={wrapper:"Users_wrapper__ZCzzQ",userContainer:"Users_userContainer__2c6Ho",avatarAndFollowContainer:"Users_avatarAndFollowContainer__3-XAj",avatar:"Users_avatar__c2jXs",userInfoContainer:"Users_userInfoContainer__2TtV2",name:"Users_name__2qyGf"}},250:function(e,t,a){e.exports={paginationContainer:"Pagination_paginationContainer__Z_ap4",currentPage:"Pagination_currentPage__j1jM5"}},253:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(13),s=a(30),c=a(247),i=a.n(c),l=a(18),u=a(9),j=a(1),d=r.a.memo((function(e){var t=e.name,a=e.avatarSmall,r=e.id,o=e.followed,s=e.status,c=e.followLoader,d=e.followUser,b=e.isAuth,f=Object(n.useCallback)((function(){return d(r,o)}),[d,r,o]);return Object(j.jsxs)("div",{className:i.a.userContainer,children:[Object(j.jsxs)("div",{className:i.a.avatarAndFollowContainer,children:[Object(j.jsx)(l.b,{to:"".concat(u.a.PROFILE,"/").concat(r),children:Object(j.jsx)("div",{className:i.a.avatar,children:Object(j.jsx)("img",{src:a||"https://pbs.twimg.com/profile_images/1368235617243426820/L0m5gTDB.jpg",alt:t})})}),b?Object(j.jsx)("button",{onClick:f,disabled:c.includes(r),children:o?"Unfollow":"Follow"}):Object(j.jsx)("button",{disabled:!0,children:"Need to login"})]}),Object(j.jsxs)("div",{className:i.a.userInfoContainer,children:[Object(j.jsx)("div",{className:i.a.name,children:t}),Object(j.jsx)("div",{children:o?"\u0412\u044b \u0443\u0436\u0435 \u0434\u0440\u0443\u0436\u0438\u0442\u0435":"\u0416\u0434\u0435\u0442 \u0434\u0440\u0443\u0436\u0431\u044b"}),Object(j.jsx)("div",{children:s||"\u041c\u0435\u0441\u0442\u043e \u0434\u043b\u044f \u0432\u0430\u0448\u0435\u0433\u043e \u0441\u0442\u0430\u0442\u0443\u0441\u0430"})]})]},e.name)})),b=a(20),f=a(250),m=a.n(f),O=r.a.memo((function(e){var t=e.totalItemsCount,a=e.pageSize,r=e.currentPage,o=e.onClick,s=e.portionSize,c=void 0===s?10:s,i=Object(n.useMemo)((function(){for(var e=Math.ceil(t/a),n=[],r=1;r<=e;r++)n.push(r);return n}),[t,a]),l=Math.ceil(Math.ceil(t/a)/c),u=Object(n.useState)(1),d=Object(b.a)(u,2),f=d[0],O=d[1],h=(f-1)*c+1,p=f*c,g=i.filter((function(e){return e>=h&&e<=p})).map((function(e){return Object(j.jsx)("span",{className:r===e?m.a.currentPage:"",onClick:function(){return o(e)},children:e},e)}));return Object(j.jsxs)("div",{className:m.a.paginationContainer,children:[Object(j.jsx)("button",{onClick:function(){return O(f-1)},disabled:f<=1,children:"Prev"}),g,Object(j.jsx)("button",{onClick:function(){return O(f+1)},disabled:l<=f,children:"Next"})]})})),h=r.a.memo((function(e){var t=e.usersData,a=e.pageSize,n=e.totalUsersCount,r=e.currentPage,o=e.changeCurrentPage,s=e.followLoader,c=e.followUser,l=e.isAuth,u=t.map((function(e){return Object(j.jsx)(d,{name:e.name,avatarSmall:e.photos.small,id:e.id,followed:e.followed,status:e.status,followLoader:s,followUser:c,isAuth:l},e.name+e.id)}));return Object(j.jsxs)("main",{className:i.a.wrapper,children:[Object(j.jsx)(O,{totalItemsCount:n,pageSize:a,currentPage:r,portionSize:20,onClick:o}),u]})})),p=a(66),g=r.a.memo((function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.users})),a=t.usersData,r=t.pageSize,c=t.totalUsersCount,i=t.currentPage,l=t.isLoading,u=t.followLoader,d=Object(o.c)((function(e){return e.auth})).isAuth,b=Object(n.useCallback)((function(t,a){e(Object(s.c)(t,a))}),[e]),f=Object(n.useCallback)((function(t){e(Object(s.b)(t,r))}),[e,r]);return Object(n.useEffect)((function(){e(Object(s.d)(i,r))}),[e,i,r]),Object(j.jsxs)(j.Fragment,{children:[l&&Object(j.jsx)(p.a,{}),Object(j.jsx)(h,{usersData:a,pageSize:r,totalUsersCount:c,currentPage:i,changeCurrentPage:f,followLoader:u,followUser:b,isAuth:d})]})}));t.default=g}}]);
//# sourceMappingURL=5.01b852f4.chunk.js.map