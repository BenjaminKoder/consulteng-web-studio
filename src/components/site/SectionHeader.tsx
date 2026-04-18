import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export const SectionHeader = ({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeaderProps) => {
  return (
    <div
      className={cn(
        "max-w-2xl reveal",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="mt-5 font-display text-3xl font-medium leading-tight tracking-tight md:text-[2.5rem]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
          {description}
        </p>
      )}
    </div>
  );
};
