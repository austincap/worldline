// const socket = io();
// var postsOnThisPage = []

// function onloadFunction(){
//   var isMobile = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|webOS|BlackBerry|IEMobile|Opera Mini)/i);
//   if(isMobile){ console.log("MOBILE"); }
//   else{ console.log("NOT MOBILE"); }
//   if(getQueryParam("post")!==""){
//     //
//     socket.emit("viewpost", getQueryParam("post"));
//   }else if(getQueryParam("user")!==""){
//     console.log('USER');
//     socket.emit('viewuser', getQueryParam("user"));
//   }else if(getQueryParam("tag")!==""){
//     //
//     socket.emit('requestPostsWithTag', getQueryParam("tag"));
//   }else if(getQueryParam("sort")=="like"){
//     if(getQueryParam("page")!==""){
//       socket.emit('requestSortedPosts', getQueryParam("sort"), getQueryParam("page"));
//     }else{
//       socket.emit('requestSortedPosts', getQueryParam("sort"), "0");
//     }
//   }else if(getQueryParam("sort")=="rand"){
//     if(getQueryParam("page")!==""){
//       socket.emit('requestRandPosts', getQueryParam("rand"), getQueryParam("page"));
//     }else{
//       socket.emit('requestRandPosts', getQueryParam("rand"), "0");
//     }
//   }else{
//     if(getQueryParam("page")!==""){
//       socket.emit('requestTop20Posts', getQueryParam("page"));
//     }else{
//       socket.emit('requestTop20Posts', '0');
//     }
//   }
//   console.log(document.URL);
//   window.setTimeout(function(){
//     if(sessionStorage.getItem('userID') !== null){
//       console.log(sessionStorage.getItem('userID'));
//       $('#signinstuff').css('display', 'none');
//       $('#userprofilestuff').css('display', 'inline-block');
//       $('.profallow').css('display', 'inline');
//       $('#accountButton').html("<span userid="+sessionStorage.getItem('userID')+">"+sessionStorage.getItem('username')+"</span>&nbsp;&nbsp;&nbsp;&nbsp;<span id='memecoin-button'>"+sessionStorage.getItem('memecoin')+"₿</span>");
//       $('#userID-newpost').val(sessionStorage.getItem('userID'));
//       $('#userID-reply').val(sessionStorage.getItem('userID'));
//       $('#posttype-newpost').val("text_post");
//       $('#posttype-reply').val("text_post");
//     }else{
//       console.log(sessionStorage.getItem('userID'));
//       $('#userID-newpost').val("ANON");
//       $('#userID-reply').val("ANON");
//       $('#posttype-newpost').val("text_post");
//       $('#posttype-reply').val("text_post");
//     }
//     document.querySelectorAll('img').forEach(function(img){
//     img.onerror = function(){this.style.display='none';};
//    });
//   }, 800);
// }



// function registerNewUser(){
//   var registrationData = {
//     username: $('#signInName').val(),
//     password: $('#passwordvalue').val()
//   };
//   socket.emit('registerNewUser', registrationData);
// }
// function loginUser(){
//   var logindata = {
//     username: $('#signInName').val(),
//     password: $('#passwordvalue').val() 
//   };
//   socket.emit('login', logindata);
// }
// function clickAccountButton(thisButton){
//   console.log($(thisButton).children()[0]);
//   console.log($($(thisButton).children()[0]).attr('userid'));
//   if($(thisButton).html()=="Account"){
//     $('#signinstuff').css('display', 'inline-block');
//     $(thisButton).html("Close");
//   }else if($(thisButton).html()=="Close"){
//     $('#signinstuff').css('display', 'none');
//     $(thisButton).html("Account");
//   }else if(String($($(thisButton).children()[0]).attr('userid'))==sessionStorage.getItem('userID')){
//     console.log("ETE");
//     viewProfilePage(sessionStorage.getItem('userID'));
//   }
// }
// function contextButtonFunction(currentContext){
//   console.log(currentContext);
//   switch(currentContext){
//     case 'About':
//       break;
//     case 'Home':
//     console.log('ewogfuiherwgok;luihraeghui;kgrehi;kjlgrhijol');
//       $('#gridview').css('display', 'none');
//       d3.select('svg').selectAll('*').remove();
//       $('#d3frame').css('display', 'none');
//       document.getElementById('contextButton').innerHTML = 'Alt';
//       sessionStorage.setItem('currentPage', 'home');
//       socket.emit('requestTop20Posts', 0);
//     case 'Alt':
//       $('#entryContainer').empty();
//       sessionStorage.setItem('currentPage', 'alt');
//       document.getElementById('contextButton').innerHTML = 'Grid';
//       socket.emit('retrieveDatabase');
//       break;
//     case 'Grid':
//       $('#entryContainer').empty();
//       d3.select('svg').selectAll('*').remove();
//       $('#d3frame').css('display', 'none');
//       sessionStorage.setItem('currentPage', 'grid');
//       document.getElementById('contextButton').innerHTML = 'Home';
//       socket.emit('retrieveDatabaseGrid');
//       break;
//   }
// }



// function getAllPostsWithThisTag(tagname){
//   sessionStorage.setItem('currentPage', 'tag');
//   $("#contextButton").html("Home");
//   $("#entryContainer").empty();
//   window.location.href='/?tag='+tagname;
//   //socket.emit("requestPostsWithTag", tagname);
// }
// function viewPost(postID){
//   sessionStorage.setItem('currentPage', 'post');
//   $("#contextButton").html("Home");
//   $("#entryContainer").empty();
//   window.location.href='/?post='+postID;
//   // socket.emit('viewpost', postID);
// }
// function viewProfilePage(userID){
//   sessionStorage.setItem('currentPage', 'user');
//   $("#contextButton").html("Home");
//   $("#entryContainer").empty();
//   window.location.href='/?user='+userID;
//   //socket.emit('viewuser', sessionStorage.getItem('userID'));
// }



// function showShieldCensorHarvestBox(zeroIsCensorOneIsShieldTwoIsHarvest, postElement){
//   var userID = (sessionStorage.getItem('userID') !== null) ? sessionStorage.getItem('userID') : "ANON";
//   console.log(userID);
//   returnTagBox();
//   returnNewPostBox();
//   returnNewStatsBox();
//   returnReplyBox();
//   returnShareBox();
//   if(zeroIsCensorOneIsShieldTwoIsHarvest==1){
//     $('.censormessage').css('display', 'none');
//     $('.shieldmessage').css('display', 'block');  
//     $('.harvestmessage').css('display', 'none');
//     socket.emit('check', {userID:userID, postID:postElement, taskToCheck:'shield', data:'EEEEEEEEEEEE'});
//   }else if(zeroIsCensorOneIsShieldTwoIsHarvest==0){
//     $('.censormessage').css('display', 'block');
//     $('.shieldmessage').css('display', 'none');
//     $('.harvestmessage').css('display', 'none');
//     socket.emit('check', {userID:userID, postID:postElement, taskToCheck:'censor', data:'EEEEEEEEEEEE'});
//   }else{
//     $('.censormessage').css('display', 'none');
//     $('.shieldmessage').css('display', 'none');
//     $('.harvestmessage').css('display', 'block');
//     socket.emit('check', {userID:userID, postID:postElement, taskToCheck:'harvest', data:'EEEEEEEEEEEE'});
//   }
//   var censorShieldHarvestContainer = $('#censorShieldHarvestContainer');
//   censorShieldHarvestContainer.detach();
//   console.log(postElement);
//   console.log($('#'+postElement));
//   censorShieldHarvestContainer.appendTo($('#'+String(postElement)));
//   censorShieldHarvestContainer.css('display', 'block');
// }
// function returnShieldCensorHarvestBox(){
//   var censorShieldHarvestContainer = $('#censorShieldHarvestContainer');
//   censorShieldHarvestContainer.detach();
//   censorShieldHarvestContainer.appendTo('#divStorage');
//   censorShieldHarvestContainer.css('display', 'none');
// }

