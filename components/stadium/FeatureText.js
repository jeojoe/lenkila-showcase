export default ({ iconClass, header, description }) => (
  <div>
    <h4>
      <i className={`fa ${iconClass}`} /> {` ${header}`}
    </h4>
    <p>{description}</p>
  </div>
);
