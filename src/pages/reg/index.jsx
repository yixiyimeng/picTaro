import React, { Component } from 'react';
import { View, Text } from '@tarojs/components';
import { AtButton } from 'taro-ui'
export default class Index extends Component {
	componentWillMount() {}

	componentDidMount() {}

	componentWillUnmount() {}

	componentDidShow() {}

	componentDidHide() {}

	render() {
		return (
			<View className="index">
				<AtButton>按钮文案</AtButton>
				<Text>Hello world!</Text>
			</View>
		);
	}
}
