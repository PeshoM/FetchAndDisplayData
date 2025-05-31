import React from "react";
import styles from "../styles/errorScreen.module.css";

interface ErrorScreenProps {
  message?: string;
  onRetry?: () => void;
}

const ErrorScreen: React.FC<ErrorScreenProps> = ({
  message = "Something went wrong",
  onRetry,
}) => {
  return (
    <div className={styles.errorScreen}>
      <div className={styles.errorContent}>
        <h2 className={styles.errorTitle}>Error</h2>
        <p className={styles.errorMessage}>{message}</p>
        {onRetry && (
          <button className={styles.retryButton} onClick={onRetry}>
            Try Again
          </button>
        )}
      </div>
    </div>
  );
};

export { ErrorScreen };
