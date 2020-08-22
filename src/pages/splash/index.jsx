import React, { Component, useState } from 'react';
import { View, Button, Text, Image, Navigator } from '@tarojs/components';
import { AtButton, AtForm, AtInput } from 'taro-ui';
import './index.scss';
import bg from '../../assets/bg.jpg';
import logo from '../../assets/logo2.png';
const Index = props => {
	return (
		<View className="index">
			<Image src={bg} className="bg" mode="widthFix"></Image>
			<Image src={logo} className="logo" mode="widthFix"></Image>
			<Navigator url="/pages/reg/index"  className="link">登录/注册</Navigator>
		</View>
	);
};

export default Index;
