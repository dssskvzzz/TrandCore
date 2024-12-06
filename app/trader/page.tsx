import SideBar from "@/components/TraderSideBar";

const TraderHome = () => {
  return (
    <>
      <div className="grid grid-cols-6">
        <div className="col-span-1">
          <SideBar />
        </div>

        <div className="col-span-5 mt-3 mr-3 border rounded-xl ">
          <div className="p-8 w-full">
            <h1 className="text-4xl font-bold mb-6">Welcome to the Education Section</h1>
            <p className="text-lg text-neutral-600">
              Explore a variety of learning resources, courses, and community discussions.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TraderHome;
