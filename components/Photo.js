export default function Photo({ photo, desc }) {
  return (
    <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
      <img src={photo} alt={desc} />
      <p className="italic">{desc}</p>
    </div>
  )
}
