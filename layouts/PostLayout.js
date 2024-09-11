import Link from '@/components/Link'
import PageTitle from '@/components/PageTitle'
import SectionContainer from '@/components/SectionContainer'
import { BlogSEO } from '@/components/SEO'
import Image from '@/components/Image'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'

const postDateTemplate = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }

export default function PostLayout({ frontMatter, authorDetails, next, prev, children }) {
  const { slug, date, updated, title, tags, photo } = frontMatter

  return (
    <SectionContainer>
      <BlogSEO
        url={`${siteMetadata.siteUrl}/plants/${slug}`}
        authorDetails={authorDetails}
        {...frontMatter}
      />
      <ScrollTopAndComment />
      <article>
        <div className="xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700">
          <header className="pt-6 xl:pb-6">
            <div className="space-y-1 text-center">
              <div>
                <PageTitle>{title}</PageTitle>
                <Image
                  src={photo}
                  layout="responsive"
                  objectFit="cover"
                  height="50%"
                  width="100%"
                  alt={title}
                  className="pt-4"
                />
              </div>
            </div>
          </header>
          <div
            className="divide-y divide-gray-200 pb-8 dark:divide-gray-700 xl:grid xl:grid-cols-4 xl:gap-x-6 xl:divide-y-0"
            style={{ gridTemplateRows: 'auto 1fr' }}
          >
            <dl className="pt-6 pb-10 xl:border-b xl:border-gray-200 xl:pt-11 xl:dark:border-gray-700">
              <dt className="sr-only">Author</dt>
              <dd className="pt-6">
                <ul className="flex justify-center space-x-8 sm:space-x-12 xl:block xl:space-x-0 xl:space-y-8">
                  {authorDetails.map((author) => (
                    <li className="" key={author.name}>
                      {author.avatar && (
                        <Image
                          src="/static/images/sycamore-avatar.png"
                          width="150px"
                          height="150px"
                          alt="avatar"
                          className="rounded-xl"
                        />
                      )}
                      <dl className="text-sm font-medium leading-5">
                        <dt className="sr-only">Name</dt>
                        <dd className="mb-1 text-xl font-bold text-gray-900 dark:text-gray-100">
                          {author.name}
                        </dd>
                        <dt className="sr-only">About</dt>
                        <dd className="text-gray-600 dark:text-gray-400">
                          Sam Sycamore is a writer, teacher, and forager who's been working with
                          wild and cultivated plants for over a decade. He holds a B.S. in Biology
                          from the University of Louisville. He previously hosted The Good Life
                          Revival Podcast, where he explored topics related to permaculture,
                          rewilding, sustainability, and climate change.
                        </dd>
                      </dl>
                    </li>
                  ))}
                </ul>
              </dd>
              <dt className="pt-11 text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                Published on
              </dt>
              <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                <time dateTime={date}>
                  {new Date(date).toLocaleDateString(siteMetadata.locale, postDateTemplate)}
                </time>
              </dd>
              <dt className="mt-4 text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                Last updated
              </dt>
              <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                <time dateTime={updated}>
                  {new Date(updated).toLocaleDateString(siteMetadata.locale, postDateTemplate)}
                </time>
              </dd>
              <div className="pt-11">
                <Link
                  href="https://foraging-sycamore-garden.mailchimpsites.com/"
                  className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                >
                  💌 Click here to sign up for our newsletter.
                </Link>
              </div>
            </dl>
            <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0">
              <div className="prose max-w-none pt-10 pb-8 dark:prose-dark">{children}</div>
            </div>
            <footer>
              <div className="divide-gray-200 text-sm font-medium leading-5 dark:divide-gray-700 xl:col-start-1 xl:row-start-2 xl:divide-y">
                {tags && (
                  <div className="py-4 xl:py-8">
                    <h3 className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                      Tags
                    </h3>
                    <div className="flex flex-wrap">
                      {tags.map((tag) => (
                        <Tag key={tag} text={tag} />
                      ))}
                    </div>
                  </div>
                )}
                {(next || prev) && (
                  <div className="flex justify-between py-4 xl:block xl:space-y-8 xl:py-8">
                    {prev && (
                      <div>
                        <h3 className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                          Previous Article
                        </h3>
                        <div className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
                          <Link href={`/plants/${prev.slug}`}>{prev.title}</Link>
                        </div>
                      </div>
                    )}
                    {next && (
                      <div>
                        <h3 className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                          Next Article
                        </h3>
                        <div className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
                          <Link href={`/plants/${next.slug}`}>{next.title}</Link>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
              <div>
                <Link
                  href="https://shop.sycamore.garden/l/introduction-to-foraging"
                  className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                >
                  <Image
                    src="/static/images/intro-foraging-thumbnail.png"
                    alt="Introduction to Foraging"
                    layout="responsive"
                    objectFit="cover"
                    height="100%"
                    width="100%"
                  />
                  <em>Introduction to Foraging</em> has been revised an expanded for 2022! Check it
                  out today.
                </Link>
              </div>
              <div className="pt-4 xl:pt-8">
                <Link
                  href="/plants"
                  className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                >
                  &larr; Back to the plants
                </Link>
              </div>
            </footer>
          </div>
        </div>
      </article>
    </SectionContainer>
  )
}
