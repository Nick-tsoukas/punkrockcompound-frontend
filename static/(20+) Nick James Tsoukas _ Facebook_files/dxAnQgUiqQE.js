if (self.CavalryLogger) { CavalryLogger.start_js(["Y4OB2jo"]); }

__d("CometGenericUrlResharesDialogContent_link_preview.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometGenericUrlResharesDialogContent_link_preview",selections:[{args:null,kind:"FragmentSpread",name:"CometResharesSummary_link_preview"},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"composer_post_confirmation_renderer",plural:!1,selections:[{kind:"InlineFragment",selections:[{args:null,documentName:"CometGenericUrlResharesDialogContent_link_preview",fragmentName:"CometMisinformationLinkComposerConfirmationDialog_confirmationRenderer",fragmentPropName:"confirmationRenderer",kind:"ModuleImport"}],type:"MisinformationComposerPostConfirmationRenderer",abstractKey:null}],storageKey:null}],type:"LinkPreviewRoot",abstractKey:null};e.exports=a}),null);
__d("CometGenericUrlResharesMultiStepDialog_link_preview.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometGenericUrlResharesMultiStepDialog_link_preview",selections:[{args:null,kind:"FragmentSpread",name:"CometGenericUrlResharesDialogContent_link_preview"}],type:"LinkPreviewRoot",abstractKey:null};e.exports=a}),null);
__d("CometResharesSummary_link_preview.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometResharesSummary_link_preview",selections:[{alias:null,args:[{kind:"Literal",name:"supported",value:["CometLinkPreviewSummaryEventRenderingStrategy","CometLinkPreviewSummaryExternalUrlRenderingStrategy","CometLinkPreviewSummaryStoryRenderingStrategy","CometLinkPreviewSummaryFallbackRenderingStrategy","CometLinkPreviewSummaryMemoriesRenderingStrategy"]}],concreteType:null,kind:"LinkedField",name:"summary_renderer",plural:!1,selections:[{kind:"InlineFragment",selections:[{args:null,documentName:"CometResharesSummary_link_preview",fragmentName:"CometLinkPreviewSummaryEventRenderingStrategy_summary_renderer",fragmentPropName:"summary_renderer",kind:"ModuleImport"}],type:"CometLinkPreviewSummaryEventRenderingStrategy",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometResharesSummary_link_preview",fragmentName:"CometLinkPreviewSummaryExternalUrlRenderingStrategy_summary_renderer",fragmentPropName:"summary_renderer",kind:"ModuleImport"}],type:"CometLinkPreviewSummaryExternalUrlRenderingStrategy",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometResharesSummary_link_preview",fragmentName:"CometLinkPreviewSummaryStoryRenderingStrategy_summary_renderer",fragmentPropName:"summary_renderer",kind:"ModuleImport"}],type:"CometLinkPreviewSummaryStoryRenderingStrategy",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometResharesSummary_link_preview",fragmentName:"CometLinkPreviewSummaryFallbackRenderingStrategy_summary_renderer",fragmentPropName:"summary_renderer",kind:"ModuleImport"}],type:"CometLinkPreviewSummaryFallbackRenderingStrategy",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometResharesSummary_link_preview",fragmentName:"CometLinkPreviewSummaryMemoriesRenderingStrategy_summary_renderer",fragmentPropName:"summary_renderer",kind:"ModuleImport"}],type:"CometLinkPreviewSummaryMemoriesRenderingStrategy",abstractKey:null}],storageKey:'summary_renderer(supported:["CometLinkPreviewSummaryEventRenderingStrategy","CometLinkPreviewSummaryExternalUrlRenderingStrategy","CometLinkPreviewSummaryStoryRenderingStrategy","CometLinkPreviewSummaryFallbackRenderingStrategy","CometLinkPreviewSummaryMemoriesRenderingStrategy"])'}],type:"LinkPreviewRoot",abstractKey:null};e.exports=a}),null);
__d("CometMessengerResharesDialogQuery.graphql",["CometMessengerResharesDialogQuery_facebookRelayOperation","relay-runtime"],(function(a,b,c,d,e,f){"use strict";a=function(){var a={defaultValue:null,kind:"LocalArgument",name:"privacySelectorRenderLocation"},c={defaultValue:null,kind:"LocalArgument",name:"renderLocation"},d={defaultValue:null,kind:"LocalArgument",name:"scale"},e={defaultValue:null,kind:"LocalArgument",name:"suppress_xac_groups"},f={defaultValue:null,kind:"LocalArgument",name:"url"},g={defaultValue:null,kind:"LocalArgument",name:"xacDisclosureNux"},h=[{kind:"Variable",name:"nux_id",variableName:"xacDisclosureNux"}],i=[{fields:[{kind:"Variable",name:"url",variableName:"url"}],kind:"ObjectValue",name:"params"}],j={alias:null,args:null,kind:"ScalarField",name:"object_id",storageKey:null},k={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},l={kind:"Variable",name:"scale",variableName:"scale"},m=[{kind:"Literal",name:"height",value:40},l,{kind:"Literal",name:"width",value:40}],n={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},o={kind:"Variable",name:"suppress_xac_groups",variableName:"suppress_xac_groups"},p=[{kind:"Literal",name:"first",value:5},o],q={alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},r={alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null},s=[r];l={alias:null,args:[{kind:"Literal",name:"height",value:60},l,{kind:"Literal",name:"width",value:60}],concreteType:"Image",kind:"LinkedField",name:"profile_picture",plural:!1,selections:s,storageKey:null};var t=[{alias:null,args:null,kind:"ScalarField",name:"count",storageKey:null},{alias:null,args:null,concreteType:"MessagingParticipant",kind:"LinkedField",name:"nodes",plural:!0,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"messaging_actor",plural:!1,selections:[n,q,k,l],storageKey:null},k],storageKey:null}],u={alias:null,args:null,concreteType:"MessageThreadKey",kind:"LinkedField",name:"thread_key",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"other_user_id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"thread_fbid",storageKey:null}],storageKey:null},v=[{kind:"Literal",name:"first",value:1}],w={alias:null,args:null,concreteType:"Story",kind:"LinkedField",name:"first_story_to_show",plural:!1,selections:[k,{alias:null,args:null,concreteType:"StoryCardSeenState",kind:"LinkedField",name:"story_card_seen_state",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"is_seen_by_viewer",storageKey:null}],storageKey:null}],storageKey:null};return{fragment:{argumentDefinitions:[a,c,d,e,f,g],kind:"Fragment",metadata:null,name:"CometMessengerResharesDialogQuery",selections:[{alias:"xac_disclosure_nux",args:h,concreteType:null,kind:"LinkedField",name:"nux",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"CometMessengerResharesTargets_nux"}],storageKey:null},{alias:null,args:i,concreteType:"LinkPreviewRoot",kind:"LinkedField",name:"link_preview",plural:!1,selections:[j,{args:null,kind:"FragmentSpread",name:"CometGenericUrlResharesMultiStepDialog_link_preview"}],storageKey:null},{alias:null,args:null,concreteType:"Viewer",kind:"LinkedField",name:"viewer",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"CometMessengerResharesTargets_viewer"},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"actor",plural:!1,selections:[k,{args:m,kind:"FragmentSpread",name:"CometProfilePhotoForActor_actor"}],storageKey:null}],storageKey:null}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[f,c,a,d,g,e],kind:"Operation",name:"CometMessengerResharesDialogQuery",selections:[{alias:"xac_disclosure_nux",args:h,concreteType:null,kind:"LinkedField",name:"nux",plural:!1,selections:[n,{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"nux_id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"should_show",storageKey:null}],type:"DefaultNUX",abstractKey:null},k],storageKey:null},{alias:null,args:i,concreteType:"LinkPreviewRoot",kind:"LinkedField",name:"link_preview",plural:!1,selections:[j,{alias:null,args:[{kind:"Literal",name:"supported",value:["CometLinkPreviewSummaryEventRenderingStrategy","CometLinkPreviewSummaryExternalUrlRenderingStrategy","CometLinkPreviewSummaryStoryRenderingStrategy","CometLinkPreviewSummaryFallbackRenderingStrategy","CometLinkPreviewSummaryMemoriesRenderingStrategy"]}],concreteType:null,kind:"LinkedField",name:"summary_renderer",plural:!1,selections:[n,{kind:"InlineFragment",selections:[{args:null,documentName:"CometResharesSummary_link_preview",fragmentName:"CometLinkPreviewSummaryEventRenderingStrategy_summary_renderer",fragmentPropName:"summary_renderer",kind:"ModuleImport"}],type:"CometLinkPreviewSummaryEventRenderingStrategy",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometResharesSummary_link_preview",fragmentName:"CometLinkPreviewSummaryExternalUrlRenderingStrategy_summary_renderer",fragmentPropName:"summary_renderer",kind:"ModuleImport"}],type:"CometLinkPreviewSummaryExternalUrlRenderingStrategy",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometResharesSummary_link_preview",fragmentName:"CometLinkPreviewSummaryStoryRenderingStrategy_summary_renderer",fragmentPropName:"summary_renderer",kind:"ModuleImport"}],type:"CometLinkPreviewSummaryStoryRenderingStrategy",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometResharesSummary_link_preview",fragmentName:"CometLinkPreviewSummaryFallbackRenderingStrategy_summary_renderer",fragmentPropName:"summary_renderer",kind:"ModuleImport"}],type:"CometLinkPreviewSummaryFallbackRenderingStrategy",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometResharesSummary_link_preview",fragmentName:"CometLinkPreviewSummaryMemoriesRenderingStrategy_summary_renderer",fragmentPropName:"summary_renderer",kind:"ModuleImport"}],type:"CometLinkPreviewSummaryMemoriesRenderingStrategy",abstractKey:null}],storageKey:'summary_renderer(supported:["CometLinkPreviewSummaryEventRenderingStrategy","CometLinkPreviewSummaryExternalUrlRenderingStrategy","CometLinkPreviewSummaryStoryRenderingStrategy","CometLinkPreviewSummaryFallbackRenderingStrategy","CometLinkPreviewSummaryMemoriesRenderingStrategy"])'},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"composer_post_confirmation_renderer",plural:!1,selections:[n,{kind:"InlineFragment",selections:[{args:null,documentName:"CometGenericUrlResharesDialogContent_link_preview",fragmentName:"CometMisinformationLinkComposerConfirmationDialog_confirmationRenderer",fragmentPropName:"confirmationRenderer",kind:"ModuleImport"}],type:"MisinformationComposerPostConfirmationRenderer",abstractKey:null}],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"Viewer",kind:"LinkedField",name:"viewer",plural:!1,selections:[{alias:null,args:[{kind:"Literal",name:"broadcast_list_type",value:"WEB"},o],concreteType:"SuggestedRecipientsConnection",kind:"LinkedField",name:"messenger_suggested_recipients",plural:!1,selections:[{alias:null,args:null,concreteType:"MessengerBroadcastSection",kind:"LinkedField",name:"nodes",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"section_type",storageKey:null},{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"title",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"text",storageKey:null}],storageKey:null},{alias:null,args:p,concreteType:"SuggestedRecipientsAttachmentsConnection",kind:"LinkedField",name:"attachments_pageable",plural:!1,selections:[{alias:null,args:null,concreteType:"SuggestedRecipientsAttachmentsEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[n,k,{kind:"TypeDiscriminator",abstractKey:"__isMessengerSearchable"},{kind:"InlineFragment",selections:[{alias:null,args:[{kind:"Literal",name:"first",value:3}],concreteType:"MessagingParticipantsOfThreadConnection",kind:"LinkedField",name:"other_participants",plural:!1,selections:t,storageKey:"other_participants(first:3)"},{alias:null,args:null,kind:"ScalarField",name:"thread_name",storageKey:null},{alias:null,args:null,concreteType:"Image",kind:"LinkedField",name:"image",plural:!1,selections:s,storageKey:null},u],type:"MessengerViewerGroupThread",abstractKey:null},{kind:"InlineFragment",selections:[{alias:null,args:v,concreteType:"MessagingParticipantsOfThreadConnection",kind:"LinkedField",name:"other_participants",plural:!1,selections:t,storageKey:"other_participants(first:1)"},u],type:"MessengerViewer1To1Thread",abstractKey:null},{kind:"InlineFragment",selections:[q,l],type:"User",abstractKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"cursor",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"PageInfo",kind:"LinkedField",name:"page_info",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"end_cursor",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"has_next_page",storageKey:null}],storageKey:null}],storageKey:null},{alias:null,args:p,filters:["suppress_xac_groups"],handle:"connection",key:"CometMessengerReshareDialogSuggestionsSection_section_attachments_pageable",kind:"LinkedHandle",name:"attachments_pageable"},k,{alias:null,args:null,kind:"ScalarField",name:"__token",storageKey:null}],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"account_user",plural:!1,selections:[k],storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"actor",plural:!1,selections:[n,k,{kind:"TypeDiscriminator",abstractKey:"__isActor"},{kind:"InlineFragment",selections:[{alias:"profile_url",args:null,kind:"ScalarField",name:"url",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null}],type:"Entity",abstractKey:"__isEntity"},{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"pages_story_bucket_v2",plural:!1,selections:[n,k,w],storageKey:null}],type:"Page",abstractKey:null},{kind:"InlineFragment",selections:[{alias:null,args:v,concreteType:"DirectInboxBroadcastBucketConnection",kind:"LinkedField",name:"story_bucket",plural:!1,selections:[{alias:null,args:null,concreteType:"DirectMessageThreadBucket",kind:"LinkedField",name:"nodes",plural:!0,selections:[k,w],storageKey:null}],storageKey:"story_bucket(first:1)"},{kind:"ClientExtension",selections:[{alias:null,args:null,kind:"ScalarField",name:"availability",storageKey:null}]}],type:"User",abstractKey:null},q,{alias:null,args:m,concreteType:"Image",kind:"LinkedField",name:"profile_picture",plural:!1,selections:[r,{alias:null,args:null,kind:"ScalarField",name:"width",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"height",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"scale",storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null}]},params:{id:b("CometMessengerResharesDialogQuery_facebookRelayOperation"),metadata:{},name:"CometMessengerResharesDialogQuery",operationKind:"query",text:null}}}();b("relay-runtime").PreloadableQueryRegistry.set(a.params.id,a);e.exports=a}),null);
__d("CometResharesVoiceSwitcherMenuQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="3790587947715247"}),null);
__d("CometResharesVoiceSwitcherMenuQuery$Parameters",["CometResharesVoiceSwitcherMenuQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("CometResharesVoiceSwitcherMenuQuery_facebookRelayOperation"),metadata:{},name:"CometResharesVoiceSwitcherMenuQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometResharesVoiceSwitcher_viewer.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null};return{argumentDefinitions:[{defaultValue:null,kind:"LocalArgument",name:"has_linked_groups"},{defaultValue:null,kind:"LocalArgument",name:"height"},{defaultValue:!1,kind:"LocalArgument",name:"is_volunteering_eligible"},{kind:"RootArgument",name:"scale"},{defaultValue:null,kind:"LocalArgument",name:"width"}],kind:"Fragment",metadata:null,name:"CometResharesVoiceSwitcher_viewer",selections:[{alias:"pages",args:[{kind:"Literal",name:"first",value:1},{kind:"Variable",name:"has_linked_groups",variableName:"has_linked_groups"},{kind:"Variable",name:"is_ch_volunteering_eligible",variableName:"is_volunteering_eligible"}],concreteType:"AdminedPagesConnection",kind:"LinkedField",name:"admined_pages",plural:!1,selections:[{alias:null,args:null,concreteType:"Page",kind:"LinkedField",name:"nodes",plural:!0,selections:[a],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"actor",plural:!1,selections:[a,{alias:null,args:[{kind:"Variable",name:"height",variableName:"height"},{kind:"Variable",name:"scale",variableName:"scale"},{kind:"Variable",name:"width",variableName:"width"}],concreteType:"Image",kind:"LinkedField",name:"profile_picture",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null}],storageKey:null}],storageKey:null}],type:"Viewer",abstractKey:null}}();e.exports=a}),null);
__d("CometResharesSummary.react",["CometRelay","CometResharesSummary_link_preview.graphql","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react");function a(a){a=a.linkPreview;a=d("CometRelay").useFragment(h!==void 0?h:h=b("CometResharesSummary_link_preview.graphql"),a);return i.jsx(d("CometRelay").MatchContainer,{match:a.summary_renderer,props:{summaryRenderer:a.summary_renderer}})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometResharesVoiceSwitcherMenu.entrypoint",["CometResharesVoiceSwitcherMenuQuery$Parameters","JSResourceForInteraction","WebPixelRatio"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){var c=a.isVolunteeringEligible;a=a.onlyPagesWithLinkedGroups;return{queries:{menuQueryReference:{parameters:b("CometResharesVoiceSwitcherMenuQuery$Parameters"),variables:{hasLinkedGroups:a,is_volunteering_eligible:c,scale:d("WebPixelRatio").get()}}}}},root:c("JSResourceForInteraction")("CometResharesVoiceSwitcherMenu.react").__setRef("CometResharesVoiceSwitcherMenu.entrypoint")};g["default"]=a}),98);
__d("CometResharesVoiceSwitcher.react",["fbt","ix","CometEntryPointPopoverTrigger.react","CometRelay","CometResharesVoiceSwitcherMenu.entrypoint","CometResharesVoiceSwitcher_viewer.graphql","TetraIcon.react","TetraProfilePhoto.react","fbicon","react","recoverableViolation"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j,k=d("react");function a(a){var e,f,g=a.isVolunteeringEligible;g=g===void 0?!1:g;var l=a.onlyPagesWithLinkedGroups;l=l===void 0?!1:l;a=a.viewerKey;a=d("CometRelay").useFragment(j!==void 0?j:j=b("CometResharesVoiceSwitcher_viewer.graphql"),a);e=a==null?void 0:(e=a.actor)==null?void 0:e.id;var m=a==null?void 0:(f=a.actor)==null?void 0:(f=f.profile_picture)==null?void 0:f.uri;if(m==null||e==null)return c("recoverableViolation")("Actor or profile picture is null in reshare dialog","comet_feed");a=((e=a==null?void 0:(f=a.pages)==null?void 0:f.nodes)!=null?e:[]).length;return a===0?k.jsx(c("TetraProfilePhoto.react"),{shape:"circle",size:40,source:{uri:m},testid:void 0}):k.jsx(c("CometEntryPointPopoverTrigger.react"),{align:"end",entryPointParams:{isVolunteeringEligible:g,onlyPagesWithLinkedGroups:l},otherProps:{},popoverEntryPoint:c("CometResharesVoiceSwitcherMenu.entrypoint"),position:"below",children:function(a,b){return k.jsx(c("TetraProfilePhoto.react"),{addOn:{backgroundColor:"var(--fds-spectrum-cherry)",icon:k.jsx(c("TetraIcon.react"),{color:"white",icon:d("fbicon")._(i("622240"),16)}),size:16,type:"activityBadge"},alt:h._(/*FBT_CALL*/"Voice Switcher"/*FBT_CALL*/),onPress:b,ref:a,shape:"circle",size:40,source:{uri:m},testid:void 0})}})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometGenericUrlResharesDialogContent.react",["fbt","CometGenericUrlResharesDialogContent_link_preview.graphql","CometRelay","CometResharesSummary.react","DeferredDraftEditor.react","TetraText.react","react","useResharesDialogState"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=d("react"),k=d("react").useState;function a(a){var e=a.children,f=a.getTargetKey,g=a.handleError,l=a.linkPreview,m=a.onClose,n=a.onSendPending,o=a.placeholder,p=a.sharePost,q=a.voice;a=a.wrapDialog;l=d("CometRelay").useFragment(i!==void 0?i:i=b("CometGenericUrlResharesDialogContent_link_preview.graphql"),l);f=c("useResharesDialogState")({getTargetKey:f,handleError:g,onSendPending:n,sharePost:p});g=f.editorState;n=f.getTargetAction;var r=f.setEditorState;p=k(!1);f=p[0];var s=p[1];p=l==null?void 0:l.composer_post_confirmation_renderer;function t(a){switch(a){case"ACCEPTED":s(!0);break;case"NO_DECISION":m();break;default:a}}if(p!=null&&!f)return j.jsx(d("CometRelay").MatchContainer,{match:p,props:{composerPhase:"COMPOSING",composerType:"share",confirmationRenderer:p,onClose:t}});f=j.jsxs("div",{className:"tr9rh885",children:[j.jsx("div",{className:"dhix69tm wkznzc2l",children:j.jsx(c("CometResharesSummary.react"),{linkPreview:l})}),j.jsxs("div",{className:"gh1tjcio dhix69tm wkznzc2l oud54xpy j83agx80",children:[q,j.jsx("div",{className:"dhix69tm buofh1pr o8rfisnq","data-testid":void 0,children:j.jsx(c("TetraText.react"),{type:"body1",children:j.jsx(c("DeferredDraftEditor.react"),{autoFocus:!0,editorState:g,onStateChange:function(a){return r(a)},placeholder:o!=null?o.toString():h._(/*FBT_CALL*/"Say something about this..."/*FBT_CALL*/).toString()})})})]}),e({getTargetAction:n})]});return a(f)}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometGenericUrlResharesMultiStepDialog.react",["CometGenericUrlResharesDialogContent.react","CometGenericUrlResharesMultiStepDialog_link_preview.graphql","CometMultiStepDialog.react","CometRelay","CometResharesDialogPushPageContext","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react");function a(a){var e=a.linkPreview,f=a.title,g=babelHelpers.objectWithoutPropertiesLoose(a,["linkPreview","title"]);a=d("CometRelay").useFragment(h!==void 0?h:h=b("CometGenericUrlResharesMultiStepDialog_link_preview.graphql"),e);e=function(a){return i.jsx(c("CometMultiStepDialog.react"),{disableClosingWithMask:!0,onClose:g.onClose,size:"small",title:f,withCloseButton:!0,children:function(b){return i.jsx(c("CometResharesDialogPushPageContext").Provider,{value:b,children:a})}})};return i.jsx(c("CometGenericUrlResharesDialogContent.react"),babelHelpers["extends"]({},g,{linkPreview:a,wrapDialog:e}))}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometMessengerResharesDialog.react",["fbt","CometGenericUrlResharesMultiStepDialog.react","CometMessengerResharesDialogQuery.graphql","CometMessengerResharesTargets.react","CometProfilePhotoForActor.react","CometRelay","JSResourceForInteraction","SilenceableErrorMessageUtils","cometPushToast","cr:757","react","regeneratorRuntime","requireDeferred","unrecoverableViolation","useMWChatOpenTabForGroup","useMWChatOpenTabForPage","useMWChatOpenTabForUser"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=d("react"),k=d("react").useCallback,l=c("requireDeferred")("ShareMetricsLoggingController").__setRef("CometMessengerResharesDialog.react"),m=c("JSResourceForInteraction")("LSShareAttachment.re").__setRef("CometMessengerResharesDialog.react"),n=b("cr:757")?b("cr:757").useHook:function(){return function(){}};function o(){var a=c("useMWChatOpenTabForUser")("feedOrganicPost"),b=a[0];a[1];a=c("useMWChatOpenTabForGroup")("feedOrganicPost");var d=a[0];a[1];var e=c("useMWChatOpenTabForPage")("feedOrganicPost");return k(function(a){switch(a.targetType){case"USER":b(a.targetID);break;case"GROUP":d(a.targetID);break;case"PAGE":e(a.targetID);break;default:a.targetType}},[d,e,b])}function p(a){return a.targetID}function a(a){var e=a.props;a=a.queries;var f=d("CometRelay").usePreloadedQuery(i!==void 0?i:i=b("CometMessengerResharesDialogQuery.graphql"),a.resharesQueryReference),g=f==null?void 0:f.viewer,q=g==null?void 0:g.actor,r=q==null?void 0:q.id,s=f==null?void 0:f.link_preview,t=s==null?void 0:s.object_id,u=a.resharesQueryReference.variables.url;if(g==null||r==null||s==null||q==null||t==null)throw c("unrecoverableViolation")("Need a viewer id, actor, story, and postID in order to share a story","comet_feed");var v=e.feedLocation,w=e.shareableID,x=o();a=k(function(){m.preload()},[]);var y=k(function(a,c){var d;return b("regeneratorRuntime").async(function(e){while(1)switch(e.prev=e.next){case 0:d="user";e.t0=a.targetType;e.next=e.t0==="USER"?4:e.t0==="GROUP"?6:e.t0==="PAGE"?8:10;break;case 4:d="user";return e.abrupt("break",11);case 6:d="group";return e.abrupt("break",11);case 8:d="page";return e.abrupt("break",11);case 10:d="user";case 11:e.next=13;return b("regeneratorRuntime").awrap(m.load().then(function(b){b=b.share;b({actorID:r,entryPoint:"feedOrganicPost",message:c,shareID:t,targetID:a.targetID,targetType:d,url:u});l.onReady(function(a){a.logShareFunnelEvent({fb_entry_point:"send_in_message",fb_feed_location:v,fb_share_type:"share_created",shareable_id:w})})}));case 13:x(a);case 14:case"end":return e.stop()}},null,this)},[x,t,r,u,v,w]),z=k(function(a){l.onReady(function(a){a.logShareFunnelEvent({fb_entry_point:"send_in_message",fb_feed_location:v,fb_share_type:"share_failure",shareable_id:w})});a=d("SilenceableErrorMessageUtils").getMetadataFromError(a.error);if(d("SilenceableErrorMessageUtils").shouldHideErrorMessage(a))return;d("cometPushToast").cometPushErrorToast({message:h._(/*FBT_CALL*/"There was a problem sharing this post. Please try again later."/*FBT_CALL*/)})},[v,w]),A=n(),B=e.onClose;e=k(function(){A(),B()},[B,A]);return j.jsx(c("CometGenericUrlResharesMultiStepDialog.react"),{getTargetKey:p,handleError:z,linkPreview:s,onClose:e,onSendPending:a,sharePost:y,title:h._(/*FBT_CALL*/"Send in Messenger"/*FBT_CALL*/),voice:j.jsx(c("CometProfilePhotoForActor.react"),{actor:q,size:40}),children:function(a){a=a.getTargetAction;return j.jsx(c("CometMessengerResharesTargets.react"),{canForward:!0,getTargetAction:a,viewer:g,xacDisclosureNux:f.xac_disclosure_nux})}})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);