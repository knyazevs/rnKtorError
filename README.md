# Application for Reproducing ktor Error in React Native

## Required Environment

1. Java 17+
2. Node.js 18+
```
   choco install -y nodejs-lts microsoft-openjdk17
```
3. Android SDK Platform 34 (Android 14 (UpsideDownCake))
4. Set ANDROID_HOME as an environment variable
5. Add platform-tools to the Path environment variable
6. Start an emulator or connect a physical device

## Step-by-Step Instructions

1. Build the ktorJs project
   ```
   cd ./ktorJs
   gradle assemble
   ```
2. Start the RN (React Native) project
   ```
   npm run android
   ```