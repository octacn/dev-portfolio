import { source } from "./source";

export async function randomizer(name: string) {
  const names = await getAllProjectNames();
  const currentPage = name + ".mdx";

  const filtered = names.filter((n) => n !== currentPage);

  if (filtered.length <= 2) {
    return filtered;
  }

  const shuffled = [...filtered].sort(() => Math.random() - 0.5);
  const getRandomName = shuffled.slice(0, 2);

  return removeExtension(getRandomName);
}

function removeExtension(array: string[], ext = ".mdx") {
  return array.map((n) => (n.endsWith(ext) ? n.slice(0, -ext.length) : n));
}

export async function getAllProjectNames() {
  const names = source.getPageTree().children.map((doc) => doc.$id as string);
  return removeExtension(names);
}
