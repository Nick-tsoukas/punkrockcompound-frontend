if (self.CavalryLogger) { CavalryLogger.start_js(["ijlTivZ"]); }

__d("FriendingCometPYMKListItem_user.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[{kind:"RootArgument",name:"scale"}],kind:"Fragment",metadata:null,name:"FriendingCometPYMKListItem_user",selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"friendship_status",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null},{alias:null,args:[{kind:"Literal",name:"height",value:60},{kind:"Variable",name:"scale",variableName:"scale"},{kind:"Literal",name:"width",value:60}],concreteType:"Image",kind:"LinkedField",name:"profile_picture",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null}],storageKey:null},{args:null,kind:"FragmentSpread",name:"FriendingCometListItemWithButtons_user"}],type:"User",abstractKey:null};e.exports=a}),null);
__d("FriendingCometPYMKPanelPaginationQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="3872788706142213"}),null);
__d("FriendingCometPYMKPanelPaginationQuery.graphql",["FriendingCometPYMKPanelPaginationQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{defaultValue:10,kind:"LocalArgument",name:"count"},{defaultValue:null,kind:"LocalArgument",name:"cursor"},{defaultValue:"FRIENDS_CENTER",kind:"LocalArgument",name:"location"},{defaultValue:null,kind:"LocalArgument",name:"scale"}],c={kind:"Variable",name:"location",variableName:"location"},d=[{kind:"Variable",name:"after",variableName:"cursor"},{kind:"Variable",name:"first",variableName:"count"},c],e={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},f={alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},g={kind:"Variable",name:"scale",variableName:"scale"},h=[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null}];return{fragment:{argumentDefinitions:a,kind:"Fragment",metadata:null,name:"FriendingCometPYMKPanelPaginationQuery",selections:[{alias:null,args:null,concreteType:"Viewer",kind:"LinkedField",name:"viewer",plural:!1,selections:[{args:[{kind:"Variable",name:"count",variableName:"count"},{kind:"Variable",name:"cursor",variableName:"cursor"},c],kind:"FragmentSpread",name:"FriendingCometPYMKPanel_viewer"}],storageKey:null}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"FriendingCometPYMKPanelPaginationQuery",selections:[{alias:null,args:null,concreteType:"Viewer",kind:"LinkedField",name:"viewer",plural:!1,selections:[{alias:null,args:d,concreteType:"PeopleYouMayKnowConnection",kind:"LinkedField",name:"people_you_may_know",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"tracking_signature",storageKey:null},{alias:null,args:null,concreteType:"PeopleYouMayKnowEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"node",plural:!1,selections:[e,{alias:null,args:null,kind:"ScalarField",name:"friendship_status",storageKey:null},f,{alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null},{alias:null,args:[{kind:"Literal",name:"height",value:60},g,{kind:"Literal",name:"width",value:60}],concreteType:"Image",kind:"LinkedField",name:"profile_picture",plural:!1,selections:h,storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},{kind:"InlineFragment",selections:[{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"social_context",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"text",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"social_context_top_mutual_friends",plural:!0,selections:[e,f,{alias:null,args:[{kind:"Literal",name:"site",value:"comet"}],kind:"ScalarField",name:"url",storageKey:'url(site:"comet")'},{alias:null,args:[{kind:"Literal",name:"height",value:20},g,{kind:"Literal",name:"width",value:20}],concreteType:"Image",kind:"LinkedField",name:"profile_picture",plural:!1,selections:h,storageKey:null}],storageKey:null}],type:"User",abstractKey:null}],type:"FriendNode",abstractKey:"__isFriendNode"}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"cursor",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"PageInfo",kind:"LinkedField",name:"page_info",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"has_next_page",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"end_cursor",storageKey:null}],storageKey:null}],storageKey:null},{alias:null,args:d,filters:["location"],handle:"connection",key:"FriendingCometPYMKPanel_people_you_may_know",kind:"LinkedHandle",name:"people_you_may_know"}],storageKey:null}]},params:{id:b("FriendingCometPYMKPanelPaginationQuery_facebookRelayOperation"),metadata:{},name:"FriendingCometPYMKPanelPaginationQuery",operationKind:"query",text:null}}}();e.exports=a}),null);
__d("FriendingCometPYMKPanel_viewer.graphql",["FriendingCometPYMKPanelPaginationQuery.graphql"],(function(a,b,c,d,e,f){"use strict";a=function(){var a=["people_you_may_know"];return{argumentDefinitions:[{defaultValue:10,kind:"LocalArgument",name:"count"},{defaultValue:null,kind:"LocalArgument",name:"cursor"},{defaultValue:"FRIENDS_CENTER",kind:"LocalArgument",name:"location"},{kind:"RootArgument",name:"scale"}],kind:"Fragment",metadata:{connection:[{count:"count",cursor:"cursor",direction:"forward",path:a}],refetch:{connection:{forward:{count:"count",cursor:"cursor"},backward:null,path:a},fragmentPathInResult:["viewer"],operation:b("FriendingCometPYMKPanelPaginationQuery.graphql")}},name:"FriendingCometPYMKPanel_viewer",selections:[{alias:"people_you_may_know",args:[{kind:"Variable",name:"location",variableName:"location"}],concreteType:"PeopleYouMayKnowConnection",kind:"LinkedField",name:"__FriendingCometPYMKPanel_people_you_may_know_connection",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"tracking_signature",storageKey:null},{alias:null,args:null,concreteType:"PeopleYouMayKnowEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"node",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{args:null,kind:"FragmentSpread",name:"FriendingCometPYMKListItem_user"},{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"cursor",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"PageInfo",kind:"LinkedField",name:"page_info",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"has_next_page",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"end_cursor",storageKey:null}],storageKey:null}],storageKey:null}],type:"Viewer",abstractKey:null}}();e.exports=a}),null);
__d("FriendingCometFriendRequestsCard_user.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[{kind:"RootArgument",name:"scale"}],kind:"Fragment",metadata:null,name:"FriendingCometFriendRequestsCard_user",selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"friendship_status",storageKey:null},{alias:null,args:[{kind:"Literal",name:"height",value:230},{kind:"Variable",name:"scale",variableName:"scale"},{kind:"Literal",name:"width",value:230}],concreteType:"Image",kind:"LinkedField",name:"profile_picture",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"social_context",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"text",storageKey:null}],storageKey:null},{args:[{kind:"Literal",name:"iconSize",value:16}],kind:"FragmentSpread",name:"FriendingCometMutualFriendsSocialContext_user"}],type:"User",abstractKey:null};e.exports=a}),null);
__d("FriendingCometPYMKListItem.react",["fbt","CometRelay","FriendingCometErrorHandler.react","FriendingCometFriendRequestCancelMutation","FriendingCometFriendRequestSendMutation","FriendingCometListItemWithButtons.react","FriendingCometPYMKListItem_user.graphql","FriendingCometTestIDHelper","RegularPymkAddFalcoEvent","RegularPymkImpFalcoEvent","RegularPymkProfileFalcoEvent","react","useVisibilityObserver"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=d("react");e=d("react");var k=e.useCallback,l=e.useRef;function a(a){var e,f=d("CometRelay").useFragment(i!==void 0?i:i=b("FriendingCometPYMKListItem_user.graphql"),a.user),g=a.onDelete,m=f.friendship_status,n=f.id,o=f.name,p=f.profile_picture,q=f.url;p=p==null?void 0:p.uri;var r=a.signature,s=d("CometRelay").useRelayEnvironment(),t=l(!1),u=l(!1),v=d("FriendingCometErrorHandler.react").useFriendingErrorHandler({addFriendId:(e=n)!=null?e:"0",addFriendSource:"people_you_may_know"});e=k(function(){n!=null&&(d("FriendingCometFriendRequestSendMutation").commit(s,n,"people_you_may_know",v,"friends_center"),c("RegularPymkAddFalcoEvent").log(function(){return{pymk_id:n,pymk_location:"friends_center",pymk_signature:r}}))},[s,v,n,r]);var w=k(function(){n!=null&&(u.current=!0,d("FriendingCometFriendRequestCancelMutation").commit(s,n,"pymk",v))},[s,v,n]),x=k(function(){n!=null&&c("RegularPymkProfileFalcoEvent").log(function(){return{pymk_id:n,pymk_location:"friends_center",pymk_signature:r}})},[n,r]),y=k(function(){n!=null&&!t.current&&(c("RegularPymkImpFalcoEvent").log(function(){return{pymk_id:n,pymk_location:"friends_center",pymk_signature:r}}),t.current=!0)},[n,r]);y=c("useVisibilityObserver")({onVisible:y});if(n==null||q==null||p==null||o==null)return null;var z=null;switch(m){case"CAN_REQUEST":z=u.current?h._(/*FBT_CALL*/"Request canceled"/*FBT_CALL*/):null;u.current=!1;return j.jsx("div",{"data-testid":void 0,ref:y,children:j.jsx(c("FriendingCometListItemWithButtons.react"),{href:q,iconSrc:p,message:z,onAddFriend:e,onClick:x,onDelete:g,reduceEmphasisPrimary:a.reduceEmphasisPrimary,routeTarget:"content",title:o,user:f})});case"OUTGOING_REQUEST":z=h._(/*FBT_CALL*/"Request sent"/*FBT_CALL*/);return j.jsx("div",{"data-testid":void 0,ref:y,children:j.jsx(c("FriendingCometListItemWithButtons.react"),{href:q,iconSrc:p,message:z,onCancelRequest:w,onClick:x,routeTarget:"content",title:o,user:f})});case"INCOMING_REQUEST":case"ARE_FRIENDS":return null}}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("FriendingCometPYMKPanel.react",["fbt","CometListCellGlimmer.react","CometRelay","FriendingCometPYMKBlacklistSuggestionMutation","FriendingCometPYMKListItem.react","FriendingCometPYMKPanel_viewer.graphql","FriendingCometPanel.react","FriendingCometTestIDHelper","RegularPymkXoutFalcoEvent","react","useVisibilityObserver"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=d("react");e=d("react");var k=e.useCallback,l=e.useTransition,m=30;function a(a){var e=l(),f=e[0],g=e[1];e=d("CometRelay").useBlockingPaginationFragment(i!==void 0?i:i=b("FriendingCometPYMKPanel_viewer.graphql"),a.viewer);var n=e.data,o=e.hasNext,p=e.loadNext;e=n==null?void 0:(e=n.people_you_may_know)==null?void 0:e.edges;var q=n==null?void 0:(n=n.people_you_may_know)==null?void 0:n.tracking_signature,r=d("CometRelay").useRelayEnvironment();n=k(function(){if(!o||f)return;g(function(){p(m)})},[o,f,p,g]);n=c("useVisibilityObserver")({onVisible:n});var s=null;if(e!=null){var t=function(a){return function(){a!=null&&(d("FriendingCometPYMKBlacklistSuggestionMutation").commit(r,"FriendingCometPYMKPanel_people_you_may_know",d("CometRelay").VIEWER_ID,a,"FRIENDS_CENTER","FRIENDS_CENTER"),c("RegularPymkXoutFalcoEvent").log(function(){return{pymk_id:a,pymk_location:"friends_center",pymk_signature:q}}))}};s=e.map(function(b,d){b=b==null?void 0:b.node;return b==null?null:j.jsx(c("FriendingCometPYMKListItem.react"),{onDelete:t(b.id),reduceEmphasisPrimary:a.reduceEmphasisPrimary,signature:q,user:b},(b=b==null?void 0:b.id)!=null?b:d)});o&&s.push(j.jsx("div",{"data-testid":void 0,ref:n,children:j.jsx(c("CometListCellGlimmer.react"),{imageSize:60,imageStyle:"circle",numberOfItems:2})},"glimmer"))}return s!=null&&s.length!==0?j.jsx(c("FriendingCometPanel.react"),{heading:h._(/*FBT_CALL*/"People You May Know"/*FBT_CALL*/),children:s}):null}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("FriendingCometFriendRequestsCard.react",["fbt","ActorHovercard.react","CometCard.react","CometImage.react","CometLink.react","CometRelay","FriendingCometFriendRequestConfirmMutation","FriendingCometFriendRequestDeleteMutation","FriendingCometFriendRequestStrings","FriendingCometFriendRequestsCard_user.graphql","FriendingCometMutualFriendsSocialContext.react","TetraButton.react","TetraText.react","react","stylex","useVisibilityObserver"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=d("react");e=d("react");var k=e.useCallback,l=e.useRef,m=e.useState,n=d("FriendingCometFriendRequestStrings").acceptRequest(),o=d("FriendingCometFriendRequestStrings").requestRejected(),p={button:{width:"k4urcfbm"},buttonSpacer:{height:"tv7at329"},cardContent:{paddingTop:"pybr56ya",paddingEnd:"d1544ag0",paddingBottom:"f10w8fjw",paddingStart:"tw6a2znq"},container:{width:"k4urcfbm"},context:{alignItems:"bp9cbjyn",display:"j83agx80",height:"mudddibn",paddingBottom:"r8blr3vg",width:"k4urcfbm"},deleteButton:{paddingTop:"ipjc6fyt"},image:{height:"datstx6m",objectFit:"bixrwtb6",width:"k4urcfbm"},imageContainer:{paddingBottom:"d5it6em2",position:"l9j0dhe7",width:"k4urcfbm"},imageLink:{bottom:"i09qtzwb",boxSizing:"rq0escxv",display:"a8c37x1j",end:"n7fi1qx3",position:"pmk7jnqg",start:"j9ispegn",top:"kr520xx4"},inset:{bottom:"i09qtzwb",boxShadow:"oaz4zybt",height:"ay7djpcl",position:"pmk7jnqg",width:"k4urcfbm"},textWrapper:{marginBottom:"tvmbv18p",marginTop:"aahdfvyu"}};function a(a){var e=a.confirmButtonReduceEmphasis;e=e===void 0?!0:e;var f=a.dropShadow;f=f===void 0?2:f;var g=a.logClick,q=a.logConfirm,r=a.logDelete,s=a.logImpression,t=a.profileURI,u=a.responseRef;a=a.user;a=d("CometRelay").useFragment(i!==void 0?i:i=b("FriendingCometFriendRequestsCard_user.graphql"),a);var v=d("CometRelay").useRelayEnvironment(),w=a.friendship_status,x=a.id,y=a.name,z=a.profile_picture;z=z==null?void 0:z.uri;var A=l(!1),B=m(null),C=B[0],D=B[1];B=m(null);var E=B[0],F=B[1];w==="ARE_FRIENDS"&&C!==n&&D(n);w==="CAN_REQUEST"&&C!==o&&D(o);var G=k(function(a){F(function(){return a.name==="NetworkTransportError"?h._(/*FBT_CALL*/"Connection error. Please check your Internet connection."/*FBT_CALL*/):a.description})},[]);B=k(function(){x!=null&&(d("FriendingCometFriendRequestConfirmMutation").commit(v,x,u,void 0,G),F(null),D(function(){return n}),q!=null&&q())},[v,G,x,q,u]);var H=k(function(){x!=null&&(d("FriendingCometFriendRequestDeleteMutation").commit(v,x,u,void 0,G),F(null),D(function(){return o}),r!=null&&r())},[v,G,x,r,u]),I=k(function(){x!=null&&!A.current&&s!=null&&(s(),A.current=!0)},[x,s]);I=c("useVisibilityObserver")({onVisible:I});if(x==null||z==null||y==null)return null;var J=null;if(E!==null){J=j.jsx(c("TetraText.react"),{color:"secondary",type:"body3",children:(E=E)!=null?E:""})}else{E=(E=(E=a.social_context)==null?void 0:E.text)!=null?E:"";J=E!==""?j.jsx(c("FriendingCometMutualFriendsSocialContext.react"),{iconSize:16,socialContextText:E,textType:"body3",truncateContextText:!0,user:a}):null}E=w==="INCOMING_REQUEST"?j.jsx("div",{className:c("stylex")(p.button),children:j.jsx(c("TetraButton.react"),{label:h._(/*FBT_CALL*/"Confirm"/*FBT_CALL*/),onPress:B,reduceEmphasis:e,type:"primary"})}):j.jsx("div",{className:c("stylex")(p.button,p.deleteButton,p.buttonSpacer)});a=w==="INCOMING_REQUEST"?j.jsx("div",{className:c("stylex")(p.button,p.deleteButton),children:j.jsx(c("TetraButton.react"),{label:d("FriendingCometFriendRequestStrings").reject(),onPress:H,type:"secondary"})}):j.jsx("div",{className:c("stylex")(p.button),children:j.jsx(c("TetraButton.react"),{disabled:!0,label:C,reduceEmphasis:!0,type:"secondary"})});return j.jsx("div",{className:c("stylex")(p.container),"data-testid":void 0,ref:I,children:j.jsxs(c("CometCard.react"),{background:"white",border:"solid",dropShadow:f,children:[j.jsxs("div",{className:c("stylex")(p.imageContainer),children:[j.jsx(c("CometLink.react"),{href:t,onClick:g,xstyle:p.imageLink,children:j.jsx(c("CometImage.react"),{alt:"Profile Picture",src:z,xstyle:p.image})}),j.jsx("div",{className:c("stylex")(p.inset)})]}),j.jsxs("div",{className:c("stylex")(p.cardContent),children:[j.jsx(c("ActorHovercard.react"),{actorID:x,children:function(a){return j.jsx(c("CometLink.react"),{"aria-hidden":!1,href:t,onClick:g,ref:a,children:j.jsx("div",{className:c("stylex")(p.textWrapper),children:j.jsx(c("TetraText.react"),{color:"primary",numberOfLines:1,type:"bodyLink2",children:y})})})}}),j.jsx("div",{className:c("stylex")(p.context),children:J}),E,a]})]})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("XCometMeTabControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/me/{tab}/",Object.freeze({}),void 0);b=a;g["default"]=b}),98);
__d("FriendingCometMainTabViewLeftRailSettingsMenuQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="3061851457252390"}),null);