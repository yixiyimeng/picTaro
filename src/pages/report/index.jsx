import React, { Component, useState } from 'react';
import { View, Button, Text, Image, Navigator, Picker, Checkbox } from '@tarojs/components';
import { AtButton, AtForm, AtInput, AtCheckbox,AtIcon } from 'taro-ui';
import './index.scss';
import report from '../../assets/report.jpg';
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
			<View className="report-hd">
				<Text>第1页 / 共2页</Text>
			<Navigator className="arrow">	<Text>下一页</Text>
				<AtIcon  value='chevron-right' size='40' color='#6ac1a0'></AtIcon></Navigator>
			</View>
			<View className="report-bd">
				<AtButton className="shareBtn">分享</AtButton>
				<Image src={report} className="reportimg" mode="widthFix" />
			</View>
			<View className="report-ft">
				<View className="tip">温馨提示：若报告内容与您的纸质报告结果不符，请以纸质报告为准</View>
				<View className="btnlist at-row at-row__align--center at-row__justify--between">
					<AtButton className="at-col btn">留言</AtButton>
					<AtButton className="at-col btn">查看电子胶片</AtButton>
					<AtButton className="at-col btn">查看影像</AtButton>
				</View>
			</View>
		</View>
	);
};

export default Index;
