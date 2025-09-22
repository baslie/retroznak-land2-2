import type { MessengerLink } from "@/types/content";
import { cn } from "@/lib/utils";
import {
  Mail,
  MessageCircle,
  Phone,
  Send,
  Share2,
  Youtube,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  phone: Phone,
  whatsapp: MessageCircle,
  telegram: Send,
  email: Mail,
  vk: Share2,
  youtube: Youtube,
};

export interface ContactIconsProps {
  items: MessengerLink[];
  orientation?: "horizontal" | "vertical";
  className?: string;
}

export function ContactIcons({ items, orientation = "horizontal", className }: ContactIconsProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-3",
        orientation === "vertical" && "flex-col items-start gap-4",
        className,
      )}
    >
      {items.map((item) => {
        const Icon = iconMap[item.platform] ?? MessageCircle;
        const descriptionId = `${item.platform}-${item.label}`;
        return (
          <a
            key={`${item.platform}-${item.href}`}
            href={item.href}
            target={item.href.startsWith("http") ? "_blank" : undefined}
            rel={item.href.startsWith("http") ? "noreferrer" : undefined}
            className="group flex items-center gap-2 rounded-full border border-border/60 bg-retro-graphite/60 px-4 py-2 text-sm text-muted-foreground transition hover:border-accent-platinum/80 hover:text-retro-ivory"
            aria-describedby={item.description ? descriptionId : undefined}
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-retro-smoke/80 text-accent-platinum transition group-hover:bg-accent-platinum/20 group-hover:text-retro-ivory">
              <Icon className="h-4 w-4" aria-hidden />
            </span>
            <span className="flex flex-col">
              <span className="font-medium text-retro-ivory">{item.label}</span>
              {item.description ? (
                <span id={descriptionId} className="text-xs text-muted-foreground/80">
                  {item.description}
                </span>
              ) : null}
            </span>
          </a>
        );
      })}
    </div>
  );
}
