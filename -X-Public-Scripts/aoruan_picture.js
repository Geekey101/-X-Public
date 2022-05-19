/*  
脚本功能：傲软抠图解锁会员
使用声明：⚠️⚠️⚠️此脚本仅供学习与交流，
        请勿转载与贩卖！⚠️⚠️⚠️
使用方法: 打开规则 登录账号即可

************ QX ***************

[rewrite_local]

# 傲软抠图解锁会员
^https?:(.+).aoscdn.com/app/aimage/usersInfo$ url script-response-body https://raw.githubusercontent.com/Geekey101/-X-Public/main/-X-Public-Scripts/aoruan_picture.js
[mitm] 

hostname = *.aoscdn.com
********** 小火箭 **************

[Script]

傲软抠图 = type=http-response,script-path=https://raw.githubusercontent.com/nameking77/Qx/main/rewrite/arkt.js,pattern=^https?:(.+).aoscdn.com/app/aimage/usersInfo$,max-size=131072,requires-body=true,timeout=10,enable=true

[mitm] 

hostname = *.aoscdn.com
*******************************

*/


var body = $response.body
      .replace(/\"is_activated\":\d/g, "\"is_activated\":1")
      .replace(/\"expired_at\":\d/g, "\"expired_at\":4476655324");
$done({ body });
