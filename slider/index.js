const items = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#previous');
const buttons = document.querySelectorAll('button');
let slideCount = 0;
let current = '';

const slide = option =>{
	switch(option){
		case 'previous':
			slideCount -= 1;
			if(slideCount < 0){
				slideCount = items.length - 1;
			};
			break;
		case 'next':
			slideCount += 1;
			if(slideCount > items.length - 1){
				slideCount = 0;
			};
			break;
	};

	current.className = ('slide inactive');
	current = items[slideCount];
	current.className = 'slide active';
};

const start = () =>{
	items[slideCount].className = 'slide active';
	current = items[slideCount];
};

start();


next.addEventListener('click', function(){
    slide('next');
});

prev.addEventListener('click', function(){
    slide('previous');
});
