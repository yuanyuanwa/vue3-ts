<template>
	<div class="login">
		<div style="display:flex;justify-content: center;align-items: center;height: 100%;">
			<el-card class="box-card" style="width:25%;padding:10px">
				<!-- <template #header>
					<div class="card-header">
						<span>Card name</span>
						<el-button class="button" type="text">Operation button</el-button>
					</div>
				</template>-->
				<!-- <div v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</div> -->
				<el-form
					ref="ruleFormRef"
					:model="formData"
					status-icon
					:rules="rules"
					label-position='right'
					label-width="70px"
					class="demo-ruleForm"
				>
					<el-form-item label="name：" prop="pass">
						<el-input v-model="formData.pass" type="password" autocomplete="off" />
					</el-form-item>
					<el-form-item label="password：" prop="checkPass">
						<el-input v-model="formData.checkPass" type="password" autocomplete="off" />
					</el-form-item>
			
						<el-button type="primary" @click="submitForm(ruleFormRef)" style="width:100%">login</el-button>
		
				</el-form>
			</el-card>
		</div>
		<!-- <div>login111</div>
		<el-button type="primary" @click="say()">Primary</el-button>-->
	</div>
</template>

<script lang="ts">
import { reactive, ref } from 'vue'
export default {
	name: 'login',
	setup() {
		const formData = reactive({
			pass: '',
			checkPass: '',
		})
		//返回一个对象
		return {
		formData
		}
	}
}
</script>

<style lang="scss" scoped>
.login {
	background: url(@/assets/bgImg/login.JPG);
	background-size: cover;
	height: 100vh;
	width: 100%;
	backdrop-filter: blur(10px); /* 模糊半径 */
}

.login::before {
	content: "";
	position: absolute; /* 一定要用绝对定位 */
	width: 100%;
	height: 100%;
	left: 0px;
	z-index: -1;
	backdrop-filter: blur(10px); /* 模糊半径 */
}
</style>
