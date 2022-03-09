var Gbegin=new Date("2008/10/30 12:49:00")

const hourEl = document.querySelector('.hour')
const minuteEl = document.querySelector('.minute')
const secondEl = document.querySelector('.second')
const timeEl = document.querySelector('.time')
const dateEl = document.querySelector('.date')
const toggle = document.querySelector('.toggle')

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const Gmon = ["Cu","Alg","Boi","Cap","Do","Ele","Fn","G.","Hash","Ice"]
const Gdays = ['0','1','2','3','4','5','6','7','8','9']

var clicked = 0

toggle.addEventListener('click', (e) => {
    const html = document.querySelector('html')
	clicked++
    if (html.classList.contains('dark')) {
        html.classList.remove('dark')
        e.target.innerHTML = 'Dark mode'
    } else {
        html.classList.add('dark')
        e.target.innerHTML = 'Light mode'
    }
})

function light(){
	const html = document.querySelector('html')
	html.classList.remove('dark')
	document.getElementById("mode").innerText = 'Dark mode'
}

function dark(){
	const html = document.querySelector('html')
	html.classList.add('dark')
	document.getElementById("mode").innerText = 'Light mode'
}

function setb(stri){
	if(stri==undefined){
		setime=new Date()
		if(setime!=undefined){
			Gbegin=setime;
		}
		return 1
	}
	Gbegin=new Date(stri)
}

function setTime() {
    const time = new Date();
	const year = time.getYear()
    const month = time.getMonth()
    const day = time.getDay()
    const date = time.getDate()
    const hours = time.getHours()
    const hoursForClock = hours >= 13 ? hours % 12 : hours;
    const minutes = time.getMinutes()
    const seconds = time.getSeconds()
	
	const gms=time-Gbegin
	const gsec=gms/1000
	const Gday=gsec/60/60/24
	const Ghour=Math.floor((Gday*100)%100)
	const Gmin=Math.floor((Gday*1000)%100)
	const Gsecond=Math.floor((Gday*10000)%100)
	const Gmonth=Math.floor((Gday/10)%10)
	const Gyear=Math.floor(Gday/100)
	
	console.log(Gday)
	console.log(Gmin)
	
    const ampm = Ghour >= 50 ? 'AM' : 'PM'
	
	if(clicked==0){
		if(ampm=="AM"){
			light();
		}else{
			dark();
		}
	}

    hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(Ghour, 0, 100, 0, 360)}deg)`
    minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 100, 0, 360)}deg)`
    secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(Gsecond, 0, 100, 0, 360)}deg)`

    timeEl.innerHTML = `${Math.floor(Ghour/10)<0?' ':'0'}${Math.floor(Ghour/10)}:${Math.floor(Gmin/10)<0?' ':'0'}${Math.floor(Gmin/10)}:${Math.floor(Gsecond/10)<0?' ':'0'}${Math.floor(Gsecond/10)} ${ampm}`
    dateEl.innerHTML = `Cucumber ${Math.floor(Gyear)}, ${Gmon[Gmonth]} <span class="circle">${Gdays[Math.floor(Gday)%10]}</span>`
}

// StackOverflow https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

setTime()

setInterval(setTime, 1000)
