import { XIcon } from '@heroicons/react/outline'

const SuccessMessage = ({ handleReset }) => (
  <p className="flex p-3 text-lg">
    <span>Success. Check your inbox and confirm your email.</span>
    <span className="mr-1 flex self-center">
      <button
        onClick={() => handleReset()}
        className="bg-success mt-auto ml-1 h-4 w-4 rounded-full text-white transition-colors duration-200 hover:bg-red-500"
      >
        <XIcon className="mx-auto h-2 w-2" />
      </button>
    </span>
  </p>
)

export default SuccessMessage
