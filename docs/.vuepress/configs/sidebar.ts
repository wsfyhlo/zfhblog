import { sidebar } from 'vuepress-theme-hope'

export default sidebar({
  /**
   * 小记
   */
  '/小记/': ['初来南京', '二二年八月总结', '二二年九月总结'],
  /**
   * 开发笔记
   */
  '/开发笔记/CSS/': ['calc函数', 'CSS文本溢出处理方式'],
  '/开发笔记/JS/': [
    '动态修改favicon网站图标地址',
    '数组对象对比找出差异项',
    '关于async和await',
    '理解js事件循环',
    '数组对象根据对象中指定的属性去重',
    '数组对象根据数据项状态属性如何筛选数据',
    '重新理解闭包',
    '在输入框的光标处插入内容',
    'Array.prototype.slice.call()&Array.from()的应用和理解',
    'js的严格模式',
  ],
  '/开发笔记/Node/': [
    '在Vuekoa项目中如何解决跨域和cookie问题',
    '记一次koa2项目部署过程',
    'm1如何安装低版本node',
  ],
  '/开发笔记/Vue/': [
    'vue2如何实现界面刷新',
    'vue2实现滚动窗口同步滚动',
    'vue2中的css深度选择器',
    'vue2虚拟列表实现',
    'vue2echarts数据报表项目学习心得',
    'v-modelSync修饰符使用和原理',
    'element-ui清除表单的奇怪现象',
    'element-ui树控件自动定位到当前选择项',
    'element-ui表格中修改switch开关状态的二种方法',
    'vue3vite3.0项目支持路径别名',
    'vue3+ElementPlus+Koa2全栈开发后台系统学习记录',
    'elementPlus公共表格封装',
    '利用tooltip实现文本超出提示',
  ],
  '/开发笔记/React/': [
    '开发流程管理平台学习心得',
    'Hook对比HOC和renderProps',
    'React中引入图片',
  ],
  /**
   *  算法
   */
  '/算法/': [
    '',
    '时间空间复杂度',
    '栈',
    '队列',
    '链表',
    '集合',
    '字典',
    '树',
    '图',
  ],
  /**
   * 前端开发
   */
  '/前端开发/玩转CSS艺术之美/': ['浏览器', '回流重绘'],
  '/前端开发/移动开发/': ['移动Web开发入门'],
  '/前端开发/重学前端/': ['JavaScript'],
  '/前端开发/canvas/': ['canvas基础'],
  '/前端开发/CSS3/': [
    '基础与盒模型',
    '浮动与定位',
    '边框圆角与盒子阴影',
    '背景与渐变',
    '2D与3D转换',
    '过渡与动画',
  ],
  '/前端开发/CSS进阶/': ['Flex布局', 'Sass'],
  '/前端开发/ES6/': [
    'let和const',
    '模板字符串与箭头函数',
    '解构赋值',
    '对象字面量的增强与函数参数的默认值',
    '剩余参数与展开运算符',
    'Set和Map数据结构',
    '遍历器与for...of循环',
    'ES6的新增方法',
    'Promise',
    'Class类',
    'Module模块',
    'Generator',
  ],
  '/前端开发/JS基础/': [
    '变量与数据类型',
    '操作符',
    '流程控制语句',
    '数组',
    '函数',
    'DOM',
    'BOM',
    '面向对象',
    '正则表达式',
  ],
  '/前端开发/JS进阶/': ['深入理解javascript原型和闭包'],
  '/前端开发/JS设计模式/': ['面向对象'],
  '/前端开发/React/': [
    'JSX核心语法',
    'React脚手架',
    'React组件化开发',
    'React中的CSS',
    'AntDesgin组件库',
    'React中axios',
    'React的过渡动画',
    'Redux',
    'React-router',
    'ReactHook',
    'React与TypeScript',
    'React的SSR',
    'React好用的库',
  ],
  '/前端开发/Three.js/': [
    '开发环境搭建',
    'Three开发入门与调试设置',
    'Threejs物体',
  ],
  '/前端开发/TypeScript/': ['TS基础', 'TS面向对象', 'TS进阶'],
  '/前端开发/Vue/': [
    'Vue核心',
    'Vue组件化编程',
    'VueX',
    'VueRouter',
    'Vue3',
    'Pinia',
  ],
  /**
   * 后端开发
   */
  '/后端开发/深入node/': ['邂逅node', '全局对象和模块化开发'],
  '/后端开发/node入门/': ['node.js基础', 'node.js处理HTTP'],
  '/后端开发/数据库/': ['MySQL', 'mongoDB'],
  /**
   * 基础知识
   */
  '/基础知识/计算机网络/': ['概述篇'],
  '/基础知识/浏览器工作原理与实践/': ['思维导图', '01'],
  /**
   * 前端面试
   */
  '/前端面试/面试题总结/': [
    'html面试题',
    'CSS面试题',
    'JS面试题',
    'Vue面试题',
    '计网&浏览器面试题',
    '手撕代码',
  ],
  '/前端面试/面试复盘/': [
    '21.9.14一面复盘',
    '21.10.12技术面',
    '21.10.20技术面复盘',
    '21.10.21技术面复盘',
  ],
  /**
   * 食谱
   */
  '/食谱/': ['青椒火腿炒鸡蛋', '泡面的神仙吃法'],
})
