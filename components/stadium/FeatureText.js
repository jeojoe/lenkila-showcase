export default ({ iconClass, secondIcon, header, description }) => (
  <div className="wrapper">
    <div className="icon-side">
      <i className={`fa ${iconClass}`} />
      {secondIcon &&
        <i className="fa fa-users" />
      }
    </div>
    <div className="text-side">
      <h3 className="header">{` ${header}`}</h3>
      {/* <div className="line" /> */}
      <p className="description">{description}</p>
    </div>
    <style jsx>{`
      .wrapper {
        padding: 2%;
        margin-bottom: 5px;
      }
      .icon-side {
        width: 65px;
        display: inline-block;
        vertical-align: top;
        padding-top: 10px;
      }
      .text-side {
        width: calc(100% - 65px);
        display: inline-block;
      }
      .header {
        color: #fc9300;
        font-weight: 500;
      }
      .line {
        width: 75%;
        border-bottom: 1px solid #fc9300;
        margin-bottom: 15px;
      }
      .fa {
        font-size: 30px;
        color: #FFA726;
        margin-bottom: 15px;
      }
      .description {
        font-size: 18px;
      }
      @media (max-width: 450px) {
        .fa {
          font-size: 24px;
        }
        .icon-side {
          width: 40px;
        }
        .text-side {
          width: calc(100% - 40px);
        }
      }
    `}</style>
  </div>
);
