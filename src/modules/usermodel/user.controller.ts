import Router from "koa-router"
import { Context } from "koa"

const router = new Router({prefix:'/user'})

router.get('/userInfo', async (ctx:Context) => {
    ctx.body = {
        user_name: "Hello"
    }
})

export default router