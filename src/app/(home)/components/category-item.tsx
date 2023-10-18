import { Category } from '@prisma/client'

import { Badge } from '@/components/ui/badge'
import { CATEGORY_ICON, type CategoryIconType } from '@/constants/category-icon'

interface CategoryItemProps {
  category: Category
}

export function CategoryItem({ category }: CategoryItemProps) {
  return (
    <Badge
      variant="outline"
      className="items-center justify-center gap-2 rounded-lg py-3"
    >
      {CATEGORY_ICON[category.slug as CategoryIconType]}
      <span className="text-xs font-bold">{category.name}</span>
    </Badge>
  )
}
