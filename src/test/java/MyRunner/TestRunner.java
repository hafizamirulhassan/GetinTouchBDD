package MyRunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
	features = "src\\test\\java\\Features\\GetInTouch.feature", // path of feature file.
	glue={"StepDefinition"},
	format= {"pretty" , "html:C:\\Users\\Admin\\eclipse-workspace\\GetInTouchAutomation\\Report", "json:json_output/cucumber.json", "junit:junit_xml/cucumber.xml"} // To generate different types of reporting
	
	
	)
public class TestRunner {

}
