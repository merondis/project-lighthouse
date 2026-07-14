export function SectionHeading({
  icon,
  title,
  subtitle,
}: {
  icon?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-8">
      <h1 className="flex items-center gap-3 text-3xl font-bold text-white sm:text-4xl">
        {icon && <span>{icon}</span>}
        {title}
      </h1>
      {subtitle && <p className="mt-3 text-lg text-brand-secondary">{subtitle}</p>}
    </div>
  );
}