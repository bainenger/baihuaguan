// JavaScript Document

	function $(id){
		return document.getElementById(id);
	}
	
	
	
	function getStyle(obj,attrName){
		if(obj.currentStyle){
			return obj.currentStyle[attrName];
		}else{
			return window.getComputedStyle(obj,false)[attrName];
		}
	}
	
	
	
	function move(obj,target,attr){
		clearInterval(timer);
		timer=setInterval(function(){
			var attrValue=parseInt(getStyle(obj,attr));
			var speed=(attrValue>target)?-7:7;
			if(Math.abs((attrValue-target))<Math.abs(speed)){
				obj.style[attr]=target+"px";
				clearInterval(timer);
			}else{
				obj.style[attr]=(attrValue+speed)+"px";	
			}				
		},30);
	}	


function checkAll(type,value){ 		 
	switch(type) {				      
		case 'username':
		if((/^[\u4E00-\u9FA5]+$/g).test(value)){   
				return true;   
		}else{  
			return false;
		}  
			break;
		
		case 'userPASS':
		if((/^[a-zA-Z_]\w{5,14}$/).test(value)){
			return true;
		}else{
			return false;
		}
		break;		
	}  
} 