/**
 * 项目入口文件
 */
import Koa from 'koa'
import koaCors from 'koa-cors'
import koaBody from 'koa-body'
import router from "../modules/usermodel/user.controller"


export default class Server {
  private Server:Koa
  constructor(port:number){
    this.Server = new Koa()
    this.init().then(() => {
      console.log(`aaaa`);
      
      this.start(port)
    })
  }

  /**
   * 装配中间件
   */
  private async init(){
    this.Server.use(koaCors()).use(koaBody())
   console.time('router')
    this.Server.use(router.routes()).use(router.allowedMethods())
    console.timeEnd('router')
  }

  /**
   * 项目启动时的端口监听
   */
  private start(port:number){
    this.Server.listen(port, () => {
      console.log(`Server is running at port ${port}`); 
    })
  }
}