// function showShareBox(postElement){
//   returnTagBox();
//   returnNewPostBox();
//   returnNewStatsBox();
//   returnShieldCensorHarvestBox();
//   returnReplyBox();
//   var shareButtonContainer = $('#shareButtonContainer');
//   shareButtonContainer.detach();
//   shareButtonContainer.appendTo('#'+String(postElement.attr('postID')));
//   shareButtonContainer.css('display', 'block');
// }
// function returnShareBox(){
//   var shareButtonContainer = $('#shareButtonContainer');
//   shareButtonContainer.detach();
//   shareButtonContainer.appendTo('#divStorage');
//   shareButtonContainer.css('display', 'none');
// }

// function showReplyBox(postElement){
//   console.log(postElement.attr('postID'));
//   var postID = String(postElement.attr('postID'));
//   console.log($(postElement).children('.post').children('.post-helper').children('.post-title').html());
//   returnTagBox();
//   returnNewPostBox();
//   returnNewStatsBox();
//   returnShieldCensorHarvestBox();
//   returnShareBox();
//   // var fileuploader = $('#fileuploader');
//   // fileuploader.detach();
//   // fileuploader.appendTo('#replyuploaderholder');
//   // fileuploader.css('display', 'block');
//   $('#replytoPostID').val(postID);
//   console.log(String($(postElement).children('.post').children('.post-helper').children('.post-title').html()));
//   $('#title-reply').val(String($(postElement).children('.post').children('.post-helper').children('.post-title').html()));
//   var replyContainer = $('#replyContainer');
//   replyContainer.detach();
//   replyContainer.appendTo('#'+postID);
//   replyContainer.css('display', 'block');
// }
// function returnReplyBox(){
//   // var fileuploader = $('#fileuploader');
//   // fileuploader.detach();
//   // fileuploader.appendTo('#divStorage');
//   // fileuploader.css('display', 'none');
//   var replyContainer = $('#replyContainer');
//   replyContainer.detach();
//   replyContainer.appendTo('#divStorage');
//   replyContainer.css('display', 'none');
// }

// function showTagBox(postID){
//   console.log(postID);
//   socket.emit('requestTagsForPost', postID);
//   returnNewPostBox();
//   returnReplyBox();
//   returnNewStatsBox();
//   returnShieldCensorHarvestBox();
//   returnShareBox();
//   var tagContainer = $('#tagContainer');
//   tagContainer.detach();
//   tagContainer.appendTo('#'+String(postID));
//   tagContainer.css('display', 'block');
// }
// function returnTagBox(){
//   var tagContainer = $('#tagContainer');
//   tagContainer.detach();
//   tagContainer.appendTo('#divStorage');
//   tagContainer.css('display', 'none');
// }

// function showNewPostBox(){
//   returnNewStatsBox();
//   returnTagBox();
//   returnReplyBox();
//   returnShieldCensorHarvestBox();
//   returnShareBox();
//   // var fileuploader = $('#fileuploader');
//   // fileuploader.detach();
//   // fileuploader.appendTo('#newpostuploaderholder');
//   // fileuploader.css('display', 'block');
//   var newPostContainer = $('#newPostContainer');
//   newPostContainer.detach();
//   newPostContainer.appendTo('body');
//   newPostContainer.css('display', 'block');
// }
// function returnNewPostBox(){
//   // var fileuploader = $('#fileuploader');
//   // fileuploader.detach();
//   // fileuploader.appendTo('#divStorage');
//   // fileuploader.css('display', 'none');
//   var newPostContainer = $('#newPostContainer');
//   newPostContainer.detach();
//   newPostContainer.appendTo('#divStorage');
//   newPostContainer.css('display', 'none');
// }

// function showVoteBox(postID, upIfTrue){
//   var postID = parseInt(postID);
//   var userID = parseInt(sessionStorage.getItem('userID'));
//   returnTagBox();
//   returnReplyBox();
//   returnNewPostBox();
//   returnShieldCensorHarvestBox();
//   returnShareBox();
//   var newStatsContainer = $('#newStatsContainer');
//   newStatsContainer.detach();
//   newStatsContainer.appendTo('#'+String(postID));
//   console.log(postsOnThisPage);
//   console.log('show vote box');
//   var postData = postsOnThisPage.find(obj => { return obj.postID === String(postID) });
//   console.log(postData);
//   newStatsContainer.css('display', 'block');
//   $('#upvotestat').html(postData.up);
//   $('#downvotestat').html(postData.down);
//   console.log(userID, postID, upIfTrue)
//   socket.emit('check', {taskToCheck:'vote', userID:userID, postID:postID, data:upIfTrue});
// }
// function returnNewStatsBox(){
//   var newStatsContainer = $('#newStatsContainer');
//   newStatsContainer.detach();
//   newStatsContainer.appendTo('#divStorage');
//   newStatsContainer.css('display', 'none');
// }

// function confirmCensor(postID){
//   if(sessionStorage.getItem('memecoin') > 50){
//     var dataPacket = {
//       userID: sessionStorage.getItem('userID'),
//       postID: postID
//     };
//     socket.emit('censorAttempt', dataPacket);
//     //$('#censorShieldHarvestContainer').css('display', 'none');
//   }
// }
// function confirmHarvest(postElement){
//   console.log(postElement);
//   socket.emit('harvestPost', postElement, sessionStorage.getItem("userID"));
// }



// function submitNewPost(){
//   console.log("submit");
//   $("#new-text-post-data").empty();
//   $("#tagForNewPost").empty();
//   $("#title-of-new-post").empty();
//   $("#sampleFile").empty();
//   document.querySelector('#myimg').src = "";
//   returnNewPostBox();
// }
// function submitReply(postElement){
//   console.log("submit reply");
//   $('#uploadContent-reply').empty();
//   //$("#entryContainer").empty();
//   $('#tagForNewReply').empty();
//   $("#sampleFile-reply").empty();
//   document.querySelector('#myimg-reply').src = "";
//   returnReplyBox()
// }
// function previewFile(){
//   var preview = document.querySelector('#myimg');
//   var previewReply = document.querySelector('#myimg-reply');
//   //var file    = document.querySelector('input[type=file]').files[0];
//   var file    = document.querySelector('#sampleFile').files[0];
//   var fileReply = document.querySelector('#sampleFile-reply').files[0];
//   var reader  = new FileReader();
//   reader.onloadend = function () {
//     console.log("onlined");
//     preview.src = reader.result;
//     previewReply.src = reader.result;
//   }
//   if (file) {
//     reader.readAsDataURL(file);
//   } else {
//     preview.src = "";
//   }
//   if (fileReply) {
//     reader.readAsDataURL(fileReply);
//   } else {
//     preview.src = "";
//   }  
// }



// function upvoteThisTagForThisPost(tagname, postID){
//   console.log(tagname);
//   console.log(postID);
//   var stuffToCheck = {
//     userID: sessionStorage.getItem("userID"),
//     postID: postID,
//     data: tagname,
//     task: "upvotetag"
//   };
//   socket.emit("check", stuffToCheck);
// }
// function submitTag(tagname, postID){
//   console.log(tagname);
//   console.log(postID);
//   var tagPostOrUser = {
//     tagname:tagname,
//     postID:postID,
//     userID:sessionStorage.getItem("userID"),
//     postIfTrue:true
//   };
//   socket.emit('tagPostOrUser', tagPostOrUser);
// }
// function favoritePost(postID){
//   //0 favorites post, 1 favorites tag, 2 favorites user
//   console.log({faveType:0, postidORtagnameORuserid:postID, userid:sessionStorage.getItem('userID')});
//   socket.emit('favorite', {faveType:0, postidORtagnameORuserid:postID, userid:sessionStorage.getItem('userID')});

//   return;
// }
// function showAdvancedButtons(postID){
// }


