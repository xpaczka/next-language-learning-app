// React imports
import { ForwardedRef, forwardRef } from 'react';

interface AuthFormInputProps {
  type: string;
  placeholder: string;
}

const AuthFormInput = forwardRef(({ type, placeholder }: AuthFormInputProps, ref: ForwardedRef<HTMLInputElement>) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      ref={ref}
      className='rounded-lg bg-slate-100 w-full px-8 h-12 border-2 outline-none border-white border-solid focus:border-primary transition-colors'
      required
    />
  );
});

export default AuthFormInput;
