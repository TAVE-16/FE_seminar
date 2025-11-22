export default function ProjectBox({ project }) {
    console.log(project);
  return (
    <div className="text-black">
      <h3>{project.teamName}</h3>
      <p>{project.part}</p>
      <p>{project.description}</p>
    
    </div>
  )
}