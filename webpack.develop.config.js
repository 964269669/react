var path = require('path');
// 自动打开浏览器插件
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
module.exports = {
    // 选择一个入口文件
    //entry:path.resolve(__dirname,'src/js/app.js'),
    entry:[
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:8080',
        path.resolve(__dirname,'src/index.js')
    ],

    // 输出文件位置
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    // 配置加载器，加载器是在webpack真正编译之前先执行一些预处理操作
    module: {
        loaders: [
            // 处理jsx和es6语法的
            {
                test: /\.jsx?$/, // 用正则来匹配文件路径，这段意思是匹配 js 或者 jsx
                loader: 'babel',// 加载模块 "babel" 是 "babel-loader" 的缩写
                query: {
                    presets: ['es2015', 'react','stage-0','stage-1','stage-2','stage-3']
                }
            },
            // 处理js中引用的css
            {
                test: /\.css$/, // Only .css files
                loader: 'style!css' // 如果同时用两个加载器那中间用！隔开，而且执行顺序是从右往左
            },
            // 处理sass文件
            {
                test: /\.scss$/,
                loader: 'style!css!sass'
            },
            // 处理图片的加载器
            {
                test: /\.(png|jpg)$/,
                // 如果图片的大小小于limit的限制大小，那webpack就会把图片装化为base64的字符串，添加在js文件中。否则就是图片路径
                // 单位是bit     1b=8bit   1kb=1024b   ~3kb
                // 用base64字符串就是为了减少网络请求，但是图片是有大小限制的，一般是小于3kb的才处理为base64
                // jpg和base64字符串本质都是010101010的机器码，所以可以相互转换
                // name属性可以控制大于3kb的图片的输出位置
                loader: 'url?limit=25000&name=img/[name].[ext]' // 如果在加载器后面加参数就用？号
            }

        ]
    },
    resolve: {
        // 自动扩展文件后缀名，意味着我们require模块可以省略不写后缀名
        // 注意一下, extensions 第一个是空字符串! 对应不需要后缀的情况.
        extensions: ['', '.js', '.json', '.scss', '.jsx'],
        // 模块别名定义，方便后续直接引用别名，无须多写长长的地址。后续直接 require('AppStore') 即可
        alias: {
            AppStore: 'js/stores/AppStores.js',
            ActionType: 'js/actions/ActionType.js',
            AppAction: 'js/actions/AppAction.js'
        }
    },
    plugins: [
        new OpenBrowserPlugin({url: 'http://localhost:8080/', browser: 'chrome'})
    ]

}
