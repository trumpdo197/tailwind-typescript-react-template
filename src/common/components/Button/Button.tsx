import { cs } from '@/utils/string';
import styles from './Button.module.css';

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  theme?: 'primary' | 'secondary' | 'default';
}

export const Button = ({
  theme = 'default',
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      className={cs(
        styles.button,
        theme === 'primary' && styles.primary,
        theme === 'secondary' && styles.secondary,
        theme === 'default' && styles.default,
        className
      )}></button>
  );
};
