import Image from '@/components/Image'
import Link from '@/components/Link'

const Hero = () => {
  return (
    <section className="min-w-screen flex items-center justify-center py-16">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-between xl:flex-row">
          <div className="mb-10 flex h-full w-full flex-col items-start justify-center pr-8 xl:mb-0 xl:w-6/12">
            <div className="flex flex-col items-center justify-start md:flex-row">
              <h2 className="font-display z-50 ml-2 text-3xl font-extrabold leading-tight sm:text-4xl sm:leading-none md:text-5xl lg:text-5xl xl:text-6xl">
                Edible wild plant database
              </h2>
            </div>
            <p className="mt-6 text-lg text-gray-600 dark:text-gray-200">
              The Sycamore Garden Foraging Database gathers profiles on edible wild plants found all
              across North America (and often beyond).
            </p>
            <p className="mt-2 text-lg text-gray-600 dark:text-gray-200">
              Learn about the botany, taxonomy, and ecology of wild foods, as well as how to gather,
              prepare, preserve, and cultivate nature's bounty.
            </p>
            <Link legacyBehavior href="/plants">
              <p
                className="my-3 flex flex-row items-center text-sm font-bold leading-6 text-primary-500"
                target="_blank"
                rel="noreferrer noopener"
              >
                Browse the plant database
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="ml-1 h-4 w-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </p>
            </Link>
          </div>

          <div className="w-full xl:w-1/2">
            <Link legacyBehavior href="http://shop.sycamore.garden/l/introduction-to-foraging">
              <div className="group col-span-1 w-full cursor-pointer items-center justify-between rounded-xl bg-white bg-opacity-60 p-6 shadow backdrop-blur-xl backdrop-filter transition duration-200 hover:bg-gray-100 hover:bg-opacity-40 dark:bg-gray-800 dark:hover:bg-gray-500 dark:hover:bg-opacity-40 sm:flex">
                <div className="flex-shrink-0 p-3 font-sans text-gray-700 dark:text-gray-50">
                  <Image
                    src="/static/images/intro-foraging-thumbnail.png"
                    height="125"
                    width="125"
                    className="rounded-full"
                    alt="cover"
                  />
                </div>
                <div className="flex flex-col p-3">
                  <h3 className="truncate text-sm font-bold leading-5 text-gray-800 dark:text-white sm:text-base lg:text-base">
                    Introduction to Foraging (ebook)
                  </h3>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 sm:text-base lg:text-sm xl:text-base">
                    Interested in foraging, but feeling intimidated and unsure where to begin? This
                    ebook was written with the absolute beginner in mind.
                  </p>
                </div>
              </div>
            </Link>
            <Link legacyBehavior href="https://thegoodliferevival.com/shop/fna">
              <div className="group col-span-1 mt-4 w-full cursor-pointer items-center justify-between rounded-xl bg-white p-6 shadow transition duration-200 hover:bg-gray-100 hover:bg-opacity-40 dark:bg-gray-800 dark:hover:bg-gray-500 dark:hover:bg-opacity-40 sm:flex">
                <div className="flex-shrink-0 p-3 font-sans text-gray-700 dark:text-gray-50">
                  <Image
                    src="/static/images/foraging-na-thumbnail.png"
                    height="125"
                    width="125"
                    className="rounded-full"
                    alt="cover"
                  />
                </div>
                <div className="flex flex-col p-3">
                  <h3 className="truncate text-sm font-bold leading-5 text-gray-800 dark:text-white sm:text-base lg:text-base">
                    Foraging North America (course)
                  </h3>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 sm:text-base lg:text-sm xl:text-base">
                    Learn the pattern language of edible wild plants through this 12-week course on
                    botany, taxonomy, and ecology. Revised and expanded edition coming in late 2022.
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
