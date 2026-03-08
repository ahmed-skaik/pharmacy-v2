interface SectionHeadingProps {
  titleStart: string;
  titleHighlight?: string;
  description: string;
  as?: "h1" | "h2";
  className?: string;
  headingStyle?: React.CSSProperties;
  noSpace?: boolean;
}

export default function SectionHeading({
  titleStart,
  titleHighlight,
  description,
  as: Tag = "h1",
  className = "main-title-2",
  headingStyle,
  noSpace = false,
}: SectionHeadingProps) {
  return (
    <div className={className}>
      <Tag className="mb-3" style={headingStyle}>
        {titleStart}
        {noSpace ? "" : " "}
        <span>{titleHighlight}</span>.
      </Tag>
      <p className="mb-4">{description}</p>
    </div>
  );
}
