import {applicationPositions} from "@/utils";
import Ticket from "@/app/apply/components/Ticket";

const PositionSelector = () => {

    /*return (
        <div className="pt-32 px-2 flex flex-1 flex-col items-center justify-center">
            <p className="text-center mb-2 font-bold text-xl sm:text-2xl md:text-3xl">Başvurular kapandı!</p>
            <p className="text-sm sm:text-base text-center font-medium max-w-[500px]">Son başvuru tarihimiz geçti ve artık daha fazla başvuru kabul edemiyoruz. İlginiz için teşekkürler.</p>
        </div>
    )*/

    return (
        <div className="flex flex-col items-center pt-[clamp(200px,30dvw,300px)]">
            <h2 className="mx-4 text-2xl md:text-3xl [text-shadow:2px_2px_10px_black] mb-4 font-bold text-center">Başvuru Pozisyonu Seçin</h2>
            <div className="grid grid-rows-[repeat(3,1fr)] justify-stretch">
                {applicationPositions.map(position => (
                    <Ticket image={position.image} name={position.name} description={position.description} key={position.name} />
                ))}
            </div>
        </div>
    );
};

export default PositionSelector;