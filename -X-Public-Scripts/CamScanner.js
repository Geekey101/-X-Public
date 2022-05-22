
/*
脚本作用：CamScanner会员（不完全）


[rewrite_local]
^https:\/\/(api|api-cs)\.intsig\.net\/purchase\/cs\/query_property\? url script-response-body https://raw.githubusercontent.com/Geekey101/-X-Public/main/-X-Public-Scripts/CamScanner.js
[mitm]
hostname = ap*.intsig.net

*/




let obj = JSON.parse($response.body);




obj = {
  "data": {
    "dir": {
      "new_layer_num": 4,
      "total_num": 9999,
      "single_layer_num": 3,
      "edu_layer_num": 6,
      "edu_total_num": 9999,
      "vip_layer_num": 6,
      "vip_total_num": 9999,
      "normal_vip_total_num": 9999,
      "normal_vip_layer_num": 6,
      "user_layer_num": 9,
      "user_total_num": 9999
    },
    "login_ocr_balance": "9999",
    "no_login_ocr_balance": "9999",
    "removead": "1",
    "server_time": "1650121587",
    "CamScanner_RoadMap": "100000",
    "CamScanner_Erase": 99000,
    "balance_demoire": 9000,
    "watermarks_balance": 99,
    "watchad_vip_chance": "3",
    "trans_balance": "9900",
    "upload_pdf_balance": "100000",
    "excel_balance": "9900",
    "bookmode_balance": 900010,
    "vip_imagerestore_balance": 9000,
    "ocr_balance": 9994,
    "psnl_vip_property": {
      "product_id": "com.intsig.camscanner.premiums.threeyear.svip",
      "pending": 0,
      "in_trial": 1,
      "initial_tm": "1650121561",
      "pc_vip": 1,
      "ys_first_pay": 1,
      "svip": 1,
      "ms_first_pay": 0,
      "group2_paid": 0,
      "expiry": 3800000000,
      "auto_renewal": true,
      "renew_type": "year",
      "inherited_flag": 0,
      "level_info": {
        "level": 1,
        "end_days": 9990,
        "days": 1
      },
      "grade": 2,
      "group1_paid": 1,
      "last_payment_method": "appstore",
      "nxt_renew_tm": "1650726358",
      "renew_method": "appstore"
    },
    "immt_expy_points": "99999",
    "balance_recolor": 9000,
    "vip_balance_recolor": 1000,
    "watchad_vip_chance_total": "3",
    "pdfword_balance": "100000",
    "imagerestore_balance": 1000,
    "used_points": "99999",
    "patting_balance": "100000",
    "cert_mode_balance": 99990,
    "points": "999",
    "points_exchange_cfgrs": {
      "CamScanner_CertMode": 20000,
      "CamScanner_Pdf2ppt": 50000,
      "CamScanner_AlbumImport": 50000,
      "CamScanner_ID_Card_Credit": 50000,
      "CamScanner_ID_Card_Authenticity": 50000,
      "CamScanner_Pdfword": 50000,
      "CamScanner_Profile_Card_Format": 50000,
      "CamScanner_Translation": 50000,
      "CamScanner_Excel": 50000,
      "CamScanner_Watermarks": 5000,
      "CamScanner_CloudOCR": 50000,
      "CamScanner_Pdf2excel": 50000,
      "CamScanner_Sign": 50000,
      "CamScanner_CloudCap_1G": 50000
    },
    "greetcard_list": {
      "greeting_card_9": "1",
      "greeting_card_10": "0",
      "greeting_card_11": "0",
      "CamScanner_PayGreetCard_1": "1",
      "CamScanner_PayGreetCard_2": "0",
      "CamScanner_PayGreetCard_3": "0",
      "CamScanner_PayGreetCard_4": "0",
      "CamScanner_PayGreetCard_5": "0",
      "CamScanner_PayGreetCard_6": "1",
      "CamScanner_NONVIP_PayGreetCard_1": "1",
      "CamScanner_NONVIP_PayGreetCard_2": "0",
      "CamScanner_NONVIP_PayGreetCard_3": "1",
      "greeting_card_1": "0",
      "greeting_card_2": "0",
      "greeting_card_3": "0",
      "greeting_card_4": "0",
      "greeting_card_5": "0",
      "greeting_card_6": "0"
    },
    "fax_balance": "9999",
  },
  "ret": "0",
};




$done({body: JSON.stringify(obj)});

