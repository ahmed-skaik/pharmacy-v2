export function GetDepartmentClass(code?: string): string {
  if (!code) return "";

  const prefix = code.slice(0, 4).toUpperCase();

  const depClassMap: Record<string, string> = {
    PHPT: "pt-dep",
    PHTC: "tc-dep",
    PHCH: "ch-dep",
    PHCG: "cg-dep",
  };

  return depClassMap[prefix] ?? "";
}
