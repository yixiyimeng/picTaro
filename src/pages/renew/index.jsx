import React, { Component, useState } from 'react';
import { View, Button, Text, Image, Navigator, Picker, Checkbox } from '@tarojs/components';
import { AtButton, AtForm, AtInput, AtCheckbox } from 'taro-ui';
import './index.scss';
import icon from '../../assets/icon4.png';
const Index = props => {
	const checkboxOption = [
		{
			value: 'list1',
			label: 'iPhone X'
		}
	];
	const [checked, setChecked] = useState(false);
	const handleChange = () => {
		setChecked(!checked);
	};
	return (
		<View className="index">
			<Image src={icon} className="icon" mode="widthFix"/>
			<View className="tip">是否续费5年20元？</View>
			<AtButton className="payBtn">支付</AtButton>
			<View className="read at-row at-row__align--center at-row__justify--center">
				<Checkbox value="选中" checked={checked} onChange={handleChange} style='margin-right: 20rpx' />
				<View className="txt">
					<Text onClick={handleChange}>我已经详细阅读并同意</Text>
					<Navigator>《支付协议》</Navigator>
				</View>
			</View>
		</View>
	);
};

export default Index;
