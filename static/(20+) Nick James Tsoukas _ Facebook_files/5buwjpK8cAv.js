if (self.CavalryLogger) { CavalryLogger.start_js(["rOWuZCx"]); }

__d("LSOptimisticSendAttachmentShareForward",["LSInsertOptimisticAttachment","LSIssueNewTaskAndGetTaskID","LSLocalApplyOptimisticMessage"],(function(a,b,c,d,e,f){function a(){var a=arguments,c=a[a.length-1];c.n;var d=[],e=[],f;return c.seq([function(g){return c.seq([function(e){return c.sp(b("LSLocalApplyOptimisticMessage"),a[0],a[1],a[2],a[3],a[4],a[5],f,f,f,f,[0,3],f,f,!0).then(function(a){return a=a,d[0]=a[0],d[1]=a[1],a})},function(e){return c.sp(b("LSInsertOptimisticAttachment"),a[1],d[1],d[0],d[0],a[6],[0,2],f,f,!0,!1)},function(e){return c.i64.gt([0,0],[0,0])?d[2]=c.i64.add(c.i64.of_float(Date.now()),[0,0]):d[2]=[0,0],c.sp(b("LSIssueNewTaskAndGetTaskID"),c.i64.to_string(a[1]),[0,46],"",f,f,[0,0],f).then(function(a){return a=a,d[3]=a[0],a})},function(b){return c.db.table(31).add({a:d[3],b:a[1],c:d[0],e:a[7],k:[0,4],l:!1,m:a[8]})},function(b){return d[4]=c.createArray(),d[5]=(d[4].push("optimisticSendAttachmentShareForward"),d[4]),d[6]=(d[4].push(a[1]),d[4]),d[7]=(d[4].push(a[6]),d[4]),d[8]=c.toJSON(d[4]),function(a){c.logger(a).info(a)}(d[8]),e[0]=d[0]}])},function(a){return c.resolve(e)}])}e.exports=a}),null);
__d("LSOptimisticSendURLShare",["LSInsertOptimisticAttachment","LSIssueNewTaskAndGetTaskID","LSLocalApplyOptimisticMessage"],(function(a,b,c,d,e,f){function a(){var a=arguments,c=a[a.length-1];c.n;var d=[],e=[],f;return c.seq([function(g){return c.seq([function(e){return c.sp(b("LSLocalApplyOptimisticMessage"),a[0],a[1],a[2],a[3],a[4],a[5],f,f,f,f,f,f,f,!1).then(function(a){return a=a,d[0]=a[0],d[1]=a[1],a})},function(e){return c.sp(b("LSInsertOptimisticAttachment"),a[1],d[1],d[0],d[0],d[0],[0,7],a[6],f,!1,!0)},function(e){return c.i64.gt([0,0],[0,0])?d[2]=c.i64.add(c.i64.of_float(Date.now()),[0,0]):d[2]=[0,0],c.sp(b("LSIssueNewTaskAndGetTaskID"),c.i64.to_string(a[1]),[0,46],"",f,f,[0,0],f).then(function(a){return a=a,d[3]=a[0],a})},function(b){return c.db.table(31).add({a:d[3],b:a[1],c:d[0],e:a[7],k:[0,6],l:!1,m:a[8]})},function(b){return d[4]=c.createArray(),d[5]=(d[4].push("optimisticSendURLShare"),d[4]),d[6]=(d[4].push(a[1]),d[4]),d[7]=(d[4].push(a[6]),d[4]),d[8]=c.toJSON(d[4]),function(a){c.logger(a).info(a)}(d[8]),e[0]=d[0]}])},function(a){return c.resolve(e)}])}e.exports=a}),null);
__d("LSShareAttachment.bs",["LS.bs","LSDatabaseDeferred.bs","LSMessagingInitiatingSource.bs","LSOptimisticSendAttachmentShareForward","LSOptimisticSendURLShare","LSThreadAttributionTypeUtil.bs","LSTransaction.bs","MessagingThreadType.bs","Promise","bs_belt_Option","bs_caml_format","bs_curry","promiseDone"],(function(a,b,c,d,e,f){"use strict";function a(a){var c=b("LSDatabaseDeferred.bs").db.then(function(c){var d=b("bs_caml_format").caml_int64_of_string(a.actorID),e=b("bs_caml_format").caml_int64_of_string(a.targetID),f=a.shareID,g=b("bs_belt_Option").getWithDefault(a.message,""),h=a.targetType,i=h==="group"?b("MessagingThreadType.bs").group:b("MessagingThreadType.bs").oneToOne;h=b("LSTransaction.bs").run(c,function(c){var h=a.url;if(h!==void 0)return b("LSOptimisticSendURLShare")(d,e,i,g,void 0,!1,h,b("LSThreadAttributionTypeUtil.bs").toLSThreadAttribution(a.entryPoint),b("LSMessagingInitiatingSource.bs").facebookChat,b("bs_curry")._1(b("LS.bs").make,c));else return b("LSOptimisticSendAttachmentShareForward")(d,e,i,g,void 0,!1,f,b("LSThreadAttributionTypeUtil.bs").toLSThreadAttribution(a.entryPoint),b("LSMessagingInitiatingSource.bs").facebookChat,b("bs_curry")._1(b("LS.bs").make,c))},"readWrite");b("promiseDone")(h,void 0,void 0);return b("Promise").resolve(void 0)});b("promiseDone")(c,void 0,void 0)}f.share=a}),null);
__d("LSShareAttachment.re",["LSShareAttachment.bs"],(function(a,b,c,d,e,f){a=b("LSShareAttachment.bs").share;f.share=a}),null);