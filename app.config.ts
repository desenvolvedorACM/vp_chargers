import { ExpoConfig, ConfigContext } from 'expo/config';

const appName = 'VPChargers';

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  slug: appName,
  name: appName,
  version: "1.0.0",
  userInterfaceStyle: "automatic"
});

// {
//   "expo": {
//     "name": "VPChargers",
//       "slug": "VPChargers",
//         "version": "1.0.0",
//           "android": {
//       "package": "com.alexandreacm.VPChargers"
//     },
//     "ios": {
//       "bundleIdentifier": "com.alexandreacm.VPChargers"
//     }
//   }
// }
