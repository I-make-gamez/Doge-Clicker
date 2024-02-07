export default function Upgrades() {
  return (
    <div className="w-[20vw] border-r-[7px] border-black text-black bg-gradient-radial to-[#bb1010] from-[#ff0000]">
      <h1 className="text-3xl font-semibold py-2 border-b-[7px] border-black">
        Upgrades
      </h1>
      <div className="flex flex-col u1 border-b-[7px] py-5 border-black bg-gradient-radial from-[#3cff00] to-[#10bb1e]">
        <h2 className="text-[1.95vw]">Doge Friend</h2>
        <p className="text-[1.25vw]">Raises Clickpower By 1</p>
        <h3 className="text-[1.50vw]">Cost: 100$</h3>
      </div>
      <div className="flex flex-col u1 border-b-[7px] py-5 border-black bg-gradient-radial from-[#0091ff] to-[#1077bb]">
        <h2 className="text-[1.95vw]">Doge Factory</h2>
        <p className="text-[1.25vw]">Raises Clicks Per Sec By 1</p>
        <h3 className="text-[1.50vw]">Cost: 1000$</h3>
      </div>
    </div>
  );
}
