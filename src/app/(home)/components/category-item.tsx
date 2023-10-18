import { Category } from '@prisma/client'

import { Badge } from '@/components/ui/badge'
import {
  HeadphonesIcon,
  KeyboardIcon,
  MonitorIcon,
  MouseIcon,
  SpeakerIcon,
  SquareIcon,
} from 'lucide-react'

interface CategoryItemProps {
  category: Category
}

export function CategoryItem({ category }: CategoryItemProps) {
  const categoryIcon = {
    keyboards: <KeyboardIcon className="h-4 w-4" />,
    monitors: <MonitorIcon className="h-4 w-4" />,
    headphones: <HeadphonesIcon className="h-4 w-4" />,
    mousepads: <SquareIcon className="h-4 w-4" />,
    speakers: <SpeakerIcon className="h-4 w-4" />,
    mouses: <MouseIcon className="h-4 w-4" />,
  }

  return (
    <Badge
      variant="outline"
      className="items-center justify-center gap-2 rounded-lg py-3"
    >
      {categoryIcon[category.slug as keyof typeof categoryIcon]}
      <span className="text-xs font-bold">{category.name}</span>
    </Badge>
  )
}
