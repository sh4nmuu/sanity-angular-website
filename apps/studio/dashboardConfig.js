export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sh4nmuu/sanity-angular-website'
      }
    },
    { name: 'structure-menu' },
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
                  buildHookId: '634bfb45e374d275058479f7',
                  title: 'Sanity Studio',
                  name: 'sanity-angular-website-studio-ungy5j42',
                  apiId: 'd0712ae7-9ae6-4f75-a577-bfe5c698a43b'
                },
                {
                  buildHookId: '634bfb456fb74676db81893b',
                  title: 'Website',
                  name: 'sanity-angular-website-web-77ay11df',
                  apiId: '4961dd09-9787-46be-bf3f-f7d43fd8e488'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/sh4nmuu/sanity-angular-website',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-angular-website-web-77ay11df.netlify.app', category: 'apps'}
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
