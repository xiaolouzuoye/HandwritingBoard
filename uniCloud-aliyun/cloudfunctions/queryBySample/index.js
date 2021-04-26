'use strict';
const db = uniCloud.database()
exports.main = async (event, context) => {  //event为客户端上传的参数
	//前端调用此函数需要传入的参数：dbName ，filter ，pageIndex ，pageSize
	var dbName = event.dbName;  //集合名称(表的名称)
	var filter = event.filter ? event.filter : {} ;  //筛选条件，默认为空，格式 {key:'values'}  
	var sampleSize = event.size || 10
	var orderBy = event.orderBy || ''
	//查询数据并返回给前端
	return db.collection(dbName).aggregate().match(filter).sample({
    size: sampleSize
  }).end().then( res => {
		return res ;  // 返回json给客户端
	})     
    
};