export default function ProjectBox({ project }) {
    console.log(project);
  return (
    <>
    {/* 아래의 UI를 자유롭게 꾸며보세요! */}

    // 연합 프로젝트 UI
    {project.part === '연합' ? (
      <div className="flex flex-col gap-2 p-4 bg-blue-100 rounded-lg shadow-lg text-black">
      <div className="flex gap-4 items-center">
      <h3 className="text-3xl font-bold">{project.teamName}</h3>
      <p className="text-lg bg-blue-300 text-white font-semibold px-2 py-1 rounded-md">{project.part}</p>
      </div>

      <p className="text-lg">{project.description}</p>
    
    </div>
    ) : (
      // 심화 프로젝트 UI
      <div className="flex flex-col gap-2 p-4 bg-red-100 rounded-lg shadow-lg text-black">
        <div className="flex gap-4 items-center">
        <h3 className="text-3xl font-bold">{project.teamName}</h3>
        <p className="text-lg bg-red-300 text-white font-semibold px-2 py-1 rounded-md">{project.part}</p>
        </div>

        <p className="text-lg">{project.description}</p>
      </div>
    )}
   
    </>
  )
}