/**
 * 查询核心函数，该函数是对 typeorm 的二次封装
 *  1. 条件查询
 *  2. 排序查询
 *  3. 分页查询
 *  4. 模糊查询
 *  5. 联合查询
 */
import {getConnection, getRepository } from "typeorm";

export default class SelectFunc {
  private sql:any
  constructor(DbName:any) {
    this.init().then(res => {
      this.sql = res.getRepository(DbName)
    })
  }

  private async init() {
    const query = await getConnection()
    return query
  }
  /**
   * 查询函数， 由于find函数是返回多条，所有该函数返回值是一个结果集数组，数组内部是数据对象
   *  本函数可以实现以下功能
   *    1. 条件查询
   *    2. 排序查询
   *    3. 分页查询
   * @param whereParams 查询条件，该条件是对象格式，如有多个条件则：{name:''张三’, class:'三班' }
   * @param pageSize 数据长度，分页时页次返回的页面数据长度， 默认：10
   * @param pageNum 页码， 查询数据的页数，第几页数据
   * @param selectParams 查询字段参数， 想要获取哪个字段
   * @param orderParams 排序参数， 对象
   * @param cache 缓存查询，默认关闭缓存查询， 如需要开启，则需要需要给cache 传true
   * @returns 返回的结果集
   */
  public async findList(whereParams:object, pageSize:number, pageNum:number, selectParams?:object, orderParams?:object, cache?:boolean):Promise<[]> {
    try {
      const result = await this.sql.find({
        select:selectParams,
        where:whereParams,
        skip:pageSize * (pageNum - 1) || 0,
        take: pageSize || 10,
        order: orderParams,
        caches: cache || false
      })
      return result
    } catch (error) {
      throw error
    } 
  }

  /**
   * 模糊查询
   * @param whereParams 模糊查询条件
   * @returns 
   */
  public async findLikesList(whereParams:object):Promise<object[]> {
    try {
      const result = await this.sql.find({
        where: whereParams,
      });
      return result
    } catch (error) {
      throw error
    }
  }


  public async findUnit():Promise<object[]> {
    try {
      const result = await this.sql.find()
      return result
    } catch (error) {
      throw error
    }
  }
}