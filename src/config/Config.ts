/**
 * 此文件主要时配置文件
 *  1. Mysql数据库配置
 *  2. Redis 连接配置
 *  3. 微信开发配置
 *  4. 钉钉开发配置
 *  5. 短信配置
 *  .
 *  .
 *  .
 */
import { join } from 'path'
import { DataSourceOptions } from "typeorm";

export const MYSQL_DEV = {
  type: 'mysql',
  url:'',
  host: '',
  port: 3306,
  password: '',
  database: '',
  connectTimeout: 30000,
  dataString: true,
  logging: true,
  entities: [join(__dirname, '../entities/*.ts')]
}

export const MYSQL_PRO = {
  type: 'mysql',
  url:'',
  host: '',
  port: 3306,
  password: '',
  database: '',
  connectTimeout: 30000,
  dataString: true,
  logging: true,
  entities: [join(__dirname, '../entities/*.js')]
}

export const REDIS_CONFIG = {}

export const WECHAT_CONFIG = {}
export const DINGTALK_CONFIG = {}
export const SMS_CONFIG = {}