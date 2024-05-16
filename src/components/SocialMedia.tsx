function SocialMedia({ url , style, size, pathSvg}: { url: string, style: string, size: string, pathSvg: string }) {
  return (
    <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className={style}
        >
          <svg
            className={size}
            fill="currentColor"
            viewBox="0 0 50 50"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d={pathSvg}></path>
          </svg>
        </a>
  );
}
export default SocialMedia;