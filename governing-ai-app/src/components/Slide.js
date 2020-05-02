import React, { Component } from 'react';
import Slider from "react-slick";
//npm install react-slick --save
//npm install slick-carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default class Slide extends Component{
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: true
    };
    return (
  <div id = "containerWrap">
      <Slider {...settings} >
        <div >
          <h3>CIVIL SOCIETY</h3>
              <div className="contCont">
          <p className="firstPar"> Major international Human Rights organizations are starting to focus on AI instead of the potential risks and harms :</p>
            <li>
              Civil society organizations, especially smaller ones in the Global South will struggle to find ways to Engage with AI, therefore which results in the AI field being dominated by powerful countries.
            </li>
            <li>
               The 2017 Global Symposium on AI and inclusion in Brazil highlighted the need to foster diverse voices in AI research, development, policy-making and advocacy.
            </li>
  
            </div>
        </div>
          <div>
            <h3>GOVERNMENTS</h3>
            <div className="contCont">
            <p className="firstPar"> Dozens of countries have initiated national strategies on AI, yet human rights are not central to many of these efforts  :</p>
                <li>
                  In 2018, the Council of Europe's Commissioner for Human Rights argued for safeguarding human rights in the era of AI, particularly the rights of privacy and equality and freedoms of expression and assembly.
                </li>
                <li>
                  The Australia Human Rights Commission launched a project which addresses human rights impact of AI and emerging technologies, also a big engagement of international human rights law and may serve as a guide for other countries.
                </li>
            </div>
          </div>
        <div>
          <h3>UNITED NATIONS</h3>
          <div className="contCont">
            <p className="firstPar"> UN has yet to sustain a focus on AI from a rights perspective :</p>
                <li>
                  The UN investigators found evidence that Facebook was used to exacerbate hate and violence in Myanmar despite the platforms use of algorithms and AI to identify such hate speech.
                </li>
                <li>
                  In September 2018, the UN Secretary General released a strategy on new technologies that seeks to align the use of technologies like AI with global values found in the UN Charter, the UDHR, and international laws.
                </li>
            </div>
        </div>
        <div>
          <h3>INTERGOVERNMENTAL ORGANIZATIONS</h3>
          <div className="contCont">
            <p className="firstPar"> INTERGOVERNMENTAL organizations may play an influential role, including the organization for economic cooperation and development (OECD), which is preparing guidance related to AI for its 36 member countries </p>
            <li>
                  The OECD produces "soft law" that is non-judicial and nonbinding, it could provide a forum to address human rights impacts that arise from AI deployed by companies.
            </li>
            </div>
        </div>
      </Slider>
</div>
    )
  };
};

