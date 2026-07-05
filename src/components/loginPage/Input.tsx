import styles from "./Input.module.css";

type InputProps = {
  type: string;
  name: string;
  placeholder: string;
  onChange: React.ChangeEventHandler;
};

export default function Input({
  type,
  name,
  placeholder,
  onChange,
}: InputProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      name={name}
      className={styles.input}
    />
  );
}
