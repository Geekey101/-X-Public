/* 幕布解锁vip，需登陆账号，vip功能可用
使用声明：⚠️此脚本仅供学习与交流，
        请勿转载与贩卖！⚠️⚠️⚠️
*******************************

[mitm]
hostname= *.mubu.com
[rewrite_loclal]
^https?:\/\/api2\.mubu\.com\/v3\/api\/user\/current_user url script-response-body https://raw.githubusercontent.com/Geekey101/-X-Public/main/-X-Public-Scripts/mubu_unlock.js
*/
body = $response.body.replace(/level":\d+/g, 'level":1').replace(/vipEndDate":\"\"/g, 'vipEndDate":\"2030-05-12\"');
$done({body});
