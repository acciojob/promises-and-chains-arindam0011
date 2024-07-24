//your JS code here. If required.

let SubmitBotton=document.getElementById("btn")
SubmitBotton.addEventListener('click', ()=>{
	let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const age = Number(document.getElementById("age").value);
        const name = document.getElementById("name").value;

		if(!isNaN(age)){
			if (age >= 18) {
			            resolve(name);
			        } else {
			            reject(name);
			        }
				}
        
    }, 4000);
});

promise
    .then((name) => alert(`Welcome, ${name}. You can vote`))
    .catch((name) => alert(`Oh sorry ${name}. You aren't old enough`));

})