// //DATA PROCESSING FUNCTIONS
// function visitpage(pagenum){
//   $("#contextButton").html("Home");
//   $("#entryContainer").empty();
//   window.location.href='/?page='+String(pagenum);
// }
// function controversialSort(){
//   console.log(postsOnThisPage);
//   postsOnThisPage.sort((a,b) => (parseInt(a.up)+parseInt(a.down)+parseInt(a.replycount) < parseInt(b.up)+parseInt(b.down)+parseInt(b.replycount)) ? 1 : -1);
//   console.log(postsOnThisPage);
// }
// function likedSort(){
//   window.location.href="/?sort=like";
// }
// function loathedSort(){
//   window.location.href="/?sort=hate";
// }
// function recentSort(){
//   console.log(postsOnThisPage);
//   var sortedPosts=[];//= postsOnThisPage.sort((a,b) => (parseInt(a.postID) < parseInt(b.postID)) ? 1 : -1);

//   var my_promise = new Promise(
//     function(resolve, reject){
//       sortedPosts = postsOnThisPage.sort((a,b) => (parseInt(a.postID) < parseInt(b.postID)) ? 1 : -1);
//       if (true) {
//         resolve(sortedPosts);
//       } else {
//         reject(sortedPosts);
//       }
//   });

//   my_promise
//    .then( function(data){console.log(sortedPosts);$("#entryContainer").empty();})
//    .catch( function(data){ console.log("promise rejected");});
// }
// function viewedSort(){
//   window.location.href="/?sort=clks";
// }
// function randomSort(){
//   window.location.href="/?sort=rand";
// }
// function timeConverter(UNIX_timestamp){
//   var a = new Date(UNIX_timestamp * 1000);
//   var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
//   var year = a.getFullYear();
//   var month = months[a.getMonth()];
//   var date = a.getDate();
//   var hour = a.getHours();
//   var min = a.getMinutes();
//   var sec = a.getSeconds();
//   var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
//   return time;
// }
// function getRandomInt(min, max){
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
// }
// function is_url(str){
//   var regexp =  /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
//   if(regexp.test(str)){return true;}
//   else{return false;}
// }
// function getQueryParam(param){
//   var rx = new RegExp("[?&]" + param + "=([^&]+).*$");
//   var returnVal = window.location.search.match(rx);
//   return returnVal === null ? "" : decodeURIComponent(returnVal[1].replace(/\+/g, " "));
// }
// // function getQueryParam(name){
// //     name = name.replace(/[\[\]]/g, '\\$&');
// //     var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'), results = regex.exec(window.location.href);
// //     if (!results) return null;
// //     if (!results[2]) return '';
// //     return decodeURIComponent(results[2].replace(/\+/g, ' '));
// // }
// function enlargePic(theImage){
//   $(theImage).css("height", document.querySelector(theImage[0]).naturalHeight);
//   console.log(theImage);
// }
// function generateUUID(){
//   var d = new Date().getTime();
//   var d2 = (performance && performance.now && (performance.now()*1000)) || 0;//Time in microseconds since page-load or 0 if unsupported
//   var uuid = 'xxxxxx'.replace(/[xy]/g, function(c) {
//     var r = Math.random() * 16;
//     if(d > 0){
//       var r = (d + r)%16 | 0;
//       d = Math.floor(d/16);
//     } else {
//       var r = (d2 + r)%16 | 0;
//       d2 = Math.floor(d2/16);
//     }
//     return (c=='x' ? r : (r&0x7|0x8));
//   });
//   return uuid;
// }
// function displayStatus(message){
//   document.getElementById("statusbar").outerHTML = '<marquee behavior="slide" direction="left" scrollamount="20" id="statusbar">'+message+'</marquee>';
//   //document.getElementById('statusbar').innerHTML = message;
// }
// function gohome(){
//   window.location.assign("/");
// }
// //subtitle function
// $(function(){
//   $.getJSON('subtitles.json',function(data){
//     $('#statusbar').html(data[getRandomInt(0,Object.keys(data).length)]['text']);
//     $('#sub-title').append(data[getRandomInt(0,Object.keys(data).length)]['text']);
//   });
// });
// //change board by typing it in
// $(document).ready(function(){
//   $("#tag-filter").keyup(function(){
//     console.log($(this).val());
//     $("#entryContainer").empty();
//     socket.emit('requestPostsWithTag', $(this).val());
//   });
// });
// //
// function dropDownFunction(){
//   var x = document.getElementById("Demo");
//   if (x.className.indexOf("w3-show") == -1) {
//     x.className += " w3-show";
//   } else { 
//     x.className = x.className.replace(" w3-show", "");
//   }
// }

// function populatePage(posts, tags){
//   console.log(posts);
//   // $("#entryContainer").empty();
//   // postsOnThisPage = posts;
//   posts.forEach(function(post){
//     var date = new Date(post.postID * 1000).toDateString();
//     var mustacheData = {
//       postID:String(post.postID),
//       profit:String(post.upvotes-post.downvotes),
//       up:String(post.upvotes),
//       down:String(post.downvotes),
//       file:String(post.file),
//       date:date,
//       replycount:String(post.replycount),
//       clicks:String(post.clicks),
//       title:String(post.title),
//       content:String(post.content)
//     };
//     postsOnThisPage.push(mustacheData);
//     //console.log(date);
//     var processedPostTemplate = `
//     <div class='post-container' postID='{{postID}}' data-profit='{{profit}}' clicks='{{clicks}}'>
//       <div class='post'>
//         <a class='post-helper' href='/?post={{postID}}' onclick='viewPost({{postID}});'>
//           <div class='post-visual'><img class='activeimage' src='uploaded/{{file}}'/></div>
//           <div class='post-title-helper'><span class='post-title'>{{title}}</span><br/><div class="post-content"><div class="post-content-span">{{content}}</div></div></div>
//         </a>
//         <div class='post-header'><span class='upvotes-tooltip'>
//           <span class='tooltiptext'>the number of upvotes minus the number of downvotes this post received</span>
//           <span class='upvotecount'>{{profit}}</span>&nbsp;profit</span>&nbsp;&nbsp;|
//           &nbsp;&nbsp;<span class='views-tooltip'><span class='tooltiptext'>the number of times someone actually clicked on this post</span><span class='viewcount'>{{clicks}}</span>&nbsp;clicks</span>&nbsp;&nbsp;|
//           &nbsp;&nbsp;<span class='post-date'>{{date}}</span>&nbsp;&nbsp;|
//           &nbsp;&nbsp;<span><span class='post-numreplies'>{{replycount}}</span>&nbsp;replies</span>&nbsp;&nbsp;|
//           &nbsp;&nbsp;<!--<span>reply to&nbsp;<span class='replyToId'></span>--></span>
//         </div>
//       </div>
//       <div class='post-buttons'>
//         <button class='raise anonallow' onclick='showReplyBox($(this).parent().parent());'><span class='tooltiptext'>quick reply</span>&#x1f5e8;</button>  
//         <button class="raise profallow" onclick="showVoteBox({{postID}}, true);"><span class="tooltiptext">upvote</span><span style="filter:sepia(100%);">🔺</span></button>
//         <button class="raise profallow" onclick="showVoteBox({{postID}}, false);"><span class="tooltiptext">downvote</span><span style="filter:sepia(100%);">🔻</span></button>
//         <button class='raise profallow' onclick='showShieldCensorHarvestBox(2, {{postID}});'><span class='tooltiptext'>convert this posts profit into memecoin, then delete post</span>♻</button>
//         <button class='raise profallow' onclick='showShieldCensorHarvestBox(1, {{postID}});'><span class='tooltiptext'>add a free speech shield to this post</span>🛡</button>
//         <button class='raise profallow' onclick='showShieldCensorHarvestBox(0, {{postID}});'><span class='tooltiptext'>attempt to censor this post</span>&#x1f4a3;</button>
//         <button class='raise anonallow' onclick='showShareBox($(this).parent().parent());'><span class='tooltiptext'>share this post</span><svg xmlns='http://www.w3.org/2000/svg' height='16' viewBox='0 0 24 24' width='24'><path d='M0 0h24v24H0z' fill='none'/><path fill='#dfe09d' d='M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z'/></svg></button>
//         <button class='raise profallow' onclick='favoritePost({{postID}});'><span class='tooltiptext'>favorite this post</span>❤</button>
//         <button class='raise anonallow' onclick='showTagBox({{postID}});'><span class='tooltiptext'>tag this post</span>🏷</button>
//         <div class='statusdiv' id='{{postID}}' up='{{up}}' down='{{down}}'></div>
//       </div>
//     </div>`;
//     var html = Mustache.render(processedPostTemplate, mustacheData);
//     $('#entryContainer').append(html);
//   });
//   console.log(tags);
//   tags.forEach(function(tag){
//     var processedTag = '<button class="fill popular-tag-button"><span class="tag-name">'+tag[0]+'</span>&nbsp;(<span class="number-of-posts-with-tag">'+tag[1]+'</span>)</button>&nbsp;';
//     $('#popular-tag-span').append(processedTag); 
//   });
//   $(".popular-tag-button").on("click", function(){
//     console.log($(this).children(".tag-name").html());
//     $("#entryContainer").empty();
//     socket.emit('requestPostsWithTag', $(this).children(".tag-name").html());
//   });
// }

