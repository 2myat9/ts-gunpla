import { ImageMetadata, PortableTextBlock } from "sanity";

export interface AboutPage {
  heading: string;
  content: PortableTextBlock[];
  url: string;
  metadata: ImageMetadata;
}
