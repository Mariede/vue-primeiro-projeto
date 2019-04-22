<template>
	<div class="hello3">

		COMPONENTE 3 (com props sync, via prop no filho)

		<div id="form-layout">
			<input type="text" maxlength="10" :value="msgShow1" ref="inputMsg1" @input="$emit('update:msgShow1', $event.target.value)"> {{msgShow1}}
			<br><input type="text" maxlength="10" :value="msgShow2" ref="inputMsg2" @input="$emit('update:msgShow2', $event.target.value)"> {{msgShow2}}
			<br><input type="text" maxlength="10" v-model="msgShow3Local" ref="inputMsg3"> {{msgShow3Local}}
		</div>

		<slot name="msg-show1"></slot>
		<slot name="msg-show2"></slot>

		<p><button type="button" @click="alertOpen($event, 'Computado: ')">Valor computado</button> <span class="show-mini"> {{dataComputed}}</span></p>
	</div>
</template>

<script>
	export default {
		name: 'HelloWorld3',

		props: {
			msgShow1: {
				type: String,
				required: true
			},

			msgShow2: {
				type: String,
				required: true
			}
		},

		data () {
			return {
				msgShow3Local: '9'
			}
		},

		watch: {
			msgShow1 (val) {
				let element = this.$refs.inputMsg1;
				this.classCheck(val, element);
			},

			msgShow2 (val) {
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

				if (!isNaN(this.msgShow1) && !isNaN(this.msgShow2) && !isNaN(this.msgShow3Local)) {
					fRet = (parseInt(this.msgShow1, 10) || 0) + (parseInt(this.msgShow2, 10) || 0) + (parseInt(this.msgShow3Local, 10) || 0);
				}

				return fRet;
			}
		},

		methods: {
			alertOpen (e, computedText) {
				e.preventDefault();
				this.$emit('buttonHome3Click', computedText + this.dataComputed);
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
	.hello3 {
		margin: 10px;
		padding: 10px;
		border: 1px solid wheat;
		background-color: wheat;
	}
	.input-no-number {
		border: 2px solid red;
		background-color: pink;
	}
	.show-mini {
		font-size: 10px;
	}
</style>
