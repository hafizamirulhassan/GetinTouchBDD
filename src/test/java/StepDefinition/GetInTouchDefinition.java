package StepDefinition;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Set;
import java.util.concurrent.TimeUnit;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.asserts.SoftAssert;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class GetInTouchDefinition {

	WebDriver driver;

	@Given("^User Navigate to any profile$")
	public void user_Navigate_to_any_profile() throws Throwable {

		System.setProperty("webdriver.chrome.driver", "C:\\Users\\Admin\\Downloads\\testProject\\chromedriver.exe");
		// Create a new instance of the Chrome driver
		driver = new ChromeDriver();

		ArrayList<String> mylist = new ArrayList<String>(); 
		mylist.add("https://dev.topuniversities.com/universities/ecole-polytechnique"); 
		mylist.add("https://dev.topuniversities.com/universities/ku-leuven"); 
		mylist.add("https://dev.topuniversities.com/universities/ucl"); 
		mylist.add("https://dev.topuniversities.com/universities/imperial-college-london");
		mylist.add("https://dev.topuniversities.com/universities/lomonosov-moscow-state-university");
		mylist.add("https://dev.topuniversities.com/universities/university-auckland");
		mylist.add("https://dev.topuniversities.com/universities/hong-kong-polytechnic-university");
		mylist.add("https://dev.topuniversities.com/universities/lund-university");
		mylist.add("https://dev.topuniversities.com/universities/kth-royal-institute-technology");
		
		/*mylist.add("https://www.topuniversities.com/universities/ecole-polytechnique");
		mylist.add("https://www.topuniversities.com/universities/ucl");
		mylist.add("https://www.topuniversities.com/universities/ku-leuven");
		mylist.add("https://www.topuniversities.com/universities/imperial-college-london");
		mylist.add("https://www.topuniversities.com/universities/lomonosov-moscow-state-university");
		mylist.add("https://www.topuniversities.com/universities/university-auckland");
		mylist.add("https://www.topuniversities.com/universities/hong-kong-polytechnic-university");
		mylist.add("https://www.topuniversities.com/universities/lund-university");
		mylist.add("https://www.topuniversities.com/universities/kth-royal-institute-technology");*/


		Collections.shuffle(mylist);
		driver.get(mylist.get(0));

		driver.manage().window().maximize();
		driver.manage().deleteAllCookies();
		driver.manage().timeouts().pageLoadTimeout(TestUtils.Page_Load_Timeout, TimeUnit.SECONDS);
		driver.manage().timeouts().implicitlyWait(TestUtils.Implecite_Wait, TimeUnit.SECONDS);

	}

	@Then("^close agreepopup$")
	public void close_agreepopup() throws Throwable {

		WebElement AgreePopUP=driver.findElement(By.xpath("//*[@id=\"popup-buttons\"]/button"));
		AgreePopUP.click();
		Thread.sleep(4000);
	}

	@Then("^Click on getintouch CTA button as logged out$")
	public void click_on_getintouch_CTA_button_as_logged_out() throws Throwable {

		WebElement GITBTN=driver.findElement(By.cssSelector("a.btn-trans:nth-child(1)"));
		GITBTN.click();

		// Get In Touch LG form is visible
		String master = driver.getWindowHandle();
		int timeCount = 1;

		do
		{
			driver.getWindowHandles();
			Thread.sleep(200);
			timeCount++;
			if ( timeCount > 50 ) 
			{
				break;
			}
		}
		while ( driver.getWindowHandles().size() == 1 );

		//Assigning the handles to a set
		Set<String> handles = driver.getWindowHandles();
		//Switching to the popup window.
		for ( String handle : handles )
		{
			if(!handle.equals(master))
			{
				driver.switchTo().window(handle);
			}
		}
	}

	@Then("^user enter Firstname \"([^\"]*)\"$")
	public void user_enter_Firstname(String Firstname) throws Throwable {

		WebElement firstNameOBJ=driver.findElement(By.cssSelector("#edit-field-first-name-und-0-value--2"));
		firstNameOBJ.sendKeys(Firstname);
		Thread.sleep(2000);
	}

	@Then("^user enter Lastname \"([^\"]*)\"$")
	public void user_enter_Lastname(String Lastname) throws Throwable {

		WebElement secondNameOBJ=driver.findElement(By.cssSelector("#edit-field-last-name-und-0-value--2"));
		secondNameOBJ.sendKeys(Lastname);
		driver.manage().timeouts().implicitlyWait(100, TimeUnit.SECONDS);
		Thread.sleep(2000);


	}

	@Then("^user enter \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_enter_and(String Email, String Password) throws Throwable {

		Thread.sleep(4000);
		WebElement emailOBJ=driver.findElement(By.cssSelector("#edit-mail--5"));
		emailOBJ.sendKeys(Email);
		Thread.sleep(4000);
		
		SoftAssert asse=new SoftAssert();
		String actual_error=driver.findElement(By.cssSelector("#edit-account--2 > div:nth-child(2) > div:nth-child(4)")).getText();
		String expected_error="This email address is already taken, please try another.";
		asse.assertEquals(actual_error, expected_error, "sfsdfsasd");
		asse.assertTrue(actual_error.contains("sdfsdfsdfds"));
		
		WebElement passwordOBJ=driver.findElement(By.cssSelector("#edit-pass--5"));
		passwordOBJ.sendKeys(Password);
		Thread.sleep(4000);

	}

	@Then("^user check the QS Leap checkbox as yes$")
	public void user_check_the_QS_Leap_checkbox_as_yes() throws Throwable {

		WebElement QS_Lead_Checkbox=driver.findElement(By.cssSelector(".l-field-erg-1-und-1--2 > span:nth-child(1)"));
		QS_Lead_Checkbox.click();
		Thread.sleep(2000);
	}

	@Then("^user check the third party checkbox as yes$")
	public void user_check_the_third_party_checkbox_as_yes() throws Throwable {

		WebElement third_party_Checkbox=driver.findElement(By.cssSelector(".l-field-partner-optin-und-1--2 > span:nth-child(1)"));
		third_party_Checkbox.click();
		Thread.sleep(4000);
	}

	@And("^user press JoinUs button$")
	public void user_press_JoinUs_button() throws Throwable {

		WebElement joinusbutton=driver.findElement(By.cssSelector("#edit-submit--9"));
		if	(!joinusbutton.isEnabled()) {
			System.out.println("button is not active");
		}
		joinusbutton.click();
		
		
		Thread.sleep(3000);
	}
	
	@And("^close LG form$")
	public void close_lg_form() throws Throwable {

		// Get In Touch LG form is visible
		String master = driver.getWindowHandle();
		int timeCount = 1;

		do
		{
			driver.getWindowHandles();
			Thread.sleep(200);
			timeCount++;
			if ( timeCount > 50 ) 
			{
				break;
			}
		}
		while ( driver.getWindowHandles().size() == 1 );

		//Assigning the handles to a set
		Set<String> handles = driver.getWindowHandles();
		//Switching to the popup window.
		for ( String handle : handles )
		{
			if(!handle.equals(master))
			{
				driver.switchTo().window(handle);
			}
		}
		
		Thread.sleep(4000);
		WebElement closelgform=driver.findElement(By.xpath("//*[@id=\"publication-reg\"]/div/div/div[1]/button"));
		closelgform.click();
		
		
	}

	/*@Then("^select study level as Bachelor$")
	public void select_study_level_as_Bachelor() throws Throwable {

		WebElement studylevel=driver.findElement(By.cssSelector(".l-what-study-level-bachelor-degree--2"));
		studylevel.click();	
		Thread.sleep(4000);

	}

	@Then("^select subjects from dropdown$")
	public void select_subjects_from_dropdown() throws Throwable {


		WebElement Click=driver.findElement(By.cssSelector("#qs-guides-step-two-form > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > p:nth-child(2)"));
		Click.click();


		ArrayList<By> list2=new ArrayList<By>();
		list2.add(By.xpath("/html/body/div[1]/div[3]/div/div/div/div[1]/div/div[7]/div/div/div[2]/div[2]/div/div[1]/form/div/div[2]/div[1]/div/div/ul/li[1]/ul/li[1]/span"));
		list2.add(By.xpath("/html/body/div[1]/div[3]/div/div/div/div[1]/div/div[7]/div/div/div[2]/div[2]/div/div[1]/form/div/div[2]/div[1]/div/div/ul/li[1]/ul/li[2]/span"));
		list2.add(By.xpath("/html/body/div[1]/div[3]/div/div/div/div[1]/div/div[7]/div/div/div[2]/div[2]/div/div[1]/form/div/div[2]/div[1]/div/div/ul/li[1]/ul/li[3]/span"));
		list2.add(By.xpath("/html/body/div[1]/div[3]/div/div/div/div[1]/div/div[7]/div/div/div[2]/div[2]/div/div[1]/form/div/div[2]/div[1]/div/div/ul/li[1]/ul/li[4]/span"));
		list2.add(By.xpath("/html/body/div[1]/div[3]/div/div/div/div[1]/div/div[7]/div/div/div[2]/div[2]/div/div[1]/form/div/div[2]/div[1]/div/div/ul/li[1]/ul/li[5]/span"));
		for(int i = 0; i<list2.size(); i++) {
			Thread.sleep(2000);
			WebElement subject1=driver.findElement(list2.get(i));
			subject1.click();


		}
		 

		WebElement subject1=driver.findElement(By.cssSelector(".open > div:nth-child(3) > ul:nth-child(1) > li:nth-child(1) > ul:nth-child(2) > li:nth-child(1) > span:nth-child(1)"));
		subject1.click();
		Thread.sleep(2000);
		WebElement subject2=driver.findElement(By.cssSelector(".open > div:nth-child(3) > ul:nth-child(1) > li:nth-child(1) > ul:nth-child(2) > li:nth-child(2) > span:nth-child(1)"));
		subject2.click();
		Thread.sleep(2000);
		WebElement subject3=driver.findElement(By.cssSelector(".open > div:nth-child(3) > ul:nth-child(1) > li:nth-child(1) > ul:nth-child(2) > li:nth-child(3) > span:nth-child(1)"));
		subject3.click();
		Thread.sleep(2000);
		WebElement subject4=driver.findElement(By.cssSelector(".open > div:nth-child(3) > ul:nth-child(1) > li:nth-child(1) > ul:nth-child(2) > li:nth-child(4) > span:nth-child(1)"));
		subject4.click();
		Thread.sleep(2000);
		WebElement subject5=driver.findElement(By.cssSelector(".open > div:nth-child(3) > ul:nth-child(1) > li:nth-child(1) > ul:nth-child(2) > li:nth-child(5) > span:nth-child(1)"));
		subject5.click();
		Thread.sleep(2000);


		driver.findElement(By.cssSelector("div.desktop-tablet:nth-child(2)")).click();
		Thread.sleep(4000);
	}

	@Then("^select study destinations$")
	public void select_study_destinations() throws Throwable {

		WebElement destination=driver.findElement(By.xpath("//*[@id=\"qs-guides-step-two-form\"]/div/div[3]/div[1]/span[1]"));
		destination.click();

		Thread.sleep(2000);

		Thread.sleep(2000);
		WebElement destination1=driver.findElement(By.cssSelector(".jcf-list-content > ul:nth-child(1) > li:nth-child(1) > span:nth-child(1) > ul:nth-child(2) > li:nth-child(1) > span:nth-child(1)"));
		destination1.click();
		Thread.sleep(2000);
		WebElement destination2=driver.findElement(By.cssSelector(".jcf-list-content > ul:nth-child(1) > li:nth-child(1) > span:nth-child(1) > ul:nth-child(2) > li:nth-child(2) > span:nth-child(1)"));
		destination2.click();
		Thread.sleep(2000);
		WebElement destination6=driver.findElement(By.cssSelector(".jcf-list-content > ul:nth-child(1) > li:nth-child(1) > span:nth-child(1) > ul:nth-child(2) > li:nth-child(3) > span:nth-child(1)"));
		destination6.click();
		Thread.sleep(2000);

		WebElement dest_clickagain=driver.findElement(By.xpath("//*[@id=\"qs-guides-step-two-form\"]/div/div[3]/div[1]/span[1]"));
		dest_clickagain.click();

		Thread.sleep(2000);


	}

	@Then("^change country of residence$")
	public void change_country_of_residence() throws Throwable {

		WebElement COR_click=driver.findElement(By.xpath("//*[@id=\"edit-cor--2\"]"));
		COR_click.click();
		COR_click.clear();
		WebElement COR=driver.findElement(By.cssSelector("#edit-cor--2"));
		COR.sendKeys("United Kingdom");
		WebElement select=driver.findElement(By.cssSelector("div.form-type-textfield:nth-child(5) > div:nth-child(5) > ul:nth-child(2) > li:nth-child(234)"));
		select.click();

		Thread.sleep(4000);
	}

	@Then("^enter phone number$")
	public void enter_phone_number() throws Throwable {

		WebElement phonenubmer=driver.findElement(By.cssSelector("#edit-mobile-number--2"));
		phonenubmer.sendKeys("46465465465");
		Thread.sleep(4000);
	}

	@Then("^press Get In Touch CTA button$")
	public void press_Get_In_Touch_CTA_button() throws Throwable {

		WebElement GIT_CTA=driver.findElement(By.cssSelector("#edit-submit--5"));
		GIT_CTA.click();
	}*/

	/*@Then("^Get title of the page$")
	public void get_title_of_the_page() throws Throwable {

		String title=driver.getTitle();
		System.out.println(title);
		//Assert.assertEquals("Top Universities | Worldwide university rankings, guides & events", title);
		Thread.sleep(7000);
	}*/

	/*@Then("^hover on user profile for logout$")
	public void hover_on_user_profile_for_logout() throws Throwable {
		//WebElement logouthover=driver.findElement(By.xpath("//*[@id=\"header\"]/div[1]/div[2]/div/div/div[3]/div/div[5]/div[3]"));
		WebElement logouthover=driver.findElement(By.cssSelector(".user-arrow"));
		//*[@id="header"]/div[1]/div[2]/div/div/div[3]/div/div[5]/div[3]
		Actions action2=new Actions(driver);
		//*[@id="header"]/div[1]/div[2]/div/div/div[3]/div/div[5]/div[3]/div/div[2]/div/div[1]/div/img
		//*[@id="header"]/div[1]/div[2]/div/div/div[3]/div/div[5]/div[3]/div/div[2]/div/div[1]/div


		action2.moveToElement(logouthover).build().perform();
		Thread.sleep(2000);

	}

	@Then("^press Logout button$")
	public void press_Logout_button() throws Throwable {

		WebElement logout=driver.findElement(By.cssSelector("#header > div.main_header > div.top_nav > div > div > div.icons_nav > div > div.btn-group.jquery-once-1-processed > div.user_profile_links.hidden > ul > li:nth-child(4) > a"));
		logout.click();
	}*/

	@And("^close the browser$")
	public void close_the_browser() throws Throwable {
		driver.quit();


	}
}
