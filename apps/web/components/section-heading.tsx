type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description
}: SectionHeadingProps) {
  return (
    <div className="flex flex-col gap-2">
      {eyebrow ? (
        <div className="text-xs font-semibold uppercase tracking-[0.24em] text-theme-accent">
          {eyebrow}
        </div>
      ) : null}
      <h2 className="text-2xl font-semibold tracking-tight text-theme-text sm:text-3xl">
        {title}
      </h2>
      {description ? (
        <p className="max-w-3xl text-sm leading-6 text-theme-text-muted sm:text-base">
          {description}
        </p>
      ) : null}
    </div>
  );
}
