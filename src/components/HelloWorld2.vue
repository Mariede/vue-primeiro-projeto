<template>
	<div class="hello2">

		COMPONENTE 2 (com v-model, via computed data no pai)

		<div id="form-layout">
			<input type="text" maxlength="10" v-model="msgs.msgShow1" ref="inputMsg1" @input="$emit('input', msgs)"> {{msgs.msgShow1}}
			<br><input type="text" maxlength="10" v-model="msgs.msgShow2" ref="inputMsg2" @input="$emit('input', msgs)"> {{msgs.msgShow2}}
			<br><input type="text" maxlength="10" v-model="msgShow3Local" ref="inputMsg3"> {{msgShow3Local}}
		</div>

		<slot name="msg-show1"></slot>
		<slot name="msg-show2"></slot>

		<p><button type="button" @click="alertOpen($event, 'Computado: ' + dataComputed)">Valor computado</button> <span class="show-mini">{{dataComputed}}</span></p>
	</div>
</template>

<script>
	export default {
		name: 'HelloWorld2',

		model: {
			prop: 'msgs',
			event: 'input'
		},

		props: {
			msgs: {
				type: Object,
				required: true
			}
		},

		data () {
			return {
				msgShow3Local: '6'
			}
		},

		watch: {
			'msgs.msgShow1' (val) {
				let element = this.$refs.inputMsg1;
				this.classCheck(val, element);
			},

			'msgs.msgShow2' (val) {
				let element = this.$refs.inputMsg2;
				this.classCheck(val, element);
			},

			msgShow3Local (val) {
				let element = this.$refs.inputMsg3;
				this.classCheck(val, element);
			}
		},

		computed: {
			dataComputed () {
				let fRet = 0;

				if (!isNaN(this.msgs.msgShow1) && !isNaN(this.msgs.msgShow2) && !isNaN(this.msgShow3Local)) {
					fRet = (parseInt(this.msgs.msgShow1, 10) || 0) + (parseInt(this.msgs.msgShow2, 10) || 0) + (parseInt(this.msgShow3Local, 10) || 0);
				}

				return fRet;
			}
		},

		methods: {
			alertOpen (e, computed) {
				e.preventDefault();
				this.$emit('buttonHome2Click', computed);
			},

			classCheck (val, element) {
				let element1Check = element.classList,
					class1Check = 'input-no-number';

				if (isNaN(val)) {
					element1Check.add(class1Check);
				} else {
					if (element1Check.contains(class1Check)) {
						element1Check.remove(class1Check);
					}
				}
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.hello2 {
		margin: 10px;
		padding: 10px;
		border: 1px solid khaki;
		background-color: khaki;
	}
	.input-no-number {
		border: 2px solid red;
		background-color: pink;
	}
	.show-mini {
		font-size: 10px;
	}
</style>
