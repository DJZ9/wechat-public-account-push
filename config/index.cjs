/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {
  USE_PASSAGE: 'push-deer',
  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx97e634742d18ba87',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '0e78d4fc11a6aa008d191c245529fc16',

  PROVINCE: '内蒙古',
  CITY: '通辽',
  CITY2: '长沙',
  USERS: [
    {
      // 想要发送的人的名字
      name: '自己',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      // id: 'oMOXU6u9s1IE5nYwePzOzxwMI7l4',
      id: 'PDU32417TLHKumrmNTLlME2GRysrBQnD3cuEyqLst',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      // useTemplateId: '_xpbynzxoKffxXEbZNApI2XT4U0VM4aKf06pv7Pp9h0',
      useTemplateId: '0002',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '09-17',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '自己', year: '2001', date: '08-01',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        // {
        //   type: '生日', name: '小羊排', year: '2003', date: '04-29',
        // },
        // {
        //   type: '节日', name: '在一起纪念日', year: '2023', date: '09-15',
        // }
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2023-09-15' }
        // 结婚纪念日
        // { keyword: 'marry_day', date: '2022-09-09' },
      ],
    },
    {
      // 想要发送的人的名字
      name: '小羊排',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      // id: 'oMOXU6u9s1IE5nYwePzOzxwMI7l4',
      id: 'PDU32421T3Nz7BjpmMGDUyTTWIFjMKwMoX1CUh6sh',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      // useTemplateId: '_xpbynzxoKffxXEbZNApI2XT4U0VM4aKf06pv7Pp9h0',
      useTemplateId: '0001',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '04-28',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '宝宝', year: '2003', date: '03-28',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        // {
        //   type: '生日', name: '小羊排', year: '2003', date: '04-29',
        // },
        // {
        //   type: '节日', name: '在一起纪念日', year: '2023', date: '09-15',
        // }
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2023-09-15' }
        // 结婚纪念日
        // { keyword: 'marry_day', date: '2022-09-09' },
      ],
    }
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  // CALLBACK_TEMPLATE_ID: 'EWJ8lz9Cs_10e1_Ar8rgaGkIP9irp82V95_tIw5r7vg',
  CALLBACK_TEMPLATE_ID: '0003',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      // id: 'oMOXU6u9s1IE5nYwePzOzxwMI7l4',
      id: 'PDU32417TLHKumrmNTLlME2GRysrBQnD3cuEyqLst'
    }
  ],

}

module.exports = USER_CONFIG

