import React from 'react';
import classnames from 'classnames';

interface Props
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  variant?: 'outlined' | 'static';
  label?: string;
  position?: 'left' | 'top' | 'right' | 'bottom';
  error?: React.ReactNode;
}

const TextField = React.forwardRef<HTMLInputElement, Props>(
  (
    {
      variant = 'static',
      label = '',
      position = 'top',
      placeholder = 'Placeholder',
      className,
      error,
      ...props
    },
    ref
  ) => {
    const wrapStyles = classnames('flex flex-col');
    const groupStyles = classnames(
      `flex relative w-full min-w-[200px] ${className}`,
      {
        'flex-col': position === 'bottom',
        'flex-col-reverse': position === 'top',
        'flex-row-reverse items-center': position === 'left',
        'flex-row items-center': position === 'right',
      }
    );
    const wrapStaticStyles = classnames('flex', {
      'flex-col': position === 'bottom',
      'flex-col-reverse': position === 'top',
      'flex-row-reverse items-baseline': position === 'left',
      'flex-row items-baseline': position === 'right',
    });
    const groupStaticStyles = classnames(
      `flex flex-col relative w-full min-w-[200px] ${className}`
    );
    const inputStyles = classnames(
      'peer w-full h-full px-3 py-2.5 bg-transparent text-blue-gray-700 font-sans font-normal text-sm outline outline-0 transition-all disabled:bg-blue-gray-50 disabled:border-0 border border-blue-gray-200 placeholder-shown:border-blue-gray-200 rounded-[7px] ',
      {
        'focus:outline-0 focus:border-2 focus:border-blue-500':
          variant !== 'static',
        'placeholder-shown:border placeholder-shown:border-t-blue-gray-200':
          variant !== 'static' && placeholder !== 'Placeholder',
        'focus:border-blue-500 focus:border-2': variant === 'static',
        'placeholder-transparent':
          variant !== 'static' || placeholder === 'Placeholder',
        'focus:border-t-transparent': !!label && variant !== 'static',
        'border-red-600 focus:border-red-600': !!error,
      }
    );
    const labelStyles = classnames(
      'flex h-full select-none pointer-events-none left-0 font-normal peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all',
      {
        "w-full absolute peer-placeholder-shown:text-slate-400 -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-blue-gray-400 peer-focus:text-blue-500 before:border-blue-gray-200 peer-focus:before:border-blue-500 after:border-blue-gray-200 peer-focus:after:border-blue-500":
          variant !== 'static',
        'mt-2': variant === 'static' && position === 'bottom',
        'mb-2': variant === 'static' && position === 'top',
        'ml-2': variant === 'static' && position === 'right',
        'mr-2': variant === 'static' && position === 'left',
        "text-sm peer-focus:text-sm after:content[' '] peer-placeholder-shown:leading-tight text-blue-gray-500":
          variant === 'static',
        'peer-focus:before:border-red-600 peer-focus:after:border-red-600 !text-red-600':
          !!error,
      }
    );

    return (
      <>
        {variant !== 'static' ? (
          <div className={wrapStyles}>
            <div className={groupStyles}>
              <input
                className={inputStyles}
                placeholder={placeholder}
                ref={ref}
                {...props}
              />
              {label && <label className={labelStyles}>{label}</label>}
            </div>
            {error && (
              <span className='inline-flex mt-0.5 text-xs text-red-600'>
                {error}
              </span>
            )}
          </div>
        ) : (
          <div className={wrapStaticStyles}>
            <div className={groupStaticStyles}>
              <input
                className={inputStyles}
                placeholder={placeholder}
                ref={ref}
                {...props}
              />
              {error && (
                <span className='inline-flex mt-0.5 text-xs text-red-600'>
                  {error}
                </span>
              )}
            </div>
            {label && <label className={labelStyles}>{label}</label>}
          </div>
        )}
      </>
    );
  }
);

export default TextField;
