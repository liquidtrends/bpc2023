
const OtherCards = () => {
return (
<section className="pt-20 pb-10 lg:pt-[120px] lg:pb-20">
  <div className="container mx-auto">
    <h2 className="uppercase text-5xl font-bold pb-8 text-[#4E8188]">More from BearPaw U!</h2>
    <div className="-mx-4 flex flex-wrap">
      <div className="w-full px-4 md:w-1/2 xl:w-1/3">
        <div className="mb-10 overflow-hidden rounded-lg bg-white drop-shadow-lg transition ease-in-out duration-300 hover:drop-shadow-2xl">
          <img
            src="/rights-with-police.png"
            alt="image"
            className="w-full"
          />
          <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9">
            <h3>
              <a
                href="javascript:void(0)"
                className="text-dark hover:text-primary mb-4 block text-xl font-semibold sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px] uppercase"
              >
                Rights with Police
              </a>
            </h3>
            <p className="text-body-color mb-7 text-base leading-relaxed">
              Fresh out of Police Academy, there’s a lot of rules to remember! Good thing Raven took notes! Whether it’s interacting with the public on foot, in their vehicle or at home, Raven’s got the goods!
            </p>
          </div>
        </div>
      </div>
      <div className="w-full px-4 md:w-1/2 xl:w-1/3">
        <div className="mb-10 overflow-hidden rounded-lg bg-white drop-shadow-lg transition ease-in-out duration-300 hover:drop-shadow-2xl">
          <img
            src="/id-opens-doors.png"
            alt="image"
            className="w-full"
          />
          <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9">
            <h3>
              <a
                href="javascript:void(0)"
                className="text-dark hover:text-primary mb-4 block text-xl font-semibold sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px] uppercase"
              >
                I.D. Opens Doors
              </a>
            </h3>
            <p className="text-body-color mb-7 text-base leading-relaxed">
              Does the thought of applying for I.D. stress you out? Want to replace that birth certificate you lost 4 years ago? BearPaw U's got you covered! Take our I.D. Opens Doors Course to learn about getting your Alberta I.D., and more!
            </p>
          </div>
        </div>
      </div>
      <div className="w-full px-4 md:w-1/2 xl:w-1/3">
        <div className="mb-10 overflow-hidden rounded-lg bg-white drop-shadow-lg transition ease-in-out duration-300 hover:drop-shadow-2xl">
          <img
            src="/bail.png"
            alt="image"
            className="w-full"
          />
          <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9">
            <h3>
              <a
                href="javascript:void(0)"
                className="text-dark hover:text-primary mb-4 block text-xl font-semibold sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px] uppercase"
              >
                Got Court? Bail, Gladue Reports and Sentencing
              </a>
            </h3>
            <p className="text-body-color mb-7 text-base leading-relaxed">
              Got Court? Whether it’s a bail hearing, sentencing, or requesting a Gladue Report, BearPaw U’s got the basics! Click through this entertaining short story to learn more!
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
);
};

export default OtherCards;
