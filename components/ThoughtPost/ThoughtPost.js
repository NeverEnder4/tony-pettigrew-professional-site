import './ThoughtPost.scss';

const ThoughtPost = ({ footerComponent, thought }) => (
  <article className="thought-post">
    <div className="content" />
    {footerComponent}
  </article>
);

export default ThoughtPost;
