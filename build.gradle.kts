plugins {
  id("org.sonarqube") version "4.2.1.3168"
}

sonar {
  properties {
    property("sonar.projectKey", "GuTory_trainme")
    property("sonar.organization", "gutory")
    property("sonar.host.url", "https://sonarcloud.io")
  }
}
