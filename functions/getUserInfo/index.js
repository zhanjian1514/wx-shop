const cloud = require('wx-server-sdk')
cloud.init()
exports.main = async (event, context) => {
  try {
    const result = await cloud.openapi.subscribeMessage.send({
      touser: 'oAubj5Pmqor-Md_nK4hxqo3-fv3A',
      page: '/pages/index/index',
      data: {
        thing1: {
          value: '我是玖陆后'
        },
        date2: {
          value: '2019-12-13'
        },
        thing3: {
          value: "我是你爹"
        },
        thing4: {
          value: "哈哈哈哈"
        },
      },
      templateId: '6L6nNIol4mojlPn3JH_Dvqdi7I51Y0k1WyK2U8SsCXY'
    })
    console.log(result)
    return result
  } catch (err) {
    console.log(err)
    return err
  }
}