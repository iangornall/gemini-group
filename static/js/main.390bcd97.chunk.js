(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{104:function(e,t,a){},106:function(e,t,a){},108:function(e,t,a){},110:function(e,t,a){},112:function(e,t,a){},114:function(e,t,a){},116:function(e,t,a){},120:function(e,t,a){},122:function(e,t,a){},124:function(e,t,a){},126:function(e,t,a){},128:function(e,t,a){},130:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(12),l=a.n(r),s=(a(66),a(68),a(132)),i=a(22),c=a(14),u=function(){var e=Object(n.useState)(0),t=Object(c.a)(e,2),a=t[0],o=t[1];return Object(n.useEffect)(function(){var e=function(){o(window.scrollY)};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}},[]),a},m=a(21),h=(a(70),function(){return o.a.createElement("div",{className:"contact-bar"},o.a.createElement("a",{className:"link",href:"tel:800-607-2942"},"800-607-2942"),o.a.createElement(m.a,{className:"link",to:"/contact"},"Contact"))}),d=a(131),p=(a(74),function(e){var t=e.scrollY;return o.a.createElement("nav",{className:"nav-bar".concat(0===t?"":" small-nav-bar")},o.a.createElement(m.a,{className:"nav-image",to:"/"},o.a.createElement("img",{className:"nav-image",alt:"Gemini Group",src:"assets/logo.png"})),o.a.createElement(d.a,{className:"nav-link",activeClassName:"active-nav-link",to:"/buy-a-home"},"Buy a Home"),o.a.createElement(d.a,{className:"nav-link",activeClassName:"active-nav-link",to:"/sell-a-home"},"Sell a Home"),o.a.createElement(d.a,{className:"nav-link",activeClassName:"active-nav-link",to:"/properties"},"Our Properties"))}),y=(a(77),function(e){var t=e.scrollY;return o.a.createElement("header",{className:"header"},o.a.createElement(h,null),o.a.createElement(p,{scrollY:t}))}),f=(a(79),function(e){var t=e.children,a=e.text,n=e.color,r=e.href;return!r||r.includes("http")?o.a.createElement("a",{className:"button",href:r,style:{background:n}},a,t):o.a.createElement(m.a,{to:r,className:"button",style:{background:n}},a,t)}),b=(a(81),function(e){var t=e.title,a=e.subtitle,n=e.buttons,r=e.background,l=e.scrollY;return o.a.createElement("div",{className:"splash-wrapper",style:{height:(t||a||n)&&475-l}},o.a.createElement("div",{className:"splash-container",style:{backgroundImage:"url(assets/".concat(r,")"),height:300-l}}),o.a.createElement("div",{className:"splash-content-wrapper"},o.a.createElement("div",{className:"splash-content",style:{opacity:1-l/200,marginTop:335-l}},t&&o.a.createElement("div",{className:"splash-title"},t),a&&o.a.createElement("div",null,o.a.createElement("span",{className:"splash-subtitle"},a)),o.a.createElement("div",{className:"splash-button-container"},n&&n.map(function(e){return o.a.createElement(f,{href:e.href},e.text)})))))}),g=(a(83),function(e){return o.a.createElement("div",{className:"register"},o.a.createElement(f,{href:"/contact",text:"Yes! I would like to register for New Property Updates"}))}),v=(a(85),a(87),a(23)),w=function(e){var t=e.bigtitle,a=e.title,n=e.subtitle,r=e.text,l=e.video,s=e.poster,i=e.reverse;return o.a.createElement("div",{className:"info ".concat(i&&"reverse")},o.a.createElement("div",{className:"info-text-container"},a&&o.a.createElement("h2",{style:{fontSize:t&&"2em"},className:"info-title"},a),n&&o.a.createElement("h3",{className:"info-subtitle"},n),r&&("string"===typeof r?r:r.map(function(e){return o.a.createElement("p",{className:"info-text"},e)}))),l&&o.a.createElement("div",{className:"info-video-container"},o.a.createElement(v.Player,{playsInline:!0,poster:s},o.a.createElement(v.BigPlayButton,{position:"center"}),o.a.createElement("source",{src:l,type:"video/mp4"}))))},E=(a(104),function(e){var t=e.title,a=e.text,n=e.button,r=e.color,l=e.textColor,s=e.background;return o.a.createElement("div",{className:"hero",style:{backgroundImage:"url(assets/".concat(s,")")}},o.a.createElement("div",{className:"hero-cover",style:{backgroundColor:r}}),o.a.createElement("div",{className:"hero-content",style:{color:l}},o.a.createElement("h2",{className:"hero-title"},t),o.a.createElement("p",{className:"hero-text"},a),n&&o.a.createElement(f,{href:n.href,color:"#0D0D0D"},n.text)))}),k=(a(106),function(e){var t=e.scrollY;return o.a.createElement("div",{style:{position:"relative"}},o.a.createElement(b,{scrollY:t,title:"Rent to Own Homes & Investors",subtitle:"Buying or Selling Your House Has Never Been This Easy!",buttons:[{text:"Our Properties",href:"/properties"},{text:"Lease to Own",href:"/buy-a-home"}],background:"banner1.jpg"}),o.a.createElement("hr",{className:"separator"}),o.a.createElement(g,null),o.a.createElement(w,{title:"Rent To Own Homes & Investors",subtitle:"Buying a Home or Selling Your House Has Never Been This Easy!",text:"Owning a home is truly the American Dream. Buying a home can be a difficult process, especially for those with poor credit, no credit and/or a limited amount to invest. A Lease to Own, also known as Rent to Own, Option may be just for you! Based on your individual criteria, we can be very creative with financing and fit it to your needs. We are not loan brokers, bankers, real estate agents or selling homes for someone else, we are the owners or we have a legal equitable interest in the property.",button:{href:"/properties",text:"View Our Properties"},video:"assets/how-rent-to-own-works.mp4",poster:"assets/how-rent-to-own-works.png",reverse:!1}),o.a.createElement(E,{title:"Rent To Own Real Estate Specialists",text:"We are not real estate agents, bankers or loan brokers\r who get paid to find you a loan. We are the owner of some lovely homes that are available\r for purchase in various ways including lease to own.",button:{href:"/buy-a-home",text:"Lease to own programs"},color:"rgba(0,111,178,0.7)",background:"banner2.jpg"}),o.a.createElement(w,{title:"Lease To Own Homes Specialists",text:"We are not Realtors who are selling someone else\u2019s homes, bankers or loan brokers who get paid to find you a loan. We are actually the owner of some lovely homes that are available for purchase in various ways including lease to own. Since we own the homes, many times (depending on your circumstances) we are willing to finance all or part of the purchase ourselves or lease to own them to you. All the normal rules concerning credit, debt ratio and proof of income are thrown out the window. Since we own the homes, we can be very creative with the financing and structure it to fit your needs.",video:"assets/what-if-i-dont-have-a-mortgage.mp4",poster:"assets/what-if-i-dont-have-a-mortgage.png",reverse:!0}),o.a.createElement(E,{title:"NO CREDIT Or BAD CREDIT?",text:"If you are truly interested in owning a home of your own, you can be in a home in less than 30 days with our lease to own program.\r Or, if you don\u2019t see a home you like in our current inventory, let us know and we will place your name on our VIP list for a home that meets your needs. We are located in the Atlanta, GA Metro area and invest in Rent to Own Properties throughout the United States.",textColor:"#000",button:{href:"/buy-a-home",text:"Learn More"},color:"rgba(255,255,255,0.9)",background:"banner3.jpg"}))}),N=function(e,t){return function(a){a.preventDefault();var n=new FormData(a.currentTarget);a.currentTarget.reset(),fetch(e,{method:"POST",body:n}).then(function(e){return e.json()}).then(function(e){t.push("/recieved")})}},x=(a(108),a(133)),O=Object(x.a)(function(e){var t=e.history;return o.a.createElement("div",{className:"contact-form"},o.a.createElement("h2",{className:"contact-form-title"},"Questions?"),o.a.createElement("div",{className:"contact-form-subtitle"},o.a.createElement("hr",null),o.a.createElement("h3",null,"Get in Touch!"),o.a.createElement("hr",null)),o.a.createElement("form",{onSubmit:N("https://secure.globiflow.com/catch/646l9rnwve539b9",t)},o.a.createElement("label",null,o.a.createElement("div",{className:"contact-form-label"},"First Name"),o.a.createElement("input",{className:"contact-form-input",type:"text",name:"first-name"})),o.a.createElement("label",null,o.a.createElement("div",{className:"contact-form-label"},"Last Name"),o.a.createElement("input",{className:"contact-form-input",type:"text",name:"last-name"})),o.a.createElement("label",null,o.a.createElement("div",{className:"contact-form-label"},"Email"),o.a.createElement("input",{className:"contact-form-input",type:"email",name:"email"})),o.a.createElement("label",null,o.a.createElement("div",{className:"contact-form-label"},"Message"),o.a.createElement("textarea",{className:"contact-form-input",name:"message",rows:"5"})),o.a.createElement("input",{type:"hidden",name:"form",value:"contact"}),o.a.createElement("input",{className:"submit-button",type:"submit",value:"Submit"})))}),j=(a(110),function(e){var t=e.scrollY;return o.a.createElement("div",{class:"sell"},o.a.createElement(b,{scrollY:t,background:"banner4.jpg"}),o.a.createElement("div",{class:"sell-top"},o.a.createElement(w,{bigtitle:!0,title:"Sell Your House",text:["We buy properties in any condition or situation. We are not real estate agents, so we don\u2019t want to list your house. We want to buy it.  We can advise you on the best approach to sell your home quickly within your unique situation. We buy houses in any condition, regardless why they are for sale.","We are active property buyers. If your property meets our needs, we would like to buy it soon. We are not afraid of properties that require repairs. Regardless of the condition of your house or your current situation, we would like to learn more about your property.","We are also well networked with other active buyers. This means we can help with properties that don\u2019t match our current needs. There is no risk and no obligation on your part so please tell us about your property."]}),o.a.createElement(O,null)),o.a.createElement("div",{class:"sell-bottom"},o.a.createElement(w,{title:"Behind On Payments?",text:["Act now while there\u2019s still time!","Sometimes life throws you a curve ball and the best of plans come unraveled. A payment that was completely manageable when you got your mortgage can seem impossible after a job change, injury, divorce or many other life altering events.","If you\u2019ve fallen behind on your payments it is important that you act immediately. Let us help solve your problem while we still can."]}),o.a.createElement(w,{title:"Sell Your House",text:["Rising interest rates mean ever-increasing mortgage payments!","Millions of homeowners have adjustable rate or interest only mortgages. Rising interest rates may have caused your monthly mortgage payment to skyrocket. In fact, many homeowners wouldn\u2019t even qualify for the loan payment they are now expected to make. You are not alone, and it is not your fault. The economy is not very predictable, and rising interest rates have caught many people off guard.","If you can\u2019t keep pace with your ever-increasing monthly payment then contact us immediately. We can act quickly and may be able to solve your problem before your next payment is due."]}),o.a.createElement(w,{title:"No Equity Or Over Financed?",text:["Get out of your house without paying real estate commissions!","Getting out of a home when you have little or no equity can be tough. In fact, just selling for what you owe may take several months, and if you list with a real estate agent the commission may have to come out of your pocket.","Contact us before listing with a real estate agent where you are locked in to paying a commission. We may be able to buy your property directly, saving you time and avoiding commission expenses."]}),o.a.createElement(w,{title:"Two House Payments?",text:["Don\u2019t let the stress of selling your old house keep you from enjoying your new one!","Timing in real estate can be tricky. Maybe your old house didn\u2019t sell as quickly as expected or your buyer fell through. Are you now stuck making payments on two houses? Instead of enjoying your new home you may feel stressed as you worry about how much more money you will throw away waiting to sell your old house.","Wouldn\u2019t it be great if we could buy your old house so you can start enjoying your new home?"]}),o.a.createElement(w,{title:"Relocating Or New Job?",text:["You have a lot going on, let us take one of your worries away!","Moving for a new job or a job transfer is often very exciting. However, it is also busy and stressful. Your deadline to leave town may be out of your control, and as it approaches (or passes) the pressure to sell your house will increase.","Give us a chance to relieve you of this burden during this busy time in your life."]}),o.a.createElement(w,{title:"Expired Listing?",text:["Don\u2019t even consider re-listing before you contact us!","Are you frustrated because your house listed with a Realtor hasn\u2019t sold? Do you know why it didn\u2019t sell? Was it the price, the marketing, not enough open houses, poor offers, or one of many other variables?","Before re-listing with another Realtor, please contact us. We are active buyers and can act quickly. Let us help you get out of your house so you can stop making those mortgage payments."]}),o.a.createElement(w,{title:"Suddenly Downsized?",text:["Losing a job changes everything!","In today\u2019s world of mergers and outsourcing, a job that was once safe and secure could disappear without notice. To make matters worse, many companies have hiring freezes meaning it may be difficult for you to find an equivalent replacement job.","If you\u2019ve been the victim of corporate downsizing, it may be time to re-evaluate all of your financial commitments."]}),o.a.createElement(w,{title:"Foreclosure Or Bankruptcy?",text:["Time is of the essence. Act fast to save your credit!","If your house payments are more than a month behind, your lender has probably already started foreclosure proceedings. As time passes, thousands of dollars in penalties and legal fees can be added to the balance you owe. And every single day extra interest is added!","The best advice we can offer is for you to contact us immediately. Time truly is your enemy, and the longer you wait the harder it is for us to help.","You don\u2019t have to face this alone. We can help. Using our expertise we aim to save your credit and help you avoid filing bankruptcy. We are caring and understanding people, and we know how tough a time this is for you. Imagine the relief you will feel once we begin working together to put this behind you. Call us today for a confidential, no obligation evaluation of your situation before it is too late!"]}),o.a.createElement(w,{title:"Foreclosure Or Bankruptcy?",text:["We can help you get on with your life!","Divorce is difficult even in the best of situations. Adding the burden of selling a jointly owned home to the stress and emotions you are feeling may be overwhelming. As real estate investors who buy houses fast we can help. Let us give you an option that can help you get on with your life.","We will be sensitive to your situation and work with you quickly to find a solution."]}),o.a.createElement(w,{title:"Liens Or Judgments?",text:["Don\u2019t be discouraged!","Don\u2019t let liens, judgments, or other title problems discourage you. We know how to handle these situations thereby allowing you to sell your property."]}),o.a.createElement(w,{title:"Inherited Or Estate Property?",text:["Real estate is often the least liquid asset in an estate!","Losing a loved one is a tragic experience. When real estate is involved in the estate, it often must be sold during the probate process. If you are responsible for settling the estate, you will have your hands full simply with the legal requirements, paperwork, and deadlines.","By offering a possible quick sale of the property, we can help ease the task ahead of you."]}),o.a.createElement(w,{title:"Nightmare Tenants?",text:["Immediate relief available for Tired Landlords!","Are you tired of tenants, toilets and trash? Being a landlord is often a tiresome and thankless \u201cjob\u201d. It isn\u2019t easy, and certainly isn\u2019t fun. Dealing with tenants that don\u2019t pay or damage your property is enough to make you pull out your hair. On top of the headaches is the expense and maintenance.","If you\u2019ve had enough and would like to \u201cmove on\u201d, we can help you put this burden behind you. Tell us about your property and situation. We can help."]}),o.a.createElement(w,{title:"Vacant House?",text:["Contact us to stop the bleeding!","Are you throwing money away making payments on a vacant house? It doesn\u2019t take long for those payments to add up and really hurt your bottom line. In addition to this financial burden, it can be exhausting trying to keep an empty house secure and maintained. Let us help.","Also, if there\u2019s a vacant house in your neighborhood bringing down property values please let us know."]}),o.a.createElement(w,{title:"Damaged Or Needing Repairs?",text:["Unlike a typical buyer, we can look beyond the repairs!","Most buyers are either afraid of properties in need of repair or they simply can\u2019t envision the end result. However, getting your property into selling condition may take more time or money than you have available. Before investing in costly repairs, please contact us. We are experienced in buying properties that need work. Let us save you the time, money, and risk involved."]}),o.a.createElement(w,{title:"I Just Want Top Dollar",text:["We buy many properties that have zero debt on them or little debt/large equity. We buy all different types of homes. If you are simply looking to avoid realtor fees and sometimes even your State closing costs, we can buy your home seamlessly with little or no expense to you."]})))}),S=(a(112),function(e){var t=e.scrollY;return o.a.createElement("div",{className:"buy-screen"},o.a.createElement(b,{scrollY:t,background:"banner5.jpg"}),o.a.createElement(w,{title:"How Rent to Own Works",text:["I find myself answering this question numerous times per day so I figured it's way over due that I post an explanation.","Approximately 82% of the market cannot qualify TODAY for financing and typically would need to improve their credit to do so.  Alternatively, other buyers with good credit are looking for a way to buy now while they save more instead of renting while they save."],video:"assets/how-rent-to-own-works.mp4",poster:"assets/how-rent-to-own-works.png",reverse:!1}),o.a.createElement(w,{title:"Equity Enhancement Program",text:["We offer lease purchase (rent to own) properties only \u2013 no straight rent.  All properties will require 3%-10% down and that is credited against your purchase price.  You then pay a monthly lease payment.  Some homes feature a small amount of that monthly also crediting the price and some do not.  Some homes also feature our Equity Enhancement Program.  "],video:"assets/equity-enhancement-program.mp4",poster:"assets/equity-enhancement-program.png",reverse:!0}),o.a.createElement(E,{title:"Credit Consulting Services",text:"During the course of the lease, you can use our credit consulting service we will refer you to.  Whether you lease purchase one of our homes or not, you can certainly use them.  They will give you a free consulting session and you can decide which course of action to take with them.",showButton:!0,button:{href:"http://www.mycreditteam.com/",text:"MyCreditTeam.com"},color:"rgba(0,111,178,0.7)",background:"banner2.jpg"}),o.a.createElement(w,{title:"My Credit Team",text:["Sometime between 6 months and 24 months they can typically get you in great shape for your own loan.  The time frame on our lease purchase properties ranges from 24 months to 10 years so you\u2019re never rushed and we\u2019ll help you purchase on your own eventually.","If you have not seen one of our properties yet, your next step would be to go ahead and schedule a viewing.  Some are on lock boxes and you just need to get the instructions from us and others require private or group viewing with an owner."]}),o.a.createElement(w,{title:"Real Estate Investors",text:["We can help you find a great deal on investment property or a personal residence. Let us be your first choice when looking for properties, contractors, attorneys, agents, hard money, financing, or any other real estate need. We know the business and can offer immediate help."]}))}),T=(a(114),Object(x.a)(function(e){var t=e.history;return o.a.createElement("div",{className:"newsletter-form"},o.a.createElement("h2",{className:"newsletter-form-title"},"Newsletter"),o.a.createElement("div",{className:"newsletter-form-subtitle"},o.a.createElement("hr",null),o.a.createElement("h3",null,"Be the first to know about new listings!"),o.a.createElement("hr",null)),o.a.createElement("form",{onSubmit:N("https://secure.globiflow.com/catch/646l9rnwve539b9",t)},o.a.createElement("label",null,o.a.createElement("div",{className:"newsletter-form-label"},"First Name"),o.a.createElement("input",{className:"newsletter-form-input",type:"text",name:"first-name"})),o.a.createElement("label",null,o.a.createElement("div",{className:"newsletter-form-label"},"Last Name"),o.a.createElement("input",{className:"newsletter-form-input",type:"text",name:"last-name"})),o.a.createElement("label",null,o.a.createElement("div",{className:"newsletter-form-label"},"Email"),o.a.createElement("input",{className:"newsletter-form-input",type:"email",name:"email"})),o.a.createElement("label",null,o.a.createElement("div",{className:"newsletter-form-label"},"Phone Number"),o.a.createElement("input",{className:"newsletter-form-input",type:"number",name:"phone"})),o.a.createElement("label",null,o.a.createElement("div",{className:"newsletter-form-label"},"Address"),o.a.createElement("textarea",{className:"newsletter-form-input",name:"address",rows:"5"})),o.a.createElement("input",{type:"hidden",name:"form",value:"newsletter"}),o.a.createElement("input",{className:"submit-button",type:"submit",value:"Submit"})))})),I=(a(116),function(e){var t=e.scrollY;return o.a.createElement("div",{class:"contact"},o.a.createElement(b,{scrollY:t,background:"banner3.jpg"}),o.a.createElement("div",{class:"contact-container"},o.a.createElement("div",{class:"contact-text"},"If you would like to be on Gemini Group\u2019s list to get new property updates before the public knows please fill out your information below"),o.a.createElement("div",{class:"contact-information"},o.a.createElement("strong",null,"Phone:"),"(800) 607-2942",o.a.createElement("br",null),o.a.createElement("strong",null,"Email:")," info@geminigroupatl.com",o.a.createElement("br",null))),o.a.createElement("div",{class:"two-column"},o.a.createElement(T,null),o.a.createElement(O,null)))}),L=a(5),C=a.n(L),W=a(10),Y=function(e){var t=Object(n.useState)([]),a=Object(c.a)(t,2),o=a[0],r=a[1];return Object(n.useEffect)(Object(W.a)(C.a.mark(function t(){return C.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=r,t.next=3,e();case 3:t.t1=t.sent,(0,t.t0)(t.t1);case 5:case"end":return t.stop()}},t,this)})),[]),o},A=(a(120),a(122),function(e){var t=e.scrollY;Y(function(){var e=Object(W.a)(C.a.mark(function e(){var t,a;return C.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://www.globiflow.com/podiofeed.php?c=11993&a=227194&f=3114");case 2:return t=e.sent,e.next=5,t.json();case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}());return o.a.createElement("div",null,o.a.createElement(b,{scrollY:t,background:"banner6.jpg"}),o.a.createElement("div",{className:"properties-content"},o.a.createElement("h2",null,"\u201cAll Sold Out!\u201d"),o.a.createElement("h3",null,"Come back soon for new properties!")))}),P=(a(124),function(){return o.a.createElement("div",{className:"recieved"},o.a.createElement("h2",null,"Thank you!"),o.a.createElement(f,{href:"/"},"Back to home screen."))}),q=a(55),B=a(16),D=a(56),G=a(57),R=a(60),H=a(58),M=a(59),F=a(6),J=(a(126),function(e){function t(e){var a;return Object(D.a)(this,t),(a=Object(R.a)(this,Object(H.a)(t).call(this,e))).state={file:"",slybroadcast:!1,status:"",numLeads:0,numSent:0,error:""},a.handleSubmit=a.handleSubmit.bind(Object(F.a)(Object(F.a)(a))),a.handleInputChange=a.handleInputChange.bind(Object(F.a)(Object(F.a)(a))),a.sendToPodio=a.sendToPodio.bind(Object(F.a)(Object(F.a)(a))),a.triggerSlybroadcast=a.triggerSlybroadcast.bind(Object(F.a)(Object(F.a)(a))),a.fileInput=o.a.createRef(),a}return Object(M.a)(t,e),Object(G.a)(t,[{key:"sendToPodio",value:function(e){return fetch("https://secure.globiflow.com/catch/5618hd399hkt2d8",{method:"POST",mode:"cors",headers:{"Content-Type":"application/json"},referrer:"no-referrer",body:e})}},{key:"CSVtoJSON",value:function(e){for(var t=!1,a=!1,n=e.split(""),o=0;o<n.length;o++)a||t||","!==n[o]||(n[o]="|||"),a||'"'!==n[o]||(t=!t,n[o]="~~~"),a="\\"===n[o]&&!a;for(var r=(e=(e=n.join("")).replace(/~~~/g,"")).split("\n"),l=r[0].split("|||"),s=[],i=1;i<r.length;i++){for(var c={},u=r[i].split("|||"),m=0;m<l.length;m++){if("Contact Phone"===l[m]&&(c.rawPhoneNumber=u[m],u[m])){var h=u[m].split("");h=Object(B.a)(h.slice(0,3)).concat(["-"],Object(B.a)(h.slice(3,6)),["-"],Object(B.a)(h.slice(6))),u[m]=h.join("")}c[l[m]]=u[m]}c.slybroadcast=this.state.slybroadcast,s.push(c)}return this.setState({numLeads:s.length}),s}},{key:"triggerSlybroadcast",value:function(){return this.setState({status:"complete"}),this.state.slybroadcast?fetch("https://secure.globiflow.com/catch/ol4z6fs122y85cz",{method:"POST",mode:"cors",headers:{"Content-Type":"application/json"},referrer:"no-referrer",body:'{"triggerSlybroadcast": "true"}'}):new Promise(function(e){return e("No Slybroadcast")})}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault();var a=new FileReader;a.onload=function(e){var a=t.CSVtoJSON(e.target.result);Object(W.a)(C.a.mark(function e(){var n,o,r,l,s,i,c;return C.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n=!0,o=!1,r=void 0,e.prev=3,l=C.a.mark(function e(){var a,n;return C.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=i.value,e.next=3,t.sendToPodio(JSON.stringify(a));case 3:n=e.sent,console.log("sent item",n),200===n.status?t.setState(function(e){return{numSent:e.numSent+1}}):t.setState(function(e){return{error:n.statusText}});case 6:case"end":return e.stop()}},e,this)}),s=a[Symbol.iterator]();case 6:if(n=(i=s.next()).done){e.next=11;break}return e.delegateYield(l(),"t0",8);case 8:n=!0,e.next=6;break;case 11:e.next=17;break;case 13:e.prev=13,e.t1=e.catch(3),o=!0,r=e.t1;case 17:e.prev=17,e.prev=18,n||null==s.return||s.return();case 20:if(e.prev=20,!o){e.next=23;break}throw r;case 23:return e.finish(20);case 24:return e.finish(17);case 25:return e.next=27,t.triggerSlybroadcast();case 27:c=e.sent,console.log("triggered slybroadcast",c),console.log("all done");case 30:case"end":return e.stop()}},e,this,[[3,13,17,25],[18,,20,24]])}))()},a.readAsText(this.fileInput.current.files[0])}},{key:"handleInputChange",value:function(e){var t=e.target,a=t.name;this.setState(Object(q.a)({},a,"true"===t.value))}},{key:"render",value:function(){return o.a.createElement("div",{className:"leads-form"},o.a.createElement("h2",{className:"leads-form-title"},"Import from my",o.a.createElement("em",null,"+plus")," leads"),o.a.createElement("div",{className:"leads-form-subtitle"},o.a.createElement("hr",null),o.a.createElement("h3",null,"Send to Podio"),o.a.createElement("hr",null)),o.a.createElement("form",{onSubmit:this.handleSubmit},o.a.createElement("label",null,o.a.createElement("div",{className:"leads-form-label"},"Spreadsheet from my",o.a.createElement("em",null,"+plus")," leads"),o.a.createElement("input",{className:"leads-form-input",type:"file",name:"data",ref:this.fileInput})),o.a.createElement("label",null,o.a.createElement("div",{className:"leads-form-label"},"Send Slybroadcast"),o.a.createElement("input",{type:"radio",name:"slybroadcast",value:"true",checked:this.state.slybroadcast,onChange:this.handleInputChange}),"yes",o.a.createElement("input",{type:"radio",name:"slybroadcast",value:"false",checked:!this.state.slybroadcast,onChange:this.handleInputChange}),"no"),o.a.createElement("input",{className:"submit-button",type:"submit",value:"Submit"})),this.state.status&&("sending"===this.state.status?o.a.createElement("div",null,o.a.createElement("p",null,"Sending data to Podio...",o.a.createElement("strong",null," do not leave this page.")),o.a.createElement("p",null,o.a.createElement("strong",null,this.state.numSent," leads")," sent out of ",o.a.createElement("strong",null,this.state.numLeads," total."))):o.a.createElement("div",null,o.a.createElement("p",null,o.a.createElement("strong",null,this.state.numSent," leads")," sent out of ",o.a.createElement("strong",null,this.state.numLeads," total.")),o.a.createElement("p",null,o.a.createElement("strong",null,"Completed.")," All data sent to Podio!"))),this.state.error&&o.a.createElement("div",{className:"leads-form-error"},o.a.createElement("em",null,this.state.error)))}}]),t}(o.a.Component)),z=function(e){return o.a.createElement("div",null,o.a.createElement(J,null))},V=function(){return o.a.createElement("div",{className:"footer-menu"},o.a.createElement("h2",{className:"footer-title"},"Main Menu"),o.a.createElement(m.a,{className:"footer-link",to:"/"},"Home"),o.a.createElement(m.a,{className:"footer-link",to:"/buy-a-home"},"Buy a Home"),o.a.createElement(m.a,{className:"footer-link",to:"/sell-a-home"},"Sell a Home"),o.a.createElement(m.a,{className:"footer-link",to:"/contact"},"Contact"))},U=Object(x.a)(function(e){var t=e.history;return o.a.createElement("div",{className:"quick-connect"},o.a.createElement("h2",{className:"footer-title"},"Quick Connect"),o.a.createElement("form",{onSubmit:N("https://secure.globiflow.com/catch/646l9rnwve539b9",t),className:"footer-form"},o.a.createElement("label",{className:"footer-label"},"First Name:",o.a.createElement("input",{className:"footer-input",type:"text",name:"first-name",placeholder:"First Name"})),o.a.createElement("label",{className:"footer-label"},"Last Name:",o.a.createElement("input",{className:"footer-input",type:"text",name:"last-name",placeholder:"Last Name"})),o.a.createElement("label",{className:"footer-label"},"Email:",o.a.createElement("input",{className:"footer-input",type:"email",name:"email",placeholder:"Email"})),o.a.createElement("label",{className:"footer-label"},"Message:",o.a.createElement("textarea",{className:"footer-input",name:"message",rows:"5"})),o.a.createElement("input",{type:"hidden",name:"form",value:"quick connect"}),o.a.createElement("div",{className:"footer-submit"},o.a.createElement("button",{type:"submit"},"Submit"))))}),Q=function(){return o.a.createElement("div",{className:"footer-bottom"},o.a.createElement("p",null,"\xa9 2018 Gemini Group ATL, LLC"),o.a.createElement("p",null,"Gemini Group ATL, LLC and affiliated or subsidiary companies are not real estate brokers or agents. Gemini Group ATL, LLC is a real estate investment company. All properties are either owned by Gemini Group ATL, LLC or the company has a purchase contract and/or option with the owner of the property, which Gemini Group ATL, LLC may assign to third parties. Gemini Group ATL, LLC is not a real estate brokerage and does not provide realtor services to the public, or to any of the parties to which it has contractual relationships."))},K=(a(128),function(){return o.a.createElement("footer",{className:"footer"},o.a.createElement("div",{className:"footer-columns"},o.a.createElement(V,null),o.a.createElement(U,null)),o.a.createElement("hr",null),o.a.createElement(Q,null))}),X=function(){var e=u();return o.a.createElement("div",{className:"App"},o.a.createElement(s.a,null,o.a.createElement("div",null,o.a.createElement(y,{scrollY:e}),o.a.createElement(i.a,{exact:!0,path:"/",render:function(t){return o.a.createElement(k,Object.assign({},t,{scrollY:e}))}}),o.a.createElement(i.a,{path:"/sell-a-home",render:function(t){return o.a.createElement(j,Object.assign({},t,{scrollY:e}))}}),o.a.createElement(i.a,{path:"/buy-a-home",render:function(t){return o.a.createElement(S,Object.assign({},t,{scrollY:e}))}}),o.a.createElement(i.a,{path:"/contact",render:function(t){return o.a.createElement(I,Object.assign({},t,{scrollY:e}))}}),o.a.createElement(i.a,{path:"/properties",render:function(t){return o.a.createElement(A,Object.assign({},t,{scrollY:e}))}}),o.a.createElement(i.a,{path:"/recieved",render:function(t){return o.a.createElement(P,Object.assign({},t,{scrollY:e}))}}),o.a.createElement(i.a,{path:"/leads",render:function(t){return o.a.createElement(z,Object.assign({},t,{scrollY:e}))}}),o.a.createElement(K,null))))};l.a.render(o.a.createElement(X,null),document.getElementById("root"))},61:function(e,t,a){e.exports=a(130)},66:function(e,t,a){},68:function(e,t,a){},70:function(e,t,a){},74:function(e,t,a){},77:function(e,t,a){},79:function(e,t,a){},81:function(e,t,a){},83:function(e,t,a){},85:function(e,t,a){}},[[61,2,1]]]);
//# sourceMappingURL=main.390bcd97.chunk.js.map