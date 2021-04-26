'use strict';
const db = uniCloud.database();
exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log('event : ', event)
	const url = 'https://api.q.qq.com/sns/jscode2session?appid=1111121952&secret=JYDXgPaNlnHHujnd&js_code=' + event.code + '&grant_type=authorization_code'
	const res  = await uniCloud.httpclient.request(url,{
		method:'GET',
		dataType:'json'
	})
	const resInfo = res.data
	resInfo.userInfo = {}
	const collection = db.collection('qq-user');
	const userInfo = await collection.where({
		qq_openid:resInfo.openid
	}).get()
	if(userInfo.affectedDocs === 0){
		let resp = await collection.add({
			qq_openid:resInfo.openid,
			electricity:20
		})
		resInfo.msg = '注册成功'
		resInfo.userInfo._id = resp.id
		resInfo.uid = resp.id
	}else{
		resInfo.userInfo = userInfo.data[0]
		resInfo.uid = resInfo.userInfo._id
		resInfo.msg = '登录成功'
	}
	// 返回数据给客户端
	return resInfo
};
