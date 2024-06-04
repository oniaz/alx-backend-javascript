export default function cleanSet(set, startString) {
  if (startString === '') return startString;

  return Array.from(set)
    .map((element) => (element.startsWith(startString) ? element.replace(startString, '') : null))
    .filter((element) => element !== null)
    .join('-');
}
