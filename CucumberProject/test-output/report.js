$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("MyAccount-Login.feature");
formatter.feature({
  "line": 1,
  "name": "My Account Login",
  "description": "Description: Testing the account login feature",
  "id": "my-account-login",
  "keyword": "Feature"
});
formatter.scenario({
  "comments": [
    {
      "line": 4,
      "value": "#Simple login without parameters"
    },
    {
      "line": 5,
      "value": "#Scenario: Log-In with valid username and password"
    },
    {
      "line": 6,
      "value": "#Given Open Browser"
    },
    {
      "line": 7,
      "value": "#When Enter the url \"http://practice.automationtesting.in/\""
    },
    {
      "line": 8,
      "value": "#And Click on My Account Menu"
    },
    {
      "line": 9,
      "value": "#And Enter registered Username and Password"
    },
    {
      "line": 10,
      "value": "#And Click on Login button"
    },
    {
      "line": 11,
      "value": "#Then User must be logged in successfully"
    },
    {
      "line": 13,
      "value": "#Simple login without parameters"
    },
    {
      "line": 14,
      "value": "#Scenario: Log-In with valid username and password"
    },
    {
      "line": 15,
      "value": "#Given Open Browser"
    },
    {
      "line": 16,
      "value": "#When Enter the url \"http://practice.automationtesting.in/\""
    },
    {
      "line": 17,
      "value": "#And Click on My Account Menu"
    },
    {
      "line": 18,
      "value": "#And Enter registered Username \"rkiran33@yahoo.co.in\" and Password \"Jsm@3343\""
    },
    {
      "line": 19,
      "value": "#And Click on Login button"
    },
    {
      "line": 20,
      "value": "#Then User must be logged in successfully"
    },
    {
      "line": 22,
      "value": "#Simple login without parameters"
    },
    {
      "line": 23,
      "value": "#Scenario Outline: Log-In with valid username and password"
    },
    {
      "line": 24,
      "value": "#Given Open Browser"
    },
    {
      "line": 25,
      "value": "#When Enter the url \"http://practice.automationtesting.in/\""
    },
    {
      "line": 26,
      "value": "#And Click on My Account Menu"
    },
    {
      "line": 27,
      "value": "#And Enter registered Username \"\u003cusername\u003e\" and Password \"\u003cpassword\u003e\""
    },
    {
      "line": 28,
      "value": "#And Click on Login button"
    },
    {
      "line": 29,
      "value": "#Then Verify Login"
    },
    {
      "line": 31,
      "value": "#Examples:"
    },
    {
      "line": 32,
      "value": "# |\tusername\t\t\t\t|\tpassword\t|"
    },
    {
      "line": 33,
      "value": "# |\trkiran33@yahoo.co.in\t|\tjsm3343\t\t|"
    },
    {
      "line": 34,
      "value": "# |\trkiran33@yahoo.co.in\t|\tJsm@3343\t|"
    },
    {
      "line": 35,
      "value": "# |\trkiran33@yahoo.co.in\t|\tjsm33432\t|"
    },
    {
      "line": 37,
      "value": "#Scenario: Log-In with valid username and password"
    },
    {
      "line": 38,
      "value": "#Given Open Browser"
    },
    {
      "line": 39,
      "value": "#When Enter the url \"http://practice.automationtesting.in/\""
    },
    {
      "line": 40,
      "value": "#And Click on My Account Menu"
    },
    {
      "line": 41,
      "value": "#And Enter registered Username and Password"
    },
    {
      "line": 42,
      "value": "#|\trkiran33@yahoo.co.in\t|\tJsm@3343\t|"
    },
    {
      "line": 43,
      "value": "#And Click on Login button"
    },
    {
      "line": 44,
      "value": "#Then User must be logged in successfully"
    }
  ],
  "line": 46,
  "name": "Log-In with valid username and password",
  "description": "",
  "id": "my-account-login;log-in-with-valid-username-and-password",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 47,
  "name": "Open Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 48,
  "name": "Enter the url \"http://practice.automationtesting.in/\"",
  "keyword": "When "
});
formatter.step({
  "line": 49,
  "name": "Click on My Account Menu",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "Enter registered Username and Password",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 51
    },
    {
      "cells": [
        "rkiran33@yahoo.co.in",
        "Jsm@3343"
      ],
      "line": 52
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "Click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "User must be logged in successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "MyAccountLoginStepDefinitions.open_Browser()"
});
formatter.result({
  "duration": 5100877500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://practice.automationtesting.in/",
      "offset": 15
    }
  ],
  "location": "MyAccountLoginStepDefinitions.enter_the_url(String)"
});
formatter.result({
  "duration": 6192756000,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountLoginStepDefinitions.click_on_My_Account_Menu()"
});
formatter.result({
  "duration": 6210101700,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountLoginStepDefinitions.enter_registered_Username_and_Password(DataTable)"
});
formatter.result({
  "duration": 370473700,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountLoginStepDefinitions.click_on_Login_button()"
});
formatter.result({
  "duration": 2719812300,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountLoginStepDefinitions.user_must_be_logged_in_successfully()"
});
formatter.result({
  "duration": 893984600,
  "status": "passed"
});
});