import { FC } from "react";
import Image from "next/image";

export interface SummaryProps {
  data: any;
}

const Summary: FC<SummaryProps> = ({ data }) => {
  return (
    <div className="bg-white p-6 left-content">
      <h3 className="text-2xl font-bold mb-2">Summary</h3>

      <div className="flex flex-col gap-4 col-react">
        {data.map((item: any, index: number) => (
          <div
            key={`${item.category}_${index}`}
            className={`flex gap-2.5 justify-between items-center p-4 bg-light-${item.color}`}
          >
            <span className="flex gap-2.5 items-center gap-3">
              <span className="icons">
                <Image
                  src={item.icon}
                  alt={`${item.category} icon`}
                  width={24}
                  height={24}
                />
              </span>{" "}
              {item.category}
            </span>
            <span className="rating-get">
              {item.score} <b>/ 100</b>
            </span>
          </div>
        ))}
      </div>

      <div className="btn-wrap">
        <a href="#" className="h-14 w-full text-lg">
          Continue
        </a>
      </div>
    </div>
  );
};

export default Summary;
