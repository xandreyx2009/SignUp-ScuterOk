require ('../page/registration_form_page.js');

var sign_up_page = function() {
	
	this.loginButton = function() {
		element(by.className('menu_name')).click();
		element(by.className('registr')).click();
		return require('../page/registration_form_page.js');
		
		
	};	
	
};
  module.exports = new sign_up_page();
	
	
	
