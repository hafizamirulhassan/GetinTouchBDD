package MyRunner;


import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@RunWith(Cucumber.class)
@CucumberOptions(
	features = "src\\test\\java\\Features\\GetInTouch.feature", // path of feature file.
	glue={"StepDefinition"},
	monochrome=true, // Given output would be readable format in console.
	dryRun=true, // actually run the feature file steps.
	tags= {""},
	plugin= {"pretty" , "html:target/cucumber", "json:target/cucumber.json","com.cucumber.listener.ExtentCucumberFormatter:target/report.html"} // To generate different types of reporting
	)
public class TestRunner extends AbstractTestNGCucumberTests{
	
	

}
