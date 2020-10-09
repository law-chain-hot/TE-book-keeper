(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{158:function(e,a,t){},196:function(e,a,t){e.exports=t(351)},201:function(e,a,t){},202:function(e,a,t){},229:function(e,a,t){},322:function(e,a,t){},351:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(26),i=t.n(l),o=(t(201),t(159)),s=t(160),c=t(194),m=t(189),u=t(35),d=(t(202),t(353)),p=t(83),y=t(62),b=t(359),E=t(360),h=t(361),f=t(362),g=t(363),v=t(364),k=t(365),C=t(366),I=d.a.Header,N=d.a.Content,O=(d.a.Footer,d.a.Sider),x=p.a.SubMenu,S=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={collapsed:!1},e.onCollapse=function(e){console.log(e)},e.handleRouter=function(a){return function(){e.props.history.push("".concat(a))}},e.handleClearData=function(e){localStorage.clear()},e}return Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(d.a,{style:{minHeight:"100vh"}},r.a.createElement(O,{collapsible:!0,collapsed:this.state.collapsed,onCollapse:this.onCollapse},r.a.createElement(y.a,{type:"primary",onClick:this.handleRouter("/"),id:"btn-home"},r.a.createElement(b.a,{id:"icon-home"})," Book-Keeper"),r.a.createElement(p.a,{theme:"dark",defaultSelectedKeys:["1"],mode:"inline"},r.a.createElement(x,{key:"sub0",icon:r.a.createElement(E.a,null),title:"Employees"},r.a.createElement(p.a.Item,{key:"11",onClick:this.handleRouter("/employeelist")},"List Employees"),r.a.createElement(p.a.Item,{key:"12",onClick:this.handleRouter("/employeeadd")},"Add Employee")),r.a.createElement(x,{key:"sub1",icon:r.a.createElement(h.a,null),title:"Customers"},r.a.createElement(p.a.Item,{key:"21",onClick:this.handleRouter("/customerlist")},"List Customers"),r.a.createElement(p.a.Item,{key:"22",onClick:this.handleRouter("/customeradd")},"Add Customer")),r.a.createElement(x,{key:"sub3",icon:r.a.createElement(f.a,null),title:"Vendors"},r.a.createElement(p.a.Item,{key:"31",onClick:this.handleRouter("/vendorlist")},"List Vendors"),r.a.createElement(p.a.Item,{key:"32",onClick:this.handleRouter("/vendoradd")},"Add Vendor")),r.a.createElement(x,{key:"sub4",icon:r.a.createElement(g.a,null),title:"Pay"},r.a.createElement(p.a.Item,{key:"41",onClick:this.handleRouter("/payemployee")},"Pay Employee"),r.a.createElement(p.a.Item,{key:"42",onClick:this.handleRouter("/payroll")},"Payroll")),r.a.createElement(p.a.Item,{key:"test",icon:r.a.createElement(v.a,null),onClick:this.handleRouter("/inventory")},"Inventory"),r.a.createElement(x,{key:"sub5",icon:r.a.createElement(k.a,null),title:"Invoice"},r.a.createElement(p.a.Item,{key:"51",onClick:this.handleRouter("/invoice")},"Create Invoice"),r.a.createElement(p.a.Item,{key:"52",onClick:this.handleRouter("/invoicehistory")},"Invoice History")),r.a.createElement(x,{key:"sub6",icon:r.a.createElement(C.a,null),title:"PO"},r.a.createElement(p.a.Item,{key:"61",onClick:this.handleRouter("/po")},"Create PO"),r.a.createElement(p.a.Item,{key:"62",onClick:this.handleRouter("/pohistory")},"PO History")),r.a.createElement(p.a.Item,{key:"2",icon:r.a.createElement(v.a,null),onClick:this.handleRouter("/incomestatement")},"Income Statement"),r.a.createElement(p.a.Item,{key:"3",icon:r.a.createElement(v.a,null),onClick:this.handleRouter("/balancesheet")},"Balance Sheet"),r.a.createElement(p.a.Item,{key:"9",title:"",onClick:this.handleClearData,id:"btn-clear"},r.a.createElement(y.a,{type:"primary",danger:!0,href:"https://law-chain-hot.github.io/TE-book-keeper/",id:"btn-restore-data"},"Restore Default Value")))),r.a.createElement(d.a,{className:"site-layout"},r.a.createElement(I,{className:"site-layout-background",style:{padding:0}}),r.a.createElement(N,{style:{margin:"0 16px"}},this.props.contents)))}}]),t}(r.a.Component),q=Object(u.e)(S),D=(t(229),function(){return r.a.createElement("div",{className:"home-container"},r.a.createElement("h1",null,"Welcome to TE-book-keeper!"),r.a.createElement("h3",null,"Using it by clicking the sidebar! Have fun :)"))}),j=t(72),$=function(){var e=new Date,a=e.getDate(),t=e.getMonth(),n=e.getFullYear();return"".concat(t,"/").concat(a,"/").concat(n)},w={employees:{data:[{address1:"310 E Springfield",address2:"300",city:"Champaign",firstName:"Jack ",id:"kg1lcadr",lastName:"Lee",salary:"6000",ssn:"800220311",state:"IL",withholding:"0",zipCode:"61820"}]},customers:{data:[{address1:"E John St",address2:"3001",city:"Chicago",companyName:"Daniel Co.",firstName:"Daniel",id:"kg1jmob3",lastName:"Lilly",price:"30",state:"IL",zipCode:"60007"}]},vendors:{data:[{address1:"310 Haskell",address2:"001",city:"Chicago",companyName:"Steel Co.",id:"kg1jo5kl",part:"Steel",priceUnit:"1",state:"IL",zipCode:"60001"},{address1:"1003 Green",address2:"301",city:"Champaign",companyName:"Wood Co.",id:"kg1jpdzc",part:"Wood",priceUnit:"15",state:"IL",zipCode:"61820"}]},payroll:{data:[]},inventory:{data:[{part:"Steel",priceUnit:1,quantity:1e4,value:0},{part:"Wood",priceUnit:15,quantity:2e3,value:0}]},expenses:{payroll:0,payrollWithholding:0,bills:0,annualExpenses:1e4},income:{otherIncome:0,operatingIncome:0,incomeTax:0},assets:{cash:1e5,accountsReceivable:0,inventory:0,buildings:1e5,equipment:1e4,furniture:1e4},liabilites:{accountsPayable:0,notesPayable:0,accruals:0},invoiceHistory:{data:[]},POHistory:{data:[]}},P=null,A=function(){localStorage.setItem("localData",JSON.stringify(P));var e=JSON.parse(localStorage.getItem("localData"));console.log("Successfully update the localStorage, current localData is:",e),console.dir(e)},R=function(){return P.employees.data},L=function(){return P.customers.data},T=function(){return P.vendors.data},F=function(e){var a=H(e),t=Object(j.a)(a,3),n=t[0],r=t[1],l=t[2];e.withholding=parseInt(e.withholding)+parseInt(r),U(-n),B("payroll",l),B("payrollWithholding",r);var i={date:$(),employee:"".concat(e.firstName," ").concat(e.lastName),salary:n,withholding:r,dispusement:l};P.payroll.data.push(i)},H=function(e){return[e.salary,.2*e.salary,.8*e.salary]},W=function(){return P.payroll.data},U=function(e){P.assets.cash+=e,A()},B=function(e,a){P.expenses[e]+=a,A()},z=function(){return M(P.inventory.data),A(),P.inventory.data},M=function(e){e.forEach((function(e){e.value=e.priceUnit*e.quantity}))},J=function(e,a){var t=e.price*a,n={invoiceNumber:P.invoiceHistory.data.length+1,date:$(),customer:e.companyName,quantity:a,priceUnit:e.price,total:t};V(t),G(a),P.invoiceHistory.data.push(n)},V=function(e){P.assets.accountsReceivable+=e},G=function(e){P.inventory.data[0].quantity-=4*e,P.inventory.data[1].quantity-=e},Y=function(e){var a=P.inventory.data;return 4*a[0].quantity>=e&&a[0].quantity>=e},Z=function(){return P.invoiceHistory.data},K=function(){return P.POHistory.data},Q=function(e,a){return e*a<=P.assets.cash},X=function(e,a){var t=e.priceUnit*a,n={PONumber:P.POHistory.data.length+1,date:$(),supplier:e.companyName,quantity:a,priceUnit:e.priceUnit,total:t};_(t),ee(a),P.POHistory.data.push(n)},_=function(e){P.liabilites.accountsPayable+=e},ee=function(e){P.inventory.data[0].quantity+=e,P.inventory.data[1].quantity+=e},ae=function(){var e=P.assets.accountsReceivable,a=te(),t=e-a,n=P.expenses.payroll,r=P.expenses.payrollWithholding,l=P.expenses.bills,i=P.expenses.annualExpenses,o=n+r+l+i,s=P.income.otherIncome,c=t-o,m=P.income.incomeTax;return{sales:e,COGS:a,grossProfit:t,payroll:n,payrollWithholding:r,bills:l,annualExpenses:i,totalExpenses:o,otherIncome:s,operatingIncome:c,incomeTax:m,netIncome:c-m}},te=function(){var e=0;return P.invoiceHistory.data.forEach((function(a){e+=10.5*a.quantity})),e},ne=function(){var e=P.assets.cash,a=P.assets.accountsReceivable,t=z().reduce((function(e,a){return e+a.value}),0),n=e+a+t,r=P.assets.buildings,l=P.assets.equipment,i=P.assets.furniture,o=r+l+i,s=n+o,c=P.liabilites.accountsPayable,m=P.liabilites.notesPayable,u=P.liabilites.accruals,d=c+m+u,p=d+0;return{cash:e,accountsReceivable:a,inventory:t,totalCurrenAssets:n,land:r,equipment:l,furniture:i,totalFixAssets:o,totalAssets:s,accountsPayable:c,notesPayable:m,accruals:u,totalCurrentLiabilities:d,mortage:0,totalLongTermDebt:0,totalLiabilities:p,netWorth:s-p}},re=t(354),le=function(e){return r.a.createElement(re.a,{columns:e.col,dataSource:e.data})},ie={companyName:"Company Name",firstName:"First Name",lastName:"Last Name",address1:"Address 1",address2:"Address 2",city:"City",salary:"Salary",ssn:"Social Security Number",state:"State",withholding:"Withholding",zipCode:"ZIP Code",price:"Price",part:"Part",priceUnit:"Price/Unit ($)",employee:"Employee",dispusement:"Dispusement",date:"Date",quantity:"Quantity",steel:"Steel",wood:"Wood",value:"Value ($)",total:"Total ($)",customer:"Customer",invoiceNumber:"No.",PONumber:"PO NO.",supplier:"Supplier"};var oe=function(e){var a=e.getDisplayData,t=e.pageName,l=Object(n.useState)([]),i=Object(j.a)(l,2),o=i[0],s=i[1];Object(n.useEffect)((function(){s(a())}),[]);var c=function(e){return 0===e.length?[]:(console.log("setCol -> Object.keys(displayData[0]).filter(cur => cur !== 'id')",Object.keys(e[0]).filter((function(e){return"id"!==e}))),Object.keys(e[0]).filter((function(e){return"id"!==e})).map((function(e){return{title:ie[e],dataIndex:e,key:e}})))}(o);return r.a.createElement("div",null,r.a.createElement("h2",null),r.a.createElement("h2",null,t),r.a.createElement(le,{data:o,col:c}))},se=function(){return r.a.createElement(oe,{getDisplayData:R,pageName:"Employee List"})},ce=(t(322),t(40)),me=t(91),ue=t.n(me),de=t(355),pe=t(357),ye={labelCol:{span:6},wrapperCol:{span:12}},be={required:"${label} is required!",types:{email:"${label} is not validate email!",number:"${label} is not a validate number!"},number:{range:"${label} must be between ${min} and ${max}"}},Ee=function(){var e=Object(n.useRef)(null);return r.a.createElement(de.a,Object.assign({},ye,{name:"nest-messages",onFinish:function(a){var t;a.user.id=ue()(),console.log(a),t=a.user,P.employees.data.push(t),A(),e.current.resetFields()},validateMessages:be,labelAlign:"right",ref:e}),r.a.createElement(de.a.Item,{name:["user","firstName"],label:"First Name",rules:[{required:!0}]},r.a.createElement(pe.a,null)),r.a.createElement(de.a.Item,{name:["user","lastName"],label:"Last Name",rules:[{required:!0}]},r.a.createElement(pe.a,null)),r.a.createElement(de.a.Item,{name:["user","address1"],label:"Address 1",rules:[{required:!0}]},r.a.createElement(pe.a,null)),r.a.createElement(de.a.Item,{name:["user","address2"],label:"Address 2",rules:[{required:!0}]},r.a.createElement(pe.a,null)),r.a.createElement(de.a.Item,{name:["user","city"],label:"City",rules:[{required:!0}]},r.a.createElement(pe.a,null)),r.a.createElement(de.a.Item,{name:["user","state"],label:"State",rules:[{required:!0}]},r.a.createElement(pe.a,null)),r.a.createElement(de.a.Item,{name:["user","zipCode"],label:"Zip Code",rules:[{required:!0}]},r.a.createElement(pe.a,null)),r.a.createElement(de.a.Item,{name:["user","ssn"],label:"Social Security Number(numbers only)",rules:[{type:"string",len:9,required:!0}]},r.a.createElement(pe.a,{maxLength:"9"})),r.a.createElement(de.a.Item,{name:["user","withholding"],label:"Withholding",rules:[{required:!0}]},r.a.createElement(pe.a,null)),r.a.createElement(de.a.Item,{name:["user","salary"],label:"Salary (Dollars)",rules:[{required:!0}]},r.a.createElement(pe.a,{type:"number"})),r.a.createElement(de.a.Item,{wrapperCol:Object(ce.a)(Object(ce.a)({},ye.wrapperCol),{},{offset:8})},r.a.createElement(y.a,{type:"primary",htmlType:"submit"},"Submit")))},he=function(){return r.a.createElement("div",{className:"centerBox"},r.a.createElement(Ee,null))},fe=function(){return r.a.createElement(oe,{getDisplayData:L,pageName:"Customers List"})},ge={labelCol:{span:6},wrapperCol:{span:12}},ve={required:"${label} is required!",types:{email:"${label} is not validate email!",number:"${label} is not a validate number!"},number:{range:"${label} must be between ${min} and ${max}"}},ke=function(e){var a=Object(n.useRef)(null);return r.a.createElement(de.a,Object.assign({},ge,{name:"nest-messages",onFinish:function(e){var t;e.user.id=ue()(),console.log(e),t=e.user,P.customers.data.push(t),A(),a.current.resetFields()},validateMessages:ve,labelAlign:"right",ref:a}),r.a.createElement(de.a.Item,{name:["user","companyName"],label:"Company Name",rules:[{required:!0}]},r.a.createElement(pe.a,null)),r.a.createElement(de.a.Item,{name:["user","firstName"],label:"First Name",rules:[{required:!0}]},r.a.createElement(pe.a,null)),r.a.createElement(de.a.Item,{name:["user","lastName"],label:"Last Name",rules:[{required:!0}]},r.a.createElement(pe.a,null)),r.a.createElement(de.a.Item,{name:["user","address1"],label:"Address 1",rules:[{required:!0}]},r.a.createElement(pe.a,null)),r.a.createElement(de.a.Item,{name:["user","address2"],label:"Address 2",rules:[{required:!0}]},r.a.createElement(pe.a,null)),r.a.createElement(de.a.Item,{name:["user","city"],label:"City",rules:[{required:!0}]},r.a.createElement(pe.a,null)),r.a.createElement(de.a.Item,{name:["user","state"],label:"State",rules:[{required:!0}]},r.a.createElement(pe.a,null)),r.a.createElement(de.a.Item,{name:["user","zipCode"],label:"Zip Code",rules:[{required:!0}]},r.a.createElement(pe.a,null)),r.a.createElement(de.a.Item,{name:["user","price"],label:"Price",rules:[{required:!0}]},r.a.createElement(pe.a,{type:"number"})),r.a.createElement(de.a.Item,{wrapperCol:Object(ce.a)(Object(ce.a)({},ge.wrapperCol),{},{offset:8})},r.a.createElement(y.a,{type:"primary",htmlType:"submit"},"Submit")))},Ce=function(){return r.a.createElement("div",{className:"centerBox"},"Add Customer",r.a.createElement(ke,null))},Ie=function(){return r.a.createElement(oe,{getDisplayData:T,pageName:"Vendors List"})},Ne=t(106),Oe={labelCol:{span:6},wrapperCol:{span:12}},xe={required:"${label} is required!",types:{email:"${label} is not validate email!",number:"${label} is not a validate number!"},number:{range:"${label} must be between ${min} and ${max}"}},Se=function(e){var a=Object(n.useRef)(null),t=z().map((function(e){return r.a.createElement(Ne.a.Option,{key:e.part},e.part)})),l=e.items.map((function(e){return"priceUnit"===e.name?r.a.createElement(de.a.Item,{name:["user",e.name],label:ie[e.name],rules:[{required:!0}]},r.a.createElement(pe.a,{type:"number"})):"part"===e.name?r.a.createElement(de.a.Item,{name:["user","part"],label:"Part",rules:[{required:!0}]},r.a.createElement(Ne.a,null,t)):r.a.createElement(de.a.Item,{name:["user",e.name],label:ie[e.name],rules:[{required:!0}]},r.a.createElement(pe.a,null))}));return r.a.createElement(de.a,Object.assign({},Oe,{name:"nest-messages",onFinish:function(e){var t;e.user.id=ue()(),console.log(e),t=e.user,P.vendors.data.push(t),A(),a.current.resetFields()},validateMessages:xe,labelAlign:"right",ref:a}),l,r.a.createElement(de.a.Item,{wrapperCol:Object(ce.a)(Object(ce.a)({},Oe.wrapperCol),{},{offset:8})},r.a.createElement(y.a,{type:"primary",htmlType:"submit"},"Submit")))},qe=function(){return r.a.createElement("div",{className:"centerBox"},"Add Vendor",r.a.createElement(Se,{items:function(e){return e.map((function(e){return{name:e}}))}(["companyName","part","priceUnit","address1","address2","city","state","zipCode"])}))},De={labelCol:{span:6},wrapperCol:{span:12}},je={required:"${label} is required!",types:{email:"${label} is not validate email!",number:"${label} is not a validate number!"},number:{range:"${label} must be between ${min} and ${max}"}},$e=function(e){var a=Object(n.useRef)(null),t=e.employees.map((function(e){return r.a.createElement(Ne.a.Option,{key:e.id,value:e.id},e.firstName||null," ",e.lastName||null)}));return r.a.createElement(de.a,Object.assign({},De,{name:"nest-messages",onFinish:function(e){console.log(e),function(e){var a=P.employees.data.find((function(a){return a.id===e}));F(a),A()}(e.user.id),a.current.resetFields()},validateMessages:je,labelAlign:"right",ref:a}),r.a.createElement(de.a.Item,{name:["user","id"],label:"Employees"},r.a.createElement(Ne.a,null,t)),r.a.createElement(de.a.Item,{wrapperCol:Object(ce.a)(Object(ce.a)({},De.wrapperCol),{},{offset:8})},r.a.createElement(y.a,{type:"primary",htmlType:"submit"},"Submit")))},we=function(){var e=R();return r.a.createElement("div",{className:"centerBox"},"Pay Employee",r.a.createElement($e,{employees:e}))},Pe=function(){return r.a.createElement(oe,{getDisplayData:W,pageName:"Payroll list"})},Ae=function(){return r.a.createElement(oe,{getDisplayData:z,pageName:"Inventory"})},Re=t(358),Le={labelCol:{span:6},wrapperCol:{span:8}},Te={required:"${label} is required!",types:{email:"${label} is not validate email!",number:"${label} is not a validate number!"},number:{range:"${label} must be between ${min} and ${max}"}},Fe=function(e){var a=Object(n.useRef)(null),t=e.cutomers.map((function(e){return r.a.createElement(Ne.a.Option,{key:e.id,value:e.id},e.firstName||null," ",e.lastName||null)}));return r.a.createElement(de.a,Object.assign({},Le,{name:"nest-messages",onFinish:function(e){console.log(e),function(e){var a=e.id,t=e.number,n=P.customers.data.find((function(e){return e.id===a}));if(!Y(t))throw new Error("You do not have enough inventory");J(n,t),A()}(e.user),a.current.resetFields()},validateMessages:Te,labelAlign:"right",ref:a}),r.a.createElement(de.a.Item,{name:["user","id"],label:"Cutomers",rules:[{required:!0}]},r.a.createElement(Ne.a,null,t)),r.a.createElement(de.a.Item,{name:["user","number"],label:"Number of Unit to invoice",rules:[{required:!0}]},r.a.createElement(Re.a,null)),r.a.createElement(de.a.Item,{wrapperCol:Object(ce.a)(Object(ce.a)({},Le.wrapperCol),{},{offset:8})},r.a.createElement(y.a,{type:"primary",htmlType:"submit"},"Submit")))},He=function(){var e=L();return r.a.createElement("div",{className:"centerBox"},"Creat Invoice",r.a.createElement(Fe,{cutomers:e}))},We=function(){return r.a.createElement(oe,{getDisplayData:Z,pageName:"Invoice History"})},Ue={labelCol:{span:6},wrapperCol:{span:8}},Be={required:"${label} is required!",types:{email:"${label} is not validate email!",number:"${label} is not a validate number!"},number:{range:"${label} must be between ${min} and ${max}"}},ze=function(e){var a=Object(n.useRef)(null),t=e.vendors.map((function(e){return r.a.createElement(Ne.a.Option,{key:e.id,value:e.id},e.part)}));return r.a.createElement(de.a,Object.assign({},Ue,{name:"nest-messages",onFinish:function(e){console.log(e),function(e){var a=e.id,t=e.number,n=P.vendors.data.find((function(e){return e.id===a}));if(!Q(t,n.priceUnit))throw new Error("You do not have enough cash");X(n,t),A()}(e.user),a.current.resetFields()},validateMessages:Be,labelAlign:"right",ref:a}),r.a.createElement(de.a.Item,{name:["user","id"],label:"Part",rules:[{required:!0}]},r.a.createElement(Ne.a,null,t)),r.a.createElement(de.a.Item,{name:["user","number"],label:"Quantity",rules:[{required:!0}]},r.a.createElement(Re.a,null)),r.a.createElement(de.a.Item,{wrapperCol:Object(ce.a)(Object(ce.a)({},Ue.wrapperCol),{},{offset:8})},r.a.createElement(y.a,{type:"primary",htmlType:"submit"},"Submit")))},Me=function(){var e=T();return r.a.createElement("div",{className:"centerBox"},"PO",r.a.createElement(ze,{vendors:e}))},Je=function(){return r.a.createElement(oe,{getDisplayData:K,pageName:"PO History"})},Ve=(t(158),t(356));Ve.a.Text;function Ge(e){return[{title:e,dataIndex:"name",render:function(e){return e}},{title:"Amount ($)",className:"column-money",dataIndex:"money",align:"right"}]}var Ye=function(e){var a=e.getDisplayData,t=e.pageName,l=Object(n.useState)([]),i=Object(j.a)(l,2),o=i[0],s=i[1];Object(n.useEffect)((function(){s(a())}),[]);var c=[{key:"1",name:"Sales",money:o.sales},{key:"2",name:"COGS",money:o.COGS},{key:"3",name:"Gross Profit",money:o.grossProfit}],m=[{key:"1",name:"Payroll",money:o.payroll},{key:"2",name:"Payroll Withholding",money:o.payrollWithholding},{key:"3",name:"Bills",money:o.bills},{key:"4",name:"Annual Expenses",money:o.annualExpenses},{key:"5",name:"Total Expenses",money:o.totalExpenses}],u=[{key:"1",name:"Other Income",money:o.otherIncome},{key:"2",name:"Operating Income",money:o.operatingIncome},{key:"3",name:"Income Tax",money:o.incomeTax}],d=[{key:"1",name:"Net Income",money:o.netIncome}];return console.log(o),r.a.createElement("div",{className:"income-statement-container"},r.a.createElement("h2",null,t),r.a.createElement("div",{className:"income-statement"},r.a.createElement(re.a,{columns:Ge("Sales"),dataSource:c,pagination:!1,bordered:!0}),r.a.createElement("br",null),r.a.createElement(re.a,{columns:Ge("Expenses"),dataSource:m,pagination:!1,bordered:!0}),r.a.createElement("br",null),r.a.createElement(re.a,{columns:Ge("Income"),dataSource:u,pagination:!1,bordered:!0}),r.a.createElement("br",null),r.a.createElement(re.a,{columns:Ge("Net Income"),dataSource:d,pagination:!1,bordered:!0})))},Ze=function(){return r.a.createElement(Ye,{getDisplayData:ae,pageName:"Income Statement"})};Ve.a.Text;function Ke(e){return[{title:e,dataIndex:"name",render:function(e){return e}},{title:"Amount ($)",className:"column-money",dataIndex:"money",align:"right"}]}var Qe=function(e){var a=e.getDisplayData,t=e.pageName,l=Object(n.useState)([]),i=Object(j.a)(l,2),o=i[0],s=i[1];Object(n.useEffect)((function(){s(a())}),[]),console.log("BalanceSheetTable -> displayData",o);var c=[{key:"1",name:"Cash",money:o.cash},{key:"2",name:"Accounts Receivable",money:o.accountsReceivable},{key:"3",name:"Inventory",money:o.inventory},{key:"4",name:"Total Curren Assets",money:o.totalCurrenAssets}],m=[{key:"1",name:"Land/Building",money:o.land},{key:"2",name:"Equipment",money:o.equipment},{key:"3",name:"Furniture",money:o.furniture},{key:"4",name:"Total Fix Assets",money:o.totalFixAssets}],u=[{key:"1",name:"Total Assets",money:o.totalAssets}],d=[{key:"1",name:"Accounts Payable",money:o.accountsPayable},{key:"2",name:"Notes Payable",money:o.notesPayable},{key:"3",name:"Accruals",money:o.accruals},{key:"4",name:"Total Current Liabilities",money:o.totalCurrentLiabilities}],p=[{key:"1",name:"Mortage",money:o.mortage},{key:"2",name:"Total Long Term Debt",money:o.totalLongTermDebt}],y=[{key:"1",name:"Total Liabilities",money:o.totalLiabilities}],b=[{key:"1",name:"Net Worth",money:o.netWorth}];return console.log(o),r.a.createElement("div",{className:"income-statement-container"},r.a.createElement("h2",null,t),r.a.createElement("div",{className:"income-statement"},r.a.createElement(re.a,{columns:Ke("Current Assets"),dataSource:c,pagination:!1,bordered:!0}),r.a.createElement("br",null),r.a.createElement(re.a,{columns:Ke("Fixed Assets"),dataSource:m,pagination:!1,bordered:!0}),r.a.createElement("br",null),r.a.createElement(re.a,{columns:Ke("Total Assets"),dataSource:u,pagination:!1,bordered:!0}),r.a.createElement("br",null),r.a.createElement(re.a,{columns:Ke("Current Liabilities"),dataSource:d,pagination:!1,bordered:!0}),r.a.createElement("br",null),r.a.createElement(re.a,{columns:Ke("Long Term Debt"),dataSource:p,pagination:!1,bordered:!0}),r.a.createElement("br",null),r.a.createElement(re.a,{columns:Ke("Total Liabilities"),dataSource:y,pagination:!1,bordered:!0}),r.a.createElement("br",null),r.a.createElement(re.a,{columns:Ke("Net Worth"),dataSource:b,pagination:!1,bordered:!0})))},Xe=function(){return r.a.createElement(Qe,{getDisplayData:ne,pageName:"Balance Sheet"})};P=JSON.parse(localStorage.getItem("localData"))||w,console.log("getDataFromLocal -> datcurrDataa",P);var _e=function(){var e=r.a.createElement("div",null,r.a.createElement(u.a,{path:"/",exact:!0,component:D}),r.a.createElement(u.a,{path:"/employeelist",exact:!0,component:se}),r.a.createElement(u.a,{path:"/employeeadd",exact:!0,component:he}),r.a.createElement(u.a,{path:"/customerlist",exact:!0,component:fe}),r.a.createElement(u.a,{path:"/customeradd",exact:!0,component:Ce}),r.a.createElement(u.a,{path:"/vendorlist",exact:!0,component:Ie}),r.a.createElement(u.a,{path:"/vendoradd",exact:!0,component:qe}),r.a.createElement(u.a,{path:"/payemployee",exact:!0,component:we}),r.a.createElement(u.a,{path:"/payroll",exact:!0,component:Pe}),r.a.createElement(u.a,{path:"/inventory",exact:!0,component:Ae}),r.a.createElement(u.a,{path:"/invoice",exact:!0,component:He}),r.a.createElement(u.a,{path:"/invoicehistory",exact:!0,component:We}),r.a.createElement(u.a,{path:"/po",exact:!0,component:Me}),r.a.createElement(u.a,{path:"/pohistory",exact:!0,component:Je}),r.a.createElement(u.a,{path:"/incomestatement",exact:!0,component:Ze}),r.a.createElement(u.a,{path:"/balancesheet",exact:!0,component:Xe}));return r.a.createElement(q,{contents:e})},ea=(t(350),t(97));i.a.render(r.a.createElement(ea.a,null,r.a.createElement(_e,null)),document.getElementById("root"))}},[[196,1,2]]]);
//# sourceMappingURL=main.9a459af9.chunk.js.map