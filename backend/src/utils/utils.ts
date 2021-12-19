import { errorCode } from "@/config"

// 生成主键id(三位随机数+当前时间戳)
export function getGuid() {
  var length = 3
  var num = ''
  for (var i = 0; i < length; i++) {
    num += Math.floor(Math.random() * 10)
  }
  return num + new Date().getTime()
}

// 获取n的随机数
export function getRandom(n) {
  var num = ''
  for (var i = 0; i < n; i++) {
    num += Math.floor(Math.random() * 10)
  }
  return num
}

// 失败返回体
export function failRes(statusCode, message) {
  statusCode = statusCode ? statusCode : 99999
  const resBody = new  Object({
    success: false,
    statusCode: statusCode,
    message: message,
    data: ''
  })
  return resBody
}

// 返回成功体
export function resSuccess(message, data) {
  const resBody = new Object({
    success: true,
    statusCode: 200,
    message: message,
    data: data?data:''
  })
  return resBody
}
