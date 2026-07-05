import styles from "./Button.module.css";

type ButtonProps = {
  children: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

export default function Button({ children, onClick }: ButtonProps) {
  return (
    <button onClick={onClick} className={styles.btn}>
      {children}
    </button>
  );
}
