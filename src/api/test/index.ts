import request from '@/utils/request';
import TEST from './interface'


const base = import.meta.env.VITE_API_BASE_URL;


export function test(data: TEST.TestReq): Promise<TEST.TestRes> {
  return request<TEST.TestRes, TEST.TestReq>({
    url: '/consultation/expert/page/info',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    data
  })
}