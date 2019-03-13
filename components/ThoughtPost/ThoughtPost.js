import Link from 'next/link';

import './ThoughtPost.scss';

const ThoughtPost = ({ thought }) => (
  <article className="thought-post">
    <div className="section-title thoughts">
      <span className="section-title-bar">
        <h1 className="section-title-name">thoughts</h1>
      </span>
    </div>
    <div className="thought-post-wrapper">
      <div className="thought-post__header">
        <div className="thought-post__title-container">
          <h1 className="thought-post__title">{thought.title}</h1>
          <span className="thought-post__date">{thought.date}</span>
        </div>
      </div>

      <div
        className="content"
        dangerouslySetInnerHTML={{
          __html: thought.blog_post,
        }}
      />
      <div className="thought-post__navigation">
        <Link href="/thoughts">
          <a className="thought-post__nav-link">
            <span className="thought-post__nav-link-text">to thoughts</span>
            <img
              src="/static/svg/arrow-left.svg"
              alt="left arrow icon"
              className="thought-post__nav-link-icon"
            />
          </a>
        </Link>
        <Link
          href={`/thought/?slug=${thought.next_post.slug}`}
          as={`/thoughts/${thought.next_post.slug}`}
        >
          <a className="thought-post__nav-link">
            <span className="thought-post__nav-link-text">next post</span>
            <img
              src="/static/svg/arrow-right.svg"
              alt="left arrow icon"
              className="thought-post__nav-link-icon"
            />
          </a>
        </Link>
      </div>
    </div>
  </article>
);

export default ThoughtPost;
