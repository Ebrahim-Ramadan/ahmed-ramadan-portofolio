import projectsData from '@/utils/projectsData.json';
export const rendering = 'dynamic'
export async function generateMetadata({ params }) {
  console.log('params', params);

  const projectSlug = params.slugID
    const project = projectsData.find(p => p.slug === projectSlug);
    console.log('project', project);

    if (!project) {
        return {
            title: 'Ahmed Ramadan projects',
            description: 'The requested project was not found.',
        };
    }

    return {

        title: `${project['title']}`,
    //     description: `${project['title']}`,
    //     openGraph: {
    //         title: `${project['title']}`,
    //         description: `${project['title']}`,
    //         type: "article",
    //         url: `https://ahmed-ramadan.vercel.app//${project['imdb_id']}`,
    //         images: [
    //             {
    //                 url: project['poster'],
    //                 width: 1200,
    //                 height: 630,
    //                 alt: `${project['title']}`,
    //             },
    //         ],
    //     },
    //     twitter: {
    //         card: `Ahmed Ramadan project`,
    //         title: `${project['title']} `,
    //         description: `${project['title']} `,
    //         siteId: `${params.projectID}`,
    //         creator: '@onvo_me',
    //         creatorId: '1467726470533754880',
    //         images: {
    //             url: project['poster'],
    //             alt: project['title'],
    //         },
    //         app: {
    //             name: 'twitter_app',
    //             id: {
    //                 iphone: 'twitter_app://iphone',
    //                 ipad: 'twitter_app://ipad',
    //                 googleplay: 'twitter_app://googleplay',
    //             },
    //             url: {
    //                 iphone: 'https://iphone_url',
    //                 ipad: 'https://ipad_url',
    //             },
    //         },
    //     },
    //     alternates: {
    //         canonical: 'https://ahmed-ramadan.vercel.app/',
    //         languages: {
    //             'en-US': 'https://ahmed-ramadan.vercel.app/',
    //             'de-DE': 'https://ahmed-ramadan.vercel.app/',
    //         },
    //         media: {
    //             'only screen and (max-width: 600px)': project['poster'],
    //         },
    //         types: {
    //             'application/rss+xml': project['poster'],
    //         },
    //     },
    //     appLinks: {
    //         ios: {
    //             url: project['poster'],
    //             app_store_id: 'app_store_id',
    //         },
    //         android: {
    //             package: 'com.example.android/package',
    //             app_name: 'app_name_android',
    //         },
    //         web: {
    //             url: project['poster'],
    //             should_fallback: true,
    //         },
    //     },
    //     bookmarks: ['https://ahmed-ramadan.vercel.app/'],
    //     category: 'entertainment',
    };
};

export default async function Page({ params }) {
  console.log('params', params
  );
  const projectSlug = params.slugID

    const project = projectsData.find(p => p.slug === projectSlug);
  
    if (!project) {
      return <div>Project not found</div>;
    }
  
    return (
      <div>
        <h1>{project.title}</h1>
        <p>{project.content}</p>
        {project['images'].map((img, xd) => {
          'ass'
          // <img
          //   key={xd}
          // src={img}
          // />
        })}
      </div>
    );
}
export const revalidate = 10