<template>
	<div class="ye-navtop">
		<div class="ye-navitme" >
			<div><img src="../../../assets/img/nihao.png" alt=""></div>
			<div class="ye-input"><input type="text"> <img src="../../../assets/img/sousuo.png" alt=""></div>
		</div>
		<div class="ye-navitme-box" >
			<div :class="shownav == index?'ye-navitme-texty':'ye-navitme-text'" v-for="(navarr,index) in ins" :key="index" @click="indexnav(index)">{{navarr}}</div>
		</div>
	</div>
</template>

<script>
	
	export default {
		props:{
			ins:{
				type:Array,
				default:[]
			}
		},
		data(){
			return{
				shownav:0
			}
		},
		methods:{
			indexnav(index){
				this.shownav = index
			}	
		}
		
	}
</script>

<style lang="less">
	
	.ye-navtop{
		width: 88vw;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-bottom: 1px solid rgba(255,0,0,.2);
		.ye-navitme{
			width: 40%;
			display: flex;
			justify-content: space-around;
			align-items: center;
			.ye-input{
				display: flex;
				height: 43px;
				width: 308px;
				justify-content: space-around;
				align-items: center;
				background-color: #f0f0f0;
				input{
					border: none;
					height: 80%;
					width: 80%;
					box-sizing: border-box;
					background-color: #f0f0f0;
				}
			}
		}
		.ye-navitme-box{
			width: 60%;
			padding: 0 18.6875rem;
			display: flex;
			cursor: pointer;
			justify-content: space-around;
			align-items: center;
			.ye-navitme-text{
				color: #aaaaaa;
				font-size: 1.375rem;
				
			}
			.ye-navitme-texty{
				color: #008b75;
				font-size: 1.375rem;
			}
		}
		
	}
</style>
