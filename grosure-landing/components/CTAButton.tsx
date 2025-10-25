import React from 'react';

interface CTAButtonProps {
  variant?: 'primary' | 'secondary' | 'accent';
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
}

export default function CTAButton({
  variant = 'accent',
  href,
  onClick,
  children,
  className = '',
}: CTAButtonProps) {
  const baseClass =
    variant === 'primary' ? 'btn-primary' :
    variant === 'secondary' ? 'btn-secondary' :
    'btn-accent';
  const combinedClass = `${baseClass} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedClass}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={combinedClass}>
      {children}
    </button>
  );
}