// function populateGrid(postsAndAllTagData){
//   console.log(postsAndAllTagData);
//   //$("#entryContainer").empty();
//   postsOnThisPage = postsAndAllTagData;
//   postsAndAllTagData.forEach(function(post){
//     console.log(post);
//     var date = new Date(post.postID * 1000).toDateString();
//     var mustacheData = {
//       postID:String(post.postID),
//       profit:String(post.upvotes-post.downvotes),
//       up:String(post.upvotes),
//       down:String(post.downvotes),
//       file:'uploaded/'+String(post.file),
//       date:date,
//       replycount:String(post.replycount),
//       clicks:String(Math.ceil(post.clicks/10)),
//       title:String(post.title),
//       content:String(post.content),
//       tags:post.tagArray
//     };
//     postsOnThisPage.push(mustacheData);
//     console.log("EKLGJE:KLIGJHLIKE:GHJKLGEL:HKJEGGEHJKL");
//     console.log(mustacheData.tags);
//     var processedPostTemplate= `<div style='border-width:{{clicks}}px;' class='gridcell' postID='{{postID}}'>
//                                 <div class='gridtitle'>{{title}}</div>
//                                 <a id='{{postID}}' data-toggle='tooltip' title='{{title}}{{#tags}}&nbsp;{{.}}&nbsp;{{/tags}}' href='/?post={{postID}}'>
//                                 <img src='{{file}}'/>
//                                 </a>
//                                 <div class='gridtitle'>{{date}}</div>
//                                 </div>`;
//     var html = Mustache.render(processedPostTemplate, mustacheData);
//     $('#gridview').append(html);
//   });
//   // tags.forEach(function(tag){
//   //   var processedTag = '<button class="fill popular-tag-button"><span class="tag-name">'+tag[0]+'</span>&nbsp;(<span class="number-of-posts-with-tag">'+tag[1]+'</span>)</button>&nbsp;';
//   //   $('#popular-tag-span').append(processedTag); 
//   // });
//   $(".popular-tag-button").on("click", function(){
//     console.log($(this).children(".tag-name").html());
//     $("#entryContainer").empty();
//     socket.emit('requestPostsWithTag', $(this).children(".tag-name").html());
//   });
// }

// socket.on('userChecked', function(resultOfCheck){
//   console.log(resultOfCheck);
//   switch(resultOfCheck.task){
//     case 'additionalvoteup':
//       $('#cost-of-next-vote').html(resultOfCheck.cost);
//       socket.emit('check', {taskToCheck:'makeadditionalvoteup', userID:resultOfCheck.userID, postID:resultOfCheck.postID, data:resultOfCheck.cost});
//       break;
//     case 'additionalvotedown':
//       $('#cost-of-next-vote').html(resultOfCheck.cost);
//       socket.emit('check', {taskToCheck:'makeadditionalvotedown', userID:resultOfCheck.userID, postID:resultOfCheck.postID, data:resultOfCheck.cost});
//       break;
//     case 'madeadditionalvoteup':
//       $('#cost-of-next-vote').html(resultOfCheck.cost);
//       $('#upvotestat').html(String(parseInt($('#upvotestat').html())+1));
//       socket.emit('makevote', {userID:resultOfCheck.userID, postID:resultOfCheck.postID, cost:resultOfCheck.cost, voteType:'additionalvoteup'});
//       break;
//     case 'madeadditionalvotedown':
//       $('#cost-of-next-vote').html(resultOfCheck.cost);
//       $('#downvotestat').html(String(parseInt($('#downvotestat').html())-1));
//       socket.emit('makevote', {userID:resultOfCheck.userID, postID:resultOfCheck.postID, cost:resultOfCheck.cost, voteType:'additionalvotedown'});
//       break;
//     case 'firstvoteup':
//       $('#cost-of-next-vote').html("1");
//       $('#upvotestat').html("1");
//       socket.emit('makevote', {userID:resultOfCheck.userID, postID:resultOfCheck.postID, cost:resultOfCheck.cost, voteType:'firstvoteup'});
//       break;
//     case 'firstvotedown':
//       $('#cost-of-next-vote').html("1");
//       socket.emit('makevote', {userID:resultOfCheck.userID, postID:resultOfCheck.postID, cost:resultOfCheck.cost, voteType:'firstvotedown'});
//       break;
//     case 'failedAdditionalVote':
//       console.log('you need more memecoins to vote on this post, but posting on a different one is free!');
//       break;
//     case 'ableToHarvestPost':
//       //socket.emit('harvestPost', {userID:resultOfCheck.userID, postID:resultOfCheck.postID});
//       $('#harvestmessage-span').html("you'll get "+resultOfCheck.cost+" memecoin from harvesting this post");
//       break;
//     case 'failedHarvest':
//       $('#harvestmessage').html('you cant harvest posts you dont own!');
//       console.log('you cant harvest posts you dont own!');
//       break;
//     case 'ableToCensorPost':
//       $('#confirmCensor').prop('disabled', false);
//       $('#censormessage-span').html("there are have been "+resultOfCheck.cost+" attempts to censor this post so far, and if there's at least 1 shield you'll waste your memecoin too");
//       //socket.emit('censorPost', {userID:resultOfCheck.userID, postID:resultOfCheck.postID});
//       break;
//     case 'failedCensoringCauseTooPoor':
//       $('#confirmCensor').prop('disabled', true);
//       $('#censormessage-span').html("you need more memecoins to censor this post. consider just getting over it?");
//       console.log('you need more memecoin to censor this post. consider just getting over it?');
//       break;
//     case 'successfulCensoring':
//       $('#censormessage-span').html("success! you will be the last person to ever see this post! reload the page to wipe it from the net completely");
//       $('#confirmCensor').prop('disabled', true);
//       socket.emit('censorSuccess', {userID:resultOfCheck.userID, postID:resultOfCheck.postID, cost:resultOfCheck.cost});
//       break;
//     case 'failedCensoringCauseShield':
//       $('#censormessage-span').html("your attempt to censor this post has failed, but there are merely "+resultOfCheck.cost+" free speech shields remaining");
//       break;
//     case 'failedCensoringCauseOther':
//       console.log('no idea');
//       break;
//     case 'ableToApplyShield':
//       $('#confirmShield').prop('disabled', false);
//       //socket.emit('shieldPost', {userID:resultOfCheck.userID, postID:resultOfCheck.postID});
//       break;
//     case 'failedShielding':
//       $('#confirmShield').prop('disabled', true);
//       $('#shieldmessage-span').html("you need more memecoins to shield this post. for more memecoins, try harvesting one of your successful posts!");
//       console.log('you need more memecoins to shield this post. for more memecoins, try harvesting one of your successful posts!');
//       break;
//     case 'ableToUpvoteTag':
//       socket.emit('upvoteTag', {userID:resultOfCheck.userID, postID:resultOfCheck.postID, tagname:resultOfCheck.cost});
//       console.log("tag upvoted!");
//       break;
//     case 'failedTagUpvote':
//       if (resultOfCheck.cost == -1){
//         console.log('you need at least 1 memecoin to strengthen the link between a particular post and a tag, but you can make a new one for free');
//       }else{
//         console.log("unknown error");
//       }
//       break;
//     case 'favoritedPost':
//       console.log('should be fave now');
//       break;
//     default:
//       break;
//   }
// });

