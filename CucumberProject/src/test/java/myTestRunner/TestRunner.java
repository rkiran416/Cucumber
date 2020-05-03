package myTestRunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features="Features",
		glue="stepDefinitions",
		format={"pretty","html:test-output","json:target/cucumber-JVM-reports/cucumber.json"},
		dryRun=false,
		monochrome=true
		)

public class TestRunner {

}
