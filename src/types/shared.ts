export interface MetaProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
}
export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
}
export interface WithLoadingProps {
  isLoading?: boolean;
  error?: Error | null;
}