// socket.on('tagsForPostData', function(tagsForPostData){
//   console.log('tagsForPostData');
//   $('#existingTagsForThisPost').empty();
//   $('#popular-tag-span').empty();
//   tagsForPostData.forEach(function(tag){
//       var mustacheData = {
//         otherposts: tag[0],
//         tagname: tag[1],
//         tagupvotes: tag[2]
//       };
//       var tagtemplate = `<button class="postTag" tagname="{{tagname}}">(<a title="# of posts with this tag. click to view all posts with this tag" class="other-posts-with-this-tag" onclick="getAllPostsWithThisTag({{tagname}});">{{otherposts}}</a>)&nbsp;-&nbsp;<span class="tagName">{{tagname}}</span>&nbsp;-&nbsp;(<a title="# of upvotes this tag received for this post. click to spend a memecoin to upvote" class="upvotes-for-tag-for-this-post" onclick="upvoteThisTagForThisPost({{tagname}}, $(this).parent().parent().parent().parent().parent().parent().attr('postID'));">{{tagupvotes}}</a>)</button>&nbsp;&nbsp;`;
//         var html = Mustache.render(tagtemplate, mustacheData);
//       $('#existingTagsForThisPost').append(html);
//       var processedTag = '<button class="fill popular-tag-button"><span class="tag-name">'+tag[1]+'</span>&nbsp;(<span class="number-of-posts-with-tag">'+tag[0]+'</span>)</button>&nbsp;';
//       $('#popular-tag-span').append(processedTag);
//   });
//   $(".popular-tag-button").on("click", function(){
//     console.log($(this).children(".tag-name").html());
//     $("#entryContainer").empty();
//     socket.emit('requestPostsWithTag', $(this).children(".tag-name").html());
//   });
// });

// socket.on('receiveTagData', function(topPostsForTag){
//   postsOnThisPage = [];
//   console.log(topPostsForTag);
//   populatePage(topPostsForTag[0], []);
//   $('#pageID-tagname').html("&nbsp;:&nbsp;"+topPostsForTag[1]);
//   window.history.replaceState(null, null, "/?tag="+topPostsForTag[1]);
// });

// socket.on('receiveTop20Data', function(topPostsAndTags){
//   postsOnThisPage = [];
//   populatePage(topPostsAndTags[0], topPostsAndTags[1]);
// });

// socket.on('receiveSinglePostData', function(dataFromServer){
//   postsOnThisPage = [];
//   console.log("receiveSinglePostData");
//   console.log(dataFromServer);
//   var viewedPost = dataFromServer[0];
//   var repliesToPost = dataFromServer[1];
//   var tags = dataFromServer[2];
//   var viewedPostData = new Date(viewedPost.postID * 1000).toDateString();
//   var viewedPostMustacheData = {
//     postID:viewedPost.postID,
//     up:String(viewedPost.upvotes),
//     down:String(viewedPost.downvotes),
//     clicks:String(viewedPost.clicks),
//     title:String(viewedPost.title),
//     memecoinsspent:String(viewedPost.memecoinsspent),
//     date:viewedPostData,
//     content:String(viewedPost.content),
//     file:String(viewedPost.file)
//   };
//   var processedViewedPostTemplate = `
//         <div>
//           <div class="advanced-post-container" postID="{{postID}}" data-profit="{{profit}}" clicks="{{clicks}}">
//             <div id="advanced-post-stats">
//               <span id="advanced-post-upvotes">{{up}}</span>&nbsp;upvotes<br/>
//               <span id="advanced-post-downvotes">{{down}}</span>&nbsp;downvotes<br/>
//               <span id="advanced-post-clicks">{{clicks}}</span>&nbsp;clicks<br/>
//               <span id="advanced-post-mcspent">{{memecoinsspent}}</span>&nbsp;memecoins spent on post<br/>
//               <span id="advanced-post-date">{{date}}</span>&nbsp;post was created<br/>
//               <span id="advanced-post-id">{{postID}}</span>&nbsp;is post's id#
//               <hr/>
//               favorited by:<br/>
//               <div id="advanced-post-favoriters"></div>
//             </div>
//             <div id="advanced-post">
//               <img class="activeimage advimg" src="uploaded/{{file}}"/>
//               <div id="advanced-post-title">{{title}}</div>
//             </div>
//             <div id="advanced-post-tags">
//             </div>
//           </div>
//           <div id="advanced-post-content">{{content}}</div>
//           <div class="post-buttons">
//             <button class="raise anonallow" onclick="showReplyBox($(this).parent().parent());"><span class="tooltiptext">quick reply</span>&#x1f5e8;</button>
//             <button class="raise profallow" onclick="showVoteBox({{postID}}, true);"><span class="tooltiptext">upvote</span><span style="filter:sepia(100%);">🔺</span></button>
//             <button class="raise profallow" onclick="showVoteBox({{postID}}, false);"><span class="tooltiptext">downvote</span><span style="filter:sepia(100%);">🔻</span></button>
//             <span class="advancedButtons">
//               <button class="raise profallow" onclick="showShieldCensorHarvestBox(2, {{postID}});"><span class="tooltiptext">convert this post's profit into memecoin, then delete post</span>♻</button>
//               <button class="raise profallow" onclick="showShieldCensorHarvestBox(1, {{postID}});"><span class="tooltiptext">add a free speech shield to this post</span>🛡</button>
//               <button class="raise profallow" onclick="showShieldCensorHarvestBox(0, {{postID}});"><span class="tooltiptext">attempt to censor this post</span>&#x1f4a3;</button>
//               <button class="raise anonallow" onclick="showShareBox($(this).parent().parent());"><span class="tooltiptext">share this post</span><svg xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path fill="#dfe09d" d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"/></svg></button>
//               <button class="raise profallow" onclick="favoritePost({{postID}});"><span class="tooltiptext">favorite this post</span>❤</button>
//             </span>
//             <button class="raise anonallow" onclick="showTagBox({{postID}});"><span class="tooltiptext">tag this post</span>🏷</button>
//             <div class='statusdiv' id='{{postID}}' up='{{up}}' down='{{down}}'></div>
//           </div>
//         </div>`;
//   var html = Mustache.render(processedViewedPostTemplate, viewedPostMustacheData);
//   //$('#result').html( html );
//   $('#entryContainer').append(html);
//   if(is_url(viewedPost.content)){
//     console.log("EISISISI");
//     $('#advanced-post-content').empty();
//     var urlIframe = "<iframe src='https://web.archive.org/web/"+viewedPost.content+"' height='300px' width='500px' sandbox='allow-same-origin'></iframe>";
//     $('#advanced-post-content').append(urlIframe);
//   }
//   viewedPost.favoritedBy.forEach(function(userWhoFaved){
//     $('#advanced-post-favoriters').append('<button class="raise" onclick="viewProfilePage('+String(userWhoFaved[0])+')">'+userWhoFaved[1]+'</button>');
//   });
//   console.log("TESTS");
//   postsOnThisPage.push(viewedPostMustacheData);
//   console.log(postsOnThisPage);
//   populatePage(repliesToPost, []);
//   console.log(postsOnThisPage);
//   $('#popular-tag-span').empty();
//   tags.forEach(function(tag){
//     var processedTag = '<button class="fill popular-tag-button"><span class="tag-name">'+tag[0]+'</span>&nbsp;(<span class="number-of-posts-with-tag">'+tag[1]+'</span>)</button>&nbsp;';
//     $('#popular-tag-span').append(processedTag); 
//   });
//   $(".popular-tag-button").on("click", function(){
//     console.log($(this).children(".tag-name").html());
//     $("#entryContainer").empty();
//     socket.emit('requestPostsWithTag', $(this).children(".tag-name").html());
//   });
// });

