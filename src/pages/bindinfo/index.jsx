import React, { Component, useState } from 'react';
import { View, Button, Text, Image, Navigator } from '@tarojs/components';
import { AtButton, AtForm, AtInput } from 'taro-ui';
import './index.scss';
import icon from '../../assets/icon1.png';
import addicon from '../../assets/add.png';
const Index = props => {
	return (
		<View className="index">
			<View className="cu-bar at-row at-row__align--center at-row__justify--between">
				<View className="title">订单管理</View>
				<Navigator className="link" url="/pages/editinfo/index">
					修改资料
				</Navigator>
			</View>
			<View className="list">
				<View className="item at-row at-row__align--center">
					<Image src={icon} className="icon" mode="widthFix" />
					<View className="at-col">
						<View className="name">上海瑞金医院</View>
						<View className="num">注册号：12253442</View>
					</View>
					<View className="text-right">
						<View>本人</View>
						<View className="name">徐彦栋</View>
					</View>
				</View>
				<View className="item at-row at-row__align--center">
					<Image src={icon} className="icon" mode="widthFix" />
					<View className="at-col">
						<View className="name">上海瑞金医院</View>
						<View className="num">注册号：12253442</View>
					</View>
					<View className="text-right">
						<View>本人</View>
						<View className="name">徐彦栋</View>
					</View>
				</View>
			</View>
			<Navigator className="addBtn  at-row at-row__align--center">
				<Image src={addicon} className="icon" mode="widthFix" />
				<Text className="at-col">添加注册号</Text>
				<Text>还可绑定1个</Text>
			</Navigator>
		</View>
	);
};

export default Index;
