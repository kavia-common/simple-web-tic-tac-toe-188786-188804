import React, { forwardRef, memo } from 'react';
import cls from './Button.module.css';

/**
 * PUBLIC_INTERFACE
 * Button component
 * Props:
 * - variant: 'primary' | 'secondary' | 'success' (default 'primary')
 * - size: 'sm' | 'md' | 'lg' (default 'md')
 * - disabled: boolean
 * - loading: boolean
 * - fullWidth: boolean
 * - type: 'button' | 'submit' | 'reset'
 * - onClick: (e) => void
 * - className: string
 * - startIcon: ReactNode
 * - endIcon: ReactNode
 * - children: ReactNode
 */
const Button = memo(forwardRef(function Button(
  {
    variant = 'primary',
    size = 'md',
    disabled = false,
    loading = false,
    fullWidth = false,
    type = 'button',
    onClick,
    className = '',
    startIcon,
    endIcon,
    children,
    ...rest
  },
  ref
) {
  const isDisabled = disabled || loading;

  // Compute classes safely
  const classes = [
    cls.root,
    cls[variant] || cls.primary,
    cls[size] || cls.md,
    fullWidth ? cls.fullWidth : '',
    isDisabled ? cls.disabled : '',
    className
  ]
    .filter(Boolean)
    .join(' ');

  // Keyboard and ARIA: native button carries semantics; ensure aria-busy etc.
  return (
    <button
      ref={ref}
      type={type}
      className={classes}
      onClick={isDisabled ? undefined : onClick}
      disabled={isDisabled}
      aria-disabled={isDisabled}
      aria-busy={loading || undefined}
      {...rest}
    >
      {loading ? (
        <>
          <span
            className={`${cls.icon} ${variant === 'secondary' ? cls.spinnerDark : ''}`}
            aria-hidden="true"
            style={{ marginRight: children ? '0.5rem' : 0 }}
          >
            <span className={`${cls.spinner} ${variant === 'secondary' ? cls.spinnerDark : ''}`} />
          </span>
          <span>{children || 'Loading...'}</span>
        </>
      ) : (
        <>
          {startIcon ? <span className={cls.icon} style={{ marginRight: '0.5rem' }}>{startIcon}</span> : null}
          <span>{children}</span>
          {endIcon ? <span className={cls.icon} style={{ marginLeft: '0.5rem' }}>{endIcon}</span> : null}
        </>
      )}
    </button>
  );
}));

export default Button;
