import tailwidnConfig from '../tailwind.config';

export type TailwindConfig = typeof tailwidnConfig;
export type TailwindColors = TailwindConfig['theme']['extend']['colors'];
