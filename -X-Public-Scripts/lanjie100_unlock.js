/*lanjie100解锁*/
/*
 *
 *
脚本功能：解锁订阅
使用声明：⚠️此脚本仅供学习与交流，
        请勿转载与贩卖！⚠️⚠️⚠️
*******************************
*/
[rewrite_local]
^https:\/\/tagit\.lanjie100\.com\/cypt\/block100\/get_vip_info url script-response-body https://raw.githubusercontent.com/Geekey101/-X-Public/main/-X-Public-Scripts/lanjie100_unlock.js

[mitm]
hostname = tagit.lanjie100.com

body = $response.body.replace(/lvCQG8cCxqficLk+LttK+KfvNho8YJkewr6P4rpzahJbqs2gNAEtAU9WZrufA7zp36yDIZTvVhTzzfIPTb+T7l500au30umKnivIw\/bgyLlO8wZv8uWhXT6FsWm2c3JY92\/lH0RmsAa+S3auKVgvBgMBNuILvZX9l7g0v1euGAj7YPT02G3VNq2Tb\/EHte\/z5\/IggJEL1aA\/fUpIi\/CbO4PVs2UM1GyvH9K+nXZE\/asmVGzgC7Qzs\/dblxPYJstf/g, 'lvCQG8cCxqficLk+LttK+KfvNho8YJkewr6P4rpzahJbqs2gNAEtAU9WZrufA7zp36yDIZTvVhTzzfIPTb+T7l500au30umKnivIw\/bgyLlO8wZv8uWhXT6FsWm2c3JY92\/lH0RmsAa+S3auKVgvBgMBNuILvZX9l7g0v1euGAhz1LhN2ekLiuilOgwhbyteuAoM+dbXM9wb5mAtp5v9W66p6\/wAJGNUBSa0\/T63kjNJ4PuRxiXyR1Uz5uyH1Lv2'); $done({body});
