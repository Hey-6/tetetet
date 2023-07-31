import axios from './axios';
import { Method } from 'axios'

interface ParamsType {
  url: string,
  method: Method,
  headers?: any,
  loading?: boolean
}


interface ReqParams<T> extends ParamsType {
  data?: T;
  params?: T;
}

console.log('import.meta.env', import.meta.env);
function request<T, K = void> (params: ReqParams<K>): Promise<T>{
  return axios({
    url: params.url,
    method: params.method,
    params: params.params,
    data: params.data,
    headers: params.headers,
  })
}

export default request;
