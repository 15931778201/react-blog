let ipUrl = 'http://127.0.0.1:7002/admin/' 

let servicePath = {
    checkLogin:ipUrl + 'login' ,  //  检查用户名密码是否正确
    getTypeInfo:ipUrl + 'getTypeInfo' ,  //  获得文章类别信息
    opArticle:ipUrl + 'article' ,  //  添加文章post/修改文章put/删除文章delete/获取文章get
    getArticleList: ipUrl + 'article/page' // 文章列表

}
export default servicePath;