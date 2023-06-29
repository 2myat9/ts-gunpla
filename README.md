# Documentation

### Pages

There are _4_ main pages to navigate across the site.

- Home (`/`)
- Projects (`/projects`)
- About (`/about`)
- Contact (`/contact`)

From within `/projects`, you can navigate to each project by clicking on a card. The path of a project with a slug of `first-project` for example would be `/projects/first-project`. These pages are dynamic and are automatically created when you add a new document from within Sanity Studio. This is possible thanks to the CMS provided by Sanity.

Now more about Sanity.

### Sanity

In the root directory, there is a folder called `sanity` for Sanity-related files. This is where Sanity is configured and embedded into the NextJS app. Some important concepts to note are **Schemas**, **Queries**, and **Portable Text**.

#### Schemas

You can define a schema for any document you wish to create/ edit in Sanity Studio. For this website, there is only _1_ main schema: Project. This is a document with fields that you can customize. Any document and its fields you define in the schema show up in the Studio as input fields. Refer to this [doc](https://www.sanity.io/docs/document-type) as a starting point.

#### Queries

In this project structure, all query functions are written inside `sanity-utils.ts`. These functions are then imported into the React Server Component where you wish to fetch the data and used asynchronously. Note that if you use these query functions inside a Client Component, you need to define the async function and call it inside a useEffect, storing the returned data inside a state. As of writing this, I have not tried using the `fetch` method. Also note that you can use either **GraphQL** or **groq** as the query language. In this project I am using `groq`. Refer [here](https://www.sanity.io/docs/groq) for documentation on groq.

#### Portable Text

Rich text input you edit in the Studio is returned as an array of Portable Text Blocks. Refer [here](https://www.sanity.io/docs/block-content) for the official definition of Portable Text. Rendering Portable Text in React was a challenge initially due to the high customizability. When you render Portable Text using the render component provided by Sanity with default configuration, the rendered text on the browser does not look as you would expect or what you see in the Sanity Studio Rich Text Editor. In order to even add line breaks between paragraphs, the render component has to be customized. Refer to Sanity's [documentation](https://github.com/portabletext/react-portabletext#types) for more information on how to pass custom props into this component.

### Features

Here is a list of currently implemented features.

- Add new Project documents via Sanity Studio
- For each Project, display a cover image, tags, rich text, and an interactive gallery of images.
  - Each image in the gallery can have tags and captions thanks to the library used (see below).
- Display all published documents on the Projects page
- Dynamically filter Projects using the hard-coded **Featured Tags** section on the Projects page.
  - This does not trigger additional API calls to Sanity-- it simply manipulates the state within the component.
- Title and Content on the About Me page can be edited in Sanity Studio since this might need occasional updates.
- Navigation Bar featuring logo and buttons to redirect to one of the _4_ main pages mentioned above.

### Acknowledgement of Frontend Libraries Used

- [React Grid Gallery](https://github.com/benhowell/react-grid-gallery/blob/master/examples/with-yet-another-react-lightbox/src/App.tsx) configured with [Yet-Another-Lightbox](https://github.com/igordanchenko/yet-another-react-lightbox)
- [React Parallax Tilt](https://github.com/mkosir/react-parallax-tilt)

### Tech Stack

- NextJS 13
- React 18
- TypeScript 5
- TailwindCSS
- Sanity
