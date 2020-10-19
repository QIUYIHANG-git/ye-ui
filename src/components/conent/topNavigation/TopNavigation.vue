<template>
	<div class="ye-navtop">
		<div class="ye-navitme" >
			<div><img src="../../../assets/img/nihao.png" alt=""></div>
			<div class="ye-input"><input type="text"> <img src="../../../assets/img/sousuo.png" alt=""></div>
		</div>
		<div class="ye-navitme-text" >
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
				console.log(this.shownav)
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
		.ye-navitme{
			width: 40%;
			display: flex;
			justify-content: space-around;
			align-items: center;
			.ye-input{
				padding:.2rem .5rem;
				display: flex;
				justify-content: space-around;
				align-items: center;
				background-color: #f0f0f0;
				input{
					border: none;
					background-color: #f0f0f0;
				}
			}
		}
		.ye-navitme-text{
			width: 60%;
			color: #aaaaaa;
			display: flex;
			justify-content: space-around;
			align-items: center;
			cursor: pointer;
		}
		.ye-navitme-texty{
			width: 60%;
			color: #008b75;
			display: flex;
			justify-content: space-around;
			align-items: center;
		}
	}
</style>
