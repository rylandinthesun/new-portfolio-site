import styles from '../styles/SocialLink.module.css';

const SocialLink = ({ url, icon }) => {
  return (
    <a
      className={styles.socialLink}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
    </a>
  );
};

export default SocialLink;
