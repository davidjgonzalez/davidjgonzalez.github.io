(this["webpackJsonpaem-guides-wknd-pwa"]=this["webpackJsonpaem-guides-wknd-pwa"]||[]).push([[0],{101:function(e,t,n){},210:function(e,t,n){},215:function(e,t){},217:function(e,t){},231:function(e,t){},233:function(e,t){},261:function(e,t){},263:function(e,t){},264:function(e,t){},269:function(e,t){},271:function(e,t){},277:function(e,t){},279:function(e,t){},298:function(e,t){},310:function(e,t){},313:function(e,t){},331:function(e,t,n){},332:function(e,t,n){},333:function(e,t,n){},334:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n.n(a),i=n(164),o=n.n(i),c=n(13),s=n(10),l={primary:"#202020",accent:"#FFEB00",background:"#202020",detailBackground:"#fff",surface:"#202020",error:"#B00020",text:"#fff",detailText:"#202020",onSurface:"#000000",disabled:"rgb(255, 69, 58)",placeholder:"rgb(255, 69, 58)",backdrop:"rgb(255, 69, 58)",notification:"rgb(255, 69, 58)"},p=n(21),d=n(3),u=(n(58),"wcm/foundation/components/responsivegrid"),h={emptyLabel:"Layout Container",isEmpty:function(e){return null==e.cqItemsOrder||0===e.cqItemsOrder.length},resourceType:u};Object(d.MapTo)(u)(d.ResponsiveGrid,h);var m=Object(d.withMappable)(d.ResponsiveGrid,h),j=n(9);Object(d.MapTo)("core/wcm/components/container/v1/container")(j.ContainerV1,{isEmpty:j.ContainerV1IsEmptyFn});Object(d.withMappable)(j.ContainerV1,{isEmpty:j.ContainerV1IsEmptyFn});Object(d.MapTo)("dam/cfm/components/grid")(j.ContainerV1,{isEmpty:j.ContainerV1IsEmptyFn});Object(d.withMappable)(j.ContainerV1,{isEmpty:j.ContainerV1IsEmptyFn});var g=n(22),b=n(42),v=n(43),O=n(44),y=n(45),f=n(28),T=(n(101),n(1)),x=function(e){Object(O.a)(n,e);var t=Object(y.a)(n);function n(){return Object(b.a)(this,n),t.apply(this,arguments)}return Object(v.a)(n,[{key:"getHTML",value:function(e){return{__html:e}}},{key:"getFragmentGrid",value:function(e){var t=!1;if(this.props.cqItemsOrder.includes(e)&&this.props.cqItems[e]){var n=d.Utils.modelToProps(this.props.cqItems[e]);if(n){var a=d.ComponentMapping.get(n.cqType);a&&(t=this.connectComponentWithItem(a,n,e))}}return t}},{key:"connectComponentWithItem",value:function(e,t,n){var r=this.getItemPath(n);return Object(a.createElement)(e,Object(g.a)(Object(g.a)({},t),{},{key:"".concat(n,"-").concat(r,"}"),cqPath:r,isInEditor:this.props.isInEditor,containerProps:this.getItemComponentProps(t,n,r)}))}},{key:"getItemPath",value:function(e){return this.props&&this.props.cqPath?this.props.cqPath+"/"+e:e}},{key:"getItemComponentProps",value:function(e,t,n){return{}}},{key:"render",value:function(){var e=this;return Object(T.jsx)("div",{className:"contentfragment ".concat(this.props.componentProperties.containerProps.className),children:Object(T.jsxs)("article",{id:this.props.id,className:"cmp-contentfragment","data-cmp-contentfragment-model":this.props.model,"data-cmp-data-layer":JSON.stringify(this.props.dataLayer),children:[Object(T.jsx)("h3",{className:"cmp-contentfragment__title",children:this.props.title}),Object(T.jsx)("div",{className:"cmp-contentfragment__elements",children:this.props.paragraphs&&this.props.paragraphs.map((function(t,n){return Object(T.jsxs)(r.a.Fragment,{children:[e.getFragmentGrid("par".concat(n)),Object(T.jsx)("div",{dangerouslySetInnerHTML:e.getHTML(t)},n)]},n)}))})]})})}}]),n}(f.ContentFragmentV1);Object(d.MapTo)("core/wcm/components/contentfragment/v1/contentfragment")(x,{isEmpty:f.ContentFragmentV1IsEmptyFn});Object(d.withMappable)(x,{isEmpty:f.ContentFragmentV1IsEmptyFn});var P="core/wcm/components/experiencefragment/v1/experiencefragment",_={emptyLabel:"Experience Fragment",isEmpty:j.ContainerV1IsEmptyFn,resourceType:P};Object(d.MapTo)(P)(j.ContainerV1,_);Object(d.withMappable)(j.ContainerV1,_);var w=n(6),E="core/wcm/components/teaser/v1/teaser",A={emptyLabel:"Teaser",isEmpty:w.TeaserV1IsEmptyFn,resourceType:E};Object(d.MapTo)(E)(w.TeaserV1,A);Object(d.withMappable)(w.TeaserV1,A);var C="core/wcm/components/image/v2/image",I={emptyLabel:"Image",isEmpty:w.ImageV2IsEmptyFn,resourceType:C};Object(d.MapTo)(C)(w.ImageV2,I);var S=Object(d.withMappable)(w.ImageV2,I);Object(d.MapTo)("core/wcm/components/text/v2/text")(w.TextV2,{isEmpty:w.TextV2IsEmptyFn});Object(d.withMappable)(w.TextV2,{isEmpty:w.TextV2IsEmptyFn});var k="core/wcm/components/title/v2/title",R={emptyLabel:"Title",isEmpty:w.TitleV2IsEmptyFn,resourceType:k};Object(d.MapTo)(k)(w.TitleV2,R);var H=Object(d.withMappable)(w.TitleV2,R);Object(d.MapTo)("wknd/components/container")(j.ContainerV1,{isEmpty:j.ContainerV1IsEmptyFn});Object(d.withMappable)(j.ContainerV1,{isEmpty:j.ContainerV1IsEmptyFn});var N=function(e){Object(O.a)(n,e);var t=Object(y.a)(n);function n(){return Object(b.a)(this,n),t.apply(this,arguments)}return Object(v.a)(n,[{key:"getHTML",value:function(e){return{__html:e}}},{key:"getFragmentGrid",value:function(e){var t=!1;if(this.props.cqItemsOrder.includes(e)&&this.props.cqItems[e]){var n=d.Utils.modelToProps(this.props.cqItems[e]);if(n){var a=d.ComponentMapping.get(n.cqType);a&&(t=this.connectComponentWithItem(a,n,e))}}return t}},{key:"connectComponentWithItem",value:function(e,t,n){var r=this.getItemPath(n);return Object(a.createElement)(e,Object(g.a)(Object(g.a)({},t),{},{key:"".concat(n,"-").concat(r,"}"),cqPath:r,isInEditor:this.props.isInEditor,containerProps:this.getItemComponentProps(t,n,r)}))}},{key:"getItemPath",value:function(e){return this.props&&this.props.cqPath?this.props.cqPath+"/"+e:e}},{key:"getItemComponentProps",value:function(e,t,n){return{}}},{key:"render",value:function(){var e=this;return Object(T.jsx)("div",{className:"contentfragment ".concat(this.props.componentProperties.containerProps.className),children:Object(T.jsxs)("article",{id:this.props.id,className:"cmp-contentfragment","data-cmp-contentfragment-model":this.props.model,"data-cmp-data-layer":JSON.stringify(this.props.dataLayer),children:[Object(T.jsx)("h3",{className:"cmp-contentfragment__title",children:this.props.title}),Object(T.jsx)("div",{className:"cmp-contentfragment__elements",children:this.props.paragraphs&&this.props.paragraphs.map((function(t,n){return Object(T.jsxs)(r.a.Fragment,{children:[e.getFragmentGrid("par".concat(n)),Object(T.jsx)("div",{dangerouslySetInnerHTML:e.getHTML(t)},n)]},n)}))})]})})}}]),n}(f.ContentFragmentV1);Object(d.MapTo)("wknd/components/contentfragment")(N,{isEmpty:f.ContentFragmentV1IsEmptyFn});Object(d.withMappable)(N,{isEmpty:f.ContentFragmentV1IsEmptyFn});Object(d.MapTo)("wknd/components/experiencefragment")(j.ContainerV1,{isEmpty:j.ContainerV1IsEmptyFn});Object(d.withMappable)(j.ContainerV1,{isEmpty:j.ContainerV1IsEmptyFn});Object(d.MapTo)("wknd/components/teaser")(w.TeaserV1,{isEmpty:w.TeaserV1IsEmptyFn});Object(d.withMappable)(w.TeaserV1,{isEmpty:w.TeaserV1IsEmptyFn});Object(d.MapTo)("wknd/components/image")(w.ImageV2,{isEmpty:w.ImageV2IsEmptyFn});Object(d.withMappable)(w.ImageV2,{isEmpty:w.ImageV2IsEmptyFn});Object(d.MapTo)("wknd/components/text")(w.TextV2,{isEmpty:w.TextV2IsEmptyFn});Object(d.withMappable)(w.TextV2,{isEmpty:w.TextV2IsEmptyFn});Object(d.MapTo)("wknd/components/title")(w.TitleV2,{isEmpty:w.TitleV2IsEmptyFn});Object(d.withMappable)(w.TitleV2,{isEmpty:w.TitleV2IsEmptyFn});var F=n(15),L="Validation error of type FieldUndefined: Field 'adventureList' in type 'QueryType' is undefined @ 'adventureList'",V="Unexpected token < in JSON at position 0";function M(e){var t=e.error;try{return Object(T.jsxs)("div",{className:"content",children:[Object(T.jsx)("h1",{children:"Error"}),Object(T.jsx)("pre",{style:z.pre,children:t}),t===L&&Object(T.jsx)("span",{children:"The Adventures, Articles Content Fragment Models are either not created and installed, or need to be resaved."}),t===L&&Object(T.jsx)("a",{style:z.a,href:"/libs/dam/cfm/models/console/content/models.html/conf",children:"Setup Content Fragments"}),t===V&&Object(T.jsx)("span",{children:"The global GraphQL endpoint appears to not exist or not be setup."}),t===V&&Object(T.jsx)("a",{style:z.a,href:"/libs/cq/graphql/sites/admin/content/console.html",children:"Setup Global GraphQL Endpoint"})]})}catch(n){return Object(T.jsx)("div",{children:"Error with the Error"})}}var z={pre:{border:"1px solid rgba(255, 255, 255, .1)",borderRadius:"4px",padding:"1rem",width:"120ch",whiteSpace:"normal"},a:{color:l.text}},D=function(e,t,n){return t||(t=function(){return!1}),n||(n=function(e){return e}),W(e,t,n)},U=function(e,t,n){return n.match(/^\/content\/([^\0]*)(\.jpg|[^\0]jpeg|[^\0]png|[^\0]gif|[^\0]html)$/i)},W=function e(t,n,a){return Object.keys(t).forEach((function(r){null===t[r]||"object"!==typeof t[r]?"string"===typeof t[r]&&n(t,r,t[r])&&(t[r]=a(t[r])):e(t[r],n,a)})),t},G=n(203).AEMHeadless,q=Object({NODE_ENV:"production",PUBLIC_URL:"/pages/dgonzale/www/publish-hw",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_MOUNT:"${HOMEPAGE}",REACT_APP_GRAPHQL_ENDPOINT:"/content/_cq_graphql/global/endpoint.json",REACT_APP_HOST_URI:"https://publish-p54353-e359503.adobeaemcloud.com",REACT_APP_CONTENT_PATH:"/en/index",REACT_APP_SITE:"wknd-app",REACT_APP_PUBLIC_URI:"https://davidjgonzalez.github.io/publish"}),B=q.REACT_APP_HOST_URI,K=q.REACT_APP_GRAPHQL_ENDPOINT,Q=q.REACT_APP_AUTHORIZATION;function $(e,t){var n=Object(a.useState)(null),r=Object(F.a)(n,2),i=r[0],o=r[1],c=Object(a.useState)(null),s=Object(F.a)(c,2),l=s[0],p=s[1];return Object(a.useEffect)((function(){var n={serviceURL:B,endpoint:K};Q&&(n.auth=Q.split(":"));var a=new G(n);(e?a.runQuery.bind(a):a.runPersistedQuery.bind(a))(e||t).then((function(e){var t=e.data,n=e.errors;n&&p(function(e){return e.map((function(e){return e.message?e.message:e})).join(",")}(n)),t&&o(D(t,U,(function(e){return B+e})))})).catch((function(e){p(e)}))}),[e,t]),{graphQLData:i,errors:l}}var J="wknd-app",Z="/content/".concat("wknd-app").concat("/en/index"),Y=window.location.pathname;Y.startsWith("/editor.html/content/")||Y.includes("/content/")&&Y.endsWith("/en/index.html")?(J=Y.replace("/content/","").replace("/en/index.html",""),Z="/content/".concat(J,"/en/index")):(null===window.localStorage.getItem("aemGuidesWkndPwa.site")?window.localStorage.setItem("aemGuidesWkndPwa.site",J):J=window.localStorage.getItem("aemGuidesWkndPwa.site"),null===window.localStorage.getItem("aemGuidesWkndPwa.contentPath")?window.localStorage.setItem("aemGuidesWkndPwa.contentPath",Z):Z=window.localStorage.getItem("aemGuidesWkndPwa.contentPath"));var X=Z,ee=J;var te=n(27),ne=n(14),ae=n.n(ne),re="aem-site-template-wknd-spa",ie="com.adobe.aem.wcm.site.manager.config.SiteConfig";function oe(){return ce.apply(this,arguments)}function ce(){return(ce=Object(te.a)(ae.a.mark((function e(){var t,n,a,r,i,o,c,s;return ae.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=[],e.next=4,fetch("/content.1.json",{mode:"no-cors"});case 4:return n=e.sent,e.next=7,n.json();case 7:a=e.sent,r=Object.keys(a).filter((function(e){return"object"===typeof a[e]&&"cq:Page"===a[e]["jcr:primaryType"]})),e.t0=ae.a.keys(r);case 10:if((e.t1=e.t0()).done){e.next=34;break}return i=e.t1.value,e.prev=12,e.next=15,fetch("/conf/".concat(r[i],"/sling:configs.1.json"));case 15:return o=e.sent,e.next=18,o.json();case 18:return c=e.sent,e.next=21,c;case 21:if(e.t2=e.sent,!e.t2){e.next=24;break}e.t2=c.hasOwnProperty(ie);case 24:if(!e.t2){e.next=27;break}(s=c[ie].siteTemplatePath)&&s.includes(re)&&t.push(r[i]);case 27:e.next=32;break;case 29:e.prev=29,e.t3=e.catch(12),console.log("Error fetching site conf data",e.t3);case 32:e.next=10;break;case 34:return e.abrupt("return",t);case 37:return e.prev=37,e.t4=e.catch(0),console.log("Error fetching AEM Content",e.t4),e.abrupt("return",[]);case 41:case"end":return e.stop()}}),e,null,[[0,37],[12,29]])})))).apply(this,arguments)}n(210);function se(){var e,t=Object(a.useState)(!1),n=Object(F.a)(t,2),r=n[0],i=n[1],o=Object(a.useState)(!1),s=Object(F.a)(o,2),l=s[0],p=s[1],d=Object(a.useState)([]),u=Object(F.a)(d,2),h=u[0],m=u[1],j=$("{\n  adventureList {\n    items {\n      _path\n      adventureActivity\n      adventureTitle\n      adventurePrimaryImage {\n        ...on ImageRef {\n          _path\n          mimeType\n          width\n          height\n        }\n      }\n    }\n  }\n}"),g=j.graphQLData,b=j.errors;if(b||!1===g)return Object(T.jsx)(M,{error:b});if(null===g)return Object(T.jsx)("div",{children:"Loading..."});!l&&null!==g&&void 0!==g&&null!==(e=g.adventureList)&&void 0!==e&&e.items&&p(function(e){var t={};return e.forEach((function(e){if(e.adventureActivity){var n=function(e){return e.toLowerCase().replace(" ","-")}(e.adventureActivity);t.hasOwnProperty(n)||(t[n]=e)}else t.miscellaneous=e})),t}(g.adventureList.items));return Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)("div",{className:"search-by-category-container",children:Object(T.jsx)("ul",{className:"search-by-category",children:l&&Object.keys(l).map((function(e,t){var n=l[e],a=r===n.adventureActivity?"selected":"";return Object(T.jsxs)("li",{className:"search-by-category-item",onClick:function(){return e=n.adventureActivity,i(e),void m(function(e,t){return e.filter((function(e){return e.adventureActivity===t}))}(g.adventureList.items,e));var e},children:[Object(T.jsx)("img",{className:"search-by-category-item-image ".concat(a),src:n.adventurePrimaryImage._path,alt:n.adventureTitle}),Object(T.jsx)("p",{children:n.adventureActivity||"Miscellaneous"})]},e)}))})}),Object(T.jsx)("div",{className:"search-by-category-container",children:Object(T.jsx)("ul",{className:"search-by-category",children:h&&h.map((function(e,t){return Object(T.jsx)("li",{className:"search-by-category-item",children:Object(T.jsxs)(c.Link,{to:"/detail?_path=".concat(e._path),children:[Object(T.jsx)("img",{className:"search-by-category-item-image",src:e.adventurePrimaryImage._path,alt:e.adventureTitle}),Object(T.jsx)("p",{children:e.adventureTitle})]})},t)}))})})]})}var le=n(167),pe=n.n(le),de=function(e){Object(O.a)(n,e);var t=Object(y.a)(n);function n(e,a,r,i,o){var c;return Object(b.a)(this,n),(c=t.call(this,e)).authorization=a||{},c.routeToAemPathFn=r||function(e){return e},c.pathRewriteAcceptsFn=i||function(e,t,n){return!1},c.pathRewriteFn=o||function(t,n){return e+t},c}return Object(v.a)(n,[{key:"fetch",value:function(e){function t(t){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(){var e=Object(te.a)(ae.a.mark((function e(t){var n,a,r=this;return ae.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return",Promise.reject(new Error("Rejected fetching empty path.")));case 2:return n="".concat(this.apiHost).concat(this.routeToAemPathFn(t)),e.next=5,this._getHeaders(this.authorization);case 5:return a=e.sent,e.abrupt("return",fetch(n,{headers:a}).then((function(e){return e.status>=200&&e.status<300?e.json().then((function(e){return D(e,r.pathRewriteAcceptsFn,r.pathRewriteFn)})):Promise.reject(e)})).catch((function(e){return Promise.reject(e)})));case 7:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}())},{key:"_getHeaders",value:function(){var e=Object(te.a)(ae.a.mark((function e(t){var n,a,r,i,o,c;return ae.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((r=new Headers).append("Content-Type","application/json"),null===t||void 0===t||!t.credentials){e.next=9;break}return e.next=5,this._getAccessToken(t.credentials);case 5:i=e.sent,r.append("Authorization","Bearer "+i),e.next=10;break;case 9:null!==t&&void 0!==t&&t.devToken?r.append("Authorization","Bearer "+t.devToken):null!==t&&void 0!==t&&t.basic&&null!==t&&void 0!==t&&null!==(n=t.basic)&&void 0!==n&&n.user&&null!==t&&void 0!==t&&null!==(a=t.basic)&&void 0!==a&&a.password&&(o=t.basic.user,c=t.basic.password,r.append("Authorization","Basic "+btoa(o+":"+c)));case 10:return e.abrupt("return",r);case 11:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"_getAccessToken",value:function(){var e=Object(te.a)(ae.a.mark((function e(t){var n,a,r;return ae.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.integration,e.next=3,pe()({clientId:n.technicalAccount.clientId,technicalAccountId:n.id,orgId:n.org,clientSecret:n.technicalAccount.clientSecret,privateKey:n.privateKey,metaScopes:n.metascopes.split(","),ims:"https://".concat(n.imsEndpoint)});case 3:return a=e.sent,r=a.access_token,e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),n}(p.ModelClient),ue=Object({NODE_ENV:"production",PUBLIC_URL:"/pages/dgonzale/www/publish-hw",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_MOUNT:"${HOMEPAGE}",REACT_APP_GRAPHQL_ENDPOINT:"/content/_cq_graphql/global/endpoint.json",REACT_APP_HOST_URI:"https://publish-p54353-e359503.adobeaemcloud.com",REACT_APP_CONTENT_PATH:"/en/index",REACT_APP_SITE:"wknd-app",REACT_APP_PUBLIC_URI:"https://davidjgonzalez.github.io/publish"}),he=ue.REACT_APP_AUTHORIZATION,me=ue.REACT_APP_HOST_URI,je=function(e){var t={basic:{user:null===he||void 0===he?void 0:he.split(":")[0],password:null===he||void 0===he?void 0:he.split(":")[1]}};p.ModelManager.initializeAsync({modelClient:new de(me,t,be,U,ge),path:e})};function ge(e){var t=e;return console.log("contentPath:"+X),e.startsWith(X)&&e.match(/^\/content\/.*\.(html)$/)?(e=e.substring(X.length),console.log("[ ".concat(t," -> ").concat(e," ]"))):e.match(/^\/content\/.*\.(jpg|jpeg|gif|png|wepb)$/)?(e=me+e,console.log("[ ".concat(t," -> ").concat(e," ]"))):console.log("No changes requires to content paths: "+e),e}function be(e){console.log("Starting to process route transform: "+e);var t="/content/wknd-app/en/";return"/pages/dgonzale/www/publish-hw.model.json"===e?(e=t+"index.model.json",console.log("Route was  /pages/dgonzale/www/publish-hw.model.json transformed to: "+e)):e.startsWith("/pages/dgonzale/www/publish-hw")?(e=e.replace("/pages/dgonzale/www/publish-hw",t),console.log("Route started with /pages/dgonzale/www/publish-hw transformed to: "+e)):e.startsWith(t)?console.log("No transformation necessary: "+e):(e.startsWith("/")&&(e=e.substring(1)),e=t+e,console.log("Route did NOT start with /content/wknd-app/en/ transformed to: "+e)),e}var ve=Object({NODE_ENV:"production",PUBLIC_URL:"/pages/dgonzale/www/publish-hw",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_MOUNT:"${HOMEPAGE}",REACT_APP_GRAPHQL_ENDPOINT:"/content/_cq_graphql/global/endpoint.json",REACT_APP_HOST_URI:"https://publish-p54353-e359503.adobeaemcloud.com",REACT_APP_CONTENT_PATH:"/en/index",REACT_APP_SITE:"wknd-app",REACT_APP_PUBLIC_URI:"https://davidjgonzalez.github.io/publish"});ve.REACT_APP_AUTHORIZATION,ve.REACT_APP_HOST_URI;function Oe(){var e="".concat(X,"/adventures");return je(e),Object(T.jsxs)("div",{className:"content",style:ye.container,children:[Object(T.jsxs)("div",{style:ye.searchBox,children:[Object(T.jsx)("div",{style:ye.homepageHeroImage,className:"homepage-hero-image-wrapper",children:Object(T.jsx)(S,{styles:ye.homepageHeroImage,pagePath:e,itemPath:"root/image"},"search-image")}),Object(T.jsxs)("div",{style:ye.homepageHeroTitleSearch,children:[Object(T.jsx)("div",{style:ye.homepageHeroTitle,children:Object(T.jsx)(H,{styles:ye.homepageHeroTitle,pagePath:e,itemPath:"root/title"},"search-title")}),Object(T.jsx)("input",{style:ye.homepageHeroSearch,placeholder:"Find Your Next Adventure"})]})]}),Object(T.jsxs)("div",{style:ye.searchByCategory,children:[Object(T.jsx)(H,{styles:ye.homepageHeroTitle,pagePath:e,itemPath:"root/title-categories"},"search-title-categories"),Object(T.jsx)(se,{})]})]})}var ye={container:{},searchBox:{height:"10rem",minHeight:"10rem",position:"relative",overflow:"hidden"},searchResults:{padding:"1rem"},homepageHero:{flex:1,position:"relative"},homepageHeroTitleSearch:{position:"absolute",top:".5rem",left:0,right:0,marginTop:".5rem",textAlign:"center",zIndex:10},homepageHeroTitle:{color:l.background},homepageHeroImage:{position:"absolute",top:0,right:0,bottom:0,left:0},homepageHeroSearch:{gridArea:"overlay",alignSelf:"flex-start",justifySelf:"center",padding:".5rem 1rem",marginTop:".25rem",borderRadius:"5rem",border:"none",boxShadow:"0 0 5px rgba(0,0,0,.1)"},searchByCategory:{padding:"1rem"}},fe=n(55);function Te(e){var t,n=e.imgSrc,a=e.title;return Object(T.jsx)("div",{style:xe.imageContainer,className:"loading-skeleton",children:n&&Object(T.jsx)("img",{src:(t=n,!!t&&(t.startsWith("http")||(t="".concat("https://davidjgonzalez.github.io/publish").concat(t))&&t.includes("//content")&&(t=t.replace("//content","/content")),t)),style:xe.image,alt:a})})}var xe={imageContainer:{position:"relative",paddingTop:"55%",overflow:"hidden"},image:{width:"100%",maxWidth:"100%",position:"absolute",top:0,right:0,bottom:0,left:0,objectFit:"cover"}};function Pe(){var e,t=Object(s.m)().id;console.log("ADEVNTURE DETAILS: "+t);var n=Object(a.useState)(!1),r=Object(F.a)(n,2),i=r[0],o=r[1],c=$(function(e){return'{\n  adventureByPath (_path: "'.concat(e,'") {\n    item {\n      _path\n      adventureTitle\n      adventureActivity\n      adventureType\n      adventurePrice\n      adventureTripLength\n      adventureGroupSize\n      adventureDifficulty\n      adventurePrice\n      adventurePrimaryImage {\n        ... on ImageRef {\n          _path\n          mimeType\n          width\n          height\n        }\n      }\n      adventureDescription {\n        html\n        json\n      }\n      adventureItinerary {\n        html\n        json\n      }\n    }\n  }\n}')}(new URLSearchParams(Object(s.l)().search).get("_path"))),l=c.graphQLData,p=c.errors;if(null!==p)return o(!0),Object(T.jsx)(M,{error:p});if(!i&&null===l)return Object(T.jsx)("div",{className:"content detail-screen",style:_e.container,children:Object(T.jsxs)("div",{style:_e.headerContainer,children:[Object(T.jsx)(fe.a,{onClick:function(){return window.history.back()},size:"2rem"}),Object(T.jsx)("div",{className:"loading-skeleton",style:_e.titleSkeleton})]})});if(i&&(null===l||void 0===l||null===(e=l.adventureByPath)||void 0===e||!e.item))return Object(T.jsx)(M,{error:"There was an error with the returned data."});if(null!==l){var d,u;i||o(!0);var h=l.adventureByPath.item,m=h.adventureTitle||!1,j=(null===(d=h.adventureDescription)||void 0===d?void 0:d.json)||!1,g=(null===(u=h.adventurePrimaryImage)||void 0===u?void 0:u._path)||!1,b=[];return h.adventureActivity&&b.push({key:"Activity",value:h.adventureActivity}),h.adventureType&&b.push({key:"Adventure Type",value:h.adventureType}),h.adventureTripLength&&b.push({key:"Trip Length",value:h.adventureTripLength}),h.adventureGroupSize&&b.push({key:"Group Size",value:h.adventureGroupSize}),h.adventureDifficulty&&b.push({key:"Difficulty",value:h.adventureDifficulty}),h.adventurePrice&&b.push({key:"Activity",value:h.adventurePrice}),Object(T.jsxs)("div",{className:"content detail-screen",style:_e.container,children:[Object(T.jsxs)("div",{style:_e.headerContainer,children:[Object(T.jsx)(fe.a,{onClick:function(){return window.history.back()},size:"2rem"}),!m&&Object(T.jsx)("div",{className:"loading-skeleton",style:_e.titleSkeleton}),m&&Object(T.jsx)("h1",{style:_e.title,children:m})]}),Object(T.jsx)(Te,{imgSrc:g,alt:m}),Object(T.jsxs)("div",{style:_e.description,children:[Object(T.jsx)("div",{style:_e.adventureDetails,children:b.map((function(e,t){var n=e.key,a=e.value;return Object(T.jsxs)("div",{children:[Object(T.jsx)("span",{style:_e.adventureDetailsKey,children:n}),Object(T.jsx)("p",{style:_e.adventureDetailsValue,children:a})]},t)}))}),j&&j.map((function(e,t){var n="header"===e.nodeType?"".concat(e.style):"p";return Object(T.jsx)(n,{children:e.content.map((function(e){return e.value}))},t)}))]})]})}}var _e={container:{flex:1},title:{paddingLeft:".5rem",fontSize:"1.5rem",textTransform:"uppercase",maxWidth:"100%",margin:0},description:{padding:"1rem",backgroundColor:l.detailBackground,color:l.detailText,flex:1},titleSkeleton:{height:"2.5rem",width:"85%",margin:"1rem"},headerContainer:{display:"flex",flexDirection:"row",padding:"1rem 0",alignItems:"center"},adventureDetails:{display:"grid",gap:"1rem",gridTemplateColumns:"repeat(3, 1fr)",marginBottom:"1rem"},adventureDetailsKey:{fontSize:".75rem"},adventureDetailsValue:{fontWeight:"700"}},we=(n(331),Object({NODE_ENV:"production",PUBLIC_URL:"/pages/dgonzale/www/publish-hw",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_MOUNT:"${HOMEPAGE}",REACT_APP_GRAPHQL_ENDPOINT:"/content/_cq_graphql/global/endpoint.json",REACT_APP_HOST_URI:"https://publish-p54353-e359503.adobeaemcloud.com",REACT_APP_CONTENT_PATH:"/en/index",REACT_APP_SITE:"wknd-app",REACT_APP_PUBLIC_URI:"https://davidjgonzalez.github.io/publish"})),Ee=we.REACT_APP_AUTHORIZATION,Ae=we.REACT_APP_HOST_URI;function Ce(){var e="".concat(X);return console.log(Ee),console.log(Ae),console.log(X),je(e),Object(T.jsxs)("div",{className:"content",style:Ie.container,children:[Object(T.jsxs)(c.Link,{to:"/adventures",style:Ie.homepageHero,children:[Object(T.jsx)("div",{style:Ie.homepageHeroImage,className:"homepage-hero-image-wrapper",children:Object(T.jsx)(S,{styles:Ie.homepageHeroImage,pagePath:X,itemPath:"root/image"},"search-image")}),Object(T.jsxs)("div",{style:Ie.homepageHeroTitleSearch,children:[Object(T.jsx)("div",{style:Ie.homepageHeroTitle,children:Object(T.jsx)(H,{styles:Ie.homepageHeroTitle,pagePath:X,itemPath:"root/title"},"search-title")}),Object(T.jsx)("input",{style:Ie.homepageHeroSearch,placeholder:"Find Adventures Near You"})]})]}),Object(T.jsxs)(c.Link,{to:"/magazine",style:Ie.homepageHero,children:[Object(T.jsx)("div",{style:Ie.homepageHeroImage,className:"homepage-hero-image-wrapper",children:Object(T.jsx)(S,{styles:Ie.homepageHeroImage,pagePath:X,itemPath:"root/image-featured-articles"},"featured-article-image")}),Object(T.jsx)("div",{style:Ie.homepageHeroTitleSearch,children:Object(T.jsx)("div",{style:Object(g.a)(Object(g.a)({},Ie.homepageHeroTitle),{},{textAlign:"left",paddingLeft:"1rem"}),children:Object(T.jsx)(H,{styles:Ie.homepageHeroTitle,pagePath:X,itemPath:"root/title-featured-articles"},"featured-article-title")})})]})]})}var Ie={container:{},homepageHero:{flex:1,position:"relative"},homepageHeroTitleSearch:{position:"absolute",top:".5rem",left:0,right:0,marginTop:".5rem",textAlign:"center",zIndex:10},homepageHeroTitle:{color:l.background},homepageHeroImage:{position:"absolute",top:0,right:0,bottom:0,left:0},homepageHeroSearch:{gridArea:"overlay",alignSelf:"flex-start",justifySelf:"center",padding:".5rem 1rem",marginTop:".25rem",borderRadius:"5rem",border:"none",boxShadow:"0 0 5px rgba(0,0,0,.1)",width:"14rem",textAlign:"center"},adventureListContainer:{overflow:"hidden",flex:1},adventureList:{display:"flex",flexDirection:"row",overflowX:"auto"}},Se=Object({NODE_ENV:"production",PUBLIC_URL:"/pages/dgonzale/www/publish-hw",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_MOUNT:"${HOMEPAGE}",REACT_APP_GRAPHQL_ENDPOINT:"/content/_cq_graphql/global/endpoint.json",REACT_APP_HOST_URI:"https://publish-p54353-e359503.adobeaemcloud.com",REACT_APP_CONTENT_PATH:"/en/index",REACT_APP_SITE:"wknd-app",REACT_APP_PUBLIC_URI:"https://davidjgonzalez.github.io/publish"});Se.REACT_APP_AUTHORIZATION,Se.REACT_APP_HOST_URI;function ke(){var e="".concat(X,"/magazine");return je(e),Object(T.jsxs)("div",{className:"content",style:Re.container,children:[Object(T.jsx)("div",{style:Re.pageTitle,children:Object(T.jsx)(H,{pagePath:e,itemPath:"root/title"},"title")}),Object(T.jsx)(m,{pagePath:e,itemPath:"root/responsivegrid"})]})}var Re={container:{},pageTitle:{padding:"1rem"},adventureCard:{padding:"1rem"}};function He(){var e="/content/wknd-app/en/index"+Object(s.l)().pathname.split(".html")[0];return console.log("page path: "+e),je(e),Object(T.jsxs)("div",{className:"content",style:Ne.container,children:[Object(T.jsxs)("div",{style:Ne.headerWrapper,children:[Object(T.jsxs)("div",{style:Ne.headerContainer,children:[Object(T.jsx)(fe.a,{onClick:function(){return window.history.back()},size:"2rem"}),Object(T.jsx)(H,{style:Ne.pageTitle,pagePath:e,itemPath:"root/title"})]}),Object(T.jsx)("div",{style:Ne.featuredImage,children:Object(T.jsx)(S,{pagePath:e,itemPath:"root/featured-image"})})]}),Object(T.jsx)("div",{style:Ne.contentStyles,children:Object(T.jsx)(m,{pagePath:e,itemPath:"root/responsivegrid"})})]})}var Ne={container:{},pageTitle:{padding:"1rem"},featuredImage:{margin:"1rem"},contentStyles:{backgroundColor:l.detailBackground,color:l.detailText,paddingTop:"1rem"},adventureCard:{padding:"1rem"},titleSkeleton:{height:"2.5rem",width:"85%",margin:"1rem"},headerWrapper:{display:"flex",flexDirection:"column"},headerContainer:{display:"flex",flexDirection:"row",padding:"1rem 0 0",alignItems:"center"}},Fe=n(172);function Le(){var e="--select-site--",t=Object(a.useState)(!1),n=Object(F.a)(t,2),r=n[0],i=n[1],o=Object(a.useState)(ee||e),c=Object(F.a)(o,2),s=c[0],l=c[1],p=Object(a.useState)([ee]),d=Object(F.a)(p,2),u=d[0],h=d[1],m=Object(a.useState)("/en/index"),j=Object(F.a)(m,1)[0];Object(a.useEffect)((function(){function t(){return(t=Object(te.a)(ae.a.mark((function t(){return ae.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=h,t.t1=[e],t.t2=Fe.a,t.next=5,oe();case 5:t.t3=t.sent,t.t4=(0,t.t2)(t.t3),t.t5=t.t1.concat.call(t.t1,t.t4),(0,t.t0)(t.t5),console.log("spaSites",u);case 10:case"end":return t.stop()}}),t)})))).apply(this,arguments)}r||(!function(){t.apply(this,arguments)}(),i(!0))}),[r,u]);var g=function(e){return"/content/".concat(e).concat(j)};return Object(T.jsxs)("div",{className:"content",style:Ve.container,children:[Object(T.jsxs)("div",{children:[Object(T.jsx)("h1",{children:"Settings"}),Object(T.jsxs)("div",{style:Ve.selectContainer,children:[Object(T.jsx)("strong",{children:"Site to Render"}),Object(T.jsx)("select",{style:Ve.select,value:s,onChange:function(e){var t=e.target.value;t!==localStorage.getItem("aemGuidesWkndPwa.site")&&(window.localStorage.setItem("aemGuidesWkndPwa.contentPath",g(t)),window.localStorage.setItem("aemGuidesWkndPwa.site",t),l(t),window.location.reload())},children:u.map((function(e){return Object(T.jsx)("option",{value:e,children:e})}))})]}),Object(T.jsxs)("dl",{children:[Object(T.jsx)("dt",{children:Object(T.jsx)("strong",{children:"Connected Site"})}),Object(T.jsxs)("dd",{children:["/content/",s]}),Object(T.jsx)("dt",{children:Object(T.jsx)("strong",{children:"Root Page"})}),Object(T.jsx)("dd",{children:g(s)})]})]}),Object(T.jsx)("em",{style:Ve.explanation,children:"If no content appears on the Home Screen, ensure that you have created a site using the WKND SPA Site template. The default name is WKND-App, but you can select any name and configure it here."})]})}var Ve={container:{padding:"1rem",justifyContent:"space-between"},selectContainer:{margin:"1rem 0"},select:{marginTop:".5rem",padding:".5rem",borderRadius:"5px",backgroundColor:"#999",fontWeight:700,display:"block",width:"100%"},explanation:{marginBottom:"2rem"}},Me=n(168),ze=n(169),De=n(170),Ue=n(171);function We(){var e="2rem",t=Object(s.l)(),n="/"===t.pathname,a="/adventures"===t.pathname,r="/magazine"===t.pathname,i="/settings"===t.pathname,o=function(e){return Object(g.a)(Object(g.a)({},Ge.tab),{},{color:e?l.accent:l.text})};return Object(T.jsx)("div",{style:Ge.tabsContainer,children:Object(T.jsxs)("nav",{style:Ge.tabs,children:[Object(T.jsxs)(c.Link,{to:"/",style:o(n),children:[Object(T.jsx)(Me.a,{size:e}),Object(T.jsx)("span",{style:Ge.tabText,children:"Home"})]}),Object(T.jsxs)(c.Link,{to:"/adventures",style:o(a),children:[Object(T.jsx)(ze.a,{size:e}),Object(T.jsx)("span",{style:Ge.tabText,children:"Adventures"})]}),Object(T.jsxs)(c.Link,{to:"/magazine",style:o(r),children:[Object(T.jsx)(De.a,{size:e}),Object(T.jsx)("span",{style:Ge.tabText,children:"Magazine"})]}),Object(T.jsxs)(c.Link,{to:"/settings",style:o(i),children:[Object(T.jsx)(Ue.a,{size:e}),Object(T.jsx)("span",{style:Ge.tabText,children:"Settings"})]})]})})}var Ge={tabsContainer:{zIndex:10,backgroundColor:l.background,height:"6rem"},tabs:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",height:"100%",listStyle:"none",margin:0,padding:0,overflow:"hidden"},tab:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",color:l.text,flex:1,textDecoration:"none"},tabText:{fontFamily:"Source Sans Pro"}};n(332);function qe(){var e=function(e){var t=p.PathUtils.toAEMPath(e,"https://publish-p54353-e359503.adobeaemcloud.com","wknd-app/en/index");return console.log("route: "+t),t},t=window.top.location.pathname.startsWith("/editor.html")?c.BrowserRouter:c.HashRouter;return Object(T.jsx)("div",{id:"app-container",style:Be.container,children:Object(T.jsxs)(t,{children:[Object(T.jsxs)(s.g,{children:[Object(T.jsx)(s.d,{path:e("/adventures"),children:Object(T.jsx)(Oe,{})}),Object(T.jsx)(s.d,{path:e("/detail"),children:Object(T.jsx)(Pe,{})}),Object(T.jsx)(s.d,{path:["/magazine/:id"],children:Object(T.jsx)(He,{})}),Object(T.jsx)(s.d,{path:e("/magazine"),children:Object(T.jsx)(ke,{})}),Object(T.jsx)(s.d,{path:e("/settings"),children:Object(T.jsx)(Le,{})}),Object(T.jsx)(s.d,{path:e("/"),children:Object(T.jsx)(Ce,{})})]}),Object(T.jsx)(We,{})]})})}var Be={container:{position:"relative",backgroundColor:l.background,paddingTop:"10px",color:l.text}};n(333);o.a.render(Object(T.jsx)(r.a.StrictMode,{children:Object(T.jsx)(qe,{})}),document.getElementById("root"))},58:function(e,t,n){}},[[334,1,2]]]);
//# sourceMappingURL=main.148977ff.chunk.js.map