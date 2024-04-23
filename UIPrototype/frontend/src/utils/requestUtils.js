// 安装axios $ npm i axios -s
import axios from 'axios';

export function requestUtils(config) {
  // noinspection TypeScriptValidateTypes
  const instance = axios.create({
    //将自动加在 `url` 前面，除非 `url` 是一个绝对 URL。
    baseURL: '/api',
    // 请求超时时间，请求达到5秒，不让请求
    timeout: 20000,
    // 表示跨域请求时是否需要使用凭证
    withCredentials: true,
    // 自定义请求头
    headers: {},
  });

  // 添加请求拦截器
  instance.interceptors.request.use(
    function (config) {

      return config;
    }
  );

  // 添加响应拦截器
  instance.interceptors.response.use(

  );
  return instance(config);
}