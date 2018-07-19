let serverPath = 'http://localhost:81/';
export function post (url, body) {
  var promise = new Promise(function (resolve, reject) {
    wx.request({
      url: serverPath + url,
      data: body,
      method: 'POST',
      header: {'content-type': 'application/json'},
      success (res) {
        resolve(res.data);
      },
      fail (ret) {
        reject(ret);
      }
    });
  });
  return promise;
}
