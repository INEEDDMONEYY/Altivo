import AudienceHero from "../components/AudienceHero";
import AudienceBenefits from "../components/AudienceBenefits";

import { brokerAudience } from "../data/audience";
import heroImage from "../../../assets/images/above-mountians.png";


export default function WhyAltivoBrokersPage(){

return (

<>
<AudienceHero
 eyebrow={brokerAudience.eyebrow}
 title={brokerAudience.title}
 description={brokerAudience.description}
 image={heroImage}
/>


<AudienceBenefits
 benefits={brokerAudience.benefits}
/>

</>

);

}