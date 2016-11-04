//展示时间
function showtime(){
        var dd = new Date()
		var str = dd.toLocaleString()+' 星期'+'日一二三四五六'.charAt(dd.getDay())
        document.getElementById("nowtime").innerHTML = str
   		}	
    	setInterval("showtime()",1000)

function changePlace()
{
document.getElementById('life').scrollIntoView();
}

function changePlace1()
{
document.getElementById('xxx').scrollIntoView();
}

function changePlace2()
{
document.getElementById('study').scrollIntoView();
}

function changePlace3()
{
document.getElementById('more').scrollIntoView();
}

function changePlace4()
{
document.getElementById('home').scrollIntoView();
}