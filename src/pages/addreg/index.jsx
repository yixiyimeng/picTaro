import React, { Component, useState } from 'react';
import { View, Button, Text, Image, Navigator, Picker } from '@tarojs/components';
import { AtButton, AtForm, AtInput, AtList, AtListItem } from 'taro-ui';
import './index.scss';
import icon from '../../assets/icon2.png';
import icon2 from '../../assets/tip.png';
const Index = props => {
	const [selector, setSelector] = useState(['本人', '家属']);
	const [selectorChecked, setSelectorChecked] = useState('');
	const [showTip, setShowTip] = useState(false);
	const onChange = e => {
		setSelectorChecked(selector[e.detail.value]);
	};
	return (
		<View className="index">
			<AtForm>
				<View className="card">
					<AtInput placeholderClass="placeholderClass" clear name="name" border={false} title="医疗机构" type="text" placeholder="医疗机构" />
					<AtInput className="bt mt15" placeholderClass="placeholderClass" clear name="code" border={false} title="姓名" type="text" placeholder="姓名" />
					<View className="mt15" />
					<Picker mode="selector" range={selector} onChange={onChange}>
						<AtList>
							<AtListItem title="病人关系" extraText={selectorChecked} />
						</AtList>
					</Picker>
					<AtInput placeholderClass="placeholderClass" clear name="phone" border={false} title="注册号" type="phone" placeholder="注册号">
						<Image src={icon} mode="widthFix" className="icon" onClick={()=>setShowTip(true)}/>
					</AtInput>
				</View>

				<AtButton formType="submit" className="submitBtn">
					保存
				</AtButton>
			</AtForm>
			<View className="tip at-row at-row__align--center">
				<Image src={icon} mode="widthFix" className="icon" />
				<Text>绑定最多五个注册号，绑定关系至少半年才可以删除</Text>
			</View>
			<View className="tip2">检查完毕3个月内的检查，绑定后可以浏览检查完毕3个月后未付费的检查。超过时间，需要联系医疗机构补传</View>
			{showTip && (
				<View className="tipwin" onClick={()=>setShowTip(false)}>
					<Image className="icon" mode="widthFix" src={icon2}  onClick={(e)=> e.stopPropagation()}/>
				</View>
			)}
		</View>
	);
};

export default Index;
