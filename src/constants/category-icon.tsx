import {
  KeyboardIcon,
  MonitorIcon,
  HeadphonesIcon,
  SquareIcon,
  SpeakerIcon,
  MouseIcon,
} from 'lucide-react'

export const CATEGORY_ICON = {
  keyboards: <KeyboardIcon className="h-4 w-4" />,
  monitors: <MonitorIcon className="h-4 w-4" />,
  headphones: <HeadphonesIcon className="h-4 w-4" />,
  mousepads: <SquareIcon className="h-4 w-4" />,
  speakers: <SpeakerIcon className="h-4 w-4" />,
  mouses: <MouseIcon className="h-4 w-4" />,
}

export type CategoryIconType = keyof typeof CATEGORY_ICON
