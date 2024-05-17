function Card({
  styleCard,
  styleTitle,
  title,
  children,
  imageUrl,
  altText,
  showImage,
}: {
  styleCard: string;
  styleTitle: string;
  title: string;
  children?: React.ReactNode;
  imageUrl?: string;
  altText?: string;
  showImage?: boolean;
}) {
  return (
    <div className={styleCard}>
      {showImage && imageUrl && (
        <img
          src={imageUrl}
          className="w-full h-64 object-cover"
          alt={altText}
        />
      )}
      <div className="p-4">
        <div className={styleTitle}>{title}</div>
        {children}
      </div>
    </div>
  );
}

export default Card;
