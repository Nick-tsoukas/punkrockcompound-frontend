if (self.CavalryLogger) { CavalryLogger.start_js(["kUcJ4bk"]); }

__d("ProfileCometBulkStoryCurationMutation_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="4937028249673414"}),null);
__d("ProfileCometBulkStoryCurationMutation.graphql",["CometFeedUnit_feedUnit$normalization.graphql","ProfileCometBulkStoryCurationMutation_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a=function(){var a={defaultValue:null,kind:"LocalArgument",name:"UFI2CommentsProvider_commentsKey"},c={defaultValue:null,kind:"LocalArgument",name:"afterTime"},d={defaultValue:null,kind:"LocalArgument",name:"beforeTime"},e={defaultValue:null,kind:"LocalArgument",name:"displayCommentsContextEnableComment"},f={defaultValue:null,kind:"LocalArgument",name:"displayCommentsContextIsAdPreview"},g={defaultValue:null,kind:"LocalArgument",name:"displayCommentsContextIsAggregatedShare"},h={defaultValue:null,kind:"LocalArgument",name:"displayCommentsContextIsStorySet"},i={defaultValue:null,kind:"LocalArgument",name:"displayCommentsFeedbackContext"},j={defaultValue:null,kind:"LocalArgument",name:"feedLocation"},k={defaultValue:null,kind:"LocalArgument",name:"feedbackSource"},l={defaultValue:null,kind:"LocalArgument",name:"focusCommentID"},m={defaultValue:null,kind:"LocalArgument",name:"gridMediaWidth"},n={defaultValue:!1,kind:"LocalArgument",name:"includeGroupScheduledPosts"},o={defaultValue:!1,kind:"LocalArgument",name:"includeScheduledPosts"},p={defaultValue:null,kind:"LocalArgument",name:"input"},q={defaultValue:null,kind:"LocalArgument",name:"memorializedSplitTimeFilter"},r={defaultValue:null,kind:"LocalArgument",name:"omitPinnedPost"},s={defaultValue:null,kind:"LocalArgument",name:"postedBy"},t={defaultValue:null,kind:"LocalArgument",name:"privacy"},u={defaultValue:null,kind:"LocalArgument",name:"privacySelectorRenderLocation"},v={defaultValue:null,kind:"LocalArgument",name:"renderLocation"},w={defaultValue:null,kind:"LocalArgument",name:"scale"},x={defaultValue:null,kind:"LocalArgument",name:"taggedInOnly"},y={defaultValue:!1,kind:"LocalArgument",name:"useDefaultActor"},z=[{kind:"Variable",name:"data",variableName:"input"}],A={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},B=[{kind:"Variable",name:"location",variableName:"renderLocation"}],C={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},D={alias:null,args:[{kind:"Literal",name:"supported",value:["CometStoryAggregatedStoriesStrategy"]}],concreteType:null,kind:"LinkedField",name:"aggregated_stories",plural:!1,selections:[C,{kind:"InlineFragment",selections:[{args:null,documentName:"ProfileCometTimelineGridStoryAttachment_story__aggregated_stories",fragmentName:"ProfileCometTimelineGridStoryAggregatedStoryRenderer_aggregatedStories",fragmentPropName:"aggregatedStories",kind:"ModuleImport"}],type:"CometStoryAggregatedStoriesStrategy",abstractKey:null}],storageKey:'aggregated_stories(supported:["CometStoryAggregatedStoriesStrategy"])'},E={alias:null,args:[{kind:"Literal",name:"supported",value:["CometFeedStoryFormattedBackgroundMessageRenderingStrategy","CometFeedStoryDefaultMessageRenderingStrategy"]}],concreteType:null,kind:"LinkedField",name:"message",plural:!1,selections:[C,{kind:"InlineFragment",selections:[{args:null,documentName:"ProfileCometTimelineGridStoryAttachment_story__message",fragmentName:"ProfileCometTimelineGridStoryFormattedBackgroundMessageRenderer_message",fragmentPropName:"message",kind:"ModuleImport"}],type:"CometFeedStoryFormattedBackgroundMessageRenderingStrategy",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"ProfileCometTimelineGridStoryAttachment_story__message",fragmentName:"ProfileCometTimelineGridStoryDefaultMessageRenderer_message",fragmentPropName:"message",kind:"ModuleImport"}],type:"CometFeedStoryDefaultMessageRenderingStrategy",abstractKey:null}],storageKey:'message(supported:["CometFeedStoryFormattedBackgroundMessageRenderingStrategy","CometFeedStoryDefaultMessageRenderingStrategy"])'},F={alias:null,args:B,concreteType:"CometStorySections",kind:"LinkedField",name:"comet_sections",plural:!1,selections:[{alias:null,args:[{kind:"Literal",name:"supported",value:["CometFeedStoryActorCommunityPromptIconStrategy","CometFeedStoryActorCommunityAttributionStrategy","CometFeedStoryActorVideoStrategy","CometFeedStoryActorPhotoStrategy"]}],concreteType:null,kind:"LinkedField",name:"actor_photo",plural:!1,selections:[C,{kind:"InlineFragment",selections:[{args:null,documentName:"CometFeedStoryActorPhotoSection_story",fragmentName:"CometFeedStoryActorCommunityPromptIconStrategy_actorPhoto",fragmentPropName:"actorPhoto",kind:"ModuleImport"}],type:"CometFeedStoryActorCommunityPromptIconStrategy",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometFeedStoryActorPhotoSection_story",fragmentName:"CometFeedStoryActorCommunityAttributionStrategy_actorPhoto",fragmentPropName:"actorPhoto",kind:"ModuleImport"}],type:"CometFeedStoryActorCommunityAttributionStrategy",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometFeedStoryActorPhotoSection_story",fragmentName:"CometFeedStoryActorVideoStrategy_actorPhoto",fragmentPropName:"actorPhoto",kind:"ModuleImport"}],type:"CometFeedStoryActorVideoStrategy",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometFeedStoryActorPhotoSection_story",fragmentName:"CometFeedStoryActorPhotoStrategy_actorPhoto",fragmentPropName:"actorPhoto",kind:"ModuleImport"}],type:"CometFeedStoryActorPhotoStrategy",abstractKey:null}],storageKey:'actor_photo(supported:["CometFeedStoryActorCommunityPromptIconStrategy","CometFeedStoryActorCommunityAttributionStrategy","CometFeedStoryActorVideoStrategy","CometFeedStoryActorPhotoStrategy"])'},{alias:null,args:[{kind:"Literal",name:"supported",value:["CometFeedStoryPrivacySelectorStrategy","CometFeedStoryAudienceStrategy"]}],concreteType:null,kind:"LinkedField",name:"audience",plural:!1,selections:[C,{kind:"InlineFragment",selections:[{args:null,documentName:"CometFeedStoryAudienceSection_story",fragmentName:"CometFeedStoryPrivacySelectorStrategy_audience",fragmentPropName:"audience",kind:"ModuleImport"}],type:"CometFeedStoryPrivacySelectorStrategy",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometFeedStoryAudienceSection_story",fragmentName:"CometFeedStoryAudienceStrategy_audience",fragmentPropName:"audience",kind:"ModuleImport"}],type:"CometFeedStoryAudienceStrategy",abstractKey:null}],storageKey:'audience(supported:["CometFeedStoryPrivacySelectorStrategy","CometFeedStoryAudienceStrategy"])'},{alias:null,args:[{kind:"Literal",name:"supported",value:["CometFeedStoryBackdatedTimestampStrategy","CometFeedStoryScheduledTimestampStrategy","CometFeedStoryMinimizedTimestampStrategy","CometFeedStoryTimestampStrategy"]}],concreteType:null,kind:"LinkedField",name:"timestamp",plural:!1,selections:[C,{kind:"InlineFragment",selections:[{args:null,documentName:"CometFeedStoryTimestampSection_story",fragmentName:"CometFeedStoryBackdatedTimestampStrategy_timestamp",fragmentPropName:"timestamp",kind:"ModuleImport"}],type:"CometFeedStoryBackdatedTimestampStrategy",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometFeedStoryTimestampSection_story",fragmentName:"CometFeedStoryScheduledTimestampStrategy_timestamp",fragmentPropName:"timestamp",kind:"ModuleImport"}],type:"CometFeedStoryScheduledTimestampStrategy",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometFeedStoryTimestampSection_story",fragmentName:"CometFeedStoryMinimizedTimestampStrategy_timestamp",fragmentPropName:"timestamp",kind:"ModuleImport"}],type:"CometFeedStoryMinimizedTimestampStrategy",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometFeedStoryTimestampSection_story",fragmentName:"CometFeedStoryTimestampStrategy_timestamp",fragmentPropName:"timestamp",kind:"ModuleImport"}],type:"CometFeedStoryTimestampStrategy",abstractKey:null}],storageKey:'timestamp(supported:["CometFeedStoryBackdatedTimestampStrategy","CometFeedStoryScheduledTimestampStrategy","CometFeedStoryMinimizedTimestampStrategy","CometFeedStoryTimestampStrategy"])'},D,E],storageKey:null},G={alias:null,args:null,kind:"ScalarField",name:"encrypted_tracking",storageKey:null},H=[{alias:null,args:null,kind:"ScalarField",name:"text",storageKey:null}],I={alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"message",plural:!1,selections:H,storageKey:null},J={alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"summary",plural:!1,selections:H,storageKey:null},K={alias:null,args:[{kind:"Literal",name:"site",value:"www"}],kind:"ScalarField",name:"url",storageKey:'url(site:"www")'};H={alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"title",plural:!1,selections:H,storageKey:null};var L={alias:null,args:null,concreteType:"StoryAttachment",kind:"LinkedField",name:"attachments",plural:!0,selections:[{alias:null,args:[{kind:"Variable",name:"render_location",variableName:"renderLocation"},{kind:"Literal",name:"supported",value:["StoryAttachmentAlbumStyleRenderer","StoryAttachmentPhotoStyleRenderer","StoryAttachmentVideoStyleRenderer","StoryAttachmentLifeEventStyleRenderer","StoryAttachmentProfileIntroCardBioStyleRenderer","StoryAttachmentMapStyleRenderer","StoryAttachmentShareStyleRenderer","StoryAttachmentFunFactsStyleRenderer","StoryAttachment3DPhotoStyleRenderer","StoryAttachment360PhotoStyleRenderer"]}],concreteType:null,kind:"LinkedField",name:"style_type_renderer",plural:!1,selections:[C,{kind:"InlineFragment",selections:[{args:null,documentName:"ProfileCometTimelineGridStoryAttachment_story",fragmentName:"ProfileCometTimelineGridStoryAlbumAttachmentStyle_styleTypeRenderer",fragmentPropName:"styleTypeRenderer",kind:"ModuleImport"}],type:"StoryAttachmentAlbumStyleRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"ProfileCometTimelineGridStoryAttachment_story",fragmentName:"ProfileCometTimelineGridStoryPhotoAttachmentStyle_styleTypeRenderer",fragmentPropName:"styleTypeRenderer",kind:"ModuleImport"}],type:"StoryAttachmentPhotoStyleRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"ProfileCometTimelineGridStoryAttachment_story",fragmentName:"ProfileCometTimelineGridStoryVideoAttachmentStyle_styleTypeRenderer",fragmentPropName:"styleTypeRenderer",kind:"ModuleImport"}],type:"StoryAttachmentVideoStyleRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"ProfileCometTimelineGridStoryAttachment_story",fragmentName:"ProfileCometTimelineGridStoryLifeEventAttachmentStyle_styleTypeRenderer",fragmentPropName:"styleTypeRenderer",kind:"ModuleImport"}],type:"StoryAttachmentLifeEventStyleRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"ProfileCometTimelineGridStoryAttachment_story",fragmentName:"ProfileCometTimelineGridStoryProfileIntroCardBioAttachmentStyle_styleTypeRenderer",fragmentPropName:"styleTypeRenderer",kind:"ModuleImport"}],type:"StoryAttachmentProfileIntroCardBioStyleRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"ProfileCometTimelineGridStoryAttachment_story",fragmentName:"ProfileCometTimelineGridStoryMapAttachmentStyle_styleTypeRenderer",fragmentPropName:"styleTypeRenderer",kind:"ModuleImport"}],type:"StoryAttachmentMapStyleRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"ProfileCometTimelineGridStoryAttachment_story",fragmentName:"ProfileCometTimelineGridStoryShareAttachmentStyle_styleTypeRenderer",fragmentPropName:"styleTypeRenderer",kind:"ModuleImport"}],type:"StoryAttachmentShareStyleRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"ProfileCometTimelineGridStoryAttachment_story",fragmentName:"ProfileCometTimelineGridStoryFunFactsPromptAttachmentStyle_styleTypeRenderer",fragmentPropName:"styleTypeRenderer",kind:"ModuleImport"}],type:"StoryAttachmentFunFactsStyleRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"ProfileCometTimelineGridStoryAttachment_story",fragmentName:"ProfileCometTimelineGridStory3DPhotoAttachmentStyle_styleTypeRenderer",fragmentPropName:"styleTypeRenderer",kind:"ModuleImport"}],type:"StoryAttachment3DPhotoStyleRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"ProfileCometTimelineGridStoryAttachment_story",fragmentName:"ProfileCometTimelineGridStory360PhotoAttachmentStyle_styleTypeRenderer",fragmentPropName:"styleTypeRenderer",kind:"ModuleImport"}],type:"StoryAttachment360PhotoStyleRenderer",abstractKey:null}],storageKey:null}],storageKey:null};B={alias:null,args:null,concreteType:"Story",kind:"LinkedField",name:"attached_story",plural:!1,selections:[L,{alias:null,args:B,concreteType:"CometStorySections",kind:"LinkedField",name:"comet_sections",plural:!1,selections:[D,E],storageKey:null},A],storageKey:null};D={alias:null,args:null,kind:"ScalarField",name:"creation_time",storageKey:null};E={alias:null,args:null,concreteType:"BackdatedTime",kind:"LinkedField",name:"backdated_time",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"time",storageKey:null}],storageKey:null};var M=[A,F,G,I,J,K,H,L,B,D,E,{alias:null,args:null,kind:"ScalarField",name:"can_viewer_delete",storageKey:null},{alias:null,args:[{kind:"Literal",name:"action_location",value:"timeline"}],concreteType:"NegativeFeedbackActionsConnection",kind:"LinkedField",name:"negative_feedback_actions",plural:!1,selections:[{alias:null,args:null,concreteType:"NegativeFeedbackActionsEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"NegativeFeedbackAction",kind:"LinkedField",name:"node",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"negative_feedback_action_type",storageKey:null},A],storageKey:null}],storageKey:null}],storageKey:'negative_feedback_actions(action_location:"timeline")'}],N={kind:"Variable",name:"after_time",variableName:"afterTime"},O={kind:"Variable",name:"before_time",variableName:"beforeTime"},P={kind:"Variable",name:"omit_pinned_post",variableName:"omitPinnedPost"},Q={kind:"Variable",name:"posted_by",variableName:"postedBy"},R={kind:"Variable",name:"privacy",variableName:"privacy"},S={kind:"Variable",name:"tagged_in_only",variableName:"taggedInOnly"},aa=[N,O,{kind:"Literal",name:"first",value:3},{kind:"Variable",name:"memorialized_split_time_filter",variableName:"memorializedSplitTimeFilter"},P,Q,R,S],T=[A],U={kind:"InlineFragment",selections:T,type:"Node",abstractKey:"__isNode"},V={kind:"InlineFragment",selections:T,type:"CommunityChatFeedObject",abstractKey:null},W={kind:"InlineFragment",selections:T,type:"CommunityTabNewJoinFeedUnit",abstractKey:null},X={kind:"InlineFragment",selections:T,type:"CommunityTabTrendingPOGFeedUnit",abstractKey:null},Y={kind:"InlineFragment",selections:T,type:"XFBGroupsTabSuggestedGroupSetFeedUnit",abstractKey:null},Z={kind:"InlineFragment",selections:T,type:"XFBGroupsTabSuggestedGroupSetsFeedUnit",abstractKey:null},$={alias:null,args:null,kind:"ScalarField",name:"cursor",storageKey:null},ba={alias:null,args:null,kind:"ScalarField",name:"has_next_page",storageKey:null},ca={alias:null,args:null,kind:"ScalarField",name:"end_cursor",storageKey:null},da=[N,O,{kind:"Literal",name:"first",value:8},P,Q,R,S],ea=[{alias:null,args:null,concreteType:"PageInfo",kind:"LinkedField",name:"page_info",plural:!1,selections:[ca,ba],storageKey:null}];N=[N,O,{kind:"Literal",name:"first",value:9},{kind:"Variable",name:"include_group_scheduled_posts",variableName:"includeGroupScheduledPosts"},{kind:"Variable",name:"include_scheduled_posts",variableName:"includeScheduledPosts"},P,Q,R,S];return{fragment:{argumentDefinitions:[a,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y],kind:"Fragment",metadata:null,name:"ProfileCometBulkStoryCurationMutation",selections:[{alias:null,args:z,concreteType:"BatchStoryCurationResponsePayload",kind:"LinkedField",name:"batch_story_curation",plural:!1,selections:[{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"user",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"ProfileCometTimelineFeed_user"},{args:null,kind:"FragmentSpread",name:"ProfileCometTimelineGridViewFeed_user"},{args:null,kind:"FragmentSpread",name:"ProfileCometTimelineGridViewFeedPinnedPost_user"},{args:null,kind:"FragmentSpread",name:"ProfileCometManagePostsTimelineFeed_user"}],storageKey:null}],storageKey:null}],type:"Mutation",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[p,c,d,i,e,f,g,h,j,k,l,m,n,o,q,s,t,u,w,x,r,v,y,a],kind:"Operation",name:"ProfileCometBulkStoryCurationMutation",selections:[{alias:null,args:z,concreteType:"BatchStoryCurationResponsePayload",kind:"LinkedField",name:"batch_story_curation",plural:!1,selections:[{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"user",plural:!1,selections:[A,{alias:null,args:null,concreteType:"ProfilePinnedPost",kind:"LinkedField",name:"profile_pinned_post",plural:!1,selections:[A,{alias:null,args:null,concreteType:"Story",kind:"LinkedField",name:"pinned_post_story",plural:!1,selections:M,storageKey:null},{args:null,documentName:"ProfileCometTimelineFeed_user",fragmentName:"ProfileCometPinnedPostSection_profile_pinned_post",fragmentPropName:"profile_pinned_post",kind:"ModuleImport"}],storageKey:null},{alias:"timeline_list_feed_units",args:aa,concreteType:"TimelineFeedUnitsConnection",kind:"LinkedField",name:"timeline_feed_units",plural:!1,selections:[{"if":null,kind:"Stream",label:"ProfileCometTimelineFeed_user$stream$ProfileCometTimelineFeed_user_timeline_list_feed_units",selections:[{alias:null,args:null,concreteType:"TimelineFeedUnitsEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[C,{kind:"TypeDiscriminator",abstractKey:"__isFeedUnit"},{args:null,fragment:b("CometFeedUnit_feedUnit$normalization.graphql"),kind:"FragmentSpread"},{kind:"InlineFragment",selections:T,type:"Story",abstractKey:null},U,V,W,X,Y,Z],storageKey:null},$],storageKey:null}]},{"if":null,kind:"Defer",label:"ProfileCometTimelineFeed_user$defer$ProfileCometTimelineFeed_user_timeline_list_feed_units$page_info",selections:[{alias:null,args:null,concreteType:"PageInfo",kind:"LinkedField",name:"page_info",plural:!1,selections:[ba,ca],storageKey:null}]}],storageKey:null},{alias:"timeline_list_feed_units",args:aa,filters:["after_time","before_time","posted_by","privacy","tagged_in_only","memorialized_split_time_filter","omit_pinned_post"],handle:"connection",key:"ProfileCometTimelineFeed_user_timeline_list_feed_units",kind:"LinkedHandle",name:"timeline_feed_units"},{alias:"timeline_grid_feed_units",args:da,concreteType:"TimelineFeedUnitsConnection",kind:"LinkedField",name:"timeline_feed_units",plural:!1,selections:[{"if":null,kind:"Stream",label:"ProfileCometTimelineGridViewFeed_user$stream$ProfileCometTimelineFeed_user_timeline_grid_feed_units",selections:[{alias:null,args:null,concreteType:"TimelineFeedUnitsEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[C,{kind:"InlineFragment",selections:[A,F,G,I,J,K,H,L,B,D,E],type:"Story",abstractKey:null},U,V,W,X,Y,Z],storageKey:null},$],storageKey:null}]},{"if":null,kind:"Defer",label:"ProfileCometTimelineGridViewFeed_user$defer$ProfileCometTimelineFeed_user_timeline_grid_feed_units$page_info",selections:ea}],storageKey:null},{alias:"timeline_grid_feed_units",args:da,filters:["after_time","before_time","posted_by","privacy","tagged_in_only","omit_pinned_post"],handle:"connection",key:"ProfileCometTimelineFeed_user_timeline_grid_feed_units",kind:"LinkedHandle",name:"timeline_feed_units"},{alias:"timeline_manage_feed_units",args:N,concreteType:"TimelineFeedUnitsConnection",kind:"LinkedField",name:"timeline_feed_units",plural:!1,selections:[{"if":null,kind:"Stream",label:"ProfileCometManagePostsTimelineFeed_user$stream$CometManagePostsFeed_user_timeline_manage_feed_units",selections:[{alias:null,args:null,concreteType:"TimelineFeedUnitsEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[C,{kind:"InlineFragment",selections:M,type:"Story",abstractKey:null},U,V,W,X,Y,Z],storageKey:null},$],storageKey:null}]},{"if":null,kind:"Defer",label:"ProfileCometManagePostsTimelineFeed_user$defer$CometManagePostsFeed_user_timeline_manage_feed_units$page_info",selections:ea}],storageKey:null},{alias:"timeline_manage_feed_units",args:N,filters:["after_time","before_time","posted_by","privacy","tagged_in_only","omit_pinned_post","include_scheduled_posts","include_group_scheduled_posts"],handle:"connection",key:"CometManagePostsFeed_user_timeline_manage_feed_units",kind:"LinkedHandle",name:"timeline_feed_units"}],storageKey:null}],storageKey:null}]},params:{id:b("ProfileCometBulkStoryCurationMutation_facebookRelayOperation"),metadata:{},name:"ProfileCometBulkStoryCurationMutation",operationKind:"mutation",text:null}}}();e.exports=a}),null);
__d("ProfileCometBulkStoryCurationMutation",["CometRelay","ProfileCometBulkStoryCurationMutation.graphql","WebPixelRatio"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h!==void 0?h:h=b("ProfileCometBulkStoryCurationMutation.graphql");function a(a,b,c,e,f){d("CometRelay").commitMutation(a,{mutation:i,onCompleted:c,onError:e,variables:babelHelpers["extends"]({input:b},f,{scale:d("WebPixelRatio").get()})})}g.bulkStoryCuration=a}),98);
__d("XCometDTPRequestControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/tyi/",Object.freeze({auto_redirect:!1}),void 0);b=a;g["default"]=b}),98);
__d("ProfileCometManagePostsActionsPage.react",["fbt","CometRelay","CometRow.react","CometRowItem.react","ProfileCometBulkStoryCurationMutation","TetraButton.react","TetraListCell.react","WebPixelRatio","XCometDTPRequestControllerRouteBuilder","gkx","react","unrecoverableViolation","useCometRouterDispatcher"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react"),j=d("react").useState;function a(a){var b=a.onClose,e=a.selectedPosts,f=d("CometRelay").useRelayEnvironment();a=j(null);var g=a[0],k=a[1];a=j(!1);var l=a[0],m=a[1];a=e.some(function(a){return!a.canHide});var n=e.some(function(a){return!a.canUntag}),o=e.some(function(a){return!a.canDelete}),p=c("useCometRouterDispatcher")(),q=function(){m(!0);if(g==="TRANSFER"){var a=[];for(var h=0;h<e.length;h++)a.push(e[h].id);p!=null&&p.go(c("XCometDTPRequestControllerRouteBuilder").buildURL({post_ids:a,source:"profile_manage_posts"}),{replace:!1})}d("ProfileCometBulkStoryCurationMutation").bulkStoryCuration(f,{story_actions:e.map(function(a){var b=g;if(b==null)throw c("unrecoverableViolation")("Must specify an action to commit bulk story curation","profile_comet");return{action:b,story_id:a.id,story_location:"TIMELINE"}})},function(){b()},function(){},{UFI2CommentsProvider_commentsKey:"ProfileCometTimelineRoute",feedbackSource:0,feedLocation:"TIMELINE",gridMediaWidth:230,omitPinnedPost:!0,privacySelectorRenderLocation:"COMET_STREAM",renderLocation:"timeline",scale:d("WebPixelRatio").get()})};return i.jsxs("div",{"data-testid":void 0,children:[i.jsxs("div",{className:"tr9rh885 kkf49tns tvmbv18p cgat1ltu",children:[i.jsx(c("TetraListCell.react"),{addOnSecondary:{on:g==="HIDE_FROM_TIMELINE",onPress:function(){k("HIDE_FROM_TIMELINE")},type:"radio"},addOnSecondaryTestId:"ManagePostHideFromTimelineRadioButton",body:h._(/*FBT_CALL*/"Hide posts from your timeline"/*FBT_CALL*/),disabled:a,headline:h._(/*FBT_CALL*/"Hide Posts"/*FBT_CALL*/)}),i.jsx(c("TetraListCell.react"),{addOnSecondary:{on:g==="UNTAG",onPress:function(){k("UNTAG")},type:"radio"},body:h._(/*FBT_CALL*/"Remove yourself from posts you're tagged in"/*FBT_CALL*/),disabled:n,headline:h._(/*FBT_CALL*/"Remove Tags"/*FBT_CALL*/)}),i.jsx(c("TetraListCell.react"),{addOnSecondary:{on:g==="DELETE",onPress:function(){k("DELETE")},type:"radio"},addOnSecondaryTestId:"ManagePostDeleteRadioButton",body:h._(/*FBT_CALL*/"Delete posts you've created"/*FBT_CALL*/),disabled:o,headline:h._(/*FBT_CALL*/"Delete Posts"/*FBT_CALL*/)}),c("gkx")("1421")?i.jsx(c("TetraListCell.react"),{addOnSecondary:{on:g==="TRANSFER",onPress:function(){k("TRANSFER")},type:"radio"},addOnSecondaryTestId:"ManagePostTransferRadioButton",body:h._(/*FBT_CALL*/"Transfer posts you've created"/*FBT_CALL*/),disabled:o,headline:h._(/*FBT_CALL*/"Transfer Posts"/*FBT_CALL*/)}):null]}),i.jsx("div",{className:"sjgh65i0 kkf49tns cgat1ltu aahdfvyu",children:i.jsx(c("CometRow.react"),{align:"end",children:i.jsx(c("CometRowItem.react"),{children:i.jsx(c("TetraButton.react"),{disabled:l||g==null,label:h._(/*FBT_CALL*/"Done"/*FBT_CALL*/),onPress:q,padding:"wide",testid:void 0})})})})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("ProfileCometManagePostsSelectionPage.react",["fbt","ix","CometCardedDialogLoadingState.react","CometLazyDialogTrigger.react","CometPlaceholder.react","CometRow.react","CometRowItem.react","CometScrollView.react","CometTransientDialogProvider.react","JSResourceForInteraction","ProfileCometManagePostsActionsPage.react","ProfileCometPostFiltersDialogContext","ProfileCometPostFiltersDialogReducer","ProfileCometTimelineFilterContext","ProfileCometTimelineFilterReducer","ProfileCometTimelineGridGlimmer.react","TetraButton.react","TetraText.react","fbicon","gkx","react"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j=d("react");b=d("react");var k=b.useMemo,l=b.useReducer,m=b.useState,n=c("JSResourceForInteraction")("ProfileCometPostFiltersDialog.react").__setRef("ProfileCometManagePostsSelectionPage.react");function o(a){if(a.length===0)return null;var b="delete";c("gkx")("1421")&&(b="delete or transfer");a=[a.every(function(a){return a.canUntag})?"untag yourself from":null,a.every(function(a){return a.canHide})?"hide":null,a.every(function(a){return a.canDelete})?b:null].filter(Boolean);if(a.length===3)if(c("gkx")("1421"))return h._(/*FBT_CALL*/{"untag yourself from":{"hide":{"delete or transfer":"You can untag yourself from, hide, or delete or transfer the posts selected."}}}/*FBT_CALL*/,[h._enum(a[0],{"untag yourself from":"untag yourself from"}),h._enum(a[1],{hide:"hide"}),h._enum(a[2],{"delete or transfer":"delete or transfer"})]);else return h._(/*FBT_CALL*/{"untag yourself from":{"hide":{"delete":"You can untag yourself from, hide, or delete the posts selected."}}}/*FBT_CALL*/,[h._enum(a[0],{"untag yourself from":"untag yourself from"}),h._enum(a[1],{hide:"hide"}),h._enum(a[2],{"delete":"delete"})]);else if(a.length===2)if(c("gkx")("1421"))return h._(/*FBT_CALL*/{"untag yourself from":{"hide":"You can untag yourself from or hide the posts selected.","delete or transfer":"You can untag yourself from or delete or transfer the posts selected."},"hide":{"hide":"You can hide or hide the posts selected.","delete or transfer":"You can hide or delete or transfer the posts selected."}}/*FBT_CALL*/,[h._enum(a[0],{"untag yourself from":"untag yourself from",hide:"hide"}),h._enum(a[1],{hide:"hide","delete or transfer":"delete or transfer"})]);else return h._(/*FBT_CALL*/{"untag yourself from":{"hide":"You can untag yourself from or hide the posts selected.","delete":"You can untag yourself from or delete the posts selected."},"hide":{"hide":"You can hide or hide the posts selected.","delete":"You can hide or delete the posts selected."}}/*FBT_CALL*/,[h._enum(a[0],{"untag yourself from":"untag yourself from",hide:"hide"}),h._enum(a[1],{hide:"hide","delete":"delete"})]);else if(a.length===1)if(c("gkx")("1421"))return h._(/*FBT_CALL*/{"untag yourself from":"You can untag yourself from the posts selected.","hide":"You can hide the posts selected.","delete or transfer":"You can delete or transfer the posts selected."}/*FBT_CALL*/,[h._enum(a[0],{"untag yourself from":"untag yourself from",hide:"hide","delete or transfer":"delete or transfer"})]);else return h._(/*FBT_CALL*/{"untag yourself from":"You can untag yourself from the posts selected.","hide":"You can hide the posts selected.","delete":"You can delete the posts selected."}/*FBT_CALL*/,[h._enum(a[0],{"untag yourself from":"untag yourself from",hide:"hide","delete":"delete"})]);else return h._(/*FBT_CALL*/"Untagging yourself, hiding, deleting and transferring posts are unavailable actions for the selected group."/*FBT_CALL*/)}function a(a){var b=a.instructions,e=a.managePostsTimelineRootRenderer,f=a.onClose,g=a.pushPage,p=a.shouldHideAllFilters,q=a.shouldHidePostedByFilters;a=a.shouldHidePrivacyFilter;var r=m([]),s=r[0],t=r[1];r=l(d("ProfileCometTimelineFilterReducer").reducer,d("ProfileCometTimelineFilterReducer").getInitialState());var u=r[0],v=r[1];r=k(function(){return{dispatchAction:v,state:u}},[v,u]);var w=l(d("ProfileCometPostFiltersDialogReducer").reducer,d("ProfileCometPostFiltersDialogReducer").getInitialState(q)),x=w[0],y=w[1];w=k(function(){return{dispatchAction:y,state:x}},[y,x]);var z=function(a){return j.jsx(c("CometCardedDialogLoadingState.react"),{onClose:a,title:h._(/*FBT_CALL*/"Post Filters"/*FBT_CALL*/),withCloseButton:!0})};return j.jsxs(c("ProfileCometTimelineFilterContext").Provider,{value:r,children:[j.jsx("div",{className:"cxgpxx05 b3onmgus ph5uu5jm sj5x9vvc r64x2ps9",children:j.jsxs(c("CometRow.react"),{paddingTop:0,verticalAlign:"center",children:[j.jsx(c("CometRowItem.react"),{children:j.jsx(c("TetraText.react"),{isSemanticHeading:!0,type:"body3",children:h._(/*FBT_CALL*/"Select the posts you want to manage"/*FBT_CALL*/)})}),!p&&j.jsx(c("CometRowItem.react"),{children:j.jsx(c("ProfileCometPostFiltersDialogContext").Provider,{value:w,children:j.jsx(c("CometTransientDialogProvider.react"),{children:j.jsx(c("CometLazyDialogTrigger.react"),{dialogProps:{instructions:b,shouldHidePostedByFilters:q,shouldHidePrivacyFilter:a},dialogResource:n,fallback:z,children:function(a,b,e){return j.jsx(c("TetraButton.react"),{icon:d("fbicon")._(i("500218"),16),label:h._(/*FBT_CALL*/"Filters"/*FBT_CALL*/),onHoverIn:e,onPress:a,ref:b,type:"secondary"})}})})})})]})}),j.jsx("div",{className:"a8nrsv2n dg427edo ovgaypyr j83agx80",children:j.jsx(c("CometScrollView.react"),{children:j.jsx("div",{className:"dati1w0a hv4rvrfc",children:j.jsx(c("CometPlaceholder.react"),{fallback:j.jsx("div",{className:"jei6r52m",children:j.jsx(c("ProfileCometTimelineGridGlimmer.react"),{itemCount:9})}),children:e(s,t)})})})}),j.jsx("div",{className:"discj3wi b3onmgus ph5uu5jm ihqw7lf3 btwxx1t3 pygxslno",children:j.jsxs(c("CometRow.react"),{paddingTop:0,verticalAlign:"center",children:[j.jsx(c("CometRowItem.react"),{children:j.jsx(c("TetraText.react"),{color:"highlight",isSemanticHeading:!1,numberOfLines:1,type:"headlineEmphasized4",children:s.length+"/50"})}),j.jsx(c("CometRowItem.react"),{expanding:!0,children:j.jsx(c("TetraText.react"),{isSemanticHeading:!1,numberOfLines:2,type:"body3",children:(r=o(s))!=null?r:void 0})}),j.jsx(c("CometRowItem.react"),{children:j.jsxs("div",{className:"j83agx80 k5z4p5yh",children:[j.jsx(c("TetraButton.react"),{disabled:s.length===0,label:h._(/*FBT_CALL*/"Clear"/*FBT_CALL*/),onPress:function(){t([])},padding:"wide",type:"secondary"}),j.jsx("div",{className:"h676nmdw",children:j.jsx(c("TetraButton.react"),{disabled:s.length>50||s.length===0,label:h._(/*FBT_CALL*/"Next"/*FBT_CALL*/),onPress:function(){g(function(){return j.jsx(c("ProfileCometManagePostsActionsPage.react"),{onClose:f,selectedPosts:s})},{title:h._(/*FBT_CALL*/"Manage Posts"/*FBT_CALL*/)})},padding:"wide",testid:void 0})})]})})]})})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("ProfileCometManagePostsDialog.react",["fbt","CometMultiStepDialog.react","ProfileCometManagePostsSelectionPage.react","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");function a(a){var b=a.instructions,d=a.managePostsTimelineRootRenderer,e=a.onClose,f=a.shouldHideAllFilters,g=a.shouldHidePostedByFilters,j=a.shouldHidePrivacyFilter;return i.jsx(c("CometMultiStepDialog.react"),{onClose:e,size:"content",testid:void 0,title:h._(/*FBT_CALL*/"Manage Posts"/*FBT_CALL*/),withCloseButton:!0,children:function(a){return i.jsx(c("ProfileCometManagePostsSelectionPage.react"),{instructions:b,managePostsTimelineRootRenderer:d,onClose:e,pushPage:a,shouldHideAllFilters:f,shouldHidePostedByFilters:g,shouldHidePrivacyFilter:j})}})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);