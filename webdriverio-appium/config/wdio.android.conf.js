var path = require("Path");
const { config } = require("./wdio.shared.conf");

// Appium port
config.port = 4723;
// Specs files
config.specs = ["./test/specs/android/delete*.js"];
// android capablities
config.capabilities = [
  {
    platformName: "Android",
    "appium:deviceName": "Pixel3-10",
    "appium:platformVersion": "10",
    "appium:automationName": "UIAutomator2",
    "appium:app": path.join(process.cwd(), "./app/android/Notepad.apk"),
    "appium:autoGrantPermissions": true,
  },
];
// Service
config.services["appium"];

exports.config = config;
