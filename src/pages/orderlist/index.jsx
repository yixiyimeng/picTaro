import React, { Component, useState } from 'react';
import { View, Button, Text, Image, Navigator, ScrollView } from '@tarojs/components';
import { AtButton, AtForm, AtInput, AtList, AtListItem } from 'taro-ui';
import classNames from 'classnames';
import './index.scss';
import icon from '../../assets/icon3.png';
const Index = props => {
	const [curIndex, setCurIndex] = useState(0);
	const [navlist, setNavlist] = useState(['全部', '待续费', '已续费', '退费']);
	const scrollStyle = {
		height: '150px'
	};
	const onScrollToUpper = () => {};
	return (
		<View className="index">
			<view className="nav at-row at-row__justify--between">
				{navlist.map((item, index) => {
					return (
						<View key={index} className={classNames('nav-item', 'at-col', index == curIndex && 'active')}>
							{item}
						</View>
					);
				})}
			</view>
			<View className="list">
				<View className="list-item">
					<View className="item-hd">
						<View className="at-row at-row__align--center">
							<Image className="icon" src={icon} />
							<Text className="title">电子胶片</Text>
						</View>
						<Navigator className="link">查看详情</Navigator>
						<View className="name">上海华山医院的MR检查的云胶片缴费记录</View>
					</View>
					<View className="item-bd">
						<View className="mt15">
							<Text className="title">姓名</Text>
							<Text>徐彦栋</Text>
						</View>
						<View className="mt15">
							<Text className="title">金额</Text>
							<Text>徐彦栋</Text>
						</View>
						<View className="mt15">
							<Text className="title">到期时间</Text>
							<Text>徐彦栋</Text>
						</View>
					</View>
					<View className="item-ft">
						<Navigator className="btn">续费</Navigator>
					</View>
				</View>
				<View className="list-item">
					<View className="item-hd">
						<View className="at-row at-row__align--center">
							<Image className="icon" src={icon} />
							<Text className="title">电子胶片</Text>
						</View>
						<Navigator className="link">查看详情</Navigator>
						<View className="name">上海华山医院的MR检查的云胶片缴费记录</View>
					</View>
					<View className="item-bd">
						<View className="mt15">
							<Text className="title">姓名</Text>
							<Text>徐彦栋</Text>
						</View>
						<View className="mt15">
							<Text className="title">金额</Text>
							<Text>徐彦栋</Text>
						</View>
						<View className="mt15">
							<Text className="title">到期时间</Text>
							<Text>徐彦栋</Text>
						</View>
					</View>
					<View className="item-ft">
						<Text>支付成功</Text>
					</View>
				</View>
			</View>
		</View>
	);
};

export default Index;
