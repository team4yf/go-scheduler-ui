const jobsData = [
  {
    "code": "sync-prod-shengxian",
    "name": "sync-prod-shengxian",
    "cron": "0 3 * * *",
    "status": 1,
    "title": "sync-prod-shengxian",
    "remark": "sync-prod-shengxian",
    "retryMax": 5,
    "timeout": 600,
    "argument": "",
    "delay": 10,
    "executeType": "GET",
    "auth": "",
    "authProperties": "",
    "notifyTopic": "demo",
    "url": "https://api.metro.com.cn/internal/baseservice/api/v1/job/syncCouponStatus/shengxian"
  },
  {
    "code": "sync-prod-limit-coupon",
    "name": "sync-prod-limit-coupon",
    "cron": "0 2 * * *",
    "status": 1,
    "title": "sync-prod-limit-coupon",
    "remark": "sync-prod-limit-coupon",
    "retryMax": 5,
    "timeout": 600,
    "argument": "",
    "delay": 10,
    "executeType": "GET",
    "auth": "",
    "authProperties": "",
    "notifyTopic": "demo",
    "url": "https://api.metro.com.cn/k8s2/baseservice/api/v1/job/syncCouponStatus/limitcoupon"
  }
];

export default jobsData
