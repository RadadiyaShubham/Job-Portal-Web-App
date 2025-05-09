import { companyData } from "../../Data/company";



const AboutComp = () => {
  const company: { [key: string]: any } = companyData;
  return (
    <div className="flex flex-col gap-5">
      {Object.keys(company).map(
        (key, index) =>
          key !== "Name" && (
            <div key={index}>
              <div className="text-xl font-semibold mb-3">{key}</div>
              {key !== "Website" && (
                <div className="text-lg text-mine-shaft-300 text-justify">
                  {key !== "Specialties"
                    ? company[key]
                    : company[key].map((item: string, index: number) => (
                      <span key={index}> &bull; {item} </span>
                    ))}
                </div>
              )}
              {key === "Website" && (
                <a
                  href={company[key]}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-bright-sun-400 text-justify"
                >
                  {company[key]}
                </a>
              )}
            </div>
          )
      )}
    </div>
  );
};
export default AboutComp;