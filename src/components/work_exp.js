import React from "react";

const work_exp = () => {
  return (
    <section id="exprerience" className="exprerience bg-gradient">
      <div className="container">
        <div className="text-center">
          <h2 className="lg">Exprerience</h2>
          <div className="timeline">
            <div className="container-timeline left">
              <div className="content">
                <h2>Graduated</h2>
                <p>
                  2012 Grauated from kasetsart university major bachelor of
                  science in information technology.
                </p>
              </div>
            </div>

            <div className="container-timeline right">
              <div className="content">
                <h2>Programmer</h2>
                <p>2012 - 2013 at Prosoftexpress company.</p>
                <p>Project : Multi-level network marketing (MLM)</p>
                {/* <p>Languages : ASP,C#,SQL,PHP,HTML,CSS,JavaScript</p>
                <p>Tools : Visual Studio,Microsoft SQL,Windows Server,MySQL</p> */}
              </div>
            </div>

            <div className="container-timeline left">
              <div className="content">
                <h2>Programmer analyst</h2>
                <p>
                  2013 - 2015 at Phillips capital (thailand) public limited
                  company.
                </p>
                <p>Project : Private equity fund and accounting</p>
                {/* <p>Languages : ASP.net,C#,SQL,HTML,CSS,JavaScript</p>
                <p>Tools : Visual Studio,Microsoft SQL,Windows Server,Reporting Service</p> */}
              </div>
            </div>

            <div className="container-timeline right">
              <div className="content">
                <h2>Software engineer</h2>
                <p>
                  2015 - now at bank of krungsri ayudhya public company limited.
                </p>
                <p>Project : Non-performing loan(NPL)</p>
                {/* <p>Languages : ASP.net,C#,SQL,HTML,CSS,JavaScript</p>
                <p>Tools : Visual Studio,Oracle,Windows Server,TeraData</p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default work_exp;
