
const specLabels = {
  screen: "Screen",
  resolution: "Resolution",
  processor: "Processor",
  mainCamera: "Main Camera",
  selfieCamera: "Selfie Camera",
  battery: "Battery",
  os: "Operating System",
  screenRefreshRate: "Refresh Rate"
};

const PhoneSpecifications = ({ specifications }) => {
  return (
    <section className="phone-specs" aria-labelledby="specs-title">
      <h2 id="specs-title" className="phone-specs__title">SPECIFICATIONS</h2>
      <dl className="phone-specs__list">
        {Object.entries(specifications).map(([key, value]) => (
          <div key={key} className="phone-specs__item">
            <dt className="phone-specs__term">{specLabels[key] || key}</dt>
            <dd className="phone-specs__desc">{value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
};

export default PhoneSpecifications;