// socket.on('loggedIn', function(loginData){
//   sessionStorage.setItem('userID', loginData.userID);
//   sessionStorage.setItem('username', loginData.name);
//   sessionStorage.setItem('memecoin', loginData.memecoin);
//   $('#signinstuff').css('display', 'none');
//   $('.profallow').css('display','inline');
//   $('#accountButton').html("<span userid="+sessionStorage.getItem('userID')+"</span>"+sessionStorage.getItem('username')+"&nbsp;&nbsp;&nbsp;&nbsp;<span id='memecoin-button'>"+sessionStorage.getItem('memecoin')+"₿</span>");
//   $('#accountButton').attr('userid', sessionStorage.getItem('userID'));
// });

// socket.on('userDataFound', function(userData){
//   postsOnThisPage = [];
//   var user = userData[0];
//   var tags = userData[1];
//   var posts = userData[2];
//   var faves = userData[3];
//   console.log(posts);
//   //$("#entryContainer").empty();
//   var user_date = "1/9/89";//new Date(user.userID * 1000).toDateString();
//   var user_mustacheData = {
//     userid:String(user.userID),
//     username:String(user.name),
//     memecoin:String(user.memecoin),
//     file:String(user.file),
//     date:user_date,
//     upvotes:4224,
//     downvotes:3223,
//     postcount:String(posts.length),
//     bio:String(user.content)
//   };
//   var processedUserTemplate = `
//         <div userID="{{userid}}">
//           <div class="advanced-post-container">
//             <div id="advanced-post-stats">
//               <span id="advanced-post-upvotes">{{upvotes}}</span>&nbsp;upvotes dealt<br/>
//               <span id="advanced-post-downvotes">{{downvotes}}</span>&nbsp;downvotes dealt<br/>
//               <span id="advanced-post-mcspent">{{memecoin}}</span>&nbsp;memecoin available<br/>
//               <span id="advanced-post-date">{{date}}</span>&nbsp;account was created<br/>
//               <hr/>
//               favorited:<br/>
//               <div id="advanced-post-favoriters"></div>
//             </div>
//             <div id="advanced-post">
//               <img class="activeimage advimg" src="uploaded/{{file}}"/>
//               <div id="advanced-post-title">{{title}}</div>
//             </div>
//             <div id="advanced-post-tags">
//             </div>
//           </div>
//           <div id="advanced-post-content">{{bio}}</div>
//         </div>`;
//   var html = Mustache.render(processedUserTemplate, user_mustacheData);
//   $('#entryContainer').append(html);
//   $('#pageID-tagname').html("&nbsp;:&nbsp;"+user.name);
//   window.history.replaceState(null, null, "/?user="+user.name);
//   postsOnThisPage = [];
//   populatePage(posts, tags);
//   faves.forEach(function(fave){
//     console.log(fave);
//     var date = new Date(fave.postID * 1000).toDateString();
//     var fave_mustacheData = {
//       postID:String(fave.postID),
//       profit:String(fave.upvotes-fave.downvotes),
//       title:String(fave.title)
//     };
//     var processedFaveTemplate = `<div class='fave-container'><a href='/?post={{postID}}'>{{profit}} - {{title}}</a></div>`;
//     var html = Mustache.render(processedFaveTemplate, fave_mustacheData);
//     $('#advanced-post-favoriters').append(html);
//   });
//   //console.log(tags);
//   tags.forEach(function(tag){
//     var processedTag = '<button class="fill popular-tag-button"><span class="tag-name">'+tag[0]+'</span>&nbsp;(<span class="number-of-posts-with-tag">'+tag[1]+'</span>)</button>&nbsp;';
//     $('#popular-tag-span').append(processedTag); 
//   });
//   $(".popular-tag-button").on("click", function(){
//     console.log($(this).children(".tag-name").html());
//     $("#entryContainer").empty();
//     socket.emit('requestPostsWithTag', $(this).children(".tag-name").html());
//   });
// });

// socket.on('sendDatabase', function(results){
//   postsOnThisPage = [];
//   $('#entryContainer').empty();
//   $('#adjacentBlocks').empty();
//   console.log(results);
//   handleRetrievedDatabase(results);
// });

// socket.on('receiveTop20DataGrid', function(results){
//   postsOnThisPage = [];
//   $('#entryContainer').empty();
//   $('#adjacentBlocks').empty();
//   $('#gridview').empty();
//   populateGrid(results[0]);
//   console.log(results);
// });


// var dbresults = {"nodes":[], "links":[]};
// var mouseCoordinates = [0, 0];
// var selectedNode = null;
// var clickOnAddNewTag = false;
// var clickOnAddNewPost = false;
// var existingTagArray = [];

// linkifyOptions = {
//   attributes: null,
//   className: 'linkified',
//   defaultProtocol: 'http',
//   events: null,
//   format: function (value, type) {
//     return value;
//   },
//   formatHref: function (href, type) {
//     return href;
//   },
//   ignoreTags: [],
//   nl2br: false,
//   tagName: 'a',
//   target: {
//     url: '_blank'
//   },
//   validate: true
// };

// function clickNewPostButton(){
//   closeAllFrames();
//   if(clickOnAddNewPost==false){
//     document.getElementById('submitnew').style.display="block";
//     document.getElementById('uploadNewPostButton').innerHTML="-";
//     clickOnAddNewPost=true;
//   }else{
//     document.getElementById('uploadNewPostButton').innerHTML="+";
//     clickOnAddNewPost=false;
//   }
// }

// function displayStatus(message){
//   //
//   document.getElementById("statusbar").outerHTML = '<marquee behavior="slide" direction="left" scrollamount="20" id="statusbar">'+message+'</marquee>';
// }

// function sendNewPostToServer(){
//   var last3chars = document.getElementById('userInputtedContent').value.slice(-3);
//   var typeOfUpload = "text";
//   if(last3chars=="jpg"||last3chars=="png"||last3chars=="gif"){
//     typeOfUpload = "pic";
//   }
//   if(document.getElementById('tag2').value==""){
//     socket.emit('sendNewPostToServer1', {
//       nodename: document.getElementById('nodename').value,
//       nodecontent: document.getElementById('userInputtedContent').value,
//       tag1: document.getElementById('tag1').value.toLowerCase(),
//       type: typeOfUpload
//     });
//   }else{
//     socket.emit('sendNewPostToServer2', {
//       nodename: document.getElementById('nodename').value,
//       nodecontent: document.getElementById('userInputtedContent').value,
//       tag1: document.getElementById('tag1').value.toLowerCase(),
//       tag2: document.getElementById('tag2').value.toLowerCase(),
//       type: typeOfUpload
//     });     
//   }
//   closeAllFrames();     
//   document.getElementById('uploadNewPostButton').innerHTML="+";
//   clickOnAddNewPost=false;
//   displayStatus("Post uploaded successfully");
//   $("svg").empty();
//   document.getElementById('nodename').value="";
//   document.getElementById('userInputtedContent').value="";
//   document.getElementById('tag1').value="";
//   document.getElementById('tag2').value="";
//   socket.emit('retrieveDatabase');
// }

// function upvoteTag(){
//   socket.emit('upvoteTag', {
//     nodename: document.getElementById('postNameInModal').innerHTML,
//     nodecontent: document.getElementById('contentInModal').innerHTML,
//     tag1: document.getElementById('tagNameInModal').innerHTML
//   });
//   document.getElementById('upvoteTagModal').style.display = "none";
//   displayStatus("Tag successfully upvoted");
// }

// function upvotePost(){
//   socket.emit('upvotePost', {
//     nodename: document.getElementById('postNameInModalPostOnly').innerHTML,
//     nodecontent: document.getElementById('contentInModal').innerHTML
//   });
//   document.getElementById('previewframe').style.display = "none";
//   displayStatus("Post successfully upvoted");
// }

