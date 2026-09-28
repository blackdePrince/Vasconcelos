import { useScrollReveal } from '@/hooks/useScrollReveal';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: keyof JSX.IntrinsicElements;
}

/**
 * Componente wrapper que aplica a animação de scroll reveal.
 */
export default function Reveal({ children, className = '', delay = 0, as = 'div' }: RevealProps) {
  const { ref, revealed } = useScrollReveal<HTMLElement>();
  const Tag = as as any;

  return (
    <Tag
      ref={ref}
      className={`reveal ${revealed ? 'revealed' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}
