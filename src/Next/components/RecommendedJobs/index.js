import css from './styles.less';


export default () => (
  <div className={css.Container}>
    <div className={css.Container__Item}>
      <div className={css.Container__ImageContainer} style={{backgroundImage: "url(/static/images/amazon.png)"}}></div>
      <div className={css.Container__Content}>
        <h3>Full-Stack Web Developer</h3>
        <h4>Amazon</h4>
      </div>
      <div className={css.Container__Tags}>
        <p>Web</p>
        <p>Dev</p>
        <p>Full Stack</p>
      </div>
      <div className={css.Container__TimeStamp}>
        <p>1hr</p>
      </div>
      <div className={css.Container__ButtonContainer}>
        <div className={css.Container__Button}>Apply</div>
      </div>
    </div>
    <div className={css.Container__Item}>
      <div className={css.Container__ImageContainer}></div>
      <div className={css.Container__Content}>
        <h3>PHP Developer</h3>
        <h4>Google</h4>
      </div>
      <div className={css.Container__Tags}>
        <p>Front End</p>
        <p>Full Stack</p>
      </div>
      <div className={css.Container__TimeStamp}>
        <p>6hr</p>
      </div>
      <div className={css.Container__ButtonContainer}>
        <div className={css.Container__Button}>Apply</div>
      </div>
    </div>
    <div className={css.Container__Item}>
      <div className={css.Container__ImageContainer}></div>
      <div className={css.Container__Content}>
        <h3>Web Developer</h3>
        <h4>Google</h4>
      </div>
      <div className={css.Container__Tags}>
        <p>Front End</p>
        <p>Full Stack</p>
      </div>
      <div className={css.Container__TimeStamp}>
        <p>8hr</p>
      </div>
      <div className={css.Container__ButtonContainer}>
        <div className={css.Container__Button}>Apply</div>
      </div>
    </div>
  </div>
)
