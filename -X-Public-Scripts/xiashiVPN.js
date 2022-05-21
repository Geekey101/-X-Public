/*


[mitm]
hostname = hotspot-unlimited.com

[rewrite_local]
#夏时vpn,可能带广告
^https?:\/\/hotspot-unlimited\.com\/addressx2\/ url response-body vip":"1 response-body vip":"0
*/
