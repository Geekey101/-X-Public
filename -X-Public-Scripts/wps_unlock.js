/*
WPS Office 解锁部分功能
使用声明：⚠️此脚本仅供学习与交流，
        请勿转载与贩卖！⚠️⚠️⚠️

***************************
QuantumultX:

[rewrite_local]
^https?:\/\/account\.wps\.cn\/api\/users url script-response-body https://raw.githubusercontent.com/Geekey101/-X-Public/main/-X-Public-Scripts/wps_unlock.js

[mitm]
hostname = account.wps.cn

***************************
Surge4 or Loon:

[Script]
http-response ^https?:\/\/account\.wps\.cn\/api\/users requires-body=1,max-size=-1,script-path=https://raw.githubusercontent.com/Geekey101/-X-Public/main/-X-Public-Scripts/wps_unlock.js

[MITM]
hostname = account.wps.cn

**************************/

var body = JSON.parse($response.body);
if($request.url. indexOf('/api/users') != -1){
var obj = {
  exp: 0,
  level: 3,
  privilege: [
    { spid: "data_recover", times: 0, expire_time: 1846256142 },
    { spid: "ocr", times: 0, expire_time: 1846256142 },
    { spid: "pdf2doc", times: 0, expire_time: 1846256142 },
    { spid: "pdf_merge", times: 0, expire_time: 1846256142 },
    { spid: "pdf_sign", times: 0, expire_time: 1846256142 },
    { spid: "pdf_split", times: 0, expire_time: 1846256142 }
  ],
  result: "ok",
  total_buy: 0,
  total_cost: -30,
  userid: body.userid,
  vip: {
    name: "超级会员",
    has_ad: 0,
    memberid: 40,
    expire_time: 1846256142,
    enabled: [
      { memberid: 40, name: "超级会员", expire_time: 1846256142 },
      { memberid: 20, name: "WPS会员", expire_time: 1846256142 },
      { memberid: 12, name: "稻壳会员", expire_time: 1846256142 }
    ]
  },
  wealth: 0,
  expire_time: 1846256142
};
}
else if ($request.url. indexOf('/api/v3/mine/vips') != -1){
var obj = {
  "result": "ok",
  "server_time": 1656148313,
  "vips": [{
    "name": "稻壳会员",
    "has_ad": 0,
    "memberid": 12,
    "expire_time": 1644835112,
    "enabled": null
  }, {
    "name": "WPS会员",
    "has_ad": 0,
    "memberid": 20,
    "expire_time": 1679664272,
    "enabled": null
  }]
}

}


$done({ body: JSON.stringify(obj) });
