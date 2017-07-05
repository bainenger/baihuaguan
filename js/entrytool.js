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
	
	
	
