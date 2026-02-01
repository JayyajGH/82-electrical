import styles from './SocialIcon.module.css';

export default function SocialIcon({ platform, path }: { platform: string, path: string }) {
  return (
   <a 
        href={path} 
        target="_blank" 
        rel="noopener noreferrer" 
        className={`${styles.socialIcon} ${styles[platform]}`}
        title={`82Electrical on ${platform}`}
        aria-label={platform}
    />
  );
}
