import { CheckCircle2 } from "lucide-react";

import MaxWidth from "../../../shared/components/layouts/MaxWidth";
import PageContainer from "../../../shared/components/layouts/PageContainer";


interface AudienceBenefitsProps {
  benefits:string[];
}


export default function AudienceBenefits({
  benefits,
}:AudienceBenefitsProps){

return (

<section className="bg-white">

<PageContainer className="py-16 sm:py-24">

<MaxWidth>

<div className="grid gap-6 sm:grid-cols-2">


{benefits.map((benefit)=>(
<div
key={benefit}
className="
flex
items-start
gap-3
rounded-2xl
border
border-slate-200
bg-white
p-6
shadow-sm
transition
hover:-translate-y-1
hover:border-red-200
hover:shadow-lg
"
>

<CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-red-500" />

<h3 className="text-lg font-semibold text-slate-900">
{benefit}
</h3>


</div>
))}


</div>

</MaxWidth>

</PageContainer>

</section>

);

}