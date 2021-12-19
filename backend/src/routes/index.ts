import express, { Response, Request } from 'express'
import { failRes, resSuccess } from '@/utils/utils'

const router: express.Router = express.Router()

// 登录
router.post('/login', async function(req: Request , res: Response) {
  try {
    res.send(resSuccess('登录成', {}))
  } catch(err) {
    res.send(failRes(err.code, err.message))
  }
})

// 注册
router.post('/register', async function(req: Request , res: Response) {
  try {
    res.send(resSuccess('注册成功', {}))
  } catch(err) {
    res.send(failRes(err.code, err.message))
  }
})

export default router
