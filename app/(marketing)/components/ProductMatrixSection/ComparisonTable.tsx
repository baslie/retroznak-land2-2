import type { ProductComparisonRow, ProductVariant } from "@/types/content";

export interface ComparisonTableProps {
  rows: ProductComparisonRow[];
  variants: ProductVariant[];
}

export function ComparisonTable({ rows, variants }: ComparisonTableProps) {
  return (
    <div className="overflow-hidden rounded-3xl border border-border/60 bg-retro-charcoal/80">
      <div className="relative overflow-auto">
        <table className="w-full min-w-[600px] border-collapse text-sm">
          <thead className="bg-retro-graphite/80 text-muted-foreground">
            <tr>
              <th className="px-6 py-4 text-left font-medium">Критерий</th>
              {variants.map((variant) => (
                <th key={variant.id} className="px-6 py-4 text-left font-medium text-retro-ivory">
                  {variant.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.label} className="border-t border-border/60">
                <th className="bg-retro-graphite/60 px-6 py-4 text-left text-muted-foreground">{row.label}</th>
                {variants.map((variant) => (
                  <td key={variant.id} className="px-6 py-4 text-retro-ivory/90">
                    {row.values[variant.id]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
