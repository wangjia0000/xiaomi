function next(){
	var List=document.getElementsByClassName("danpin_item");
	
	for(var i=0;i<List.length;i++){
		if(List[i].className.indexOf("x_active")>=0){
			if(i<List.length-1){
				List[i].className="danpin_item x_prev";
				List[i+1].className="danpin_item x_active";
				
				break;
				
			}
			
		}
	}
}
function prev(){
	var List=document.getElementsByClassName("danpin_item");
	
	for(var i=0;i<List.length;i++){
		if(List[i].className.indexOf("x_active")>=0){
			if(i>0){
				List[i].className="danpin_item x_next";
				List[i-1].className="danpin_item x_active";
				break;
				
			}
			
		}
	}
}

document.getElementById("btn_left").addEventListener("click",function(){prev();});
document.getElementById("btn_right").addEventListener("click",function(){next();});





function next1(){
	var List=document.getElementsByClassName("li1");
	
	for(var i=0;i<List.length;i++){
		if(List[i].className.indexOf("x_active1")>=0){
			if(i<List.length-1){
				List[i].className="li1 x_prev1";
				List[i+1].className="li1 x_active1";
				
				break;
				
			}
			
		}
	}
}
function prev1(){
	var List=document.getElementsByClassName("li1");
	
	for(var i=0;i<List.length;i++){
		if(List[i].className.indexOf("x_active1")>=0){
			if(i>0){
				List[i].className="li1 x_next1";
				List[i-1].className="li1 x_active1";
				break;
				
			}
			
		}
	}
}

document.getElementById("btn_l1").addEventListener("click",function(){prev1();});
document.getElementById("btn_r1").addEventListener("click",function(){next1();});

function next2(){
	var List=document.getElementsByClassName("li2");
	
	for(var i=0;i<List.length;i++){
		if(List[i].className.indexOf("x_active1")>=0){
			if(i<List.length-1){
				List[i].className="li2 x_prev1";
				List[i+1].className="li2 x_active1";
				
				break;
				
			}
			
		}
	}
}
function prev2(){
	var List=document.getElementsByClassName("li2");
	
	for(var i=0;i<List.length;i++){
		if(List[i].className.indexOf("x_active1")>=0){
			if(i>0){
				List[i].className="li2 x_next1";
				List[i-1].className="li2 x_active1";
				break;
				
			}
			
		}
	}
}

document.getElementById("btn_l2").addEventListener("click",function(){prev2();});
document.getElementById("btn_r2").addEventListener("click",function(){next2();});



function next3(){
	var List=document.getElementsByClassName("li3");
	
	for(var i=0;i<List.length;i++){
		if(List[i].className.indexOf("x_active1")>=0){
			if(i<List.length-1){
				List[i].className="li3 x_prev1";
				List[i+1].className="li3 x_active1";
				
				break;
				
			}
			
		}
	}
}
function prev3(){
	var List=document.getElementsByClassName("li3");
	
	for(var i=0;i<List.length;i++){
		if(List[i].className.indexOf("x_active1")>=0){
			if(i>0){
				List[i].className="li3 x_next1";
				List[i-1].className="li3 x_active1";
				break;
				
			}
			
		}
	}
}

document.getElementById("btn_l3").addEventListener("click",function(){prev3();});
document.getElementById("btn_r3").addEventListener("click",function(){next3();});




function next4(){
	var List=document.getElementsByClassName("li4");
	
	for(var i=0;i<List.length;i++){
		if(List[i].className.indexOf("x_active1")>=0){
			if(i<List.length-1){
				List[i].className="li4 x_prev1";
				List[i+1].className="li4 x_active1";
				
				break;
				
			}
			
		}
	}
}
function prev4(){
	var List=document.getElementsByClassName("li4");
	
	for(var i=0;i<List.length;i++){
		if(List[i].className.indexOf("x_active1")>=0){
			if(i>0){
				List[i].className="li4 x_next1";
				List[i-1].className="li4 x_active1";
				break;
				
			}
			
		}
	}
}

document.getElementById("btn_l4").addEventListener("click",function(){prev4();});
document.getElementById("btn_r4").addEventListener("click",function(){next4();});
