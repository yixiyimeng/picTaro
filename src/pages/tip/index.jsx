import React, { Component, useState } from 'react';
import { View, Button, Text, Image, Navigator, Picker, Checkbox } from '@tarojs/components';
import { AtButton, AtForm, AtInput, AtCheckbox, AtIcon } from 'taro-ui';
import './index.scss';
const Index = props => {
	return (
		<View className="index">
			<View className="txt">检查日期：2020-04-03 11:11:11 </View>
			<View className="txt">过期日期：2020-07-03 11:11:11</View>
			<View className="tip">您的云影像已到保存期限，无法浏览</View>
		</View>
	);
};

export default Index;
