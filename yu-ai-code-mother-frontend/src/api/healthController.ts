// @ts-ignore
/* eslint-disable */
import request from '@/request'

/** 此处后端没有提供注释 GET /health/check */
export async function healthCheck(options?: { [key: string]: any }) {
  return request<API.BaseResponseString>('/health/check', {
    method: 'GET',
    ...(options || {}),
  })
}

/** 此处后端没有提供注释 PUT /health/check */
export async function check3(options?: { [key: string]: any }) {
  return request<API.BaseResponseString>('/health/check', {
    method: 'PUT',
    ...(options || {}),
  })
}

/** 此处后端没有提供注释 POST /health/check */
export async function check2(options?: { [key: string]: any }) {
  return request<API.BaseResponseString>('/health/check', {
    method: 'POST',
    ...(options || {}),
  })
}

/** 此处后端没有提供注释 DELETE /health/check */
export async function check5(options?: { [key: string]: any }) {
  return request<API.BaseResponseString>('/health/check', {
    method: 'DELETE',
    ...(options || {}),
  })
}

/** 此处后端没有提供注释 PATCH /health/check */
export async function check4(options?: { [key: string]: any }) {
  return request<API.BaseResponseString>('/health/check', {
    method: 'PATCH',
    ...(options || {}),
  })
}
