let ipUrl = 'http://127.0.0.1:7002/default/' 

let servicePath = {
    getArticleList:ipUrl + 'index' ,  //  首页文章列表接口
    getArticleById:ipUrl + 'article/',  // 文章详细页内容接口 ,需要接收参数
    getTypeInfo: ipUrl+'type/index', // 获取类型
    getListById: ipUrl+ 'articletype?type_id=' // 根据类别ID获得文章列表 
}
export default servicePath;