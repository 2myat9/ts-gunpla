const project = {
  name: "project",
  title: "Projects",
  type: "document",
  // fields represent all data inside each project
  fields: [
    {
      name: "name", // what is used in queries
      title: "Name", // what displays in Studio
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
      },
    },
    {
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          title: "Alt Text",
          type: "string",
        },
      ],
    },
    {
      name: "description",
      title: "Description",
      type: "array",
      of: [{ type: "block" }], // block type enables rich text
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [
        {
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "H1", value: "h1" },
            { title: "H2", value: "h2" },
          ],
        },
      ], // block type enables rich text
    },
    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
      validation: (Rule: {
        required: () => {
          (): any;
          new (): any;
          error: { (arg0: string): any; new (): any };
        };
      }) => Rule.required().error("Tag is required."),
    },
    {
      name: "images",
      title: "Images",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "image",
              title: "Image",
              type: "image",
              options: {
                hotspot: true,
              },
            },
            {
              name: "caption",
              title: "Caption",
              type: "string",
            },
            {
              name: "tags",
              title: "Tags",
              type: "array",
              of: [
                {
                  type: "string",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export default project;
