import css from './styles.less';

export default (props) => (
  <div className={css.Container}>
    <div className={css.Container__Item}>
      <div className={css.Container__ImageContainer}></div>
      <div className={css.Container__Content}>
        <h2>Position</h2>
        <h4>Company name</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel metus lacus. Vivamus odio neque, venenatis in massa non, gravida scelerisque lectus. Duis cursus nisl ac finibus dapibus. Sed ut metus eget arcu consequat laoreet eu quis magna. Quisque ultrices, ipsum ac aliquet sodales, mi nunc vestibulum enim, nec pulvinar velit urna quis nibh. Sed vitae lacus augue. Curabitur ultrices ex ligula, id varius elit commodo quis. Suspendisse nec elit turpis. Mauris commodo justo molestie, posuere tellus vel, ultricies libero. Nunc mollis ut mauris non venenatis. Maecenas imperdiet sed erat quis imperdiet. Suspendisse at gravida urna. Aliquam sit amet ante pulvinar, efficitur justo et, gravida lac</p>
        <div className={css.Container__CityAndTimeStamp}>
          <p>Some city, USA</p>
          <p>posted 1 hour ago</p>
        </div>
      </div>
    </div>
    <div className={css.Container__Item}>
      <div className={css.Container__ImageContainer} style={{backgroundImage: "url(/static/images/amazon.png)"}}></div>
      <div className={css.Container__Content}>
        <h2>Position</h2>
        <h4>Company name</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel metus lacus. Vivamus odio neque, venenatis in massa non, gravida scelerisque lectus. Duis cursus nisl ac finibus dapibus. Sed ut metus eget arcu consequat laoreet eu quis magna. Quisque ultrices, ipsum ac aliquet sodales, mi nunc vestibulum enim, nec pulvinar velit urna quis nibh. Sed vitae lacus augue. Curabitur ultrices ex ligula, id varius elit commodo quis. Suspendisse nec elit turpis. Mauris commodo justo molestie, posuere tellus vel, ultricies libero. Nunc mollis ut mauris non venenatis. Maecenas imperdiet sed erat quis imperdiet. Suspendisse at gravida urna. Aliquam sit amet ante pulvinar, efficitur justo et, gravida lac</p>
        <div className={css.Container__CityAndTimeStamp}>
          <p>Some city, USA</p>
          <p>posted 12 hours ago</p>
        </div>
      </div>
    </div>
  </div>
)
