import React from './node_modules/react'

export default function Introduction() {
    return (
        <div id="introduction-wrap">
            <h1>Governing Artificial Intelligence</h1>
            <h3> A delicate balance between technological 
                advancement and international human rights</h3>
            <div id="head-image-wrap">
                <img id="ai-gif" alt="AI brain gif" src={require("../assets/videos/ai gif.gif")}/>  
            </div>
            <div id="summary-wrap">
                <h3 id="quote-one">
                "In order for AI to benefit the common good, at the very 
                least its design and deployment should avoid harms to fundamental
                 human values. International human rights provide a robust and global 
                 formulation of those values."
                </h3>
                <p className="word-blocks">
                    Can international human rights help guide and govern artificial 
                    intelligence (AI)? According to the global ethics initiative of 
                    the Institute of Electrical and Electronics Engineers (IEEE), the 
                    largest organization of technical professionals, the answer is clear. 
                    The IEEE’s 2017 report on ethically aligned design for AI lists as its 
                    first principle that AI design should not infringe upon international 
                    human rights.1 Yet some AI systems are already infringing on such rights. 
                </p>
                <div id="ai-justice-image">
                    <img id="ai-scales" src={require("../assets/images/unnamed.jpg")} alt="AI with justice scales" style={{height:'400px'}}/>
                </div>
                <p className="word-blocks">
                    In bridging AI and human rights, what’s at stake is human dignity. As an international 
                    framework, human rights law is intended to establish global principles (“norms”) and mechanisms 
                    of accountability for the treatment of individuals. As such, a rights-based approach provides actors 
                    developing AI with the aspirational and normative guid- ance to uphold human dignity and the inherent 
                    worth of every individual, regardless of country or jurisdiction. Implementing human rights can help 
                    identify and anticipate some of AI’s worst social harms and guide those developing technical and policy 
                    safe- guards to promote positive uses.
                </p>
                <h3>
                    "Implementing human rights can help identify and anticipate some of A.I.'s worst social harms and
                    guide those developing technical and policy safeguards to promote positive uses."
                </h3>
            </div>
            
        </div>
    )
}
