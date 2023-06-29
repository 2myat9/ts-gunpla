"use client";

import { GalleryImage } from "@/types/GalleryImage";
import { useState } from "react";
import { Gallery } from "react-grid-gallery";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

type ImageGalleryProps = {
  images: GalleryImage[];
};

export const ImageGallery = (props: ImageGalleryProps) => {
  const [index, setIndex] = useState(-1);

  const handleClick = (index: number, item: GalleryImage) => setIndex(index);

  const galleryImages = props.images;
  // using originals for lightbox render
  const slides = galleryImages.map(({ original, width, height }) => ({
    src: original,
    width,
    height,
  }));
  return (
    <div>
      <Gallery
        images={props.images}
        defaultContainerWidth={900}
        enableImageSelection={false}
        onClick={handleClick}
      />
      <Lightbox
        slides={slides}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
      />
    </div>
  );
};
