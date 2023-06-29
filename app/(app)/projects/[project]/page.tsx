import { getProject } from "@/sanity/sanity-utils";
import NavBar from "../../components/NavBar";
import { koulen, space_grotesk } from "../../fonts";
import Image from "next/image";
import { ImageGallery } from "../../components/ImageGallery";
import { PortableText } from "@portabletext/react";
import myPortableTextComponents from "@/app/(studio)/myPortableTextComponents";
import Tag from "../../components/Tag";
import { GalleryImage } from "@/types/GalleryImage";

export default async function Project({
  params,
}: {
  params: { project: string };
}) {
  const projectSlug = params.project;
  const project = await getProject(projectSlug);

  const images = project.images; // array of image objects as returned by sanity
  const galleryImages: GalleryImage[] = []; // array of image objects as required by Gallery component
  if (images) {
    for (const image of images) {
      const galleryImage: GalleryImage = {
        original: image.url,
        src: image.url, // currently src is original but this can be changed to a smaller res to save bandwidth
        width: image.metadata.dimensions.width,
        height: image.metadata.dimensions.height,
      };
      galleryImages.push(galleryImage);
    }
  }

  // const handleRedirect = (tag: string) => {
  //   router.push(`/projects?tag=${tag}`);
  // };

  return (
    <div
      className={`max-w-screen-lg mx-auto flex flex-col items-center gap-12 mb-24`}
    >
      <NavBar />
      <div
        className={`text-center text-4xl font-bold ${koulen.className} text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500`}
      >
        {project.name}
      </div>
      <div className={`-mt-6 flex gap-2 ${space_grotesk.className}`}>
        {project.tags?.map((tag) => (
          <div key={tag}>
            {/* onClick={() => handleRedirect(tag)} */}
            <Tag name={tag} />
          </div>
        ))}
      </div>
      <div>
        <Image
          src={project.coverImage}
          alt="cover image of project"
          width={1920}
          height={1080}
        />
      </div>
      <div className={`max-w-screen-sm ${space_grotesk.className}`}>
        <PortableText
          value={project.content}
          components={myPortableTextComponents}
        />
      </div>
      <ImageGallery images={galleryImages} />
    </div>
  );
}
