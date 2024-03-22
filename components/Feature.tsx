import Rank from './Rank';
import {
    ArrowPathIcon,
    CloudArrowUpIcon,
    Cog6ToothIcon,
    FingerPrintIcon,
    LockClosedIcon,
    ServerIcon,
    UserGroupIcon
  } from '@heroicons/react/20/solid'
  
  const features = [
    {
      name: 'Push to deploy.',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit aute id magna.',
      icon: CloudArrowUpIcon,
    },
    {
      name: 'SSL certificates.',
      description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
      icon: UserGroupIcon,
    },
    {
      name: 'Simple queues.',
      description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus.',
      icon: ArrowPathIcon,
    },
  ]
  
  export default function Example() {
    return (
      <div className="bg-orange-50 py-24 sm:py-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="text-base font-semibold leading-7 text-red-500">New AI Tools</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-black sm:text-4xl">A Smart Way to Evaluate your Team.</p>
            <p className="mt-6 text-lg leading-8 text-black">
            Optimize your team’s performance reviews using our comprehensive evaluation dashboard that leverages AI.
            </p>
          </div>
        </div>
        <div className="relative overflow-hidden pt-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <Rank />
            <div className="relative" aria-hidden="true">
            </div>
          </div>
        </div>
        <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
          <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-black sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-9">
                <dt className="inline font-semibold text-red">
                  <feature.icon className="absolute left-1 top-1 h-5 w-5 text-red-500" aria-hidden="true" />
                  {feature.name}
                </dt>{' '}
                <dd className="inline">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    )
  }
  