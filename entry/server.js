import { createApp } from '../src/main'

export default context => {
    return new Promise((resolve, reject) => {
        const {app,router} = createApp();
        // 更改路由
        app.$router.push(context.url)
        //设置其他的信息
        router.onReady(() => {
            const matchedComponents = router.getMatchedComponents()
            // 匹配不到的路由，执行 reject 函数，并返回 404
            if (!matchedComponents.length) {
              return reject({ code: 404 })
            }
            context.meta = router.currentRoute.meta;

             Promise.all(matchedComponents.map(Component => {
                 if (Component.asyncData) {
                   return Component.asyncData({
                    store:app.$store,
                    route: router.currentRoute
                  })
                }
              })).then((resp)=>{
                //console.log('app.$store.state',app.$store.state);
                context.state = app.$store.state
                resolve(app)
              }).catch(reject);
            //resolve(app);
          }, reject);
    })

}