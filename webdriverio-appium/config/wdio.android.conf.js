var path = require("Path");
import { config } from "./wdio.shared.conf";
// const { config } = require("./wdio.shared.config");

config.port = 4723;
config.specs = ["./test/specs/android/delete*.js"];
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
config.services["appium"];

// exports.config = config;
export { config };
