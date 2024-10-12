// src/routes/+page.js
export function load() {
    return {
        title: 'Starphone',
        description: 'A site about public communication and the future of Starphone.',
        content: 'This is the content of the page.',
        date: '2021-10-10T00:00:00Z',
        slug: '+page',
        tags: ['starphone', 'communication'],
        type: 'page',
        cover: '/images/cover.jpg',
        image: '/images/cover.jpg',
        imageAlt: 'Starphone'
    };
}
