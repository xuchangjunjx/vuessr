const exp = require('express')
const express = exp()
const createRenderer = require('vue-server-renderer').createRenderer;
const createApp = require('./dist/bundle.server.js')['default']


// 设置静态文件目录
express.use('/', exp.static(__dirname + '/dist'))


//const clientBundleFileUrl = '/bundle.client.js'

const renderer = createRenderer({
    template: require('fs').readFileSync('./index.template.html', 'utf-8')
  });
// 响应路由请求
express.get('*', (req, res) => {
    const context = { url: req.url }
    
    // 创建vue实例，传入请求路由信息
    createApp(context).then(app => {
        let state = JSON.stringify(context.state);
        let metas = [];
        const metas_ = context.meta.metas;
        for(let key in  metas_){
                let asd = ` <meta name="${key}" content="${metas_[key]}"/>`;
                metas.push(asd);
        }
        const header = {
            title: context.meta.title,
            meta: metas.join('\n')
          };          
        renderer.renderToString(app, header,(err, html) => {
            if (err) { return res.state(500).end('运行时错误') };
            res.send(html);
        })
    }, err => {
        if(err.code === 404) { res.status(404).end('所请求的页面不存在') };
    })
})


// 服务器监听地址
express.listen(8080, () => {
    console.log('服务器已启动！')
})