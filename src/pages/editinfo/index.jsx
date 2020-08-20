import React, { Component, useState } from 'react';
import { View, Button, Text, Image, Navigator } from '@tarojs/components';
import { AtButton, AtForm, AtInput, AtModal, AtModalHeader, AtModalContent, AtModalAction } from 'taro-ui';
import './index.scss';

const Index = props => {
	const [opened, setOpened] = useState(false);
	const editphone = () => {
		setOpened(true);
	};
	return (
		<View className="index">
			<AtForm>
				<View className="card">
					<AtInput placeholderClass="placeholderClass" clear name="name" border={false} title="姓名" type="text" placeholder="姓名" />
					<AtInput placeholderClass="placeholderClass" clear name="code" border={false} title="创建时间" type="text" placeholder="创建时间" />
					<AtInput placeholderClass="placeholderClass" clear name="phone" border={false} title="手机号码" type="phone" placeholder="手机号码">
						<Text className="editphone" onClick={editphone}>
							修改手机号码
						</Text>
					</AtInput>
				</View>
				<View className="card">
					<AtInput placeholderClass="placeholderClass" clear name="name" border={false} title="身份证号" type="idcard" placeholder="身份证号" />
					<AtInput placeholderClass="placeholderClass" clear name="code" border={false} title="医保卡号" type="idcard" placeholder="医保卡号" />
					<AtInput placeholderClass="placeholderClass" clear name="phone" border={false} title="富士唯一号" type="text" placeholder="富士唯一号" />
				</View>
				<AtButton formType="submit" className="submitBtn">
					保存
				</AtButton>
			</AtForm>
			<AtModal isOpened={opened} onClose={()=>setOpened(false)}>
				<AtModalContent>
					<AtForm>
						<AtInput placeholderClass="placeholderClass" clear name="phone" border={false} title="" type="phone" placeholder="手机号码">
							<Text className="editphone">
								获取验证码
							</Text>
						</AtInput>
						<AtInput placeholderClass="placeholderClass" clear name="code" border={false} title="" type="phone" placeholder="验证码" />
						<AtButton formType="submit" className="submitBtn">
							保存
						</AtButton>
					</AtForm>
				</AtModalContent>
				<AtModalAction> </AtModalAction>
			</AtModal>
		</View>
	);
};

export default Index;
