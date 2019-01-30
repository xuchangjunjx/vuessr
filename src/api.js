/*
 * @Author: bowen.xu
 * @Date: 2019-01-29 17:27:00
 * @Last Modified by: bowen.xu
 * @Last Modified time: 2019-01-30 15:51:39
 */

export function fetchItem(id) {
    return new Promise((resolve, reject) => {
      if (id) {
        resolve({
            title:'hellow'
        });
      } else {
        reject("服务器异常");
      }
    });
  }