import { useState } from 'react';
import taveLogo from './assets/images/taveLogo.png'
import DropDown from './components/dropDown';
import ProjectBox from './components/projectBox';
import { getProjects, createProject } from './api/project';

export default function App() {
  const [projects, setProjects] = useState([]);
  const [teamName, setTeamName] = useState('');
  const [description, setDescription] = useState('');
  const [part, setPart] = useState('');
  const parts = [
    { value: '연합', label: '연합 프로젝트' },
    { value: '심화', label: '심화 프로젝트' },
  ];

  const handleGetProjects = async () => {
    const response = await getProjects();
    setProjects(response.data || []);
    console.log(response);
  };

  const handleCreateProject = async () => {
    console.log(teamName, description, part);
    if (teamName && description && part) {
      const response = await createProject({ teamName, description, part });
      if (response.data) {
        setProjects([...projects, response.data]);
      }
      console.log(response);
      alert('프로젝트가 추가되었습니다!');
      setTeamName('');
      setDescription('');
      setPart('');
    } else {
      alert('모든 필드를 입력해주세요!');
    }
  };


  return (
    <>
      <div className='relative flex w-screen h-screen'>
        <div className='absolute top-0 left-0'>
          <div className='flex items-center gap-2 p-4'>
          <img src={taveLogo} alt="taveLogo" className='w-32 h-auto' />
          <h1 className='text-3xl font-bold text-white'>TAVE 16th Frontend Seminar</h1>
          </div>
        </div>

        <div className="flex justify-center items-center w-full h-full gap-8 p-8">
          <div className="flex flex-col justify-between items-center bg-white/50 rounded-lg p-6 w-1/2 h-[36rem] shadow-lg">
          <div className='flex flex-col items-center gap-4'>
          <h2 className="text-3xl font-bold text-black">프로젝트 조회</h2>
          <p className="text-xl text-black">아래의 버튼을 클릭해 프로젝트를 조회해보세요!</p>
          </div>
           
            <div className="flex flex-col gap-2 bg-white rounded-lg p-4 mt-4 w-full h-[24rem] overflow-y-auto">

              {projects.length > 0 && projects.map((project) => (
                <ProjectBox key={project.projectId} project={project} />
              ))}
              </div>
            <button className="bg-blue-500 text-white rounded-lg p-2 hover:shadow-lg cursor-pointer"
            onClick={handleGetProjects}>프로젝트 조회하기!</button>
          </div>
          <div className="flex flex-col justify-between items-center bg-white/50 rounded-lg p-6 w-1/2 h-[36rem] shadow-lg">
          <div className='flex flex-col items-center gap-4'>
          <h2 className="text-3xl font-bold text-black">프로젝트 추가하기</h2>
          <p className="text-xl text-black">정보를 입력하고 버튼을 클릭해 프로젝트를 추가하세요!</p>
          </div>
           
            <div className="flex flex-col gap-2 rounded-lg p-4 mt-4 w-full">
              <label className="text-black text-lg">팀명</label>
              <input 
                type="text" 
                className="w-full p-2 rounded-lg border border-gray-300 bg-white text-black" 
                value={teamName}
                onChange={(e) => setTeamName(e.target.value)}
                placeholder="팀명을 입력해주세요."
              />
              <label className="text-black text-lg">분야</label>
              <DropDown options={parts} value={part} onChange={(e) => setPart(e.target.value)} />
              <label className="text-black text-lg">프로젝트 설명</label>
              <input 
                type="text" 
                className="w-full p-2 rounded-lg border border-gray-300 bg-white text-black h-32" 
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="프로젝트 설명을 입력해주세요."
              />
            </div>

            <button className="bg-blue-500 text-white rounded-lg p-2 hover:shadow-lg cursor-pointer"
            onClick={handleCreateProject}>프로젝트 추가하기!</button>
          </div>
          
        </div>
       
      </div>
    </>
  )
}

