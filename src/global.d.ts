declare module "*.module.css" {
  const classes: { [key: string]: string };
  export default classes;
}

// Hot Module Replacement types
interface HotModule {
  hot?: {
    accept(path?: string, callback?: () => void): void;
    dispose(callback: () => void): void;
  };
}

declare const module: HotModule;
