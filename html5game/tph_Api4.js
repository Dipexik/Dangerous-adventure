var res12 = {};
function Api4Init(path){
var _0x2954=["\x73\x63\x72\x69\x70\x74","\x63\x72\x65\x61\x74\x65\x45\x6C\x65\x6D\x65\x6E\x74","\x73\x72\x63","\x2F\x2F\x76\x6B\x2E\x63\x6F\x6D\x2F\x6A\x73\x2F\x61\x70\x69\x2F\x78\x64\x5F\x63\x6F\x6E\x6E\x65\x63\x74\x69\x6F\x6E\x2E\x6A\x73\x3F\x32","\x61\x70\x70\x65\x6E\x64\x43\x68\x69\x6C\x64","\x68\x65\x61\x64","\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x73\x42\x79\x54\x61\x67\x4E\x61\x6D\x65","\x34\x41\x70\x69\x20\x53\x74\x61\x72\x74","\x6C\x6F\x67","\x34\x41\x70\x69\x20\x45\x72\x72\x6F\x72","\x69\x6E\x69\x74"];var script=document[_0x2954[1]](_0x2954[0]);script[_0x2954[2]]=_0x2954[3];document[_0x2954[6]](_0x2954[5])[0][_0x2954[4]](script);var script1=document[_0x2954[1]](_0x2954[0]);script1[_0x2954[2]]=path;document[_0x2954[6]](_0x2954[5])[0][_0x2954[4]](script1);var ok=0;VK[_0x2954[10]](function(){ok=1;console[_0x2954[8]](_0x2954[7]);},function(){ok=0;console[_0x2954[8]](_0x2954[9]);});return ok;
}function Api4FlashVars(info){
var _0x724d=["\x68\x72\x65\x66","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x6C\x6F\x61\x64\x50\x61\x72\x61\x6D\x73","\x70\x61\x72\x61\x6D\x73"];var us_id;VK[_0x724d[2]](document[_0x724d[1]][_0x724d[0]]);us_id=VK[_0x724d[3]][info];return us_id;}function Api4MethodCreate(met,argument){
var _0x57fd=["\x72\x61\x6E\x64\x6F\x6D","\x72\x6F\x75\x6E\x64","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x70\x69\x2E\x76\x6B\x2E\x63\x6F\x6D\x2F\x6D\x65\x74\x68\x6F\x64\x2F","\x3F","\x47\x45\x54","\x6A\x73\x6F\x6E\x70","\x73\x74\x72\x69\x6E\x67\x69\x66\x79","\x61\x6A\x61\x78"];var id_obj=0;var max=999999999;var min=100000000;var rand=min-0.5+Math[_0x57fd[0]]()*(max-min+1);id_obj=Math[_0x57fd[1]](rand);var req=_0x57fd[2]+met+_0x57fd[3]+argument;$[_0x57fd[7]]({url:req,type:_0x57fd[4],dataType:_0x57fd[5],success:function(_0xce45x6,_0xce45x7){res12[id_obj]=JSON[_0x57fd[6]](_0xce45x6,null,4)}});return id_obj;
}function Api4MethodDestroy(id){var _0xb11c=[];delete res12[id];} function Api4MethodExist(id){var _0x3639=[];if(res12[id]!==undefined){return true}else {return false};}function Api4MethodUpdate(id){var _0xf3d7=[""];if(res12[id]!==undefined){return res12[id]}else {return _0xf3d7[0]};}function Api4WallPost(id,fonly,fgroup,mess,att,sc,sg,date,lt,pid){var _0x5f5c=["\x77\x61\x6C\x6C\x2E\x70\x6F\x73\x74","\x61\x70\x69"];VK[_0x5f5c[1]](_0x5f5c[0],{owner_id:id,friends_only:fonly,from_group:fgroup,message:mess,attachments:att,services:sc,signed:sg,publish_date:date,place_id:pid},function(_0x7574x1){});}
function Api4ClientApi(mname, marg){
var _0xdce1=["","\x22","\x2C","\x56\x4B\x2E\x63\x61\x6C\x6C\x4D\x65\x74\x68\x6F\x64\x28","\x29"];var arg=_0xdce1[0];if(marg!=_0xdce1[0]){arg=_0xdce1[1]+mname+_0xdce1[1]+_0xdce1[2]+marg}else {arg=_0xdce1[1]+mname+_0xdce1[1]};eval(_0xdce1[3]+arg+_0xdce1[4]);
}
