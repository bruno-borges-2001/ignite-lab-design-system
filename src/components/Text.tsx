import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx'
import { ReactNode } from 'react';

export interface TextProps {
  size?: 'sm' | 'md' | 'lg'
  children: string | ReactNode;
}

export function Text({ size = 'md', children }: TextProps) {
  const Comp = typeof children === 'string' ? 'span' : Slot;

  return <Comp className={clsx(
    'text-gray-100 font-sans',
    {
      'text-xs': size === 'sm',
      'text-sm': size === 'md',
      'text-md': size === 'lg',
    }
  )}>
    {children}
  </Comp>
}