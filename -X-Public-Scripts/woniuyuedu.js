/*
网易蜗牛读书 解锁特权

***************************
QuantumultX:

[rewrite_local]
^https?:\/\/p\.du\.163\.com\/gain\/readtime\/info\.json url script-response-body https://raw.githubusercontent.com/Geekey101/-X-Public/main/-X-Public-Scripts/woniuyuedu.js

[mitm]
hostname = p.du.163.com

***************************
Surge4 or Loon:

[Script]
http-response ^https?:\/\/p\.du\.163\.com\/gain\/readtime\/info\.json requires-body=1,max-size=0,script-path=hhttps://raw.githubusercontent.com/Geekey101/-X-Public/main/-X-Public-Scripts/woniuyuedu.js

[MITM]
hostname = p.du.163.com

**************************/
var body = $response.body;
var obj = JSON.parse(body);

obj.tradeEndTime = 1679685290000;
body = JSON.stringify(obj);
$done({body});
