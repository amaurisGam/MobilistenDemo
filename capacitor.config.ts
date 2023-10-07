import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'IonicSampleProject',
  webDir: 'www',
  CAPACITOR_ANDROID_STUDIO_PATH : 'C:\\Program Files\\Android\\Android Studio\\bin\\studio64.exe',
  server: {
    androidScheme: 'https'
  }
};

export default config;
