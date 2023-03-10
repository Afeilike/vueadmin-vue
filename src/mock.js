// 引入mockjs
const Mock = require('mockjs')
//获取Mock.Random对象
const Random = Mock.Random;
let Result={
  code:200,
  msg:'操作成功',
  data:null
}//后端返回的数据结果有统一的格式
/*
* Mock.mock( url, post/get , function(options))；
* * url 表示需要拦截的 URL，
* * post/get 需要拦截的 Ajax 请求类型 *
* * 用于生成响应数据的函数

*/
//获取验证码图片base64编码以及一个随机码
Mock.mock('/captcha','get',()=>{
  Result.data={
    token:Random.string(32),// 获取一个32位的随机字符串,
    captchaImg:Random.dataImage('120x40', "7n5gt")////生成验证码为11111的base64图片编码
  }
  console.log("code data：token、captchaImg创建返回成功！")
return Result;

})


Mock.mock(RegExp('/login*'),
  'post', () => {
  // 这里无法在header添加authorization，直接跳过
    // Result.code= 200;
  //Result.msg= '验证码错误'

 console.log("mock----------------login")
 return Result
})

Mock.mock('/sys/UserInfo', 'get', () => {

  Result.data = {
    id: "1",
    username: "test",
    avatar: "https://image-1300566513.cos.ap-guangzhou.myqcloud.com/upload/images/5a9f48118166308daba8b6da7e466aab.jpg"
  }

  return Result
})
Mock.mock('/logout', 'post', () => {

  return Result
})
