import type { Aircraft } from "../../../types/aircraft";
import  Private  from "../../../assets/private-plane.jpg"
import  Interior from "../../../assets/interior-private-plane.jpg"
import  Oversea from "../../../assets/oversea-private-jet.jpg"

export const aircraft: Aircraft[] = [
    {
        id: 1,
        name: "Cessna Citation CJ3+",
        category: "Light Jet",
        passengers: 6,
        range: 2000,
        speed: 450,
        hourlyRate: 2500,
        image: Private,
    },
    {
        id: 2,
        name: "Gulfstream G650",
        category: "Ultra Long Range",
        passengers: 18,
        range: 7000,
        speed: 610,
        hourlyRate: 8000,
        image: Interior,
    },
    {
        id: 3,
        name: "Bombardier Challenger 350",
        category: "Super Midsize",
        passengers: 10,
        range: 3500,
        speed: 540,
        hourlyRate: 5000,
        image: Oversea,
    },
];
