// JavaScript Document
var date=[	
	{
		message:"2016 - 11 - 16（博客上线）",
		reply:"前言 - 你因为他的一句话生气，自己生了很久的闷气，等着他来哄，也许到最后他根本都不知道自己哪句话说错了。原来，没人是你肚子里的蛔虫，沟通一定是最重要的，你生气，你不理他，你哭，只会让他觉得无理取闹，你以为他能明白，你以为他能理解，但是在他们眼里，只会觉得不知所谓。有的事你不说，他们永远也不会知道。。。网站PC端不再主动性提供登录登录注册快捷按钮，如需注册，用户可通过移动端访问网站——至左侧边栏——登录/注册，当然，你也可直接访问https://www.weipxiu.com/wp-login.php进行登录注册"
	},
	{
		message:"2019 - 03 - 29",
		reply:"删除了一波无用代码，打包压缩了一波js，减少了一波http请求，网站打开速度又提升了0.001秒，欧耶！"
	},
	{
		message:"2019 - 03 - 20",
		reply:"近期网站被莫名持续DDOS攻击，祸不单行，备案也被阿里云吊销了，因之前信息更改没及时更新，一不做二不休，直接购买新的主机，迁移到国外了"
	},
	{
		message:"2019 - 03 - 12",
		reply:"优化文章详情页面的评论模块，侧边评论添加时间"
	},
	{
		message:"2019 - 01 - 22",
		reply:"优化主导航音乐，添加本地存储机制，可选择性打开导航音乐开关，并且保留状态，给用户更多的选择权"
	},
	{
		message:"2018 - 11 - 16",
		reply:"详情页、侧边栏移除畅言，我恨死畅言了，广告多多，请求贼慢，动不动头像出不来js还报错，之所以留言页面还保留，不过是因为去掉后想换原生将改动太大，需要几天功夫，暂时没空折腾"
	},
	{
		message:"2018 - 10 - 02",
		reply:"项目添加gulp构建工具，支持一件打包压缩"
	},
	{
		message:"2018 - 09 - 18",
		reply:"全站全面支持https，更安全更靠谱，哦，更烧钱"
	},
	{
		message:"2018 - 04 - 24",
		reply:"1、去掉垃圾文件，去掉每个分类category.php页面底部多余冗余js 2、优化导航设置高亮方式，改以往笨拙手动设置为在header.php导航中通过is_category判断配置"
	},
	{
		message:"2018 - 04 - 13",
		reply:"新增按下键盘A-L弹钢琴，赶紧试试哦"
	},
	{
		message:"2018 - 03 - 31",
		reply:"强力优化PC端主导航二级菜单UI交互，尤雨溪大师说，学代码也要关注艺术，很对哦"
	},
	{
		message:"2018 - 03 - 16",
		reply:"修复移动端javascript板块页面错乱，此Bug由网友（QQ：1832298856）用户提出（在此感谢），更改侧边栏-大家喜欢栏目排序问题，将之前按评论数量排序规则改为随机"
	},
	{
		message:"2018 - 01 -28",
		reply:"修复在PC端搜索结果页无法点击出现下拉列表和导航音乐播放bug，原因定位：加载了2次公共js文件"
	},
	{
		message:"2017 - 12 -15",
		reply:"完善移动端侧边栏导航，且，修复头部在首次加载时候部分设备最开始显示不全bug，原因定位，不应该设置rem固定头部尺寸，而应该直接设置100%，因为在设置rem时候需要等到js计算然后才能正确显示，而在css里设置100%则渲染快N倍。增加点击移动端头部文字“唯品秀博客”跳转到首页"
	},
	{
		message:"2017 - 10 -29",
		reply:"新增，右侧边栏-大家喜欢栏目，仿'妙味课堂'文字琴弦效果"
	},
	{
		message:"2017 - 08 - 20",
		reply:"意外发现swiper移动端代码并没有正确初始化，但之前页面却一直能正常运行，果真是世界之大、无奇不有？"
	},
	{
		message:"2017 - 06 - 02",
		reply:"多说评论框全面崩溃，由此转向畅言，（谁也不知道这玩意儿几时会挂，将就使）"
	},
	{
		message:"2017 - 05 - 19",
		reply:"博客2.0主题全面上线,目标定位：更酷炫、代码更简洁"
	},
	{
		message:"2017 - 02 - 08",
		reply:"独自来上海，开启新的前端之路（一条背井离乡不归之路）"
	},
	{
		message:"2017 - 02 - 07",
		reply:"优化SEO排名，新增搜索关键词（貌似都是心理作用，了解那么久SEO，发现要流量还是得烧钱靠谱）"
	},
	{
		message:"2017 - 01 - 20",
		reply:"新增视频播放器"
	},
	{
		message:"2017 - 01 - 15",
		reply:"优化开场动画，改jQuery采用CSS3"
	},
	{
		message:"2017 - 01 - 10",
		reply:"新增PC端巨屏首页3D轮播(国外插件改动了下，更适合大屏幕)"
	},
	{
		message:"2017 - 01 - 07",
		reply:"修改音乐播放器，改用插件"
	},
	{
		message:"2017 - 01 - 01",
		reply:"新年快乐，优化音乐UI"
	},
	{
		message:"2016 - 12 - 25",
		reply:"新增用户注册，支持普通用户发表管理文章"
	},
	{
		message:"2016 - 12 - 02",
		reply:"新增3D音乐导航"
	},
	{
		message:"2016 - 11 - 20",
		reply:"兼容移动端适配(ipd无视，一笔带过)"
	},
	{
		message:"2016 - 11 - 17",
		reply:"增加 - '特别鸣谢'页面，感谢有你们，才能让我走的更远！"
	},
	{
		message:"2016 - 11 - 16 网站正式上线！",
		reply:"唯品秀个人博客，https://www.weipxiu.com正式上线了"
	},
	{
		message:"本页面目前处于完善测试阶段",
		reply:"本页面目前处于完善测试阶段，请等完善后再关注！"
	}
];
