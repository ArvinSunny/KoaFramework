/**
 * 接口
 *  1. 返回数据接口
 */
export interface IResponse {
  code: number,
  msg: string,
  result?: object[],
  count?: number
}