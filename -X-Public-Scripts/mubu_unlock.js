/* 幕布解锁vip，需登陆账号，vip功能可用
[mitm]
hostname= *.mubu.com
[rewrite_loclal]
^https?:\/\/api2\.mubu\.com\/v3\/api\/user\/current_user url script-response-body https://raw.githubusercontent.com/Geekey101/-X-Public/main/-X-Public-Scripts/mubu_unlock.js
*/
body = $response.body.replace(/level":\d+/g, 'level":1').replace(/vipEndDate":\"\"/g, 'vipEndDate":\"2030-05-12\"');
$done({body});
