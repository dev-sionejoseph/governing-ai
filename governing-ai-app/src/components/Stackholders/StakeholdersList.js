import MSimg from '../../assets/Micriosoft-HRIA-circle.png';
import trumpImg from '../../assets/trump-facebook-circle.png';
import ggimg from '../../assets/Google-Maven-circle.png';
import MSFimg from '../../assets/Microsoft-ICE-circle.png';
import FBSpeechImg from '../../assets/facebook-hate-speech-circle.png';

import amnestyImg from '../../assets/Amnesty-International-circle.png';
import roadmapImg from '../../assets/Charting-a-roadmap-circle.png';
import forthImg from '../../assets/Fourth-Industrial-Revolution-circle.png';

let businessStakeholders = [];
businessStakeholders.push({

    id: 'MS_HRIA',
    image: MSimg,
    desc: 'Microsoft Global Human Rights Statement',
    summary: 'In 2018, Microsoft completed the first Human Rights Impact Assessment (HRIA) on AI for a major tech company.'

});
businessStakeholders.push({

    id: 'FB_letter',
    image: trumpImg,
    desc: 'An Open Letter to the CEOs of Facebook’s Largest Institutional Shareholders',
    summary: 'After Cambridge Analytica gained access to the private data of tens of millions of Facebook users to influence their votes,  a number of nonprofits and investment groups claimed that Facebook “is failing to both assess and address longstanding human rights problems”'

});
businessStakeholders.push({

    id: 'GG_MAVEN',
    image: ggimg,
    desc: 'Google Will Not Renew Pentagon Contract That Upset Employees',
    summary: 'In April 2018, about 4000 Google employees sent a letter to their CEO demanding the company cease its contract for project Maven with US Department of Defense  due to concern about “biased and weaponized AI.”'

});


let civilStakeholders = [];
civilStakeholders.push({
    
    id: 'AMN_AI',
    image: amnestyImg,
    desc: 'Amnesty International’s Secretary General Salil Shetty addresses the AI for Good in ITU in Geneva in 2017',
    summary: 'Industry and academia are working towards the next generation of computers that can understand and learn from natural spoken language, full motion video, and more. What can we expect from the next generation of Artificial Intelligence systems? How will these technologies affect the world?'

});
civilStakeholders.push({
    
    id: 'ITS_ROADMAP',
    image: roadmapImg,
    desc: 'Institute for Technology and Society (ITS): Charting a Roadmap to Ensure Artificial Intelligence (AI) Benefits All',
    summary: 'The 2017 Global Symposium on Artificial Intelligence and Inclusion in Brazil highlighted the need to foster diverse voices in AI research, development, policy-making, and advocacy.'

});
civilStakeholders.push({
    
    id: 'WEF_4TH',
    image: forthImg,
    desc: 'Partnering with Civil Society in the Fourth Industrial Revolution',
    summary: 'The WEF is continuing its council to address the future of human rights and developing a project on preparing civil society to respond to the challenges of digital and emerging technologies such as AI..'

});

export default businessStakeholders;
export {civilStakeholders};