// function tagPost(){
//   var newTagInput = document.getElementById('newTagInput');
//   if(clickOnAddNewTag==true){
//     if(existingTagArray.indexOf(newTagInput.value.toLowerCase()) === -1){
//       socket.emit('tagPost', {
//         nodename: document.getElementById('postNameInModalPostOnly').innerHTML,
//         nodecontent: document.getElementById('contentInModal').innerHTML,
//         newtag: newTagInput.value.toLowerCase() 
//       });
//       displayStatus("Tag added to post");
//     }else{
//       socket.emit('upvoteTag', {
//         nodename: document.getElementById('postNameInModalPostOnly').innerHTML,
//         nodecontent: document.getElementById('contentInModal').innerHTML,
//         tag1: newTagInput.value.toLowerCase()
//       });
//       displayStatus("Tag already existed for this post and was upvoted");
//     }
//     newTagInput.value = "";
//     newTagInput.style.display = "none";
//     document.getElementById("tagIt").innerHTML = "Tag it";
//     document.getElementById('previewframe').style.display = "none";
//     clickOnAddNewTag=false;
//   }else{
//     newTagInput.style.display = "block";
//     document.getElementById("tagIt").innerHTML = "Submit tag?";
//     clickOnAddNewTag=true;
//   }
//   clickOnAddNewPost=false; 
//   document.getElementById('uploadNewPostButton').innerHTML="+";
// }

// function closeAllFrames(){
//   var newTagInput = document.getElementById("newTagInput");
//   newTagInput.value = "";
//   newTagInput.style.display = "none";
//   clickOnAddNewTag=false;
//   document.getElementById("tagIt").innerHTML="Tag it";
//   document.getElementById("submitnew").style.display = "none";
//   document.getElementById('previewframe').style.display = "none";
//   document.getElementById('upvoteTagModal').style.display = "none";
// }

// var inputs = $(".submissionslot");

// var validateInputs = function validateInputs(inputs){
//   var validForm = true;
//   inputs.each(function(index) {
//     var input = $(this);
//     if (input.val()=="") {
//       $("#upload").attr("disabled", "disabled");
//       validForm = false;
//     }
//   });
//   return validForm;
// };

// inputs.change(function(){
//   if (validateInputs(inputs)) {
//     document.getElementById("upload").removeAttribute("disabled");
//   }
// });

// var text_truncate = function(str, length, ending){
//   if (length == null) {
//     length = 100;
//   }
//   if (ending == null) {
//     ending = '...';
//   }
//   //console.log(String(str));
//   if(str !== null) {
//     //console.log("STRING IS NOT NULL");
//     if (str.length > length) {
//       //console.log(str.substring(0, length - ending.length) + ending);
//       return str.substring(0, length - ending.length) + ending;
//     } else {
//       return str;
//     }     
//   }else{
//     //console.log("STRING IS NULL");
//     return "null";
//   }
// };

// var previewContent = document.getElementById("previewContent");

// function handleRetrievedDatabase(results){

//   var promise1 = new Promise(function(resolve, reject){
//     console.log("DBRESULTSNODES");
//     console.log(dbresults.nodes);
//     //0 = id, 1 = upvotes, 2 = content, 3 = tag from results array
//     for(let i=0; i<results.length; i++){
//       k = i+1;
//       var foundPrev = false;
//       var thisPostID = results[i][0];
//       if(thisPostID==undefined){
//         continue;
//       }
//       for(obj of Object.values(dbresults.nodes)){
//         if(obj.id==thisPostID){
//           foundPrev=true;
//           thisPostID = obj.id;
//           break;
//         }
//       }
//       if(foundPrev==false){
//         dbresults.nodes.push({id:thisPostID, upvotes:results[i][1], content:results[i][2], img:results[i][5]});
//       }
//       if(results[k] == undefined){
//         continue;
//       }else{
//         var thisNextPostID = results[k][0];
//         for(obj of Object.values(dbresults.nodes)){
//           if(obj.id==thisNextPostID){
//             foundPrev=true;
//             thisNextPostID = obj.id;
//             break;
//           }
//         }
//         var thisPostTag = results[i][3];
//         //IF THIS POSTS TAG IS IDENTICAL TO THE NEXT POSTS TAG
//         if(thisPostTag==results[k][3] && thisNextPostID !== null){
//           //THEN CHECK IF THAT TAG IS ALREADY IN THE EXISTING TAG ARRAY. IF NOT? PUSH IT TO THAT LIST
//           existingTagArray.indexOf(thisPostTag) === -1 ? existingTagArray.push(thisPostTag) : console.log("This item already exists");
//           //BECAUSE THERE MUST BE AT LEAST TWO POSTS WITH THE SAME TAG FOR A LINK TO EXIST, 
//           dbresults.links.push({source:thisPostID, target:thisNextPostID, tag:thisPostTag});
//         }
//       }
//     }
//     resolve(dbresults);
//   });

//   promise1.then(function(data){
//     console.log("PROMISE1THEN START");
//     console.log(data);
//     //console.log(existingTagArray);
//     var svg = d3.select("svg")
//         .attr("width", 2000)
//         .attr("height", 2000)
//         .on("mousemove", mousemove);

//     var path = svg.append("g")
//         .selectAll("path")
//         .data(data.links)
//         .enter()
//         .append("path")
//         .attr("class", "linkpath")
//         .attr("id", function(d,i){ return "pathId_" + i; })
//         .attr("marker-end", function(d) { return "url(#" + d.tag + ")"; });

//     var linktext = svg.append("g").selectAll(".gLink").data(data.links);
    
//     linktext.enter().append("g").attr("class", "gLink")
//       .append("text")
//          .attr("class", "gLink")
//          .style("font-size", "11px")
//          .style("font-family", "sans-serif")
//          .attr("x", "50")
//          .attr("y", "-4")
//          .attr("text-anchor", "start")
//          .style("fill", "#f1d141")
//       .append("textPath")
//          .attr("xlink:href",function(d,i){ return "#pathId_" + i; })
//          .text(function(d){ return d.tag; })
//          .on("mousedown", clickOnTag);

//     var node = svg.append("g").attr("class", "nodes").selectAll("circle").data(data.nodes).enter()
//         .append("circle")
//           .attr("r", function(d){ return (d.upvotes != null || d.upvotes != 0) ? 5*d.upvotes : 5;})
//           .attr("id", function(d){return "linkId_"+d.id})
//           .attr("color", "#cccccc")
//           .on("mousedown", clickOnNode)
//           .on("mouseover", mouseoverNode)
//         .append("image")
//           .attr("xlink:href", function(d){if((/\.(gif|jpg|jpeg|tiff|png)$/i).test(d.img)){return "uploaded/"+d.img;}})
//           ;
//         // .append("svg:image")
//         //   .attr('xlink:href', function(d){if((/\.(gif|jpg|jpeg|tiff|png)$/i).test(d.img)){return "uploaded/"+d.img;}})
//         //   .call(d3.drag()
//         //       .on("start", dragstarted)
//         //       .on("drag", dragged)
//         //       .on("end", dragended));

//     var postTitle = svg.selectAll(".mytext").data(data.nodes).enter()
//         .append("text")
//         .on("mousedown", clickOnNode);
//     postTitle.style("fill", "#cccccc")
//       .attr("width", "10")
//       .attr("height", "10")
//       .style("fill","#ffd24d")
//       .text(function(d) { return text_truncate(d.content, 16); });

//           // svg.selectAll(".nodes").data(data.nodes).enter()
//           // .append('svg:image')
//           //   .attr('xlink:href', function(d){if((/\.(gif|jpg|jpeg|tiff|png)$/i).test(d.img)){return "uploaded/"+d.img;}})
//           //   .attr("x", function(d){console.log(d);console.log(d.x);return d.x;})
//           //   .attr("y", function(d){return d.y;})
//           //   .attr("width", "50")
//           //   .attr("height", "50");

