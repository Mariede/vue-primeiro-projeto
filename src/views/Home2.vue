<template>
	<div class="home">
		<img alt="Vue logo" src="../assets/logo.png">

		<br>COMPONENTE PAI EM HOME 2

		<div id="form-layout">
			<input type="text" maxlength="10" v-model="msgShow1"> {{msgShow1}}
			<br><input type="text" maxlength="10" v-model="msgShow2"> {{msgShow2}}
		</div>

		<v-hello-world2
			v-model="msgs"
			@buttonHome2Click="alertOpen"
		>
			<div slot="msg-show1"><p class="show-mini">{{msgShow1}} (via slot)</p></div>
			<div slot="msg-show2"><p class="show-mini">{{msgShow2}} (via slot)</p></div>
		</v-hello-world2>

	</div>
</template>

<script>
	// @ is an alias to /src
	import VHelloWorld2 from '@/components/HelloWorld2.vue'

	export default {
		name: 'home2',

		components: {
			'v-hello-world2': VHelloWorld2
		},

		data () {
			return {
				msgShow1: '4',
				msgShow2: '5',
			}
		},

		computed: {
			// msgs () {
			// 	return {
			// 		msgShow1: this.msgShow1,
			// 		msgShow2: this.msgShow2
			// 	}
			// }
			msgs: {
				get () {
				// getter padrao
					return {
						msgShow1: this.msgShow1,
						msgShow2: this.msgShow2
					}
				},
				set (val) {
				// setter
					this.msgShow1 = val.msgShow1;
					this.msgShow2 = val.msgShow2;
				}
			}
		},

		methods: {
			alertOpen (computed) {
				alert (computed + ' (alert em Home 2)');
			}
		}
	}
</script>
