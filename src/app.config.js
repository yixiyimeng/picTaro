export default {
	pages: [
		'pages/index/index',
		'pages/reg/index',
		'pages/mine/index',
		'pages/editinfo/index',
		'pages/bindinfo/index'
	],
	window: {
		backgroundTextStyle: 'light',
		navigationBarBackgroundColor: '#6ac1a0',
		navigationBarTitleText: '富医睿影',
		navigationBarTextStyle: 'white'
	},
	tabBar: {
		list: [{
			pagePath: "pages/index/index",
			text: "首页",
			iconPath: "assets/cloud.png",
			selectedIconPath: "assets/cloud.png"
		
		}, {
			pagePath: "pages/mine/index",
			text: "我的",
			iconPath: "assets/mine_cur.png",
			selectedIconPath: "assets/mine_cur.png"
		}],
		color: '#808080',
		selectedColor: '#6ac1a0',
		backgroundColor: '#fff',
		borderStyle: 'white'
	}
}
