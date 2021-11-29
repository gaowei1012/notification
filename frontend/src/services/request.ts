import axios, { AxiosError, AxiosResponse } from 'axios'

export function request(url: string, method: any, data?: object) {
  return new Promise((resolve, reject) => {
    let body = method === "GET" ? "params" : "data";
    axios({
      url,
      method,
      [body]: data === null ? "" : data,
      headers: {
        "Content-Type": "application/json",
        // sessionId: token === null ? "" : token,
      },
    })
      .then((res: AxiosResponse) => {
        resolve(res)
      })
      .catch((err: AxiosError) => {
        reject(err)
      })
  })
}
