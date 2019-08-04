//创建模块
const Koa = require("koa");
const Router = require("koa-router");
const Static = require("koa-static");
//创建实例
const app = new Koa();
const router = new Router();
const Vue = require("vue");
const fs = require("fs");
const VueServerRender = require('vue-server-renderer');



const vm = new Vue({
	data(){
		return {msg:'hello zf'}
	},
	template:`<div>{{msg}}</div>`
});

const template = fs.readFileSync('./template.html','utf8');//用fs模块读取这个文件
//创建渲染函数
let render = VueServerRender.createRenderer({
	template   //模板里必须要有 vue-ssr-outlet
});//创建一个渲染器

router.get('/',async ctx=>{
	//通过渲染函数，渲染我们的vue实例
	ctx.body = await render.renderToString(vm);
	//渲染完成后拿render.renderToString(vm)的结果插入上面的template
});

app.use(router.routes())
app.listen(3000);
