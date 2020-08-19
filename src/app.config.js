export default {
	pages: [
		'pages/index/index',
		'pages/reg/index'
	],
	window: {
		backgroundTextStyle: 'light',
		navigationBarBackgroundColor: '#fff',
		navigationBarTitleText: '富医睿影',
		navigationBarTextStyle: 'black'
	},
	tabBar: {
		list: [{
			pagePath: "pages/index/index",
			text: "首页"

		}, {
			pagePath: "pages/reg/index",
			text: "我的"

		}],
		color: '#333',
		selectedColor: '#333',
		backgroundColor: '#fff',
		borderStyle: 'white'
	}
}
