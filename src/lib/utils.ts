export function firstMarkdownImage(markdown: string) {
  const match = markdown.match(/!\[([^\]]*)\]\(\s*(\S+?)(?:\s+["'].*?["'])?\s*\)/);

  if (!match) return null;

  return {
    alt: match[1],
    src: match[2],
    markdown: match[0]
  };
}
