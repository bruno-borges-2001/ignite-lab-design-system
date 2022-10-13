import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx'
import { ReactNode } from 'react';

export interface HeadingProps {
  size?: 'sm' | 'md' | 'lg'
  children: string | ReactNode;
}

export function Heading({ size = 'md', children }: HeadingProps) {
  const Comp = typeof children === 'string' ? 'h2' : Slot;

  return <Comp className={clsx(
    'text-gray-100 font-bold font-sans',
    {
      'text-lg': size === 'sm',
      'text-xl': size === 'md',
      'text-2xl': size === 'lg',
    }
  )}>
    {children}
  </Comp>
}