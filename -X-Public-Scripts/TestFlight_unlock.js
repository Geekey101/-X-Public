# 该订阅仅适用于QuantumultX, 用于更新TestFlight App时, 提示"APP不可用"问题. 解除区域限制.

hostname = testflight.apple.com



^https?:\/\/testflight\.apple\.com\/v\d\/accounts\/.+?\/install$ url script-request-body https://gist.githubusercontent.com/NobyDa/9be418b93afc5e9c8a8f4d28ae403cf2/raw/TF_Download.js
