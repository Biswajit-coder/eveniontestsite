(this.webpackJsonpevenion=this.webpackJsonpevenion||[]).push([[0],{36:function(e,t,s){},37:function(e,t,s){},65:function(e,t,s){"use strict";s.r(t);var a=s(1),r=s.n(a),n=s(26),c=s.n(n),i=(s(35),s(36),s(37),s(30)),l=s(2),o=s(6),d=s(10),j=s(11),m=s(13),h=s(12),b=s(27),u=s.n(b),p=s(0),x=function(e){Object(m.a)(s,e);var t=Object(h.a)(s);function s(){var e;return Object(d.a)(this,s),(e=t.call(this)).processFirstname=function(t){e.setState({firstname:t.target.value})},e.processLaststname=function(t){e.setState({lastname:t.target.value})},e.processDateofbirth=function(t){e.setState({dateofbirth:t.target.value})},e.processGender=function(t){e.setState({gender:t.target.value})},e.processEmail=function(t){e.setState({email:t.target.value})},e.processMobile=function(t){e.setState({mobile:t.target.value})},e.processState=function(t){e.setState({state:t.target.value})},e.processDist=function(t){e.setState({dist:t.target.value})},e.processAddress=function(t){e.setState({addr:t.target.value})},e.processInput=function(t){var s=e.state.inputfield;s[t.target.name]=t.target.value,e.setState({inputfield:s})},e.save=function(t){var s={firstname:e.state.firstname,lastname:e.state.lastname,dateofbirth:e.state.dateofbirth,gender:e.state.gender,email:e.state.email,mobile:e.state.mobile,addr:e.state.addr};u.a.post("http://localhost:3001/users",s).then((function(t){e.setState({firstname:"",lastname:"",dateofbirth:"",gender:"",email:"",mobile:"",addr:""})})),t.preventDefault();var a=e.state.fielderror,r=e.state.inputfield,n=!0;r.firstname?a.firstnameerror="":(n=!1,a.firstnameerror="Please enter your name !");/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(r.email)?a.emailerror="":(n=!1,a.emailerror="Please enter your Email-id !");/^[6-9]\d{9}$/.test(r.mobile)?a.mobileerror="":(n=!1,a.mobileerror="Please enter your 10 digit mobile no. !"),r.state?a.stateerror="":(n=!1,a.stateerror="Please select your state !"),r.dist?a.disterror="":(n=!1,a.disterror="Please select your district !");var c="";c=1==n?"Data save successfully...":"Failed : Invalid input...",e.setState({fielderror:a,message:c})},e.state={fieldList:[],inputfield:{},fielderror:{},message:"",firstname:"",lastname:"",dateofbirth:"",gender:"",email:"",mobile:"",addr:""},e}return Object(j.a)(s,[{key:"render",value:function(){var e,t;return Object(p.jsx)("div",{className:"container mt-3",children:Object(p.jsxs)("div",{className:"row",children:[Object(p.jsx)("div",{className:"col-lg-2"}),Object(p.jsx)("div",{className:"col-lg-8",children:Object(p.jsxs)("div",{className:"bg-white p-4",children:[Object(p.jsx)("h3",{className:"text-center text-primary",children:" User Registration "}),Object(p.jsxs)("p",{className:"text-warning",children:[" ",this.state.message," "]}),Object(p.jsx)("form",{onSubmit:this.save,children:Object(p.jsxs)("fieldset",{children:[Object(p.jsxs)("div",{className:"row form-group mb-3",children:[Object(p.jsxs)("div",{className:"col-lg-6",children:[Object(p.jsxs)("label",{children:[" First Name ",Object(p.jsx)("sup",{className:"text-danger",children:"*"})]}),Object(p.jsx)("input",Object(o.a)({type:"text",className:"form-control",minLength:"3",maxLength:"20",name:"firstname",placeholder:"Enter first name",onChange:this.processFirstname},"onChange",this.processInput)),Object(p.jsx)("i",{className:"text-danger",children:this.state.fielderror.firstnameerror})]}),Object(p.jsxs)("div",{className:"col-lg-6",children:[Object(p.jsx)("label",{children:" Last Name "}),Object(p.jsx)("input",Object(o.a)({type:"text",className:"form-control input-box",maxLength:"20",name:"lastname",placeholder:"Enter last name",onChange:this.processLastname},"onChange",this.processInput))]})]}),Object(p.jsxs)("div",{className:"row form-group mb-3",children:[Object(p.jsxs)("div",{className:"col-lg-6",children:[Object(p.jsxs)("label",{children:[" Gender ",Object(p.jsx)("sup",{className:"text-danger",children:"*"})," "]}),Object(p.jsx)("input",{type:"radio",name:"gender",value:"male",onChange:this.processGender}),"Male",Object(p.jsx)("input",{type:"radio",name:"gender",value:"female",onChange:this.processGender}),"Female"]}),Object(p.jsxs)("div",{className:"col-lg-6 input-group-date",children:[Object(p.jsxs)("label",{children:[" Date of Birth ",Object(p.jsx)("sup",{className:"text-danger",children:"*"})," "]}),Object(p.jsx)("input",Object(o.a)({type:"date",format:"DD-MM-YYYY",name:"dateofbirth",className:"form-control",onChange:this.processDateofbirth},"onChange",this.processInput)),Object(p.jsxs)("i",{className:"text-danger",children:[" ",this.state.fielderror.dateofbirtherror," "]})]})]}),Object(p.jsxs)("div",{className:"row form-group mb-3",children:[Object(p.jsxs)("div",{className:"col-lg-6",children:[Object(p.jsxs)("label",{children:[" Email ",Object(p.jsx)("sup",{className:"text-danger",children:"*"})," "]}),Object(p.jsx)("input",Object(o.a)({type:"text",className:"form-control",name:"email",placeholder:"Enter your email",onChange:this.processEmail},"onChange",this.processInput)),Object(p.jsxs)("i",{className:"text-danger",children:[" ",this.state.fielderror.emailerror," "]})]}),Object(p.jsxs)("div",{className:"col-lg-6",children:[Object(p.jsx)("label",{children:" Mobile Number "}),Object(p.jsx)("input",Object(o.a)({type:"number",className:"form-control",name:"mobile",placeholder:"Enter your mobile no.",onChange:this.processMobile},"onChange",this.processInput)),Object(p.jsxs)("i",{className:"text-danger",children:[" ",this.state.fielderror.mobileerror," "]})]})]}),Object(p.jsxs)("div",{className:"row form-group mb-3",children:[Object(p.jsxs)("div",{className:"col-lg-6",children:[Object(p.jsxs)("label",{children:[" State ",Object(p.jsx)("sup",{className:"text-danger",children:"*"})," "]}),Object(p.jsxs)("select",(e={className:"form-control",name:"state",onChange:this.processState},Object(o.a)(e,"onChange",this.processInput),Object(o.a)(e,"children",[Object(p.jsx)("option",{value:"",children:"Choose"}),Object(p.jsx)("option",{value:"abc",children:"abc"}),Object(p.jsx)("option",{value:"def",children:"def"}),Object(p.jsx)("option",{value:"ghi",children:"ghi"})]),e)),Object(p.jsxs)("i",{className:"text-danger",children:[" ",this.state.fielderror.stateerror," "]})]}),Object(p.jsxs)("div",{className:"col-lg-6",children:[Object(p.jsxs)("label",{children:[" District ",Object(p.jsx)("sup",{className:"text-danger",children:"*"})," "]}),Object(p.jsxs)("select",(t={className:"form-control",name:"dist",onChange:this.processDist},Object(o.a)(t,"onChange",this.processInput),Object(o.a)(t,"children",[Object(p.jsx)("option",{value:"",children:"Choose"}),Object(p.jsx)("option",{value:"abc",children:"abc"}),Object(p.jsx)("option",{value:"def",children:"def"}),Object(p.jsx)("option",{value:"ghi",children:"ghi"})]),t)),Object(p.jsxs)("i",{className:"text-danger",children:[" ",this.state.fielderror.disterror," "]})]})]}),Object(p.jsxs)("div",{className:"row form-group mb-3",children:[Object(p.jsx)("label",{children:"Address"}),Object(p.jsx)("textarea",Object(o.a)({className:"form-control",rows:"2",maxLength:"500",name:"addr",placeholder:"Enter your address",onChange:this.processAddress},"onChange",this.processInput))]}),Object(p.jsxs)("div",{className:"row from-group mb-3",children:[Object(p.jsx)("div",{className:"col-lg-6"}),Object(p.jsx)("div",{className:"col-lg-6",children:Object(p.jsx)("button",{type:"submit",const:!0,path:"/yourdetails",className:"btn btn-primary float-right",children:"Register"})})]})]})})]})}),Object(p.jsx)("div",{className:"col-lg-2"})]})})}}]),s}(a.Component);a.Component;var g=function(){return Object(p.jsx)(i.a,{children:Object(p.jsx)(l.a,{exact:!0,path:"/",component:x})})},O=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,66)).then((function(t){var s=t.getCLS,a=t.getFID,r=t.getFCP,n=t.getLCP,c=t.getTTFB;s(e),a(e),r(e),n(e),c(e)}))};c.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(g,{})}),document.getElementById("root")),O()}},[[65,1,2]]]);
//# sourceMappingURL=main.0e4cfab5.chunk.js.map