import {
  WithChildren,
  WithClassName,
} from '@/types';

type HeadingProps = WithChildren & WithClassName & {
  as: 'h1' | 'h2' | 'h3' | 'h4'
}

const genStyle = (as: HeadingProps['as']) => {
  switch (as) {
    case 'h1':
      return 'text-4xl mb-12 font-bold';
    case 'h2':
      return 'text-3xl mb-8 font-bold';
    case 'h3':
      return 'text-3xl mb-8';
    case 'h4':
      return 'text-2xl mb-4 font-bold';
    default:
      return '';
  }
}

export const Heading = ({ as: Tag, children, className = '' }: HeadingProps) => (
  <Tag className={`${genStyle(Tag)} ${className}`}>{children}</Tag>
)
