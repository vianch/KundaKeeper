declare module "*.css" {
  const css: any;
  export default css;
}

declare module "*.scss" {
  const content: { [className: string]: string };
  export = content;
}
