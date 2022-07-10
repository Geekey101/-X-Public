jin/*
WPS Office 解锁部分功能
使用声明：⚠️此脚本仅供学习与交流，
        请勿转载与贩卖！⚠️⚠️⚠️

***************************
QuantumultX:

[rewrite_local]
^https?:\/\/account\.wps\.cn\/api(\/users|\/v3\/mine\/vips) url script-response-body https://raw.githubusercontent.com/Geekey101/-X-Public/main/-X-Public-Scripts/wps_unlock.js
# > WPS解锁稻壳会员
#^https?:\/\/account\.wps\.cn\/api\/v3\/mine\/vips url script-response-body https://raw.githubusercontent.com/yqc007/QuantumultX/master/WPSDocerVIPuserCrack.js
^https?:\/\/.+\.(docer.)?wps.cn\/(user\/v1\/vip|android\/mb\/buy|download\/v1\/ios|partner\/invoke\/usable|(api|rank)\/v1(\/mobile\/mb)?\/detail) url script-request-header https://raw.githubusercontent.com/Geekey101/-X-Public/main/-X-Public-Scripts/wps_unlock.js
