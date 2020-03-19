export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e7344a87c87f779ac311ae1',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-zyjhmv7w',
                  apiId: 'eb5483a8-3a27-468b-88f4-4bf60f0e55a7'
                },
                {
                  buildHookId: '5e7344a87c87f76f58311a35',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-akdbrb43',
                  apiId: '61e0b281-3b23-46d7-8f1d-50a25cc13fc4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/gregorynicholas/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-akdbrb43.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
