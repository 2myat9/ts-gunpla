import { PortableTextBlock } from "sanity";

interface ImageMetadata {
  dimensions: {
    width: number;
    height: number;
    aspectRatio: number;
  };
}

interface Image {
  url: string;
  metadata: ImageMetadata;
}

export type Project = {
  _id: string;
  _createdAt: Date;
  name: string;
  slug: string;
  coverImage: string;
  description: PortableTextBlock[];
  content: PortableTextBlock[];
  tags: string[];
  images: Image[];
};
