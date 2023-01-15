import React from 'react';
import classnames from 'classnames';

interface Props {
  variant?: 'circular' | 'rounded' | 'square';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  onClick?: () => void;
  icon?: string;
  alt?: string;
  className?: string;
}

const Avatar = ({
  variant = 'circular',
  size = 'sm',
  alt = '',
  icon,
  onClick,
  className = '',
}: Props) => {
  const styles = classnames(
    `inline-block relative cursor-pointer ${className}`,
    {
      'object-cover object-center': !!icon,
      'rounded-lg': variant === 'circular',
      'rounded-full': variant === 'rounded',
      'w-9 h-9': size === 'sm',
      'w-12 h-12': size === 'md',
      'w-[58px] h-[58px]': size === 'lg',
      'w-[74px] h-[74px]': size === 'xl',
    }
  );

  if (!icon) {
    return (
      <span
        className={`${styles} flex items-center justify-center bg-slate-400 font-bold text-2xl`}
        onClick={onClick}
      >
        {alt[0]}
      </span>
    );
  }

  return <img src={icon} alt={alt} className={styles} onClick={onClick} />;
};

export default Avatar;
