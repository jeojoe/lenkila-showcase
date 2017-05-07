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
        padding: 2% 2% 2% 0;
        margin-bottom: 5px;
      }
      .icon-side {
        width: 65px;
        display: inline-block;
        vertical-align: top;
        padding-top: 10px;
        text-align: center;
      }
      .text-side {
        width: calc(100% - 65px);
        display: inline-block;
        padding-left: 10px;
      }
      .header {
        color: #fc9300;
        font-weight: 500;
        margin-bottom: 12px;
      }
      .description {
        font-size: 17px;
        margin-bottom: 10px;
      }
      .line {
        width: 75%;
        border-bottom: 1px solid #fc9300;
        margin-bottom: 15px;
      }
      .fa {
        font-size: 30px;
        color: #666;
        margin-bottom: 15px;
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
