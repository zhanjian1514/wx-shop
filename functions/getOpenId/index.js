const cloud = require('wx-server-sdk')
cloud.init()
exports.main = async (event, context) => {
  try {
    const result = await cloud.openapi.subscribeMessage.send({
      touser: 'oAubj5Pmqor-Md_nK4hxqo3-fv3A',
      page: 'index',
      data: {
        thing1: {
          value: 'dnf2019年发布会'
        },
        date2: {
          value: '2019-12-14'
        },
        thing3: {
          value: "腾讯大厦"
        },
        thing4: {
          value: "备好砍刀，屠戮策划"
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