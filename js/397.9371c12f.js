"use strict";(self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[]).push([[397],{7397:function(t,e,s){s.r(e),s.d(e,{default:function(){return D}});var a=s(6768),o=s(4232),r=s(5130);const n={class:"container"},i={class:"post-section"},c={class:"section-header"},l={class:"post-table"},u={class:"post-title"},g=["onClick"],d={key:0,class:"notice-badge"},p={key:0,class:"comment-count"},h={class:"post-author"},P={class:"post-time"},k={class:"pagination"},m=["disabled"],L=["disabled"];function b(t,e,s,b,v,C){return(0,a.uX)(),(0,a.CE)("div",n,[(0,a.Lk)("div",i,[(0,a.Lk)("div",c,[e[3]||(e[3]=(0,a.Lk)("h2",{class:"section-title"},"자유게시판",-1)),(0,a.Lk)("button",{onClick:e[0]||(e[0]=(...t)=>C.goToWritePost&&C.goToWritePost(...t))},"글쓰기")]),(0,a.Lk)("table",l,[e[4]||(e[4]=(0,a.Lk)("thead",null,[(0,a.Lk)("tr",null,[(0,a.Lk)("th",{class:"title-column"},"제목"),(0,a.Lk)("th",{class:"author-column"},"작성자"),(0,a.Lk)("th",{class:"date-column"},"작성일")])],-1)),(0,a.Lk)("tbody",null,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(C.paginatedPosts,((t,e)=>((0,a.uX)(),(0,a.CE)("tr",{key:e,class:(0,o.C4)({notice:1===t.Notice||"1"===t.Notice})},[(0,a.Lk)("td",u,[(0,a.Lk)("a",{href:"#",onClick:(0,r.D$)((e=>C.goToViewPost(t)),["prevent"])},[1===t.Notice||"1"===t.Notice?((0,a.uX)(),(0,a.CE)("span",d,"공지")):(0,a.Q3)("",!0),(0,a.eW)(" "+(0,o.v_)(t.Title),1)],8,g),t.CommentCount?((0,a.uX)(),(0,a.CE)("span",p," ["+(0,o.v_)(t.CommentCount)+"] ",1)):(0,a.Q3)("",!0)]),(0,a.Lk)("td",h,(0,o.v_)(t.Uid),1),(0,a.Lk)("td",P,(0,o.v_)(C.formatDate(t.Reg_Date)),1)],2)))),128))])])]),(0,a.Lk)("div",k,[(0,a.Lk)("p",null,"페이지 "+(0,o.v_)(C.currentPage)+" / "+(0,o.v_)(C.totalPages),1),(0,a.Lk)("button",{class:"pagination-button",onClick:e[1]||(e[1]=(...t)=>C.prevPage&&C.prevPage(...t)),disabled:1===C.currentPage}," 이전 페이지 ",8,m),(0,a.Lk)("button",{class:"pagination-button",onClick:e[2]||(e[2]=(...t)=>C.nextPage&&C.nextPage(...t)),disabled:C.currentPage===C.totalPages}," 다음 페이지 ",8,L)])])}s(4114),s(1454);var v=s(4373),C={props:["page"],data(){return{posts:[],itemsPerPage:10}},computed:{currentPage(){return parseInt(this.page)||1},totalPages(){return Math.ceil(this.sortedPosts.length/this.itemsPerPage)||1},sortedPosts(){return[...this.posts].sort(((t,e)=>1===t.Notice&&0===e.Notice?-1:0===t.Notice&&1===e.Notice?1:new Date(e.Reg_date)-new Date(t.Reg_date)))},paginatedPosts(){const t=(this.currentPage-1)*this.itemsPerPage,e=t+this.itemsPerPage;return this.sortedPosts.slice(t,e)}},methods:{async fetchPosts(){try{const t=await v.A.get("http://localhost:3000/boardpage");console.log("Fetched posts:",t.data),this.posts=t.data.map((t=>({...t,Notice:t.Notice,Reg_Date:t.Reg_date}))),console.log("Processed posts:",this.posts)}catch(t){console.error("게시글 데이터를 가져오는 중 오류 발생:",t)}},formatDate(t){if(!t)return"N/A";const e=new Date(t);return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")} ${String(e.getHours()).padStart(2,"0")}:${String(e.getMinutes()).padStart(2,"0")}`},nextPage(){this.currentPage<this.totalPages&&this.$router.push({name:"board",params:{page:this.currentPage+1}})},prevPage(){this.currentPage>1&&this.$router.push({name:"board",params:{page:this.currentPage-1}})},goToViewPost(t){this.$router.push({name:"ViewPost",query:{uid:t.Uid,regDate:t.Reg_Date,page:this.currentPage}})},goToWritePost(){this.$router.push({name:"WritePost"})}},created(){this.fetchPosts()}},f=s(1241);const _=(0,f.A)(C,[["render",b],["__scopeId","data-v-7d3f8e48"]]);var D=_}}]);
//# sourceMappingURL=397.9371c12f.js.map