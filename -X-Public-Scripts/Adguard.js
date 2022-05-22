/*
脚本说明:AdGuard PREMIUM功能解锁
软件版本：4.4.0
使用声明：⚠️此脚本仅供学习与交流，
        请勿转载与贩卖！⚠️⚠️⚠️

[mitm]

hostname = *.adguard.com

[rewrite_local]
^https:\/\/mobile-api\.adguard\.com\/api\/1.0\/status.html url script-response-body https://raw.githubusercontent.com/Geekey101/-X-Public/main/-X-Public-Scripts/Adguard.js

*/

body = $response.body.replace(/status":"FREE"/g, 'status":"PREMIUM"').replace(/licenseDevicesCount":0/g, 'licenseDevicesCount":3').replace(/licenseMaxDevicesCount":0/g, 'licenseMaxDevicesCount":3').replace(/lifetime":false/g, 'lifetime":true');
 $done({body});
