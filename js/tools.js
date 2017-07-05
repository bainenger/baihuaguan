// JavaScript Document
//传入一个id返回一个标签
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
		clearInterval(timer);//开始运动前清除旧的定时器
		timer=setInterval(function(){
			//取得移动物体的，某个样式的值
			var attrValue=parseInt(getStyle(obj,attr));
			//根据当前位置与目标抢位置差计算速度的正负
			var speed=(attrValue>target)?-7:7;
			//匀速运动目标值判断不能直接等于
			if(Math.abs((attrValue-target))<Math.abs(speed)){
				//通过下标“属性名”访问属性的值
				obj.style[attr]=target+"px";//最后直接设定移动位置为目标值
				clearInterval(timer);
			}else{
				//每次运动物体位置改变值=速度
				//运动位置=当前位置+速度
				//运动快慢由速度和定时器毫秒数确定
				obj.style[attr]=(attrValue+speed)+"px";	
			}				
		},30);
	}	
