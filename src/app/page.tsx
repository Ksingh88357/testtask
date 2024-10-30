import Result from "@components/Result";
import Summary from "@components/Summary";

import * as data from "@/data";

const App = () => {
  return (
    <section className="py-5 main-wrap-outer">
      <div className="max-w-3xl mx-auto px-4 custom-container">
        <div className="grid grid-cols-1 md:grid-cols-2 out-box">
          <Result />

          <Summary data={data.data} />
        </div>
      </div>
    </section>
  );
};

export default App;
