import { ArrowDownIcon } from 'lucide-react'

import { cn } from '@/lib/utils'

import { Badge, BadgeProps } from './badge'

export function DiscountBadge({ className, children, ...props }: BadgeProps) {
  return (
    <Badge className={cn('px-2 py-[2px]', className)} {...props}>
      <ArrowDownIcon size={14} /> {children}%
    </Badge>
  )
}
