/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { Conf } from '@nx-tamagui-example/ui';
declare module 'tamagui' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface TamaguiCustomConfig extends Conf {}
}

