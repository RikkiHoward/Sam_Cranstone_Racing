declare module '*.json' {
  const value: any;
  export default value;
}

declare module '../data/*.json' {
  const value: any;
  export default value;
}

declare module '../app/data/*.json' {
  const value: any;
  export default value;
}

declare module '@/data/*.json' {
  const value: any;
  export default value;
}