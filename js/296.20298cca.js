"use strict";(self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[]).push([[296],{6296:function(e,t,l){l.r(t),l.d(t,{default:function(){return f}});var n=l(6768),s=l(4232),a=l(5130);const o={class:"request-page"},u={key:0},i={key:1},r={key:0},c={class:"request-table"},d={key:0},h=["onClick"],k={key:0},L=["onClick"],q={key:1},p={class:"request-form"},y={class:"form-fields"},R={key:2},w={class:"back-button-container"};function D(e,t,l,D,C,b){return(0,n.uX)(),(0,n.CE)("div",o,[t[23]||(t[23]=(0,n.Lk)("h1",null,"구매 요청 페이지",-1)),C.isLoading?((0,n.uX)(),(0,n.CE)("div",u,"로딩 중...")):((0,n.uX)(),(0,n.CE)("div",i,[C.requestData&&C.requestData.length>0&&!C.isOnlySellerId?((0,n.uX)(),(0,n.CE)("div",r,[(0,n.Lk)("table",c,[(0,n.Lk)("thead",null,[(0,n.Lk)("tr",null,[t[7]||(t[7]=(0,n.Lk)("th",null,"요청자 ID",-1)),t[8]||(t[8]=(0,n.Lk)("th",null,"내용",-1)),t[9]||(t[9]=(0,n.Lk)("th",null,"거래 방식",-1)),t[10]||(t[10]=(0,n.Lk)("th",null,"위치",-1)),t[11]||(t[11]=(0,n.Lk)("th",null,"전화번호",-1)),t[12]||(t[12]=(0,n.Lk)("th",null,"연락 방법",-1)),t[13]||(t[13]=(0,n.Lk)("th",null,"등록일",-1)),t[14]||(t[14]=(0,n.Lk)("th",null,"삭제",-1)),C.isSeller?((0,n.uX)(),(0,n.CE)("th",d,"수락")):(0,n.Q3)("",!0)])]),(0,n.Lk)("tbody",null,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(C.requestData,((e,t)=>((0,n.uX)(),(0,n.CE)("tr",{key:t},[(0,n.Lk)("td",null,(0,s.v_)(e.R_uid),1),(0,n.Lk)("td",null,(0,s.v_)(e.Content),1),(0,n.Lk)("td",null,(0,s.v_)(0===e.Deal_way?"직거래":"택배 거래"),1),(0,n.Lk)("td",null,(0,s.v_)(e.Location),1),(0,n.Lk)("td",null,(0,s.v_)(e.Phone),1),(0,n.Lk)("td",null,(0,s.v_)(e.Contact),1),(0,n.Lk)("td",null,(0,s.v_)(b.formatDate(e.Reg_date)),1),(0,n.Lk)("td",null,[(0,n.Lk)("button",{class:"delete-button",onClick:t=>b.deleteRequest(e.R_uid)},"삭제",8,h)]),C.isSeller?((0,n.uX)(),(0,n.CE)("td",k,[(0,n.Lk)("button",{class:"accept-button",onClick:t=>b.acceptRequest(e.R_uid)},"수락",8,L)])):(0,n.Q3)("",!0)])))),128))])])])):C.isOnlySellerId&&!C.isSeller?((0,n.uX)(),(0,n.CE)("div",q,[t[21]||(t[21]=(0,n.Lk)("p",null,"현재 요청된 데이터가 없습니다.",-1)),(0,n.Lk)("div",null,[t[20]||(t[20]=(0,n.Lk)("p",null,"구매 요청을 보내보세요.",-1)),(0,n.Lk)("div",p,[(0,n.bo)((0,n.Lk)("textarea",{"onUpdate:modelValue":t[0]||(t[0]=e=>C.newRequest.content=e),placeholder:"요청 내용을 입력하세요"},null,512),[[a.Jo,C.newRequest.content]]),(0,n.Lk)("div",y,[(0,n.Lk)("label",null,[t[16]||(t[16]=(0,n.eW)(" 거래 방식: ")),(0,n.bo)((0,n.Lk)("select",{"onUpdate:modelValue":t[1]||(t[1]=e=>C.newRequest.dealWay=e)},t[15]||(t[15]=[(0,n.Lk)("option",{value:"0"},"직거래",-1),(0,n.Lk)("option",{value:"1"},"택배 거래",-1)]),512),[[a.u1,C.newRequest.dealWay]])]),(0,n.Lk)("label",null,[t[17]||(t[17]=(0,n.eW)(" 거래 지역: ")),(0,n.bo)((0,n.Lk)("input",{type:"text","onUpdate:modelValue":t[2]||(t[2]=e=>C.newRequest.location=e)},null,512),[[a.Jo,C.newRequest.location]])]),(0,n.Lk)("label",null,[t[18]||(t[18]=(0,n.eW)(" 연락처: ")),(0,n.bo)((0,n.Lk)("input",{type:"text","onUpdate:modelValue":t[3]||(t[3]=e=>C.newRequest.phone=e)},null,512),[[a.Jo,C.newRequest.phone]])]),(0,n.Lk)("label",null,[t[19]||(t[19]=(0,n.eW)(" 연락 방법: ")),(0,n.bo)((0,n.Lk)("input",{type:"text","onUpdate:modelValue":t[4]||(t[4]=e=>C.newRequest.contact=e)},null,512),[[a.Jo,C.newRequest.contact]])])]),(0,n.Lk)("button",{onClick:t[5]||(t[5]=(...e)=>b.sendRequest&&b.sendRequest(...e))},"요청 보내기")])])])):C.isOnlySellerId&&C.isSeller?((0,n.uX)(),(0,n.CE)("div",R,t[22]||(t[22]=[(0,n.Lk)("p",null,"판매자는 자신에게 요청을 보낼 수 없습니다.",-1)]))):(0,n.Q3)("",!0),(0,n.Lk)("div",w,[(0,n.Lk)("button",{onClick:t[6]||(t[6]=(...e)=>b.goBack&&b.goBack(...e))},"뒤로가기")])]))])}l(4114);var C=l(4373),b=l(5068),v={props:["ino"],data(){return{requestData:null,userID:"",auth:"",sellerID:"",isLoading:!0,isOnlySellerId:!1,isSeller:!1,newRequest:{content:"",dealWay:"0",location:"",phone:"",contact:""}}},computed:{isOwner(){return this.userID===this.sellerID}},methods:{async fetchRequestData(){try{const e=localStorage.getItem("token");if(!e)throw new Error("토큰이 존재하지 않습니다.");const t=(0,b.s)(e);this.userID=t.userID,this.auth=t.auth;const l=await C.A.get(`http://localhost:3000/request/${this.ino}`,{params:{userId:this.userID},headers:{"Cache-Control":"no-cache"}});if(Array.isArray(l.data)){this.requestData=l.data;const e=l.data[0];console.log(e),this.isOnlySellerId=1===l.data.length&&e.S_uid&&!e.Content&&!e.Deal_way&&!e.Location&&!e.Phone&&!e.Contact,this.isSeller=this.userID===(e?.S_uid||"")}else this.requestData=[],this.isOnlySellerId=!1,this.isSeller=!1}catch(e){console.error("fetchRequestData: 요청 데이터 가져오기 오류 -",e),this.requestData=[],this.isOnlySellerId=!1,this.isSeller=!1}finally{this.isLoading=!1,console.log("isOnlySellerId:",this.isOnlySellerId),console.log("isSeller:",this.isSeller)}},formatDate(e){const t={year:"numeric",month:"2-digit",day:"2-digit"};return new Date(e).toLocaleDateString("ko-KR",t)},async acceptRequest(e){try{const t=await C.A.put(`http://localhost:3000/request/${this.ino}/${e}`,{B_uid:e});t.data.success?(alert("요청이 성공적으로 수락되었습니다."),this.goBack()):alert("요청 수락에 실패했습니다.")}catch(t){console.error("acceptRequest: 요청 수락 중 오류 -",t),alert("요청 수락 중 오류가 발생했습니다.")}},async deleteRequest(e){try{const t=await C.A.delete(`http://localhost:3000/request/${this.ino}/${e}`);t.data.success?(alert("요청이 성공적으로 삭제되었습니다."),this.fetchRequestData()):alert("삭제에 실패했습니다.")}catch(t){console.error("deleteRequest: 요청 삭제 중 오류 -",t)}},async sendRequest(){try{const e=await C.A.post(`http://localhost:3000/request/${this.ino}`,{R_uid:this.userID,Content:this.newRequest.content,Deal_way:this.newRequest.dealWay,Location:this.newRequest.location,Phone:this.newRequest.phone,Contact:this.newRequest.contact});e.data.success?(alert("요청이 성공적으로 전송되었습니다."),this.newRequest={content:"",dealWay:"0",location:"",phone:"",contact:""},this.fetchRequestData()):alert("요청 전송에 실패했습니다.")}catch(e){console.error("sendRequest: 요청 전송 중 오류 -",e)}},goBack(){this.$router.push(`/read/${this.ino}`)}},mounted(){this.fetchRequestData()}},I=l(1241);const S=(0,I.A)(v,[["render",D],["__scopeId","data-v-77e65bde"]]);var f=S}}]);
//# sourceMappingURL=296.20298cca.js.map