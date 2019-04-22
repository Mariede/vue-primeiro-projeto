<template>
	<div class="home">
		<img alt="Vue logo" src="../assets/logo.png">

		<br>COMPONENTE PAI EM HOME 3

		<div id="form-layout">
			<input type="text" maxlength="10" v-model="msgShow1"> {{msgShow1}}
			<br><input type="text" maxlength="10" v-model="msgShow2"> {{msgShow2}}
		</div>

		<v-hello-world3
			:msgShow1.sync="msgShow1"
			:msgShow2.sync="msgShow2"
			@buttonHome3Click="alertOpen"
		>
			<div slot="msg-show1"><p class="show-mini">{{msgShow1}} (via slot)</p></div>
			<div slot="msg-show2"><p class="show-mini">{{msgShow2}} (via slot)</p></div>
		</v-hello-world3>

	</div>
</template>

<script>
	// @ is an alias to /src
	import VHelloWorld3 from '@/components/HelloWorld3.vue'

	export default {
		name: 'home3',

		components: {
			'v-hello-world3': VHelloWorld3
		},

		data () {
			return {
				msgShow1: '7',
				msgShow2: '8',
			}
		},

		methods: {
			alertOpen (computed) {
				alert (computed + ' (alert em Home 3)');
			}
		}
	}
</script>
