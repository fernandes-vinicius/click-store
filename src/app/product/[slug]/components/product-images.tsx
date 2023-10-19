'use client'

import React from 'react'
import Image from 'next/image'

interface ProductImagesProps {
  name: string
  imageUrls: string[]
}

export function ProductImages({ name, imageUrls }: ProductImagesProps) {
  const [currentImage, setCurrentImage] = React.useState(imageUrls[0])

  function handleImageClick(imageUrl: string) {
    setCurrentImage(imageUrl)
  }

  return (
    <div className="flex flex-col">
      <div className="flex h-[380px] w-full items-center justify-center bg-accent">
        <Image
          src={currentImage}
          alt={name}
          width={0}
          height={0}
          sizes="100vw"
          className="h-auto max-h-[70%] w-auto max-w-[80%]"
          style={{ objectFit: 'contain' }}
        />
      </div>

      <div className="mt-8 grid grid-cols-4 gap-4 px-5">
        {imageUrls.map((imageUrl) => (
          <button
            key={imageUrl}
            onClick={() => handleImageClick(imageUrl)}
            className={`flex h-[80px] items-center justify-center rounded-lg bg-accent ${
              imageUrl === currentImage &&
              'border-2 border-solid border-primary'
            }`}
          >
            <Image
              src={imageUrl}
              alt={name}
              width={0}
              height={0}
              sizes="100vw"
              className="h-auto max-h-[70%] w-auto max-w-[80%]"
            />
          </button>
        ))}
      </div>
    </div>
  )
}
