"use strict";(self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[]).push([[885],{5885:function(e,t,a){a.r(t),a.d(t,{default:function(){return E}});a(4114);var s=a(6768),r=a(4232),i=a(5130);const n={key:0},o={key:1},l={key:2,id:"app"},c={class:"main-content"},u={class:"sidebar"},g={class:"profile-and-products"},d={class:"my-products"},p={class:"item-table"},m={key:0},k=["onClick"],h={class:"item-image"},L=["src"],P={class:"item-title"},v={href:"#"},y={class:"item-price"},f={class:"post-time"},b={class:"pagination"},C=["disabled"],$=["disabled"];function S(e,t,a,S,_,w){return _.loading?((0,s.uX)(),(0,s.CE)("div",n,"Loading...")):_.error?((0,s.uX)(),(0,s.CE)("div",o,(0,r.v_)(_.error),1)):((0,s.uX)(),(0,s.CE)("div",l,[(0,s.Lk)("main",c,[(0,s.Lk)("aside",u,[(0,s.Lk)("ul",null,[(0,s.Lk)("li",{onClick:t[0]||(t[0]=t=>e.$router.push("/mypage"))},"나의 정보 보기"),(0,s.Lk)("li",{onClick:t[1]||(t[1]=t=>e.$router.push("/mypage/sale"))},"나의 판매 내역"),(0,s.Lk)("li",{onClick:t[2]||(t[2]=t=>e.$router.push("/mypage/purchase"))},"나의 구매 내역"),(0,s.Lk)("li",{onClick:t[3]||(t[3]=t=>e.$router.push("/mypage/like"))},"내가 찜한 상품")])]),(0,s.Lk)("div",g,[t[9]||(t[9]=(0,s.Lk)("section",{class:"profile"},[(0,s.Lk)("h2",null,"사용자 프로필 수정"),(0,s.Lk)("div",{class:"profile-box"}," 사용자 프로필 ")],-1)),(0,s.Lk)("section",d,[t[8]||(t[8]=(0,s.Lk)("h2",null,"내가 구매한 상품",-1)),(0,s.Lk)("table",p,[t[7]||(t[7]=(0,s.Lk)("thead",null,[(0,s.Lk)("tr",null,[(0,s.Lk)("th",{class:"image-column"},"사진"),(0,s.Lk)("th",{class:"title-column"},"제목"),(0,s.Lk)("th",{class:"price-column"},"가격"),(0,s.Lk)("th",{class:"date-column"},"작성일")])],-1)),(0,s.Lk)("tbody",null,[_.items?((0,s.uX)(!0),(0,s.CE)(s.FK,{key:1},(0,s.pI)(w.paginatedPosts,((e,t)=>((0,s.uX)(),(0,s.CE)("tr",{key:t,class:(0,r.C4)({notice:null!==e.B_uid}),onClick:(0,i.D$)((t=>w.goToViewPost(e)),["prevent"])},[(0,s.Lk)("td",h,[(0,s.Lk)("img",{src:`data:image/jpeg;base64,${e.Image}`,alt:"Image from server"},null,8,L)]),(0,s.Lk)("td",P,[(0,s.Lk)("a",v,(0,r.v_)(e.Title),1)]),(0,s.Lk)("td",y,(0,r.v_)(e.Price.toLocaleString("ko-KR",{style:"currency",currency:"KRW"})),1),(0,s.Lk)("td",f,(0,r.v_)(w.formatDate(e.Reg_date)),1)],10,k)))),128)):((0,s.uX)(),(0,s.CE)("tr",m,t[6]||(t[6]=[(0,s.Lk)("td",{class:"item-image"},[(0,s.Lk)("img",{src:"https://i.namu.wiki/i/88Te46HNfgOSkt09UwDFqKXvmL2K80dInPzMhlgtvya6_l_H2NkdBxBiY_-1efoVmSADAH9v5oiR0B4jVMGwMw.webp",alt:"Example Image"})],-1),(0,s.Lk)("td",{class:"item-title"},"구매상품이",-1),(0,s.Lk)("td",{class:"item-price"},"존재하지",-1),(0,s.Lk)("td",{class:"post-time"},"않습니다",-1)])))])])]),(0,s.Lk)("div",b,[(0,s.Lk)("p",null,"페이지 "+(0,r.v_)(w.currentPage)+" / "+(0,r.v_)(w.totalPages),1),(0,s.Lk)("button",{class:"pagination-button",onClick:t[4]||(t[4]=(...e)=>w.prevPage&&w.prevPage(...e)),disabled:1===w.currentPage}," 이전 페이지 ",8,C),(0,s.Lk)("button",{class:"pagination-button",onClick:t[5]||(t[5]=(...e)=>w.nextPage&&w.nextPage(...e)),disabled:w.currentPage===w.totalPages}," 다음 페이지 ",8,$)])])])]))}var _=a(4373),w={props:["page"],data(){return{items:[],itemsPerPage:5,loading:!0,error:null}},mounted(){const e=localStorage.getItem("token");_.A.get("http://localhost:3000/mypage/purchase",{headers:{Authorization:`Bearer ${e}`}}).then((e=>{this.items=e.data.items,console.log("items: "+JSON.stringify(this.items))})).catch((e=>{console.error("Error fetching MyPage data:",e),"Item not exists"===e.response.data.message?this.error=null:e.response&&e.response.data?this.error=e.response.data.message||"Failed to load data":this.error="An unexpected error occurred"})).finally((()=>{this.loading=!1}))},computed:{currentPage(){return parseInt(this.page)||1},totalPages(){return Math.ceil(this.items.length/this.itemsPerPage)||1},paginatedPosts(){const e=(this.currentPage-1)*this.itemsPerPage,t=e+this.itemsPerPage;return this.items.slice(e,t)}},methods:{formatDate(e){if(!e)return"N/A";const t=new Date(e);return`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}-${String(t.getDate()).padStart(2,"0")} ${String(t.getHours()).padStart(2,"0")}:${String(t.getMinutes()).padStart(2,"0")}`},nextPage(){this.currentPage<this.totalPages&&this.$router.push({name:"mypurchase",params:{page:this.currentPage+1}})},prevPage(){this.currentPage>1&&this.$router.push({name:"mypurchase",params:{page:this.currentPage-1}})},goToViewPost(e){this.$router.push({name:"read",params:{ino:e.Ino}})}}},I=a(1241);const x=(0,I.A)(w,[["render",S],["__scopeId","data-v-459b5830"]]);var E=x}}]);
//# sourceMappingURL=885.89588a70.js.map