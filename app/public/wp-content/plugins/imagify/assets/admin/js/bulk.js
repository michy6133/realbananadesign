(self.webpackChunk_roots_bud=self.webpackChunk_roots_bud||[]).push([[350],{"./bulk.js":()=>{window.imagify=window.imagify||{},function(i,a){var e=i.propHooks.checked;i.propHooks.checked={set:function(t,s,l){var o;return o=a===e?t[l]=s:e(t,s,l),i(t).trigger("change.imagify"),o}},i.fn.imagifyHide=function(e,t){return e&&e>0?this.hide(e,(function(){i(this).addClass("hidden").css("display",""),a!==t&&t()})):(this.addClass("hidden"),a!==t&&t()),this.attr("aria-hidden","true")},i.fn.imagifyShow=function(e,t){return a!==t&&t(),e&&e>0?this.show(e,(function(){i(this).removeClass("hidden").css("display","")})):this.removeClass("hidden"),this.attr("aria-hidden","false")}}(jQuery),function(i,a,e,t){e.imagify.bulk={charts:{overview:{canvas:!1,donut:!1,data:{labels:[imagifyBulk.labels.overviewChartLabels.unoptimized,imagifyBulk.labels.overviewChartLabels.optimized,imagifyBulk.labels.overviewChartLabels.error],datasets:[{data:[],backgroundColor:["#10121A","#46B1CE","#C51162"],borderWidth:0}]}},files:{donuts:{}},share:{canvas:!1,donut:!1}},folderTypesQueue:[],status:{},displayedWaitMessage:!1,hasMultipleRows:!0,processIsStopped:!1,globalOptimizedCount:0,globalGain:0,globalOriginalSize:0,globalOptimizedSize:0,folderTypesData:{},init:function(){var t=i(a);this.drawOverviewChart(),this.hasMultipleRows=i('.imagify-bulk-table [name="group[]"]').length>1,i(".imagify-selector-button").on("click.imagify",this.openSelectorFromButton),i(".imagify-selector-list input").on("change.imagify init.imagify",this.syncSelectorFromRadio).filter(":checked").trigger("init.imagify"),t.on("keypress.imagify click.imagify",this.closeSelectors),i('.imagify-bulk-table [name="group[]"]').on("change.imagify init.imagify",this.toggleOptimizationButton).trigger("init.imagify"),i("#imagify-bulk-action").on("click.imagify",this.maybeLaunchAllProcesses),i(e).on("processQueue.imagify",this.processQueue).on("queueEmpty.imagify",this.queueEmpty),imagifyBulk.ajaxActions.getStats&&i('.imagify-bulk-table [data-group-id="library"][data-context="wp"]').length&&(imagifyBulk.imagifybeatIDs.stats=!1),imagifyBulk.imagifybeatIDs.stats&&t.on("imagifybeat-send",this.addStatsImagifybeat).on("imagifybeat-tick",this.processStatsImagifybeat),t.on("imagifybeat-send",this.addQueueImagifybeat).on("imagifybeat-tick",this.processQueueImagifybeat),t.on("imagifybeat-send",this.addRequirementsImagifybeat).on("imagifybeat-tick",this.processRequirementsImagifybeat),imagifyBulk.optimizing&&(e.imagify.beat.interval(15),e.imagify.beat.disableSuspend())},getAjaxUrl:function(i,a){var t=ajaxurl+e.imagify.concat+"_wpnonce="+imagifyBulk.ajaxNonce+"&action="+imagifyBulk.ajaxActions[i];return a&&a.context&&(t+="&context="+a.context),a&&Number.isInteger(a.level)&&(t+="&optimization_level="+a.level),t},getFolderTypes:function(){return i.isEmptyObject(e.imagify.bulk.folderTypesData)?(i(".imagify-row-folder-type").each((function(){var a=i(this),t={groupID:a.data("group-id"),context:a.data("context"),level:a.find('.imagify-cell-level [name="level['+a.data("group-id")+']"]:checked').val()},s=t.groupID+"|"+t.context;e.imagify.bulk.folderTypesData[s]=t})),e.imagify.bulk.folderTypesData):e.imagify.bulk.folderTypesData},getConfirmMessage:function(){return imagifyBulk.labels.processing},closeLevelSelector:function(i,a){i&&i.length&&(t!==a&&a>0?e.setTimeout((function(){e.imagify.bulk.closeLevelSelector(i)}),a):i.attr("aria-hidden","true"))},stopProcess:function(a,t){e.imagify.bulk.processIsStopped=!0,e.imagify.bulk.status[t.groupID]={isError:!0,id:a},i(e).trigger("queueEmpty.imagify")},hasBlockingError:function(a){return a=t!==a&&a,imagifyBulk.curlMissing?(a&&e.imagify.bulk.displayError({html:imagifyBulk.labels.curlMissing}),e.imagify.bulk.processIsStopped=!0,!0):imagifyBulk.editorMissing?(a&&e.imagify.bulk.displayError({html:imagifyBulk.labels.editorMissing}),e.imagify.bulk.processIsStopped=!0,!0):imagifyBulk.extHttpBlocked?(a&&e.imagify.bulk.displayError({html:imagifyBulk.labels.extHttpBlocked}),e.imagify.bulk.processIsStopped=!0,!0):imagifyBulk.apiDown?(a&&e.imagify.bulk.displayError({html:imagifyBulk.labels.apiDown}),e.imagify.bulk.processIsStopped=!0,!0):imagifyBulk.keyIsValid?!!imagifyBulk.isOverQuota&&(a&&e.imagify.bulk.displayError({title:imagifyBulk.labels.overQuotaTitle,html:i("#tmpl-imagify-overquota-alert").html(),type:"info",customClass:"imagify-swal-has-subtitle imagify-swal-error-header",showConfirmButton:!1}),e.imagify.bulk.processIsStopped=!0,!0):(a&&e.imagify.bulk.displayError({title:imagifyBulk.labels.invalidAPIKeyTitle,type:"info"}),e.imagify.bulk.processIsStopped=!0,!0)},displayError:function(a,e,t){var s={title:"",html:"",type:"error",customClass:"",width:620,padding:0,showCloseButton:!0,showConfirmButton:!0};i.isPlainObject(a)?t=i.extend({},s,a):(t=t||{},t=i.extend({},s,{title:a||"",html:e||""},t)),t.title=t.title||imagifyBulk.labels.error,t.customClass+=" imagify-sweet-alert",swal(t).catch(swal.noop)},displayShareBox:function(){var a,t;if(!this.globalGain||this.folderTypesQueue.length)return this.globalOptimizedCount=0,this.globalGain=0,this.globalOriginalSize=0,void(this.globalOptimizedSize=0);t=this.globalOriginalSize-this.globalOptimizedSize,(a=i(".imagify-row-complete")).find(".imagify-ac-rt-total-images").html(this.globalOptimizedCount),a.find(".imagify-ac-rt-total-gain").html(e.imagify.humanSize(t,1)),a.find(".imagify-ac-rt-total-original").html(e.imagify.humanSize(this.globalOriginalSize,1)),a.find(".imagify-ac-chart").attr("data-percent",Math.round(this.globalGain)),this.drawShareChart(),a.addClass("done").imagifyShow(),i("html, body").animate({scrollTop:a.offset().top},200),this.globalOptimizedCount=0,this.globalGain=0,this.globalOriginalSize=0,this.globalOptimizedSize=0},updateStats:function(a){var t;a&&i.isPlainObject(a)&&(e.imagify.bulk.charts.overview.donut.data&&(t=e.imagify.bulk.charts.overview.donut.data.datasets[0].data,a.unoptimized_attachments===t[0]&&a.optimized_attachments===t[1]&&a.errors_attachments===t[2])||(a.unconsumed_quota=a.unconsumed_quota.toFixed(1),i(".imagify-meteo-icon").html(a.quota_icon),i(".imagify-unconsumed-percent").html(a.unconsumed_quota+"%"),i(".imagify-unconsumed-bar").css("width",a.unconsumed_quota+"%").parent().attr("class",a.quota_class),i("#imagify-overview-chart-percent").html(a.optimized_attachments_percent+"<span>%</span>"),i(".imagify-total-percent").html(a.optimized_attachments_percent+"%"),e.imagify.bulk.drawOverviewChart([a.unoptimized_attachments,a.optimized_attachments,a.errors_attachments]),i("#imagify-total-optimized-attachments").html(a.already_optimized_attachments),i("#imagify-original-bar").find(".imagify-barnb").html(a.original_human),i("#imagify-optimized-bar").css("width",100-a.optimized_percent+"%").find(".imagify-barnb").html(a.optimized_human),i("#imagify-total-optimized-attachments-pct").html(a.optimized_percent+"%")))},openSelectorFromButton:function(a){var e=i("#"+i(this).attr("aria-controls"));a.stopPropagation(),i(".imagify-selector-list").not(e).attr("aria-hidden","true"),e.attr("aria-hidden","false").find(":checked").trigger("focus.imagify")},syncSelectorFromRadio:function(){var a=i(this).closest(".imagify-selector-choice");a.addClass("imagify-selector-current-value").attr("aria-current","true").siblings(".imagify-selector-choice").removeClass("imagify-selector-current-value").attr("aria-current","false"),a.closest(".imagify-selector-list").siblings(".imagify-selector-button").find(".imagify-selector-current-value-info").html(a.find("label").html())},closeSelectors:function(a){"keypress"===a.type&&27!==a.keyCode&&13!==a.keyCode||e.imagify.bulk.closeLevelSelector(i('.imagify-selector-list[aria-hidden="false"]'))},toggleOptimizationButton:function(){e.imagify.bulk.hasMultipleRows||this.checked?imagifyBulk.optimizing?i("#imagify-bulk-action").prop("disabled",!0):i('.imagify-bulk-table [name="group[]"]:checked').length?i("#imagify-bulk-action").prop("disabled",!1):i("#imagify-bulk-action").prop("disabled",!0):i(this).prop("checked",!0)},maybeLaunchAllProcesses:function(){var a;i(this).prop("disabled")||i('.imagify-bulk-table [name="group[]"]:checked').length&&(e.imagify.bulk.hasBlockingError(!0)||((a=i("#tmpl-imagify-bulk-infos")).length?swal({title:imagifyBulk.labels.bulkInfoTitle,html:a.html(),type:"",customClass:"imagify-sweet-alert imagify-swal-has-subtitle imagify-before-bulk-infos",showCancelButton:!0,padding:0,width:554,confirmButtonText:imagifyBulk.labels.confirmBulk,cancelButtonText:imagifySwal.labels.cancelButtonText,reverseButtons:!0}).then((function(){var t=i('.imagify-bulk-table [name="group[]"]:checked').first().closest(".imagify-row-folder-type");i.get(e.imagify.bulk.getAjaxUrl("bulkInfoSeen",{context:t.data("context")})),a.remove(),e.imagify.bulk.launchAllProcesses()})).catch(swal.noop):e.imagify.bulk.launchAllProcesses()))},launchAllProcesses:function(){var a=i(e);i("#imagify-bulk-action").prop("disabled",!0).find(".dashicons").addClass("rotate"),i(".imagify-row-complete").imagifyHide(200,(function(){i(this).removeClass("done")})),this.folderTypesQueue=[],this.status={},this.displayedWaitMessage=!1,this.processIsStopped=!1,this.globalOptimizedCount=0,this.globalGain=0,this.globalOriginalSize=0,this.globalOptimizedSize=0,i('.imagify-bulk-table [name="group[]"]:checked').each((function(){var a=i(this).closest(".imagify-row-folder-type"),s=a.data("group-id"),l=a.data("context"),o=a.find('.imagify-cell-level [name="level['+s+']"]:checked').val();e.imagify.bulk.folderTypesQueue.push({groupID:s,context:l,level:t===o?-1:parseInt(o,10)}),e.imagify.bulk.status[s]={isError:!1,id:"waiting"}})),e.imagify.beat.interval(15),e.imagify.beat.disableSuspend(),a.trigger("processQueue.imagify")},processQueue:function(){var a,t,s,l;e.imagify.bulk.processIsStopped||(e.imagify.bulk.displayedWaitMessage||(swal({title:imagifyBulk.labels.waitTitle,html:imagifyBulk.labels.waitText,showConfirmButton:!1,padding:0,imageUrl:imagifyBulk.waitImageUrl,customClass:"imagify-sweet-alert"}).catch(swal.noop),e.imagify.bulk.displayedWaitMessage=!0),e.imagify.bulk.folderTypesQueue.forEach((function(o){i.get(e.imagify.bulk.getAjaxUrl("bulkProcess",o)).done((function(r){var n;swal.close(),n=r.data&&r.data.message?r.data.message:imagifyBulk.ajaxErrorText,r.success&&r.data&&(i.isPlainObject(r.data)||i.isArray(r.data))?r.success&&(a=i("#cb-select-"+o.groupID).closest(".imagify-row-folder-type"),t=a.closest(".imagify-bulk-table"),s=t.find(".imagify-row-progress"),l=s.find(".bar"),a.find(".imagify-cell-checkbox-loader").removeClass("hidden").attr("aria-hidden","false"),a.find(".imagify-cell-checkbox-box").addClass("hidden").attr("aria-hidden","true"),l.css("width","0%").find(".percent").text("0%"),s.slideDown().attr("aria-hidden","false")):e.imagify.bulk.stopProcess(n,o)})).fail((function(){e.imagify.bulk.stopProcess("get-unoptimized-images",o)}))})))},queueEmpty:function(){var a=i(".imagify-bulk-table"),t={},s=!1,l=!0,o="";e.imagify.beat.resetInterval(),e.imagify.beat.enableSuspend(),e.imagify.bulk.folderTypesQueue=[],e.imagify.bulk.displayShareBox(),imagifyBulk.imagifybeatIDs.stats||i.get(e.imagify.bulk.getAjaxUrl("getStats"),{types:e.imagify.bulk.getFolderTypes()}).done((function(i){i.success&&e.imagify.bulk.updateStats(i.data)})),i.isEmptyObject(e.imagify.bulk.status)||(i.each(e.imagify.bulk.status,(function(i,a){if(a.isError){if("no-images"!==a.id&&a.isError)return s=a.id,l=!1,!1}else l=!1})),s?("invalid-api-key"===s?t={title:imagifyBulk.labels.invalidAPIKeyTitle,type:"info"}:"over-quota"===s?t={title:imagifyBulk.labels.overQuotaTitle,html:i("#tmpl-imagify-overquota-alert").html(),type:"info",customClass:"imagify-swal-has-subtitle imagify-swal-error-header",showConfirmButton:!1}:"get-unoptimized-images"!==s&&"consumed-all-data"!==s||(t={title:imagifyBulk.labels.getUnoptimizedImagesErrorTitle,html:imagifyBulk.labels.getUnoptimizedImagesErrorText,type:"info"}),e.imagify.bulk.displayError(t)):l&&(o=Object.prototype.hasOwnProperty.call(imagifyBulk.labels.nothingToDoText,e.imagify.bulk.imagifyAction)?imagifyBulk.labels.nothingToDoText[e.imagify.bulk.imagifyAction]:imagifyBulk.labels.nothingToDoText.optimize,e.imagify.bulk.displayError({title:imagifyBulk.labels.nothingToDoTitle,html:o,type:"info"}))),e.imagify.bulk.status={},a.find(".imagify-row-progress").slideUp().attr("aria-hidden","true").find(".bar").removeAttr("style").find(".percent").text("0%"),a.find(".imagify-cell-checkbox-loader").each((function(){i(this).addClass("hidden").attr("aria-hidden","true")})),a.find(".imagify-cell-checkbox-box").each((function(){i(this).removeClass("hidden").attr("aria-hidden","false")})),i('.imagify-bulk-table [name="group[]"]:checked').length?i("#imagify-bulk-action").prop("disabled",!1).find(".dashicons").removeClass("rotate"):i("#imagify-bulk-action").find(".dashicons").removeClass("rotate")},addStatsImagifybeat:function(i,a){a[imagifyBulk.imagifybeatIDs.stats]=Object.keys(e.imagify.bulk.getFolderTypes())},processStatsImagifybeat:function(i,a){void 0!==a[imagifyBulk.imagifybeatIDs.stats]&&e.imagify.bulk.updateStats(a[imagifyBulk.imagifybeatIDs.stats])},addQueueImagifybeat:function(i,a){a[imagifyBulk.imagifybeatIDs.queue]=Object.values(e.imagify.bulk.getFolderTypes())},processQueueImagifybeat:function(a,t){var s,l,o;if(void 0!==t[imagifyBulk.imagifybeatIDs.queue]){if(!1!==(s=t[imagifyBulk.imagifybeatIDs.queue]).result&&(e.imagify.bulk.globalOriginalSize=s.result.original_size,e.imagify.bulk.globalOptimizedSize=s.result.optimized_size,e.imagify.bulk.globalOptimizedCount=s.result.total,e.imagify.bulk.globalGain=100*e.imagify.bulk.globalOptimizedSize/e.imagify.bulk.globalOriginalSize),!e.imagify.bulk.processIsStopped&&e.imagify.bulk.hasBlockingError(!0))return void i(e).trigger("queueEmpty.imagify");if(Object.prototype.hasOwnProperty.call(s,"groups_data")&&Object.entries(s.groups_data).forEach((function(a){(l=i("[data-context="+a[0]+"]")).children(".imagify-cell-count-optimized").first().html(a[1]["count-optimized"]),l.children(".imagify-cell-count-errors").first().html(a[1]["count-errors"]),l.children(".imagify-cell-optimized-size-size").first().html(a[1]["optimized-size"]),l.children(".imagify-cell-original-size-size").first().html(a[1]["original-size"])})),0===s.remaining)return void i(e).trigger("queueEmpty.imagify");(o=i(".imagify-row-progress")).find(".bar").css("width",s.percentage+"%").find(".percent").html(s.percentage+"%"),o.slideDown().attr("aria-hidden","false")}},addRequirementsImagifybeat:function(i,a){a[imagifyBulk.imagifybeatIDs.requirements]=1},processRequirementsImagifybeat:function(i,a){void 0!==a[imagifyBulk.imagifybeatIDs.requirements]&&(a=a[imagifyBulk.imagifybeatIDs.requirements],imagifyBulk.curlMissing=a.curl_missing,imagifyBulk.editorMissing=a.editor_missing,imagifyBulk.extHttpBlocked=a.external_http_blocked,imagifyBulk.apiDown=a.api_down,imagifyBulk.keyIsValid=a.key_is_valid,imagifyBulk.isOverQuota=a.is_over_quota)},drawOverviewChart:function(t){var s,l;(this.charts.overview.canvas||(this.charts.overview.canvas=a.getElementById("imagify-overview-chart"),this.charts.overview.canvas))&&(t=t&&i.isArray(t)?t:[],this.charts.overview.donut?t.length&&(0===t.reduce((function(i,a){return i+a}),0)&&(t[0]=1),this.charts.overview.donut.data.datasets[0].data=t,this.charts.overview.donut.update()):(this.charts.overview.data.datasets[0].data=[parseInt(this.charts.overview.canvas.getAttribute("data-unoptimized"),10),parseInt(this.charts.overview.canvas.getAttribute("data-optimized"),10),parseInt(this.charts.overview.canvas.getAttribute("data-errors"),10)],s=i.extend({},this.charts.overview.data),t.length&&(s.datasets[0].data=t),0===s.datasets[0].data.reduce((function(i,a){return i+a}),0)&&(s.datasets[0].data[0]=1),this.charts.overview.donut=new e.imagify.Chart(this.charts.overview.canvas,{type:"doughnut",data:s,options:{plugins:{legend:{display:!1}},events:[],animation:{easing:"easeOutBounce"},tooltips:{displayColors:!1,callbacks:{label:function(i,a){return a.datasets[i.datasetIndex].data[i.index]}}},responsive:!1,cutout:75}}),l='<ul class="imagify-doughnut-legend">',i.each(s.labels,(function(i,a){l+='<li><span style="background-color:'+s.datasets[0].backgroundColor[i]+'"></span>'+a+"</li>"})),l+="</ul>",a.getElementById("imagify-overview-chart-legend").innerHTML=l))},drawShareChart:function(){var t;if(this.charts.share.canvas||(this.charts.share.canvas=a.getElementById("imagify-ac-chart"),this.charts.share.canvas)){if(t=parseInt(i(this.charts.share.canvas).closest(".imagify-ac-chart").attr("data-percent"),10),this.charts.share.donut)return this.charts.share.donut.data.datasets[0].data[0]=t,this.charts.share.donut.data.datasets[0].data[1]=100-t,void this.charts.share.donut.update();this.charts.share.donut=new e.imagify.Chart(this.charts.share.canvas,{type:"doughnut",data:{datasets:[{data:[t,100-t],backgroundColor:["#40B1D0","#FFFFFF"],borderWidth:0}]},options:{plugins:{legend:{display:!1}},events:[],animation:{easing:"easeOutBounce"},tooltips:{enabled:!1},responsive:!1,cutoutPercentage:70}})}}},e.imagify.bulk.init(),imagifyBulk.isOverQuota&&e.imagify.bulk.displayError({title:imagifyBulk.labels.overQuotaTitle,html:i("#tmpl-imagify-overquota-alert").html(),type:"info",customClass:"imagify-swal-has-subtitle imagify-swal-error-header",showConfirmButton:!1})}(jQuery,document,window)}},i=>{var a;a="./bulk.js",i(i.s=a)}]);