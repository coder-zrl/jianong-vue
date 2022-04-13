/**
 * 验收环境
 */
;(function () {
  window.SITE_CONFIG = {};

  // api接口请求地址
  window.SITE_CONFIG['baseUrl'] = 'http://47.103.198.84:8080/jianong';

  // cdn地址 = 域名 + 版本号
  window.SITE_CONFIG['domain']  = './'; // 域名
  window.SITE_CONFIG['version'] = '';   // 版本号(年月日时分)
  window.SITE_CONFIG['cdnUrl']  = window.SITE_CONFIG.domain + window.SITE_CONFIG.version;
})();