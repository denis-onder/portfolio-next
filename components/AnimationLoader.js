import styles from '../styles/AnimationLoader.module.scss';

export default function AnimationLoader() {
  return (
    <div id="animation_loader" className={styles.animation_loader}>
      <p>
        d<span>o</span>
      </p>
      <span className="outer_bar">
        <div className="inner_bar"></div>
      </span>
    </div>
  );
}
