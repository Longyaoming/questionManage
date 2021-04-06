import Mock from 'mockjs';
import login from './login/login';  //登录
import allKnowledgeData from './knowledgeData/allKnowledgeData';  //知识总览

Mock.mock('/login/login', 'post' ,login.login); // 登录
Mock.mock('/allKnowledgeData/getList', 'post' ,allKnowledgeData.getList); // 知识总览

export default Mock
