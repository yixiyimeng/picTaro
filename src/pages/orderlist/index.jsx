import React, { Component, useState } from 'react';
import { View, Button, Text, Image, Navigator, Picker } from '@tarojs/components';
import { AtButton, AtForm, AtInput, AtList, AtListItem } from 'taro-ui';
import './index.scss';
import icon from '../../assets/icon2.png';
const Index = props => {
	return (
		<View className="index">
			<view className="nav at-row at-row__justify--between">
				<View className="nav-item at-col">全部</View>
				<View className="nav-item at-col">待续费</View>
				<View className="nav-item at-col">已续费</View>
				<View className="nav-item at-col">退费</View>
			</view>
		</View>
	);
};

export default Index;
