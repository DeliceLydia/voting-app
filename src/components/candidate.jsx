import me from  '../assets/me.png'

const Candidate = () => {
  return (
    <div className="">
      <img
        src={me}
        alt="me"
        className="ml-auto mr-auto w-3/12 h-94 rounded-full -mt-3"
      />

      <div className="text-[#fff] text-center">
        <h2 className="font-bold text-3xl mt-3">FOR</h2>
        <h3 className="text-3xl mt-2 text-[#DF996F] font-irish">
          CLASS PRESIDENT
        </h3>
        <h3 className="font-bold text-3xl mt-2">2024</h3>
      </div>
    </div>
  );
};

export default Candidate;
