import Mock, { Random } from 'mockjs';
const list:any = [];
for (let i = 0; i < 20; i++) {
    list.push({
        id: Random.id(),
        title: Random.ctitle(),
        creatName: Random.cname(),
        // code: Random.integer(10000000,80000000),
        // url: Random.url('http'),
        createTime: Random.datetime('y-MM-dd HH:mm'),
        info: Random.csentence()
    })
}
export default {
    // 查
    getList: () => {
        return {
           total: list.length,
           list: list
        }
    },
}