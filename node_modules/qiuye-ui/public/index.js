import cjhcjAudio from '../src/cjhcjAudio.vue'  //导入你即将发布到npm上的组件

cjhcjAudio.install = Vue => Vue.component(cjhcjAudio.name, cjhcjAudio);

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(cjhcjAudio);
}

export default cjhcjAudio   //这里是导出