//     var simulation = d3.forceSimulation()
//       .force("collision", d3.forceCollide().radius(70))
//         .force("link", d3.forceLink().id(function(d, i){ return d.id; }))
//         .force("charge", d3.forceManyBody().strength(1000).distanceMin(30))
//         .force("center", d3.forceCenter(700 , 700));
//     simulation.nodes(data.nodes).on("tick", ticked);
//     //console.log(data.links);
//     simulation.force("link").links(data.links);
//     //simulation.force("link").links(data.links);

//     function mousemove(){
//       mouseCoordinates = d3.pointer(this);
//       //cursor.attr("transform", "translate(" + String(d3.mouse(this)) + ")");
//     }
//     function mouseoverNode(d, i) {
//       var thisObject = d3.select(this)["_groups"][0][0];
//       d3.select(node.nodes()[i])
//       .transition()
//       .attr("r", 2*thisObject["attributes"][0]["nodeValue"] )
//       .duration(500);
//     }
//     function mouseoutNode(d, i) {
//       console.log(node);
//       console.log(d);
//       console.log(i);
//       var thisObject = d3.select(this)["_groups"][0][0];
//       d3.select(node.nodes()[i])
//       .transition()
//       .attr("r", thisObject["attributes"][0]["nodeValue"]/2 )
//       .duration(500);
//     }
//     function ticked(){
//       node.attr("cx", function(d) { return d.x; }).attr("cy", function(d) { return d.y; });
//       postTitle.attr("x", function(d) { return d.x; }).attr("y", function(d) { return d.y; });      
//       path.attr("d", function(d) {
//           var dx = d.target.x - d.source.x,
//               dy = d.target.y - d.source.y;
//           return "M " + d.source.x + " " + d.source.y + " L " + d.target.x + " " + d.target.y;
//       });
//     }
//     function clickOnTag(d, i){
//       //console.log(d);
//       closeAllFrames();
//       document.getElementById('uploadNewPostButton').innerHTML="-";
//       clickOnAddNewPost=true; 
//       var upvoteModalElement = document.getElementById('upvoteTagModal').style;
//       document.getElementById('tagNameInModal').innerHTML = d.tag;
//       document.getElementById('contentInModal').innerHTML = d.source.content;
//       document.getElementById('postNameInModal').innerHTML = d.source.id;
//       //upvoteModalElement.left = String(mouseCoordinates[0])+"px";
//       //upvoteModalElement.top = String(mouseCoordinates[1])+"px";
//       upvoteModalElement.display = "block";
//     }
//     function clickOnNode(d, i){
//       //previewFrame.innerHTML = linkifyHtml(d.content, linkifyOptions);
//       //linkifyStr(previewFrame, linkifyOptions);
//       console.log(i.id);
//       window.location.href='/?post='+String(i.id);
//       closeAllFrames();
//       clickOnAddNewPost=true;
//       document.getElementById('uploadNewPostButton').innerHTML="-";
//       document.getElementById('postNameInModalPostOnly').innerHTML = d.id;
//       document.getElementById('contentInModal').innerHTML = d.content;
//       previewContent.innerHTML = "<a href="+d.content+">"+d.content+"</a>";
//       document.getElementById('previewframe').style.display = "block";
//     }
//     function restart(){
//       node = node.data(data.nodes);

//       node.enter().insert("circle", ".cursor")
//           .attr("class", "node")
//           .attr("r", 5)
//           .on("mousedown", mousedownNode);

//       node.exit()
//           .remove();

//       link = link.data(data.links);

//       link.enter().insert("line", ".node")
//           .attr("class", "link");
//       link.exit()
//           .remove();
//       simulation
//           .nodes(data.nodes)
//           .on("tick", ticked);

//       simulation.force("link")
//           .links(data.links);
//     }
//     function dragstarted(d){
//       simulation.stop();
//       if (!d3.event.active){ simulation.alphaTarget(0.3).restart();}
//       d.fx = d.x;
//       d.fy = d.y;
//     }
//     function dragged(d){
//       d.fx = d3.event.x;
//       d.fy = d3.event.y;
//     }
//     function dragended(d){
//       if (!d3.event.active){simulation.alphaTarget(0);}
//       d.fx = null;
//       d.fy = null;
//     }
//   });


// }

// function autocomplete(inp, arr){
//   /*the autocomplete function takes two arguments,
//   the text field element and an array of possible autocompleted values:*/
//   var currentFocus;
//   /*execute a function when someone writes in the text field:*/
//   inp.addEventListener("input", function(e) {
//       var a, b, i, val = this.value;
//       /*close any already open lists of autocompleted values*/
//       closeAllLists();
//       if (!val) { return false;}
//       currentFocus = -1;
//       /*create a DIV element that will contain the items (values):*/
//       a = document.createElement("DIV");
//       a.setAttribute("id", this.id + "autocomplete-list");
//       a.setAttribute("class", "autocomplete-items");
//       /*append the DIV element as a child of the autocomplete container:*/
//       this.parentNode.appendChild(a);
//       /*for each item in the array...*/
//       for (i = 0; i < arr.length; i++) {
//         /*check if the item starts with the same letters as the text field value:*/
//         if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
//           /*create a DIV element for each matching element:*/
//           b = document.createElement("DIV");
//           /*make the matching letters bold:*/
//           b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
//           b.innerHTML += arr[i].substr(val.length);
//           /*insert a input field that will hold the current array item's value:*/
//           b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
//           /*execute a function when someone clicks on the item value (DIV element):*/
//               b.addEventListener("click", function(e) {
//               /*insert the value for the autocomplete text field:*/
//               inp.value = this.getElementsByTagName("input")[0].value;
//               /*close the list of autocompleted values,
//               (or any other open lists of autocompleted values:*/
//               closeAllLists();
//           });
//           a.appendChild(b);
//         }
//       }
//   });
//   /*execute a function presses a key on the keyboard:*/
//   inp.addEventListener("keydown", function(e) {
//       var x = document.getElementById(this.id + "autocomplete-list");
//       if (x) x = x.getElementsByTagName("div");
//       if (e.keyCode == 40) {
//         /*If the arrow DOWN key is pressed,
//         increase the currentFocus variable:*/
//         currentFocus++;
//         /*and and make the current item more visible:*/
//         addActive(x);
//       } else if (e.keyCode == 38) { //up
//         /*If the arrow UP key is pressed,
//         decrease the currentFocus variable:*/
//         currentFocus-=1;
//         /*and and make the current item more visible:*/
//         addActive(x);
//       } else if (e.keyCode == 13) {
//         /*If the ENTER key is pressed, prevent the form from being submitted,*/
//         e.preventDefault();
//         if (currentFocus > -1) {
//           /*and simulate a click on the "active" item:*/
//           if (x) x[currentFocus].click();
//         }
//       }
//   });
//   function addActive(x) {
//     /*a function to classify an item as "active":*/
//     if (!x) return false;
//     /*start by removing the "active" class on all items:*/
//     removeActive(x);
//     if (currentFocus >= x.length) currentFocus = 0;
//     if (currentFocus < 0) currentFocus = (x.length - 1);
//     /*add class "autocomplete-active":*/
//     x[currentFocus].classList.add("autocomplete-active");
//   }
//   function removeActive(x) {
//     /*a function to remove the "active" class from all autocomplete items:*/
//     for (var i = 0; i < x.length; i++) {
//       x[i].classList.remove("autocomplete-active");
//     }
//   }
//   function closeAllLists(elmnt) {
//     /*close all autocomplete lists in the document,
//     except the one passed as an argument:*/
//     var x = document.getElementsByClassName("autocomplete-items");
//     for (var i = 0; i < x.length; i++) {
//       if (elmnt != x[i] && elmnt != inp) {
//         x[i].parentNode.removeChild(x[i]);
//       }
//     }
//   }
//   /*execute a function when someone clicks in the document:*/
//   document.addEventListener("click", function(e){ closeAllLists(e.target); });
// }

// autocomplete(document.getElementById("newTagInput"), existingTagArray);
// autocomplete(document.getElementById("tag1"), existingTagArray);
// autocomplete(document.getElementById("tag2"), existingTagArray);

// window.onload = onloadFunction();