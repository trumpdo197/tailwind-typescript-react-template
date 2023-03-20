export function mergeStrings(...strings: (string | undefined | boolean)[]) {
  return strings
    .filter((val) => val)
    .join(' ')
    .trim();
}

/**
 * Alias name of mergeStrings, use to merge classNames.
 */
export function cs(...args: Parameters<typeof mergeStrings>) {
  return mergeStrings(...args);
}
