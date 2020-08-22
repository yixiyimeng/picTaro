import React, { Component, useState } from 'react';
import { View, Button, Text, Image, Navigator, Picker, RadioGroup, Radio, Label } from '@tarojs/components';
import { AtButton, AtForm, AtInput, AtCheckbox, AtIcon } from 'taro-ui';
import './index.scss';
import report from '../../assets/report.jpg';
const Index = props => {
	const list = [
		{
			value: '匿名',
			text: '匿名',
			checked: false
		},

		{
			value: '密码验证（输入验证码才能浏览）',
			text: '密码验证（输入验证码才能浏览）',
			checked: true
		},
		{
			value: '分享历史检查',
			text: '分享历史检查',
			checked: false
		}
	];
	const [checked, setChecked] = useState(false);
	const [checkboxOption, setCheckboxOption] = useState(list);
	const [selector, setSelector] = useState(['1小时', '1天']);
	const [selectorChecked, setSelectorChecked] = useState('1小时');
	const handleChange = () => {
		setChecked(!checked);
	};
	const onChange=(e)=>{
		setSelectorChecked(selector[e.detail.value])
	}
	return (
		<View className="index">
			<View className="at-row at-row__align--center at-row__justify--center">
				<Text>分享时长</Text>
				<Picker mode="selector" range={selector} onChange={onChange}>
					<View className="picker">{selectorChecked}<AtIcon  value='chevron-down' size='40' color='#b2b2b2'></AtIcon></View>
				</Picker>
			</View>
			<View className="radio-list">
				<RadioGroup>
					{checkboxOption.map((item, i) => {
						return (
							<Label className="radio-list__label" for={i} key={i}>
								<Radio className="radio-list__radio" value={item.value} checked={item.checked}>
									{item.text}
								</Radio>
							</Label>
						);
					})}
				</RadioGroup>
			</View>
			<AtButton className="shareBtn">分享</AtButton>
		</View>
	);
};

export default Index;
