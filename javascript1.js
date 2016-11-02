

$(document).ready(function showtime(){
       
        var dd = new Date()
		var str = dd.toLocaleString()+' 星期'+'日一二三四五六'.charAt(dd.getDay())
        document.getElementById("#nowtime").innerHTML=str()
   		}	
   		setInterval("showtime()",1000)
   		// setInterval("nowtime.innerHTML=new Date().toLocaleString()+' 星期'+'日一二三四五六'.charAt(new Date().getDay());",1000)
       )

$(document).ready(function jump(){
        location.hash ='#life'
        document.write("location.hash")
                           
   		})

$(document).ready(function jump(){
        location.hash ='#more'
        document.write("location.hash")
                    
   		})
$(document).ready(function jump(){
        location.hash ='#work'
        document.write("location.hash")
                    
   		})
$(document).ready(function jump(){
        location.hash ='#python'
        document.write("location.hash")
                    
   		})

