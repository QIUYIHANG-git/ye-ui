<template>
	<div class="pages">
		<top-navigation :ins="ins"></top-navigation>
		<certre></certre>
		<yebase></yebase>
	</div>
</template>

<script>
	import TopNavigation from '../components/conent/topNavigation/TopNavigation.vue'
	import certre from '../components/conent/certre/certre.vue'
	import yebase from '../components/conent/yebase/yebase.vue'
	export default {
		name:'home',
		components:{
			TopNavigation,
			certre,
			yebase
		},
		data(){
			return{
				ins:['指南','组件','资源']
			}
		},
		mounted() {
			
		},
		methods:{
			btnwu(){
				let _this = this
				if(_this.wustate === true){
					this.fun(_this.boxone[4],'height',_this.speed,175,function(){
					_this.wustate = false
					})
				}else if(_this.wustate === false){
					this.fun(_this.boxone[4],'height',_this.speed,55,function(){
						_this.wustate = true
					})
				}
			},
			btnfove(){
				let _this = this
				if(_this.fovestate === true){
					this.fun(_this.boxone[3],'height',_this.speed,175,function(){
					_this.fovestate = false
					})
				}else if(_this.fovestate === false){
					this.fun(_this.boxone[3],'height',_this.speed,55,function(){
						_this.fovestate = true
					})
				}
			},
			btntherr(){
				let _this = this
				if(_this.therrtate === true){
					this.fun(_this.boxone[2],'height',_this.speed,175,function(){
					_this.therrtate = false
					})
				}else if(_this.therrtate === false){
					this.fun(_this.boxone[2],'height',_this.speed,55,function(){
						_this.therrtate = true
					})
				}
			},
			btntow(){
				let _this = this
				if(_this.towstate === true){
					this.fun(_this.boxone[1],'height',_this.speed,175,function(){
					_this.towstate = false
					})
				}else if(_this.towstate === false){
					this.fun(_this.boxone[1],'height',_this.speed,55,function(){
						_this.towstate = true
					})
				}
			},
			btnone(){
				let _this = this
				if(_this.onestate === true){
					this.fun(_this.boxone[0],'height',_this.speed,175,function(){
					_this.onestate = false
					})
				}else if(_this.onestate === false){
					this.fun(_this.boxone[0],'height',_this.speed,55,function(){
						_this.onestate = true
					})
				}
			},
			btne(){
				console.log('2222222222222')
				let _this = this
				if(_this.state === true){
					this.fun(_this.box[0],'height', _this.speed,175,function(){
						console.log('2222222222222')
						_this.state = false
					})
				}else if(_this.state === false ){
					this.fun(_this.box[0],'height', _this.speed,55,function(){
						console.log('2222222222222')
						_this.state = true
					})
				}
			},
			fun(obj,attr,speed,target,mages){
				let _this = this
				let current = parseInt( _this.getstyle(obj,attr))
				// 判断速度方向
				if(current >= target){
					speed = -speed
				}
				console.log(speed)
				// 过渡动画
				clearInterval(_this.homesp)
				this.homesp = setInterval(function(){
				    let oldvalue = parseInt( _this.getstyle(obj,attr))
					_this.conleft = oldvalue + speed
					obj.style[attr] = _this.conleft +'px'
					console.log( _this.conleft)
					console.log(target)
					if((speed > 0 && _this.conleft >=target) || (speed < 0 && _this.conleft <= target)){
						console.log("停止了")
						clearInterval(_this.homesp)
						mages()
					}else if(_this.conleft < 0){
						console.log("也停止了")
						clearInterval(_this.homesp)
						mages()
					}
				},30)
			},
			// 获取物体当前样式值
			getstyle(obj,name){
				if(window.getComputedStyle){
					return getComputedStyle(obj,name)[name]
				}else{
					return obj.currentStyle[name]
				}
			},
		
			codeshow(){
                if(this.codeone === true){
					this.codeone = false
				}else if(this.codeone === false){
					this.codeone = true
				}
			}
		},
	}
</script>

<style scoped="scoped" lang="less">
	.pages{
		padding: 0;
		margin: 0;
		.itme{
			margin-left: 100px;
			background-color: #c7c7c7;
			width: 300px;
			height:calc(100vh);
			text-align: center;
			box-shadow: 5px 0 1px rgba(36,36,36,.3);
			overflow:auto;
			.hei{
				background-color: #5797ff;
				padding: 15px 0;
				color: #fff;
				box-shadow: 0 1px 5px rgba(0,0,0,1) 
			}
		}
		.box{
			font-size: 24px;
			margin: 15px auto 0px auto;
			width: 50%;
			// padding: 10px;
			overflow: hidden;
			background-color: #fff;
			box-shadow: 1px 1px 10px rgba(255,255,255,.5);
			.span{
				cursor: pointer;
			    width: 100%;
				display: inline-block;
				padding: 10px 0;
			
				background-color: #e56ec0;
				color: #c7c7c7;
			}
			li{
				cursor: pointer;
				padding: 10px 0;
				margin: 10px 0;
				list-style: none;
				color: #696969;
			}
		}
	    .boxone{
			font-size: 24px;
			margin: 0px auto ;
			width: 50%;
			// padding: 10px;
			overflow: hidden;
			background-color: #fff;
			box-shadow: 1px 1px 10px rgba(255,255,255,.5);
			.span{
				cursor: pointer;
			    width: 100%;
				display: inline-block;
				padding: 10px 0;
			
				background-color: #e56ec0;
				color: #c7c7c7;
			}
			li{
				cursor: pointer;
				padding: 10px 0;
				margin: 10px 0;
				list-style: none;
				color: #696969;
			}
		}
	    .right-itme{
			margin-left: 50px;
			padding: 0 15px;
			width: 900px;
			height: calc(100vh);
			background-color: #ffd3b5;
			overflow: auto;
			.title{
				font-size: 24px;
				text-align: center;
				padding: 10px 0;
				color: #FF0000;
				letter-spacing: 3px;
				box-shadow: 0 1px 1px rgba(255,0,255,.6);
			}
		}
	}
	li:hover{
		background-color: #0095df;
	}
	ul{
		list-style: none;
	}
	.box-text{
		margin-top: 25px;
		font-size: 28px;
		text-shadow: 1px 0 1px #696969;
		font-weight: bold;
		letter-spacing: 2px;
	}
	.dao-box{
		margin-top: 25px;
		background-color: #a7ffec;
		padding: 15px 15px;
		ul{
			display: flex;
			// justify-content: space-between;
			align-items: center;
			li{
				display:inline-block;
				margin-right: 15px;
				background-color: #ffff7f;
				padding: 7px;
				cursor: pointer;
				a{
					display: inline-block;
				}
				span{
					display: inline-block;
					margin-left: 5px;
					border-top: 10px solid #7fff50;
					border-left: 10px solid rgba(0,0,0,0);
					transform:rotate(45deg) ;
				}
			}
			
		} 
	}
	.dao-box li:hover  span{
		transform:rotate(135deg) ;
	}
	
	// 显示代码
	.code-box{
		background-color: #94fff3;
		.show{
			text-align: center;
			cursor: pointer;
			padding: 5px 0;
			background-color: #70ffe3;
			box-shadow: 0 2px 1px #54ffe3;
		}
	}
	.dao-one{
		position: relative;
	}
	
	.img-box{
		li{
			list-style: none vb98;
		}
	}
</style>
