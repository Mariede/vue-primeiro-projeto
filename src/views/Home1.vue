<template>
	<div class="home">
		<img alt="Vue logo" src="../assets/logo.png">

		<br>COMPONENTE PAI EM HOME 1

		<div id="form-layout">
			<input type="text" maxlength="10" v-model="msgShow1"> {{msgShow1}}
			<br><input type="text" maxlength="10" v-model="msgShow2"> {{msgShow2}}
		</div>

		<v-hello-world1
			:msgShow1.sync="msgShow1"
			:msgShow2.sync="msgShow2"
			@buttonHome1Click="alertOpen"
		>
			<div slot="msg-show1"><p class="show-mini">{{msgShow1}} (via slot)</p></div>
			<div slot="msg-show2"><p class="show-mini">{{msgShow2}} (via slot)</p></div>
		</v-hello-world1>

	</div>
</template>

<script>
	// @ is an alias to /src
	import VHelloWorld1 from '@/components/HelloWorld1.vue'

	export default {
		name: 'home1',

		components: {
			'v-hello-world1': VHelloWorld1
		},

		data () {
			return {
				msgShow1: '1',
				msgShow2: '2',
			}
		},

		methods: {
			alertOpen (computed) {
				alert (computed + ' (alert em Home 1)');
			}
		}
	}
</script>
