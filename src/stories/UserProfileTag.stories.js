import { fn } from '@storybook/test';
import { UserProfileTag } from './UserProfileTag';

// Configuración para Storybook
export default {
  title: 'Example/UserProfileTag',
  component: UserProfileTag,
  args: { onClick: fn() }
};

// Historia para la caja primaria
export const Primary = {
  args: {
    label: 'Caja primaria',
    imgUrl: './assets/discord.svg'
  },
};

