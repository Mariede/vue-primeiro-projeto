<template>
	<div class="home">
		<img alt="Vue logo" src="../assets/logo.png">

		<br>COMPONENTE PAI EM HOME 4

		<div id="form-layout">
			<input type="text" maxlength="10" v-model="msgs.msgShow1"> {{msgs.msgShow1}}
			<br><input type="text" maxlength="10" v-model="msgs.msgShow2"> {{msgs.msgShow2}}
		</div>

		<v-hello-world4
			v-model="msgs"
			@buttonHome4Click="alertOpen"
		>
			<div slot="msg-show1"><p class="show-mini">{{msgs.msgShow1}} (via slot)</p></div>
			<div slot="msg-show2"><p class="show-mini">{{msgs.msgShow2}} (via slot)</p></div>
		</v-hello-world4>

	</div>
</template>

<script>
	// @ is an alias to /src
	import VHelloWorld4 from '@/components/HelloWorld4.vue'

	export default {
		name: 'home4',

		components: {
			'v-hello-world4': VHelloWorld4
		},

		data () {
			return {
				msgs: {
					msgShow1: '10',
					msgShow2: '11'
				}
			}
		},

		methods: {
			alertOpen (computed) {
				alert (computed + ' (alert em Home 4)');
			}
		}
	}
</script>
