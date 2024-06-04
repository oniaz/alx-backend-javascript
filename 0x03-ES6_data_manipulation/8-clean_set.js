export default function cleanSet(set, startString) {
  if (startString === '') return startString;

  return Array.from(set)
    .filter((element) => element.startsWith(startString))
    .map((element) => element.replace(startString, ''))
    .join('-');
}
