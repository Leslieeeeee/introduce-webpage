//在网页底部显示时间这里要用AJAX，查一下

// $(document).ready(function() {
// $(datetime)function showDate(){
//         //创建一个日期对象
//         var dd = new Date();
//         //获取当前时间的年月日时分秒
//         var year = dd.getFullYear();//获取当前年
//         var month = dd.getMonth()+1; //获取当前月 必须加1 因为getMonth()的取值范围是1-11
//         var day = dd.getDay();//获取当前天
//         var hour =dd.getHours();//获取当前时
//         var minute = dd.getMinutes();//获取当前分
//         var second = dd.getSeconds();//获取当前秒
           
//         //规范秒的输出 如果是前0-9秒，则自动补零
//         second = (second<10)?"0"+second:second;
//         //拼装日期
//         var str =year +"-"+ month +"-"+ day +" "+ hour +":"+ minute +":"+second;
//         document.getElementById("span1").innerHTML="当前时间是："+str()
//        }
//        setInterval("showDate()",1000);

//大滑块一个个出现
