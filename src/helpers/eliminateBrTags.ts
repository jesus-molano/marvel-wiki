export function eliminateBrTags(text: string): string {
  return text.replace(/<br\s*\/?>/gi, '');
}