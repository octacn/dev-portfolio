import { skills } from "@/lib/config";

export const parse = (parse: string) => {
  const regex = /\{skills:(\d+)\}|<b>(.*?)<\/b>/g;
  const out: Array<
    | { type: "skill"; skill: (typeof skills)[number]; key: number }
    | { type: "bold" | "text"; text: string; key: number }
  > = [];
  let last = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(parse)) !== null) {
    if (match.index > last) {
      out.push({
        type: "text",
        text: parse.slice(last, match.index),
        key: out.length,
      });
    }

    if (match[1] !== undefined) {
      const idx = Number(match[1]);
      const skill = skills[idx];
      if (skill) out.push({ type: "skill", skill, key: out.length });
    } else {
      out.push({ type: "bold", text: match[2] ?? "", key: out.length });
    }

    last = regex.lastIndex;
  }

  if (last < parse.length)
    out.push({ type: "text", text: parse.slice(last), key: out.length });
  return out;
};
