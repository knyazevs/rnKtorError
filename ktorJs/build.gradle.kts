plugins {
    kotlin("js") version "2.0.10"
}

group = "io.github.knyazevs"
version = "1.0-SNAPSHOT"

repositories {
    mavenCentral()
}

val ktor_version: String by project


dependencies {
    implementation("io.ktor:ktor-client-core:$ktor_version")
    implementation("io.ktor:ktor-client-js:$ktor_version")

    testImplementation(kotlin("test"))
}


kotlin {
    js(IR) {
        moduleName = "ktor-nodejs"
        compilations["main"].packageJson {
            customField("name", "@knyazevs/$group")
        }
        useCommonJs()
        nodejs()
        generateTypeScriptDefinitions()
        binaries.library()
        binaries.executable()
        browser {}

    }
}

tasks.named("productionLibraryCompileSync").configure { dependsOn("browserProductionWebpack") }