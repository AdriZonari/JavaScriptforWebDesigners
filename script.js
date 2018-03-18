(function(){
'use strict';

document.addEventListener('DOMContentLoaded', function(){
	let cTime = document.getElementById('current-time'),
		cDate = document.getElementById('current-date');

		
	
		setInterval(function() {
		let d = new Date();
	
		let hours = d.getHours(),
			minutes = d.getMinutes(),
			day = d.getDate(),
			month = formatMonth(d.getMonth()),
			ampm = 'AM';
		
		if (hours > 12) {
			hours -= 12;
			ampm = 'PM';
		}else if (hours === 0) {
			hours = 12;
		}
		 if (minutes < 10) {
			minutes = '0' + minutes;
		}
		let sepClass = '';
		if (d.getSeconds() % 2 === 1) sepClass = 'trans';

		let sep = '<span class="' + sepClass + '">:</span>';
	
		cTime.innerHTML =  hours + sep + minutes + ' ' + ampm;
		cDate.textContent = month + ' ' + day;
	}, 1000);
	
	function formatMonth(m) {
		m = parseInt(m, 10);

		if (m < 0) {
			m = 0;
		}else if (m > 11) {
			m = 11;
		}

		let monthNames = [
			'January', 'February', 'March', 'April', 'Maj', 'Juni', 'Juli', 'Augusti', 'September', 'Oktober', 'November', 'December'

		]
		return monthNames[m];
	}
});


})();