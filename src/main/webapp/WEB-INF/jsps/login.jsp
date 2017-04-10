<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>登录</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
  </head>
  
  <body>
  	<div><font color="red">${error }</font></div>
   	<form action="<c:url value ='/user/login'/>" method="post">
   		邮箱	：<input type="text" id="id" name="id" value="${user.id }"><font color="red">${errors.id }</font><br>
    	密码	：<input type="password" id="pwd" name="pwd" value=""><font color="red">${errors.pwd }</font><br>
    	<a href="<c:url value ='/user/toforgetpwd'/>">忘记密码</a>
    	<input type="submit" value="登录">
   	</form>
  </body>
</html>
