package MyRunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
	features = "src\\test\\java\\Features\\GetInTouch.feature", // path of feature file.
	glue={"StepDefinition"},
	format= {"pretty" , "html:C:\\Users\\Admin\\eclipse-workspace\\GetInTouchAutomation\\Report", "json:json_output/cucumber.json", "junit:junit_xml/cucumber.xml"} // To generate different types of reporting
	//monochrome=true, // it will show console output proper readable format in console.
	//dryRun=true, // TO check the mapping is proper between feature file and step definition file
	//strict=true // it will check if step is not defined in step definition file.
	
	)
public class TestRunner {

}
