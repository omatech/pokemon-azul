import { useEffect, memo } from 'react';

const Header = ({ links }) => {
  useEffect(() => console.log('<Header>'));

  return links.map(({ title, url, target }) => (
    <div className='header' key={url}>
      <a href={url} target={target}>
        {title}
      </a>
    </div>
  ));
};

export default memo(Header);
