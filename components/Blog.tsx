'use client'
const posts = [
    {
      title: 'SQL Essentials',
      href: '#',
      category: { name: 'Article', href: '#' },
      description:
        'Step into the world of SQL with confidence as this article breaks down the fundamentals you need to craft efficient, powerful queries. From understanding joins to optimizing subqueries, learn the language that databases speak and start making data-driven decisions with precision.',
      date: 'Mar 16, 2024',
      datetime: '2024-03-16',
      imageUrl:
        'https://media.licdn.com/dms/image/D4D12AQGXoLA2ZXer3g/article-cover_image-shrink_720_1280/0/1692968204043?e=2147483647&v=beta&t=ERBATmVYLLk-1HsQzoIlMpTjzQhuIVYg68ckQljMQZY',
      readingTime: '6 min',
      author: {
        name: 'John Stevens',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
    {
      title: 'Effective Meetings with Your Manager: A Complete Guide',
      href: '#',
      category: { name: 'Video', href: '#' },
      description:
        'In this video, uncover the secrets to making the most out of your one-on-ones with your manager. We’ll provide you with the tips to communicate your progress, ask for feedback, and discuss your career development path, ensuring you stay on track and visibly contribute to your team.',
      date: 'Mar 10, 2024',
      datetime: '2024-03-10',
      imageUrl:
        'https://assets-global.website-files.com/62dac784c266a307e14d76b4/62e11b6a719db878e9734d96_616622081cacc67149fd5406_loopin%2520one-on-one%2520meeting%2520with%2520manager.jpeg',
      readingTime: '9 min',
      author: {
        name: 'Lauren Gray',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
    {
      title: 'Data Visualization for Impact: State Farm Success Stories',
      href: '#',
      category: { name: 'Case Study', href: '#' },
      description:
        'Follow the journey of a junior data analyst who helped State Farm with their reporting approach through effective data visualizations. This case study will showcase before-and-after scenarios, highlighting how the right charts and graphs can turn raw data into compelling stories for business insights.',
      date: 'Feb 28, 2024',
      datetime: '2024-02-12',
      imageUrl:
        'https://treehousetechgroup.com/wp-content/uploads/2020/01/Screen-Shot-2020-01-28-at-10.13.28-AM.png',
      readingTime: '11 min',
      author: {
        name: 'Jane Doe',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
  ]
  
  export default function Example() {
    return (
      <div className="relative bg-gray-50 px-6 pb-20 pt-16 lg:px-8 lg:pb-28 lg:pt-24">
        <div className="absolute inset-0">
          <div className="h-1/3 bg-white sm:h-2/3" />
        </div>
        <div className="relative mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-red-600 sm:text-4xl">Good Neighbor Stories for You.</h2>
            <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
              Our blog page that captures the latest and greatest surrounding State Farm
            </p>
          </div>
          <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <div key={post.title} className="flex flex-col overflow-hidden rounded-lg shadow-lg">
                <div className="flex-shrink-0">
                  <img className="h-48 w-full object-cover" src={post.imageUrl} alt="" />
                </div>
                <div className="flex flex-1 flex-col justify-between bg-white p-6">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-indigo-600">
                      <a href={post.category.href} className="hover:underline">
                        {post.category.name}
                      </a>
                    </p>
                    <a href={post.href} className="mt-2 block">
                      <p className="text-xl font-semibold text-gray-900">{post.title}</p>
                      <p className="mt-3 text-base text-gray-500">{post.description}</p>
                    </a>
                  </div>
                  <div className="mt-6 flex items-center">
                    <div className="flex-shrink-0">
                      <a href={post.author.href}>
                        <span className="sr-only">{post.author.name}</span>
                        <img className="h-10 w-10 rounded-full" src={post.author.imageUrl} alt="" />
                      </a>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">
                        <a href={post.author.href} className="hover:underline">
                          {post.author.name}
                        </a>
                      </p>
                      <div className="flex space-x-1 text-sm text-gray-500">
                        <time dateTime={post.datetime}>{post.date}</time>
                        <span aria-hidden="true">&middot;</span>
                        <span>{post.readingTime} read</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  