import { addons } from '@storybook/manager-api';
import { themes } from '@storybook/theming';
import shakhTheme from './shakh-theme';

addons.setConfig({
  theme: shakhTheme,
});