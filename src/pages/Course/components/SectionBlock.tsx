type SectionBlockProps = {
  title: string;
  highlight: string;
  description: string;
  children: React.ReactNode;
};

export default function SectionBlock({
  title,
  highlight,
  description,
  children,
}: SectionBlockProps) {
  return (
    <>
      <div className="heading text-center text-md-start ms-auto me-auto ms-md-0 me-md-0">
        <h2>
          {title} <span>{highlight}</span>.
        </h2>
        <p>{description}</p>
      </div>
      {children}
    </>
  );
}
