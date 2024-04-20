import Script from "next/script";

const FlyingTips = () => {
  return (
    <div id="box" className="absolute bottom-0 left-0 right-0 top-0 -z-20">
      <div className="bouncing_info absolute text-center text-neutral-400">
        <p className="">Was fandest du heute nicht so schön?</p>
      </div>
      <div className="bouncing_info absolute text-center text-neutral-400">
        <p className="">Was fandest du heute schön?</p>
      </div>
      <div className="bouncing_info absolute text-center text-neutral-400">
        <p className="">Wofür bin ich dankbar?</p>
      </div>
      <div className="bouncing_info absolute text-center text-neutral-400">
        <p className="">Was habe ich heute gelernt?</p>
      </div>
      <Script src="scripts/bouncing.js"></Script>
    </div>
  );
};

export default FlyingTips;
