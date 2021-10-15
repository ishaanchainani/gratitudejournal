export default function History({ gratitudes }) {
      return (
        <div className="text-white text-6xl p-6">
          <h2 className="font-black">Previous gratitudes: </h2>
    
          <span className="flex flex-col p-5 items-center">
            {gratitudes.map((g) => (
              <div>{gratitudes.toString()}
                        </div>
            ))}
          </span>
        </div>
      );
    }
