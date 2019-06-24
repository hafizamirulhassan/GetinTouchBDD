$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/Features/GetInTouch.feature");
formatter.feature({
  "line": 1,
  "name": "TU Get In Touch Registration and Login",
  "description": "",
  "id": "tu-get-in-touch-registration-and-login",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "TU Get In Touch Registration",
  "description": "",
  "id": "tu-get-in-touch-registration-and-login;tu-get-in-touch-registration",
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
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "select study level as Bachelor",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "select subjects from dropdown",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "select study destinations",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "change country of residence",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "enter phone number",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "press Get In Touch CTA button",
  "keyword": "Then "
});
formatter.step({
  "comments": [
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
  "id": "tu-get-in-touch-registration-and-login;tu-get-in-touch-registration;",
  "rows": [
    {
      "cells": [
        "Fname",
        "Lname",
        "Email",
        "Password"
      ],
      "line": 25,
      "id": "tu-get-in-touch-registration-and-login;tu-get-in-touch-registration;;1"
    },
    {
      "cells": [
        "amir",
        "automation",
        "getintouch105@gmail.com",
        "pak123"
      ],
      "line": 26,
      "id": "tu-get-in-touch-registration-and-login;tu-get-in-touch-registration;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 26,
  "name": "TU Get In Touch Registration",
  "description": "",
  "id": "tu-get-in-touch-registration-and-login;tu-get-in-touch-registration;;2",
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
  "name": "user enter \"getintouch105@gmail.com\" and \"pak123\"",
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
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "select study level as Bachelor",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "select subjects from dropdown",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "select study destinations",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "change country of residence",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "enter phone number",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "press Get In Touch CTA button",
  "keyword": "Then "
});
formatter.step({
  "comments": [
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
  "duration": 19684729700,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: cannot determine loading status\nfrom disconnected: received Inspector.detached event\n  (Session info: chrome\u003d75.0.3770.100)\n  (Driver info: chromedriver\u003d2.43.600210 (68dcf5eebde37173d4027fa8635e332711d2874a),platform\u003dWindows NT 10.0.17763 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 15.56 seconds\nBuild info: version: \u00272.43.1\u0027, revision: \u00275163bceef1bc36d43f3dc0b83c88998168a363a0\u0027, time: \u00272014-09-10 09:43:55\u0027\nSystem info: host: \u0027AmirPC\u0027, ip: \u0027192.168.8.115\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dfalse, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:55850}, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.43.600210 (68dcf5eebde37173d4027fa8635e332711d2874a), userDataDir\u003dC:\\Users\\Admin\\AppData\\Local\\Temp\\scoped_dir2200_1437}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d75.0.3770.100, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 817067f6761ba3542423090b38cb441b\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:204)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:156)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:599)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:304)\r\n\tat StepDefinition.GetInTouchDefinition.user_Navigate_to_any_profile(GetInTouchDefinition.java:40)\r\n\tat ✽.Given User Navigate to any profile(src/test/java/Features/GetInTouch.feature:4)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "GetInTouchDefinition.close_agreepopup()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "GetInTouchDefinition.click_on_getintouch_CTA_button_as_logged_out()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "getintouch105@gmail.com",
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
  "status": "skipped"
});
formatter.match({
  "location": "GetInTouchDefinition.user_check_the_QS_Leap_checkbox_as_yes()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "GetInTouchDefinition.user_check_the_third_party_checkbox_as_yes()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "GetInTouchDefinition.user_press_JoinUs_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "GetInTouchDefinition.select_study_level_as_Bachelor()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "GetInTouchDefinition.select_subjects_from_dropdown()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "GetInTouchDefinition.select_study_destinations()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "GetInTouchDefinition.change_country_of_residence()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "GetInTouchDefinition.enter_phone_number()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "GetInTouchDefinition.press_Get_In_Touch_CTA_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "GetInTouchDefinition.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
});