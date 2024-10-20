//your JS code here. If required.
let output=document.querySelector("#output")
let array=[1, 2, 3, ,5,4];
let odd=setTimeout((array)=>{
	array.filter((e)=>{
		e%2!=0
	})
	
},1000)

output.innerText=odd;
