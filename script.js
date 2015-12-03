	
function slider(){

	var imgWidth = 700;
	var active = 1;
	var slider = document.getElementsByClassName("sliderLong")[0];
	var sliderLong = slider.children[0];
	var slides = slider.children;
	var reset = 1;
			
	var nav_div = document.getElementById('navigation_div');
	var ul = document.createElement('ul');



	function func1(){
		console.log(active);	
	}

	function func2(){
		console.log(active);
	}

	for(var i=0; i<slides.length; i++)
	{
		var li = document.createElement('li');
		li.style["list-style"] = 'none';	
		li.style.float = 'left';

		var div = document.createElement('div');

		div.style.width = '20px';
		div.style.height = '20px';				
		div.style["border-radius"] ='10px';				
		div.style.background="blue";
		div.style["margin-left"] = '15px';	

		div.id=i;
		div.addEventListener('click', function(){
		console.log(i);
		console.log(active);
		});
			
		li.appendChild(div);		
		ul.appendChild(li);			
	}

				
		nav_div.appendChild(ul);
		document.body.appendChild(nav_div);
		console.log(li.style.width);

	function timer_function(){				
		active=(active>=slides.length)? active=1 : ++active;
		

	// for coloring the navigation dots.		
		nav_div.children[0].children[active-1].children[0].style.background="red";	
		
		if(active-2>=0){
			nav_div.children[0].children[active-2].children[0].style.background="blue";	
		}
		if(active==1)
		{
			nav_div.children[0].children[slides.length-1].children[0].style.background="blue";	
		}
		

		var ml=700*(active-1)*-1;
		var animator = new Animator(sliderLong);
		animator.animate("margin-left",ml,500);
	}

	setInterval(timer_function, 2000);
}


function func1(){
	console.log(active);	
}

function func2(){
	console.log(active);
}



	

