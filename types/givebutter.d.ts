declare global {
  interface HTMLElementTagNameMap {
    'givebutter-widget': any;
  }
  
  interface Window {
    givebutter?: {
      init: () => void;
    };
  }
}

export {};
