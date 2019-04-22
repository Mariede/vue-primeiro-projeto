<template>
	<div class="hello1">

		COMPONENTE 1 (com props sync, via data local no filho)

		<div id="form-layout">
			<input type="text" maxlength="10" v-model="msgShow1Local" ref="inputMsg1"> {{msgShow1Local}}
			<br><input type="text" maxlength="10" v-model="msgShow2Local" ref="inputMsg2"> {{msgShow2Local}}
			<br><input type="text" maxlength="10" v-model="msgShow3Local" ref="inputMsg3"> {{msgShow3Local}}
		</div>

		<slot name="msg-show1"></slot>
		<slot name="msg-show2"></slot>

		<p><button type="button" @click="alertOpen($event, 'Computado: ')">Valor computado</button> <span class="show-mini"> {{dataComputed}}</span></p>
	</div>
</template>

<script>
	export default {
		name: 'HelloWorld1',

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
				msgShow1Local: null,			// forma 1, inicializar via watch immediate
				msgShow2Local: this.msgShow2,	// forma 2, inicializar via data
				msgShow3Local: '3'
			}
		},

		watch: {
			msgShow1: {
				handler (val) {
					this.msgShow1Local = val;
				},
				immediate: true
			},

			msgShow2 (val) {
				this.msgShow2Local = val;
			},

			msgShow1Local (val) {
				let element = this.$refs.inputMsg1;
				this.classCheck(val, element);

				this.$emit('update:msgShow1', val);
			},

			msgShow2Local (val) {
				let element = this.$refs.inputMsg2;
				this.classCheck(val, element);

				this.$emit('update:msgShow2', val);
			},

			msgShow3Local (val) {
				let element = this.$refs.inputMsg3;
				this.classCheck(val, element);
			}
		},

		computed: {
			dataComputed () {
				let fRet = 0;

				if (!isNaN(this.msgShow1Local) && !isNaN(this.msgShow2Local) && !isNaN(this.msgShow3Local)) {
					fRet = (parseInt(this.msgShow1Local, 10) || 0) + (parseInt(this.msgShow2Local, 10) || 0) + (parseInt(this.msgShow3Local, 10) || 0);
				}

				return fRet;
			}
		},

		methods: {
			alertOpen (e, computedText) {
				e.preventDefault();
				this.$emit('buttonHome1Click', computedText + this.dataComputed);
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
	.hello1 {
		margin: 10px;
		padding: 10px;
		border: 1px solid sandybrown;
		background-color: sandybrown;
	}
	.input-no-number {
		border: 2px solid red;
		background-color: pink;
	}
	.show-mini {
		font-size: 10px;
	}
</style>
