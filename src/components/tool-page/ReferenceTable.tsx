import { getUnitsForCategory, convertUnit, UnitCategory } from "@/utils/calculators/unit-converter";

const PRIMARY_UNIT_CONFIG: Record<string, { unit: string; values: number[] }> = {
  length: { unit: "meter", values: [1, 5, 10, 50, 100] },
  weight: { unit: "kilogram", values: [1, 5, 10, 50, 100] },
  dataStorage: { unit: "gigabyte", values: [1, 5, 10, 50, 100] },
};

const TEMPERATURE_REFERENCE = [
  { celsius: -18, label: "Freezer" },
  { celsius: 0, label: "Freezing Point of Water" },
  { celsius: 20, label: "Room Temperature" },
  { celsius: 37, label: "Body Temperature" },
  { celsius: 100, label: "Boiling Point of Water" },
];

export function ReferenceTable({ category }: { category: UnitCategory }) {
  const units = getUnitsForCategory(category);

  if (category === "temperature") {
    return (
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-white">Common Temperature Reference</h2>
        <div className="mt-6 overflow-x-auto rounded-lg border border-white/5">
          <table className="w-full text-left text-sm">
            <thead className="bg-brand-bg text-xs uppercase text-brand-secondary">
              <tr>
                <th className="px-4 py-3">Reference Point</th>
                <th className="px-4 py-3">Celsius</th>
                <th className="px-4 py-3">Fahrenheit</th>
                <th className="px-4 py-3">Kelvin</th>
              </tr>
            </thead>
            <tbody>
              {TEMPERATURE_REFERENCE.map((row) => (
                <tr key={row.label} className="border-t border-white/5">
                  <td className="px-4 py-2 text-white">{row.label}</td>
                  <td className="px-4 py-2 text-brand-secondary">{row.celsius}</td>
                  <td className="px-4 py-2 text-brand-secondary">
                    {convertUnit("temperature", row.celsius, "celsius", "fahrenheit")}
                  </td>
                  <td className="px-4 py-2 text-brand-secondary">
                    {convertUnit("temperature", row.celsius, "celsius", "kelvin")}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  const config = PRIMARY_UNIT_CONFIG[category];
  if (!config) return null;

  const primaryLabel = units.find((u) => u.key === config.unit)?.label ?? config.unit;
  const otherUnits = units.filter((u) => u.key !== config.unit);

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold text-white">Quick Reference Table</h2>
      <div className="mt-6 overflow-x-auto rounded-lg border border-white/5">
        <table className="w-full text-left text-sm">
          <thead className="bg-brand-bg text-xs uppercase text-brand-secondary">
            <tr>
              <th className="px-4 py-3">{primaryLabel}</th>
              {otherUnits.map((u) => (
                <th key={u.key} className="px-4 py-3">
                  {u.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {config.values.map((value) => (
              <tr key={value} className="border-t border-white/5">
                <td className="px-4 py-2 text-white">{value}</td>
                {otherUnits.map((u) => (
                  <td key={u.key} className="px-4 py-2 text-brand-secondary">
                    {convertUnit(category, value, config.unit, u.key)}
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