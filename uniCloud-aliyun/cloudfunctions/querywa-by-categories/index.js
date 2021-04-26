'use strict';
const db = uniCloud.database()
exports.main = async (event, context) => {  //event为客户端上传的参数
	//前端调用此函数需要传入的参数：dbName ，filter ，pageIndex ，pageSize
	var dbName = event.dbName;  //集合名称(表的名称)
	var filter = event.filter ? event.filter : {} ;  //筛选条件，默认为空，格式 {key:'values'}
	var pageIndex = event.pageIndex ? event.pageIndex : 1 ;  //当前第几页，默认为第一页
	var pageSize = event.pageSize ? event.pageSize : 10 ;  //每页取多少条记录，默认为10条  
	var orderBy = event.orderBy || ''
	const countResult = await db.collection(dbName).where(filter).count()  //获取集合中的总记录数
	const total = countResult.total  //得到总记录数 
	const totalPage = Math.ceil(total / pageSize)  //计算页数

	var hasMore ;  //提示前端是否还有数据
	if (pageIndex > totalPage || pageIndex == totalPage) {  //如果没有数据了，就返回false
		hasMore = false 
	} else {
		hasMore = true 
   }
   
	//查询数据并返回给前端
	return db.collection(dbName).where(filter).skip((pageIndex - 1) * pageSize).limit(pageSize).orderBy(orderBy.field,orderBy.orderType).get().then( res => {
		res.hasMore = hasMore ;
		return res ;  // 返回json给客户端
	})     
    
};