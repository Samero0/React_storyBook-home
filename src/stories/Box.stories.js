import { Box } from './Box';
import { fn } from '@storybook/test';

// Configuración para Storybook
export default {
  title: 'Example/Box',
  component: Box,
  argTypes: {
    primary: { control: 'boolean' },
    hovered: { control: 'boolean' },
  },
  args: { onClick: fn() }
};

// Historia para la caja primaria
export const Primary = {
  args: {
    primary: true,
    hovered: false,
    label: 'Caja Primaria',
  },
};

// Historia para la caja secundaria
export const Secondary = {
  args: {
    primary: false,
    hovered: false,
    label: 'Caja Secundaria',
  },
};

// Historia para efecto hover
export const Hovered = {
  args: {
    primary: true,
    hovered: true,
    label: 'Hover sobre mí',
  },
};
