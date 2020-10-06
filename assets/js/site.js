(function($){

	var titles = ['Senior Designer and Developer', 'Graphic Designer', 'Webdesigner', 'Interactive Designer', 'Brand Designer', 'Chief Technology Officer', 'Story Designer', 'Business Designer', 'Experience Designer', 'Digital Visionary', 'Internaut', 'Webmaster', 'Change Agent', 'Front-end Developer', 'Chief Design Technologist', 'Executive Chief Technology Director', 'Art Director', 'Comedian', 'Multimedia Designer', 'Interaction Designer', 'Lead Visual Brand Designer', 'Associate Creative Director', 'Operator', 'Capable user of the Internet', 'Forecaster', 'Super Admin', 'Visual Designer', 'Mac Designer', 'Creative', 'Design critic', 'UI Design Consultant', 'Web/Transdisciplinary Designer', 'Senior Digital Innovation Strategist & UX Design Lead', 'Chief Internet Evangelist'],
		titlesLength = titles.length -1;
	
	function titleShift(){
		i = 0;
		$('.title').on('click', function(){
			i++;
			if(i <= titlesLength){
				$(this).text(titles[i]);
			} else{
				$(this).text(titles[0]);
				i = 0;
			}
		});
	}
	titleShift();

})(jQuery);