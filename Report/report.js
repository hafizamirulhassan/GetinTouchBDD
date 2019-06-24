$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/Features/GetInTouch_Login.feature");
formatter.feature({
  "line": 1,
  "name": "TU Get In Touch LOGIN",
  "description": "",
  "id": "tu-get-in-touch-login",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "TU Get In Touch Registration",
  "description": "",
  "id": "tu-get-in-touch-login;tu-get-in-touch-registration",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User Navigate to profile",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "close the agreepopup",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "Click on getintouch CTA button logged out",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Switch on Login Tab",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Enter \"\u003cEmail\u003e\" and \"\u003cPassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user press login button",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "select study level as BC",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "select sub from dropdown",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "select study destination",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "country of residence",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "phone number",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "press Get In Touch button",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 16,
      "value": "#Then Get title of the page"
    },
    {
      "line": 17,
      "value": "#Then hover on user profile for logout"
    },
    {
      "line": 18,
      "value": "#Then press Logout button"
    }
  ],
  "line": 19,
  "name": "close browser",
  "keyword": "And "
});
formatter.examples({
  "line": 21,
  "name": "",
  "description": "",
  "id": "tu-get-in-touch-login;tu-get-in-touch-registration;",
  "rows": [
    {
      "cells": [
        "Fname",
        "Lname",
        "Email",
        "Password"
      ],
      "line": 22,
      "id": "tu-get-in-touch-login;tu-get-in-touch-registration;;1"
    },
    {
      "cells": [
        "amir",
        "automation",
        "getintouch105@gmail.com",
        "pak123"
      ],
      "line": 23,
      "id": "tu-get-in-touch-login;tu-get-in-touch-registration;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 23,
  "name": "TU Get In Touch Registration",
  "description": "",
  "id": "tu-get-in-touch-login;tu-get-in-touch-registration;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User Navigate to profile",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "close the agreepopup",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "Click on getintouch CTA button logged out",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Switch on Login Tab",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Enter \"getintouch105@gmail.com\" and \"pak123\"",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user press login button",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "select study level as BC",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "select sub from dropdown",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "select study destination",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "country of residence",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "phone number",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "press Get In Touch button",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 16,
      "value": "#Then Get title of the page"
    },
    {
      "line": 17,
      "value": "#Then hover on user profile for logout"
    },
    {
      "line": 18,
      "value": "#Then press Logout button"
    }
  ],
  "line": 19,
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "GetInTouch_LoginDefinition.user_Navigate_to_any_profile()"
});
formatter.result({
  "duration": 41516164700,
  "status": "passed"
});
formatter.match({
  "location": "GetInTouch_LoginDefinition.close_agreepopup()"
});
formatter.result({
  "duration": 4087014500,
  "status": "passed"
});
formatter.match({
  "location": "GetInTouch_LoginDefinition.click_on_getintouch_CTA_button_as_logged_out()"
});
formatter.result({
  "duration": 10564590600,
  "status": "passed"
});
formatter.match({
  "location": "GetInTouch_LoginDefinition.Switch_on_Login_Tab()"
});
formatter.result({
  "duration": 2089984000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "getintouch105@gmail.com",
      "offset": 7
    },
    {
      "val": "pak123",
      "offset": 37
    }
  ],
  "location": "GetInTouch_LoginDefinition.user_enter_and(String,String)"
});
formatter.result({
  "duration": 12366437600,
  "status": "passed"
});
formatter.match({
  "location": "GetInTouch_LoginDefinition.user_press_JoinUs_button()"
});
formatter.result({
  "duration": 4114841300,
  "status": "passed"
});
formatter.match({
  "location": "GetInTouch_LoginDefinition.select_study_level_as_Bachelor()"
});
formatter.result({
  "duration": 30010685800,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\".l-what-study-level-bachelor-degree--2\"}\n  (Session info: chrome\u003d75.0.3770.100)\n  (Driver info: chromedriver\u003d2.43.600210 (68dcf5eebde37173d4027fa8635e332711d2874a),platform\u003dWindows NT 10.0.17763 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 30.01 seconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.43.1\u0027, revision: \u00275163bceef1bc36d43f3dc0b83c88998168a363a0\u0027, time: \u00272014-09-10 09:43:55\u0027\nSystem info: host: \u0027AmirPC\u0027, ip: \u0027192.168.8.115\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dfalse, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:57470}, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.43.600210 (68dcf5eebde37173d4027fa8635e332711d2874a), userDataDir\u003dC:\\Users\\Admin\\AppData\\Local\\Temp\\scoped_dir19228_29199}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d75.0.3770.100, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: a1df63322b2e788f93bf202b2736679d\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:204)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:156)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:599)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:352)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:441)\r\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:425)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:344)\r\n\tat StepDefinition.GetInTouch_LoginDefinition.select_study_level_as_Bachelor(GetInTouch_LoginDefinition.java:133)\r\n\tat ✽.Then select study level as BC(src/test/java/Features/GetInTouch_Login.feature:10)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "GetInTouch_LoginDefinition.select_subjects_from_dropdown()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "GetInTouch_LoginDefinition.select_study_destinations()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "GetInTouch_LoginDefinition.change_country_of_residence()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "GetInTouch_LoginDefinition.enter_phone_number()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "GetInTouch_LoginDefinition.press_Get_In_Touch_CTA_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "GetInTouch_LoginDefinition.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
});