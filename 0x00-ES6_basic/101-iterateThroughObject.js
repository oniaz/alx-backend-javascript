export default function iterateThroughObject(reportWithIterator) {
  const result = reportWithIterator.map((employee) => employee).join(' | ');
  return result;
}

