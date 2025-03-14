declare namespace JSX {
  interface IntrinsicElements {
    'model-viewer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
      src?: string;
      alt?: string;
      poster?: string;
      'auto-rotate'?: boolean;
      'camera-controls'?: boolean;
      ar?: boolean;
      'ar-modes'?: string;
      'shadow-intensity'?: string;
      exposure?: string;
      style?: React.CSSProperties;
      class?: string;
    };
  }
}
