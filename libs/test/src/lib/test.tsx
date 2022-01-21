export function borderLeft(...values: any[]): any {
  return {
    borderLeftWidth: values[0],
    ...(values[1] && { borderLeftStyle: values[1] }),
    ...(values[2] && { borderLeftColor: values[2] }),
  };
}
