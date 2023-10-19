import { Category } from '@prisma/client'

import { Badge } from '@/components/ui/badge'
import { CATEGORY_ICON, type CategoryIconType } from '@/constants/category-icon'
import Link from 'next/link'

interface CategoryItemProps {
  category: Category
}

export function CategoryItem({ category }: CategoryItemProps) {
  return (
    <Link href={`/category/${category.slug}`} className="w-full">
      <Badge
        variant="outline"
        className="flex items-center justify-center gap-2 rounded-lg py-3"
      >
        {CATEGORY_ICON[category.slug as CategoryIconType]}
        <span className="text-xs font-bold">{category.name}</span>
      </Badge>
    </Link>
  )
}
