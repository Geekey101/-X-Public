[rewrite_local]
#微信自动阅读
^https?://mp\.weixin\.qq\.com/s.+? url response-body </script> response-body setTimeout(()=>window.history.back(),8000); </script>
[mitm]
hostname = mp.weixin.qq.com
