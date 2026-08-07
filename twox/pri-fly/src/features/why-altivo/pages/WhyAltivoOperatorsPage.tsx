import AudienceHero from "../components/AudienceHero";
import AudienceBenefits from "../components/AudienceBenefits";

import { operatorAudience } from "../data/audience";
import heroImage from "../../../assets/images/black-jet.png";


export default function WhyAltivoOperatorsPage(){

return (

<>
<AudienceHero
 eyebrow={operatorAudience.eyebrow}
 title={operatorAudience.title}
 description={operatorAudience.description}
 image={heroImage}
/>


<AudienceBenefits
 benefits={operatorAudience.benefits}
/>

</>

);

}