declare global {
  interface HTMLElementTagNameMap {
    'givebutter-widget': any;
  }

  namespace JSX {
    interface IntrinsicElements {
      'givebutter-widget': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & { id: string }, HTMLElement>;
    }
  }
  
  interface Window {
    givebutter?: {
      init?: () => void;
      render?: () => void;
    } | (() => void);
    Givebutter?: {
      init?: () => void;
      render?: () => void;
    } | (() => void);
  }
}

export {};
