import React, { Component, useState } from 'react';
import { View, Button, Text, Image, Navigator, Picker, Checkbox } from '@tarojs/components';
import { AtButton, AtForm, AtInput, AtCheckbox, AtIcon } from 'taro-ui';
import '../report/index.scss';
import report from '../../assets/report.jpg';
const Index = props => {
	return (
		<View className="index origReport">
			<View className="report-hd">
				<Text>第1页 / 共2页</Text>
				<Navigator className="arrow">
					<Text>下一页</Text>
					<AtIcon value="chevron-right" size="40" color="#6ac1a0" />
				</Navigator>
			</View>
			<View className="report-bd">
				<Image src={report} className="reportimg" mode="widthFix" />
			</View>
		</View>
	);
};

export default Index;
