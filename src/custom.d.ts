import type * as React from 'react';
import type { IconBaseProps } from 'react-icons/lib/iconBase';
declare module '*.css';
declare module '*.scss';
declare module '*.sass';
declare module 'react-icons/lib/index' {
  export type IconType = (props: IconBaseProps) => React.ReactElement | null;
}
