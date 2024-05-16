function Card({ style, title, children, imageUrl, altText, showImage } : { style: string, title: string, children?: React.ReactNode, imageUrl?: string, altText?: string, showImage?: boolean }) {
    return (
      <div className={style}>
        {showImage && imageUrl && (
          <img
            src={imageUrl}
            className="w-full h-64 object-cover"
            alt={altText}
          />
        )}
        <div className="p-4">
          <div className="text-sm text-gray-600">{title}</div>
          {children}
        </div>
      </div>
    );
  }
  
  export default Card;
  