/***********************************
使用声明：⚠️此脚本仅供学习与交流，
        请勿转载与贩卖！⚠️⚠️

/*
[mitm]
hostname = *.duitang.com
[rewrite_local]
^https:\/\/www\.duitang\.com\/napi\/people\/me\/ url script-response-body https://raw.githubusercontent.com/Geekey101/-X-Public/main/-X-Public-Scripts/duitang.js

*/


***********************************/

body = $response.body.replace(/vip_end_at":\d+/g, 'vip_end_at":1').replace(/vip_level":\d+/g, 'vip_level":1'). replace(/vip_remain":\d+/g, 'vip_remain":365'). replace(/vip":\w+/g, 'vip":true'); 
$done({body});



