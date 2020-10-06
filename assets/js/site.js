var titles = ['Senior Designer and Developer', 'Graphic Designer', 'Webdesigner', 'Interactive Designer', 'Brand Designer', 'Chief Technology Officer', 'Story Designer', 'Business Designer', 'Experience Designer', 'Digital Visionary', 'Internaut', 'Webmaster', 'Change Agent', 'Front-end Developer', 'Chief Design Technologist', 'Executive Chief Technology Director', 'Art Director', 'Happiness Engineer', 'Internet Doctor', 'Comedian', 'Multimedia Designer', 'Interaction Designer', 'Lead Visual Brand Designer', 'Associate Creative Director', 'Operator', 'Capable user of the Internet', 'Forecaster', 'Super Admin', 'Visual Designer', 'Mac Designer', 'Creative', 'Design critic', 'UI Design Consultant', 'Web/Transdisciplinary Designer', 'Senior Digital Innovation Strategist & UX Design Lead', 'Chief Internet Evangelist'],
	titlesLength = titles.length -1;
	
function titleShift(){
	i = 0;
	document.querySelector('.title').addEventListener("click", (e) => {
		i++;
		if(i <= titlesLength){
			document.querySelector('.title').textContent = titles[i];
		} else{
			document.querySelector('.title').textContent = titles[0];
			i = 0;
		}
	});
}
titleShift();