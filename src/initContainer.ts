import { bindMainComponents, di } from '@framework';
import { initInfContainer, initGameManager } from './components/container';

export async function initContainer(): Promise<void> {
  const options = { envName: 'KICKER_ENV', baseDir: __dirname };

  await bindMainComponents(di.container, options);
  await initInfContainer(di.container, options);
  await initGameManager(di.container);
}
