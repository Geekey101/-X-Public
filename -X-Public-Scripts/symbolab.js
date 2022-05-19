/*
脚本功能：Symbolab 解锁高级功能 (需登录)
使用声明：⚠️此脚本仅供学习与交流，
        请勿转载与贩卖！⚠️⚠️⚠️

********************************

[rewrite_local]

# Symbolab 解锁订阅
^https?:\/\/scibug\.com\/appleSubscriptionValidate$ url script-response-body https://raw.githubusercontent.com/Geekey101/-X-Public/main/-X-Public-Scripts/symbolab.js

[mitm] 

hostname = scibug.com
*
*
*/


let obj = JSON.parse($response.body);

obj= {"valid":true,"hasUserConsumedAppleFreeTrial":false,"isCurrentlyInFreeTrial":false,"newlyAssociated":false,"membership":{"isCurrentlyInFreeTrial":false,"valid":true,"hasUserConsumedAppleFreeTrial":false,"newlyAssociated":false}}



$done({body: JSON.stringify(obj)});
