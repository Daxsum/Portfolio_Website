const projectsData = [
  {
    title: 'First music project',
    description: `A few months ago I took a course on music production that Studio offered - from Andrew Huang. I ended up loving the class, especially the electronic portion. This was my first time using any type of DAW.`,
    imgSrc: 'data:image/png;base64,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',
    href: 'https://studio.com/p/8bpGNs',
  },
  {
    title: 'First music project',
    description: `A few months ago I took a course on music production that Studio offered - from Andrew Huang. I ended up loving the class, especially the electronic portion. This was my first time using any type of DAW.`,
    imgSrc: '',
    href: 'https://studio.com/p/8bpGNs',
  },
  {
    title: 'First music project',
    description: `A few months ago I took a course on music production that Studio offered - from Andrew Huang. I ended up loving the class, especially the electronic portion. This was my first time using any type of DAW.`,
    imgSrc: '',
    href: 'https://studio.com/p/8bpGNs',
  },
]

export default projectsData
