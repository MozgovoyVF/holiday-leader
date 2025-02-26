import styles from "./index.module.scss";

export const triggerBounce = (field: "month" | "day" | "name" | "phone") => {
  const element = document.getElementById(`slider-${field}`);
  if (element) {
    element.classList.add(styles.bounce);
    setTimeout(() => element.classList.remove(styles.bounce), 500); // Убираем эффект через 0.5с
  }
};
