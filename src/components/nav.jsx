import vote from  '../assets/vote.png'

const Nav = () => {
  return (
    <div className="font-intel">
      <div className="w-24 ml-auto mr-auto pt-3 pb-3">
        <img src={vote} alt="vote" />
      </div>
      <div className="">
        <h1 className="text-[#DF996F] text-4xl font-bold text-center">
          LYDIA INGABIRE
        </h1>
      </div>
    </div>
  );
};

export default Nav;
