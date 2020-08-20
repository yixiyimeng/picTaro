import React, { Component } from 'react';
import { View, Button, Text, Image, Navigator } from '@tarojs/components';
import { AtButton, AtBadge } from 'taro-ui';
import Taro from '@tarojs/taro'
import './index.scss';
import Avatarimg from '../../assets/phone.png';
const Index = props => {
	const goPage = () => {
		Taro.navigateTo({
			url: '/pages/bindinfo/index'
		});
	};
	return (
		<View className="index">
			<View className="userInfo">
				<View className="Avatar">
					<Image src={Avatarimg} />
				</View>
				<View className="name">徐彦栋</View>
				<View className="phone">18621510077</View>
				<AtButton className="bindBtn" onClick={goPage}>
					绑定就诊信息
				</AtButton>
			</View>
			<View className="modbox">
				<View className="modbox-hd">订单管理</View>
				<View className="modbox-bd at-row at-row__justify--between navlist">
					<AtBadge value={10} maxValue={99} className="at-col nav-item">
						<Navigator>全部</Navigator>
					</AtBadge>
					<AtBadge value={10} maxValue={99} className="at-col nav-item">
						<Navigator className="at-col nav-item">待续费</Navigator>
					</AtBadge>
					<AtBadge value={10} maxValue={99} className="at-col nav-item">
						<Navigator className="at-col nav-item">已续费</Navigator>
					</AtBadge>
					<AtBadge value={10} maxValue={99} className="at-col nav-item">
						<Navigator className="at-col nav-item">退款</Navigator>
					</AtBadge>
				</View>
			</View>
			<View className="modbox">
				<View className="modbox-hd">问题反馈</View>
				<View className="modbox-bd at-row at-row__justify--between navlist">
					<AtBadge value={10} maxValue={99} className="at-col nav-item">
						<Navigator className="at-col nav-item">全部</Navigator>
					</AtBadge>
					<AtBadge value={10} maxValue={99} className="at-col nav-item">
						<Navigator className="at-col nav-item">未答复</Navigator>
					</AtBadge>
					<AtBadge value={10} maxValue={99} className="at-col nav-item">
						<Navigator className="at-col nav-item">已答复</Navigator>
					</AtBadge>
				</View>
			</View>
		</View>
	);
};

export default Index;
