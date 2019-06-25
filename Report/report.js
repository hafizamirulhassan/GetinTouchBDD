$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/Features/GetInTouch.feature");
formatter.feature({
  "line": 1,
  "name": "TU Get In Touch Registration",
  "description": "",
  "id": "tu-get-in-touch-registration",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "TU Get In Touch Registration",
  "description": "",
  "id": "tu-get-in-touch-registration;tu-get-in-touch-registration",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User Navigate to any profile",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "close agreepopup",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "Click on getintouch CTA button as logged out",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user enter Firstname \"\u003cFname\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user enter Lastname \"\u003cLname\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user enter \"\u003cEmail\u003e\" and \"\u003cPassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user check the QS Leap checkbox as yes",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user check the third party checkbox as yes",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user press JoinUs button",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 13,
      "value": "#Then select study level as Bachelor"
    },
    {
      "line": 14,
      "value": "#Then select subjects from dropdown"
    },
    {
      "line": 15,
      "value": "#Then select study destinations"
    },
    {
      "line": 16,
      "value": "#Then change country of residence"
    },
    {
      "line": 17,
      "value": "#Then enter phone number"
    },
    {
      "line": 18,
      "value": "#Then press Get In Touch CTA button"
    },
    {
      "line": 19,
      "value": "#Then Get title of the page"
    },
    {
      "line": 20,
      "value": "#Then hover on user profile for logout"
    },
    {
      "line": 21,
      "value": "#Then press Logout button"
    }
  ],
  "line": 22,
  "name": "close the browser",
  "keyword": "And "
});
formatter.examples({
  "line": 24,
  "name": "",
  "description": "",
  "id": "tu-get-in-touch-registration;tu-get-in-touch-registration;",
  "rows": [
    {
      "cells": [
        "Fname",
        "Lname",
        "Email",
        "Password"
      ],
      "line": 25,
      "id": "tu-get-in-touch-registration;tu-get-in-touch-registration;;1"
    },
    {
      "cells": [
        "amir",
        "automation",
        "getintouch109@gmail.com",
        "pak123"
      ],
      "line": 26,
      "id": "tu-get-in-touch-registration;tu-get-in-touch-registration;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 26,
  "name": "TU Get In Touch Registration",
  "description": "",
  "id": "tu-get-in-touch-registration;tu-get-in-touch-registration;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User Navigate to any profile",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "close agreepopup",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "Click on getintouch CTA button as logged out",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user enter Firstname \"amir\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user enter Lastname \"automation\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user enter \"getintouch109@gmail.com\" and \"pak123\"",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user check the QS Leap checkbox as yes",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user check the third party checkbox as yes",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user press JoinUs button",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 13,
      "value": "#Then select study level as Bachelor"
    },
    {
      "line": 14,
      "value": "#Then select subjects from dropdown"
    },
    {
      "line": 15,
      "value": "#Then select study destinations"
    },
    {
      "line": 16,
      "value": "#Then change country of residence"
    },
    {
      "line": 17,
      "value": "#Then enter phone number"
    },
    {
      "line": 18,
      "value": "#Then press Get In Touch CTA button"
    },
    {
      "line": 19,
      "value": "#Then Get title of the page"
    },
    {
      "line": 20,
      "value": "#Then hover on user profile for logout"
    },
    {
      "line": 21,
      "value": "#Then press Logout button"
    }
  ],
  "line": 22,
  "name": "close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "GetInTouchDefinition.user_Navigate_to_any_profile()"
});
formatter.result({
  "duration": 39550704800,
  "status": "passed"
});
formatter.match({
  "location": "GetInTouchDefinition.close_agreepopup()"
});
formatter.result({
  "duration": 4088971600,
  "status": "passed"
});
formatter.match({
  "location": "GetInTouchDefinition.click_on_getintouch_CTA_button_as_logged_out()"
});
formatter.result({
  "duration": 10647718700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "amir",
      "offset": 22
    }
  ],
  "location": "GetInTouchDefinition.user_enter_Firstname(String)"
});
formatter.result({
  "duration": 2103562100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "automation",
      "offset": 21
    }
  ],
  "location": "GetInTouchDefinition.user_enter_Lastname(String)"
});
formatter.result({
  "duration": 2153039100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "getintouch109@gmail.com",
      "offset": 12
    },
    {
      "val": "pak123",
      "offset": 42
    }
  ],
  "location": "GetInTouchDefinition.user_enter_and(String,String)"
});
formatter.result({
  "duration": 12531766500,
  "status": "passed"
});
formatter.match({
  "location": "GetInTouchDefinition.user_check_the_QS_Leap_checkbox_as_yes()"
});
formatter.result({
  "duration": 2070490500,
  "status": "passed"
});
formatter.match({
  "location": "GetInTouchDefinition.user_check_the_third_party_checkbox_as_yes()"
});
formatter.result({
  "duration": 4069535500,
  "status": "passed"
});
formatter.match({
  "location": "GetInTouchDefinition.user_press_JoinUs_button()"
});
formatter.result({
  "duration": 4216085100,
  "status": "passed"
});
formatter.match({
  "location": "GetInTouchDefinition.close_the_browser()"
});
formatter.result({
  "duration": 1173887800,
  "status": "passed"
});
});