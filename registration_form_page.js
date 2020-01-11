

var registration_page = function() {
	
	this.lastNameInput = function(value) {
		element(by.id('register_lastname')).sendKeys(value);
	};
		
	this.userFirstNameInput = function(value) {
		element(by.id('register_firstname')).sendKeys(value);
	};
		
	this.userTelephoneInput = function(value) {
		element(by.id('register_telephone')).sendKeys(value);
	};
	
	this.emailInput = userEmailInput =  function(value) {
		element(by.id('register_email')).sendKeys(value);
	};
    
	this.passwordInput = userPassInput =  function(value) {
		element(by.id('register_password')).sendKeys(value);
	};
		
	this.confirmPasswordInput = userConfPassInput =  function(value) {
		element(by.id('register_confirm_password')).sendKeys(value);
	};
	
	this.registrZoneId = function(value) {
		element(by.id('register_zone_id')).click();
	};
	
	this.selectZoneId = function(index) {
		element(by.id('register_zone_id')).$('[value="' + index + '"]').click();
	};
	
	this.registrCity = function(value) {
		element(by.id('register_city')).click();
	};
    
	this.selectCity = function(index) {
		element(by.id('register_city')).$('[value="' + index + '"]').click();
	};
	
	this.registerAddress = function(value) {
		element(by.id('register_address_1')).click();
	};
	
	this.selectAddress = function(index) {
		element(by.id('register_address_1')).$$('[value~="' + index + '"]').click();
	};
	this.continueButton = function() {
		element(by.id("simpleregister_button_confirm")).click();
		
	};
	
};
	


  module.exports = new registration_page();