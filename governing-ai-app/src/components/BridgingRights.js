import React from 'react'

export default function BridgingRights() {
    return (
        <div id="bridging-rights-wrap" className="center-div">
            <h2> Bridging AI and Human Rights </h2>
            <img id="ai-engineers" alt="AI engineers" className="images" src={require("../assets/images/AIengineers.png")}/>
            <div id="bridging-rights-top" className="center-div">
                <p className="word-blocks">
                    Human rights have only appeared at the periphery of our prominent AI debates. Both AI 
                    and human rights are highly technical fields; to fully digest either would require far 
                    more of an exegesis than can be attempted in this report. Instead, we shall draw on basic 
                    entry points from both fields to inform AI governance discussions. <br/><br/>

                    Discussions about AI can be fragmented; some people speak of AI colloquially in the popular 
                    press or in tech marketing materials, while others speak of concrete methods in scientific 
                    proceedings.Moreover, the nuances of terminology and the speed at which the field is moving can 
                    make cross-disciplinary discussions difficult to have. When considering social and policy implications, 
                    it is useful to think of “AI” as a catchphrase for a cluster of technologies embedded in social systems. 
                    This includes machine learning, natural language processing, computer vision, neural networks, deep learning, 
                    big data analytics, predictive models, algorithms, and robotics—all of which are intrinsically situated in the 
                    social contexts where they are developed and deployed. 
                </p> 
            </div>
            <div id="bridging-rights-bottom" className="center-div">
                <img id="justice-scales" alt="justice scales" className="images" src={require("../assets/images/ai-cartoon.png")}/>
                <p className="word-blocks">
                    Those working on technology policy are faced with the difficult task of deciding what standards, values, or 
                    norms to apply in different social contexts. They need to balance the tradeoffs of developing or deploying 
                    technologies. They need to understand the potential misuses and abuses, unintended consequences, biases in 
                    sociotechnical systems, and even the costs of not deploying a tool when it may help someone in need. Human rights 
                    provide those working on AI with a basis for understanding why governing systems – from technical standards to policy 
                    – should address values like nondiscrimination in the first place. This is important for tech companies whose products 
                    will be used across national borders where laws and values vary. 
                </p>
            </div>
        </div>
    )
}
