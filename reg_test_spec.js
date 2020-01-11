var util = require ('util')

describe ("test skuterok registration form", function() {
  beforeEach(function() {
	  browser.waitForAngularEnabled(false);
      browser.get("http://skuterok.com.ua/");
	  
     });
     
	 	 
	 var sign_up_page = require('../page/sign_up_page.js');
	 
	 it ('Way to Start registration' , function() {
     
	 
	 
	 var registration_page = sign_up_page.loginButton();
		 registration_page.lastNameInput("horseQA");
	     registration_page.userFirstNameInput("AndrQA");
	     registration_page.userTelephoneInput("0987788999");
	     registration_page.emailInput("testqafirst@ukr.net");
         registration_page.passwordInput("Q$aZ1tttt@23WsX");
	     registration_page.confirmPasswordInput("Q$aZ1tttt@23WsX");
		 registration_page.registrZoneId();
		 registration_page.selectZoneId("3483");
		 registration_page.registrCity();
		 registration_page.selectCity("Днепр");
		 registration_page.registerAddress();
		 registration_page.selectAddress("Отделение №15: просп. Труда, 9");
		 registration_page.continueButton();
     
	 });
	 
	
});
browser.sleep(5000);
	 
