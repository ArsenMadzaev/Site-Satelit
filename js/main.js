const brgMenu = document.querySelector('.burger-menu');
const mobMenu = document.querySelector('.mobile-navbar');

brgMenu.addEventListener('click', () => {
    mobMenu.classList.toggle('mobile-navbar--open');
});

$(document).ready(function() {

	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});