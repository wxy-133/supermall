module.export = {
  configureWebpack:{
    resolve:{
      alias:{
         '@':'src',
         'assets':'@/assets',
         'common':'@/components',
         'network':'@/assets'
      }
    }
  }
}