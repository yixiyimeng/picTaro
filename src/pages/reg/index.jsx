import React, { Component } from 'react';
import { View, Text, Image,Navigator } from '@tarojs/components';
import { AtButton, AtForm, AtInput } from 'taro-ui';
import './index.scss';
export default class Index extends Component {
	componentWillMount() {}

	componentDidMount() {}

	componentWillUnmount() {}

	componentDidShow() {}

	componentDidHide() {}
	constructor() {
		super(...arguments);
		this.state = {
			value: ''
		};
	}
	handleChange(value) {
		this.setState({
			value
		});
		// 在小程序中，如果想改变 value 的值，需要 `return value` 从而改变输入框的当前值
		return value;
	}
	render() {
		return (
			<View className="index">
				<Image className="logo" src="../../assets/logo.png" mode="widthFix" />
				<AtForm>
					<AtInput
						placeholderClass="placeholderClass"
						clear
						name="phone"
						border={false}
						title=""
						type="phone"
						placeholder="手机号码"
						value={this.state.value}
						onChange={this.handleChange.bind(this)}
					/>
					<AtInput
						placeholderClass="placeholderClass"
						clear
						name="code"
						border={false}
						title=""
						type="phone"
						placeholder="验证码"
						value={this.state.value}
						onChange={this.handleChange.bind(this)}
					>
						<Text className="getCode">获取验证码</Text>
					</AtInput>
					<AtInput
						placeholderClass="placeholderClass"
						clear
						name="name"
						border={false}
						title=""
						type="text"
						placeholder="姓名"
						value={this.state.value}
						onChange={this.handleChange.bind(this)}
					/>
					<AtButton formType="submit" className="submitBtn">注册</AtButton>
					<View className="at-row agree at-row__justify--center at-row__align--center"><View className="check"></View><Text>我已经详细阅读并同意</Text> <Navigator>《服务协议》</Navigator><Navigator>《法律声明及隐私政策》</Navigator></View>
				</AtForm>
			</View>
		);
	}
}
