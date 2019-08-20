# Usage
需要将本项目和主项目放在同级目录下

### 🚀🚀🚀 step 1
1: 在 plugin 项目的 package.json 里 声明
    "eggPlugin": {
      "name": "ua" // 这个名字和步骤3中exports里保持一致
    }

### 🚀🚀🚀 step 2
2: 在主项目里的 package.json 里添加依赖
    "dependencies":{
       "egg-plugin-ua": "../egg-plugin-ua"
    }

### 🚀🚀🚀 step 3
3: 在主项目里的 config/plugin 里添加
    exports.ua = {
      enable: true,
      package: 'egg-plugin-ua'
    };

### 🚀🚀🚀 step 4
  在主项目中的controller中使用this.ctx调用在插件中定义的方法

# The different between middleware and plugin
中间件更接近于处理整个application的逻辑或是某个指定路由的逻辑
插件更倾向于处理全局的共通的方法.